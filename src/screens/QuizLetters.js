import { useState, useEffect } from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image } from "react-native";
import { Audio } from "expo-av";
import axios from "axios";
import GameOverComponent from "../components/GameOverComponent";

const audioFiles = {
  A: require("../../assets/sounds/quiz_letter/QuizA.m4a"),
  B: require("../../assets/sounds/quiz_letter/QuizB.m4a"),
  C: require("../../assets/sounds/quiz_letter/QuizC.m4a"),
  D: require("../../assets/sounds/quiz_letter/QuizD.m4a"),
  E: require("../../assets/sounds/quiz_letter/QuizE.m4a"),
  F: require("../../assets/sounds/quiz_letter/QuizF.m4a"),
  G: require("../../assets/sounds/quiz_letter/QuizG.m4a"),
  Correct: require("../../assets/sounds/shared/Correct.m4a"),
  Incorrect: require("../../assets/sounds/shared/Incorrect.m4a"),
  GameOver: require("../../assets/sounds/shared/GameOver.m4a"),
};

const QuizLetters = ({ navigation }) => {
  const [sound, setSound] = useState();
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [increment, setIncrement] = useState(0);
  const [order, setOrder] = useState();
  const [blocksDisplay, setBlocksDisplay] = useState("flex");
  const [overDisplay, setOverDisplay] = useState("none");

  const lettersArray = ["A", "B", "C", "D", "E", "F", "G"];
  const arrangement = ["column", "column-reverse"];
  const qLetter = lettersArray[increment];
  const randomIndex = Math.floor(Math.random() * 7);
  const getRandomLetter = lettersArray[randomIndex];

  const [wrongBox, setWrongBox] = useState(getRandomLetter);
  const dt = Date();

  useEffect(() => {
    setWrongBox(getRandomLetter);
    setTimeout(() => {
      question(qLetter);
    }, 1000);
  }, [increment]);

  //Checking for duplicate colors
  useEffect(() => {
    if (wrongBox === qLetter) {
      setWrongBox(lettersArray[increment + 1]);
    }
    if (wrongBox === lettersArray[6]) {
      setWrongBox(lettersArray[increment - 1]);
    }
  }, [wrongBox]);

  //randomly arranging the boxes order
  useEffect(() => {
    const pick = Math.floor(Math.random() * 2);
    setOrder(arrangement[pick]);
  });

  //calls the question audio from first useEffect
  async function question(letter) {
    const { sound } = await Audio.Sound.createAsync(audioFiles[letter]);
    await sound.playAsync();
  }

  //If the user chooses the correct color
  async function correctAnswer() {
    if (increment === lettersArray.length - 1) {
      gameOver();
    } else {
      const { sound } = await Audio.Sound.createAsync(audioFiles["Correct"]);
      setSound(sound);
      await sound.playAsync();
      setIncrement(increment + 1);
      setCorrect(correct + 1);
    }
  }

  //If the user chooses the incorrect answer
  async function incorrectAnswer() {
    const { sound } = await Audio.Sound.createAsync(audioFiles["Incorrect"]);
    setSound(sound);
    await sound.playAsync();
    setIncorrect(incorrect + 1);
  }

  //If the game is over
  async function gameOver() {
    axios.post("http:localhost:3000/newscore", {
      game: "Letters Quiz",
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
          style={styles.touch}
          onPress={correctAnswer}
        >
          <View style={styles.box}>
              <Text style={styles.text}>{ qLetter }</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.touch}
          onPress={incorrectAnswer}
        >
          <View style={styles.box}>
              <Text style={styles.text}>{ wrongBox }</Text>
          </View>
        </TouchableOpacity>
      </View>

      <GameOverComponent
        navigation={navigation}
        style={{ display: overDisplay }}
        game={"Letters Quiz"}
        dt={dt}
        tries={correct + incorrect}
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
  
  text: {
    color: 'white',
    fontSize: 200,
    alignSelf: 'center',
    textShadowColor: 'white',
    textShadowRadius: 10,
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
});

export default QuizLetters;