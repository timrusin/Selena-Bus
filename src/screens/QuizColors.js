// = getting music to stop 
// - Better font for Home page - curve?

//- COME BACK TO if time
// - stopping previous audio when clicking or not allowing clicking until previous aduio haas finished (look up onend)

//EXTRA THINGS TO DO FIX UP
// - play around with music on intro, menu, and "touch" screens. If workable record some custom music for the app
// - create and save variables for colors and images in constant.js file
// - refactor all code with new variables
// - adjust dt to give 12 hour time readout and remove 'GMT-0500(CDT)'

import { useState, useEffect } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Audio } from "expo-av";
import axios from "axios";
import GameOverComponent from "../components/GameOverComponent";

const audioFiles = {
  red: require("../../assets/sounds/quiz_color/QuizRed.m4a"),
  blue: require("../../assets/sounds/quiz_color/QuizBlue.m4a"),
  green: require("../../assets/sounds/quiz_color/QuizGreen.m4a"),
  purple: require("../../assets/sounds/quiz_color/QuizPurple.m4a"),
  yellow: require("../../assets/sounds/quiz_color/QuizYellow.m4a"),
  orange: require("../../assets/sounds/quiz_color/QuizOrange.m4a"),
  Correct: require("../../assets/sounds/shared/Correct.m4a"),
  Incorrect: require("../../assets/sounds/shared/Incorrect.m4a"),
  GameOver: require("../../assets/sounds/shared/GameOver.m4a"),
};

const QuizColors = ({ navigation }) => {
  const [sound, setSound] = useState();
  const [correct, setCorrect] = useState(1);
  const [incorrect, setIncorrect] = useState(0);
  const [increment, setIncrement] = useState(0);
  const [order, setOrder] = useState();
  const [blocksDisplay, setBlocksDisplay] = useState("flex");
  const [overDisplay, setOverDisplay] = useState("none");

  const colorsArray = ["red", "blue", "green", "purple", "yellow", "orange"];
  const arrangement = ["column", "column-reverse"];
  const qColor = colorsArray[increment];
  const randomNumber = Math.floor(Math.random() * 6);
  const getRandomColor = colorsArray[randomNumber];

  const [wrongBox, setWrongBox] = useState(getRandomColor);
  const dt = Date();

  useEffect(() => {
    setWrongBox(getRandomColor);
    setTimeout(() => {
      question(qColor);
    }, 1000);
  }, [increment]);

  //Checking for duplicate colors
  useEffect(() => {
    if (wrongBox === qColor) {
      setWrongBox("grey");
    }
  }, [wrongBox]);

  //randomly arranging the boxes order
  useEffect(() => {
    const pick = Math.floor(Math.random() * 2);
    setOrder(arrangement[pick]);
  });

  //calls the question audio from first useEffect
  async function question(color) {
    const { sound } = await Audio.Sound.createAsync(audioFiles[color]);
    await sound.playAsync();
  }

  //If the user chooses the correct color
  async function correctAnswer() {
    if (increment === colorsArray.length - 1) {
      gameOver();
    } else {
      const { sound } = await Audio.Sound.createAsync(audioFiles["Correct"]);
      setSound(sound);
      await sound.playAsync();
      setIncrement(increment + 1);
      setCorrect(correct + 1);
      console.log(correct)
    }
  }

  //If the user chooses the incorrect answer
  async function incorrectAnswer() {
    const { sound } = await Audio.Sound.createAsync(audioFiles["Incorrect"]);
    setSound(sound);
    await sound.playAsync();
    setIncorrect(incorrect + 1);
    console.log(incorrect)
  }

  //If the game is over
  async function gameOver() {
    axios.post("http:localhost:3000/newscore", {
      game: "Colors Quiz",
      dt: dt,
      tries: correct + incorrect,
    });
    const { sound } = await Audio.Sound.createAsync(audioFiles["GameOver"]);
    setSound(sound);
    await sound.playAsync();
    setBlocksDisplay("none");
    setOverDisplay("flex");
  }

  return (
    <>
      <View
        style={[
          styles.container,
          { display: blocksDisplay, flexDirection: order },
        ]}
      >
        <TouchableOpacity
          style={[styles.touch, { backgroundColor: qColor }]}
          onPress={correctAnswer}
        >
          <View style={styles.box} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.touch, { backgroundColor: wrongBox }]}
          onPress={incorrectAnswer}
        >
          <View style={styles.box} />
        </TouchableOpacity>
      </View>

      <GameOverComponent
        navigation={navigation}
        style={{ display: overDisplay }}
        game={"Colors Quiz"}
        dt={dt}
        tries={ correct + incorrect }
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    alignItems: "center",
  },

  touch: {
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 20,
    marginVertical: 40,
  },

  box: {
    width: 200,
    height: 200,
    marginVertical: 50,
    marginHorizontal: 30,
  },

  overContainer: {
    backgroundColor: "black",
    alignItems: "center",
  },

  text: {
    color: "white",
  },
});

export default QuizColors;
