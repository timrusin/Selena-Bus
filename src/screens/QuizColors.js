
// When game is over
//- Audio plays "Good job Selena"
//- display Total score component displaying the amount corect and incorrect
//- Data saves to backend with the following model:
// date: 'string', - not sure how to auto generate this yet of course
// correct: number
//incorrect: number
// Display previous scores bellow?
//all of the previous game scores to view

//- COME BACK TO if time
// - stopping previous audio when clicking or not allowing clicking until previous aduio haas finished

//EXTRA THINGS TO DO FIX UP
// - play around wiht music on intro, menu, and "touch" screens. If workable record some custom music for the app
// - Resisize images in PS on other computer
// - create and save variables for colors and images in constant.js file
// - refactor all code with new variables
// - add audio options



import { useState, useEffect } from "react";
import { View, TouchableOpacity,StyleSheet, Text, Image } from "react-native";
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
  GameOver: require("../../assets/sounds/shared/GameOver.m4a")
};


const QuizColors = ({ navigation }) => {
  const [sound, setSound] = useState();
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [increment, setIncrement] = useState(0);
  const [order, setOrder] = useState()
  const [blocksDisplay, setBlocksDisplay] = useState('flex')
  const [overDisplay, setOverDisplay] = useState('none')
  
  const colorsArray = ["red", "blue", "green", "purple", "yellow", "orange"];
  const arrangement = ["column", "column-reverse"]
  const qColor = colorsArray[increment]
  const randomNumber = Math.floor(Math.random() * 6);
  const getRandomColor = colorsArray[randomNumber];
  
  const [wrong, setWrong] = useState(getRandomColor);
  const dt = Date()
  console.log(dt)


  useEffect(() => {
    setWrong(getRandomColor)
    setTimeout(()=>{
      question(qColor)
    }, 1000)
  }, [increment]);

  useEffect(()=>{
    if (wrong === qColor){
      setWrong("grey")
    }
  },[wrong])

  useEffect(()=> {
    const pick = Math.floor(Math.random() * 2)
    setOrder(arrangement[pick])
  })
    
  async function question(color) {
    console.log(increment);
    const { sound } = await Audio.Sound.createAsync(audioFiles[color]); //calls the question color to be played
    // setSound(sound);
    await sound.playAsync();
  }

  async function correctAnswer() {
    if (increment === colorsArray.length - 1){
      gameOver() //**** This needs to load the game over screen now */
    } else {
    const { sound } = await Audio.Sound.createAsync(audioFiles["Correct"]);
    setSound(sound);
    await sound.playAsync();
    setIncrement( increment + 1)
    setCorrect(correct + 1);
  }
}

  async function incorrectAnswer() {
    const { sound } = await Audio.Sound.createAsync(audioFiles["Incorrect"]);
    setSound(sound);
    await sound.playAsync();
    setIncorrect(incorrect + 1);
  }

  async function gameOver () {
    console.log('game over')
    const { sound } = await Audio.Sound.createAsync(audioFiles["GameOver"]);
    setSound(sound);
    await sound.playAsync();

    setBlocksDisplay('none')
    setOverDisplay('flex')
  }

  console.log("correct = " + correct);
  console.log("incorrect = " + incorrect);

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
          style={[styles.touch, { backgroundColor: wrong }]}
          onPress={incorrectAnswer}
        >
          <View style={styles.box} />
        </TouchableOpacity>
      </View>


      <View style={[styles.overContainer, { display: overDisplay }]}>
        <Text style={[styles.text , { fontSize: 40, marginVertical: 30, fontStyle: 'bold' }]}>GREAT JOB SELENA!</Text> 
        <Text style={[styles.text , { fontSize: 20 }]}>{ dt }</Text>
        <Text style={[styles.text , { fontSize: 40 }]}>Amount of tries : { correct + incorrect }</Text>
        <Text style={[styles.text , { fontSize: 20, marginVertical: 20 }]}>Previous scores:</Text>



        <TouchableOpacity onPress={() => navigation.navigate("Main")}>
          <Image
            source={require("../../assets/images/Bus.png")}
            style={{ height: 90, width: 130, marginTop: 10, marginBottom: 150, }}
          />
        </TouchableOpacity>
        
      </View>
    </>
  );};

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
        backgroundColor: 'black',
        alignItems: 'center',
      },

      text: {
        color: 'white',

      }
      ,
    });


export default QuizColors