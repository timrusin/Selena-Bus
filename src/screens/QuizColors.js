// if she gets it wrong
//- audio plays "close, try again" incorrect state increase by 1
//This continues until she get's it right and then we move on to next quesiton
//repeat for all of the colors
// When game is over
//- Audio plays "Good job Selena"
//- display Total score component displaying the amount corect and incorrect
//- Data saves to backend with the following model:
// date: 'string', - not sure how to auto generate this yet of course
// correct: number
//incorrect: number

// Have a button that says previous scores that takes us to a new screen pulling
//all of the previous game scores to view

import { useState, useEffect } from "react";
import { View, TouchableOpacity,StyleSheet } from "react-native";
import { Audio } from "expo-av";

const audioFiles = {
  red: require("../../assets/sounds/quiz_color/QuizRed.m4a"),
  blue: require("../../assets/sounds/quiz_color/QuizBlue.m4a"),
  green: require("../../assets/sounds/quiz_color/QuizGreen.m4a"),
  purple: require("../../assets/sounds/quiz_color/QuizPurple.m4a"),
  yellow: require("../../assets/sounds/quiz_color/QuizYellow.m4a"),
  orange: require("../../assets/sounds/quiz_color/QuizOrange.m4a"),
  Correct: require("../../assets/sounds/shared/Correct.m4a"),
  Incorrect: require("../../assets/sounds/shared/Incorrect.m4a"),
};

const QuizColors = () => {
  const [sound, setSound] = useState();
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [increment, setIncrement] = useState(0);
  const [order, setOrder] = useState()

  const colorsArray = ["red", "blue", "green", "purple", "yellow", "orange"];
  const arrangement = ["column", "column-reverse"]
  const qColor = colorsArray[increment]
  const randomNumber = Math.floor(Math.random() * 6);
  const getRandomColor = colorsArray[randomNumber];

  const [wrong, setWrong] = useState(getRandomColor);


  useEffect(() => { //incrementing 
    console.log("inside useEffect " + qColor);
    setWrong(getRandomColor)
    setTimeout(()=>{
      Question(qColor)
    }, 1000)
  }, [increment]);

  useEffect(()=>{
    if (wrong === qColor){
      setWrong("white")
    }
  },[wrong])

  useEffect(()=> {
    const pick = Math.floor(Math.random() * 2)
      console.log(pick)
    setOrder(arrangement[pick])
  })


  //**** need useEffect that checks for duplicates
    
  async function Question(color) {
    console.log(increment)
    const { sound } = await Audio.Sound.createAsync(audioFiles[color]); //calls the question color to be played
    // setSound(sound);
    await sound.playAsync();
    
  }

  async function Correct() {
    const { sound } = await Audio.Sound.createAsync(audioFiles["Correct"]);
    setSound(sound);
    await sound.playAsync()
    setIncrement( increment + 1)
    setCorrect(correct + 1);
    if (increment === colorsArray.length){
      return console.log("The end")
  }
}

  async function Incorrect() {
    const { sound } = await Audio.Sound.createAsync(audioFiles["Incorrect"]);
    setSound(sound);
    await sound.playAsync();
    setIncorrect(incorrect + 1);
  }

  console.log("correct = " + correct);
  console.log("incorrect = " + incorrect);

  return (
    <View style={[styles.container, {flexDirection: order } ]}>
      <TouchableOpacity
        style={[styles.touch, { backgroundColor: qColor }]}
        onPress={Correct}
      >
        <View style={styles.box} />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.touch, { backgroundColor: wrong }]}
        onPress={Incorrect}
      >
        <View style={styles.box} />
      </TouchableOpacity>
    </View>
  );
};

    const styles = StyleSheet.create({
      container: {
        display: "flex",
        backgroundColor: "black",
        alignItems: "center",
      },

      touch: {
        borderWidth: 2,
        borderColor: "white",
        borderRadius: 20,
        marginVertical: 20,
      },
      
      box: {
        width: 200,
        height: 200,
        marginVertical: 50,
        marginHorizontal: 30,
      },
    });


export default QuizColors