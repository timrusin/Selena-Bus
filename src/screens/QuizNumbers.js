import { useState, useEffect } from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image } from "react-native";
import { Audio } from "expo-av";
import axios from "axios";
import GameOverComponent from "../components/GameOverComponent";

const audioFiles = {
  1: require("../../assets/sounds/quiz_number/QuizOne.m4a"),
  2: require("../../assets/sounds/quiz_number/QuizTwo.m4a"),
  3: require("../../assets/sounds/quiz_number/QuizThree.m4a"),
  4: require("../../assets/sounds/quiz_number/QuizFour.m4a"),
  5: require("../../assets/sounds/quiz_number/QuizFive.m4a"),
  6: require("../../assets/sounds/quiz_number/QuizSix.m4a"),
  7: require("../../assets/sounds/quiz_number/QuizSeven.m4a"),
  8: require("../../assets/sounds/quiz_number/QuizEight.m4a"),
  9: require("../../assets/sounds/quiz_number/QuizNine.m4a"),
  10: require("../../assets/sounds/quiz_number/QuizTen.m4a"),
  Correct: require("../../assets/sounds/shared/Correct.m4a"),
  Incorrect: require("../../assets/sounds/shared/Incorrect.m4a"),
  GameOver: require("../../assets/sounds/shared/GameOver.m4a"),
};

const QuizNumbers = ({ navigation }) => {
  const [sound, setSound] = useState();
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [increment, setIncrement] = useState(0);
  const [order, setOrder] = useState();
  const [blocksDisplay, setBlocksDisplay] = useState("flex");
  const [overDisplay, setOverDisplay] = useState("none");

  const numbersArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const arrangement = ["column", "column-reverse"];
  const qNumber = numbersArray[increment];
  const randomIndex = Math.floor(Math.random() * 6);
  const getRandomNumber = numbersArray[randomIndex];

  const [wrongBox, setWrongBox] = useState(getRandomNumber);
  const dt = Date();

  useEffect(() => {
    setWrongBox(getRandomNumber);
    setTimeout(() => {
      question(qNumber);
    }, 1000);
  }, [increment]);

  //Checking for duplicate colors
  useEffect(() => {
    if (wrongBox === qNumber) {
      setWrongBox(numbersArray[increment + 1]);
    }
    if (wrongBox === numbersArray[5]) {
      setWrongBox(numbersArray[increment - 1]);
    }
  }, [wrongBox]);

  //randomly arranging the boxes order
  useEffect(() => {
    const pick = Math.floor(Math.random() * 2);
    setOrder(arrangement[pick]);
  });

  //calls the question audio from first useEffect
  async function question(number) {
    const { sound } = await Audio.Sound.createAsync(audioFiles[number]);
    await sound.playAsync();
  }

  //If the user chooses the correct color
  async function correctAnswer() {
    if (increment === numbersArray.length - 1) {
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
      game: "Numbers Quiz",
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
              <Text style={styles.text}>{ qNumber }</Text>
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
        game={"Numbers Quiz"}
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

export default QuizNumbers;