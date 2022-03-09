import { useState, useEffect } from 'react'
import { View, SafeAreaView, TouchableOpacity, Button, Text, StyleSheet } from 'react-native'
import { Audio } from 'expo-av' 

const QuizColors = ()=>{
  const [sound, setSound] = useState();
  const [random, setRandom] = useState();
  const [correct, setCorrect] = useState (0)
  const [incorrect, setIncorrect] = useState (0)

  //This is to generate a random number to pull from the colorsArray
  const colorsArray = ["Red", "Blue", "Green", "Purple", "Yellow", "Brown"];
  const randomNumber = Math.floor(Math.random()* 6)
  const getRandomColor = colorsArray[randomNumber]

  const questionFiles = {
    Red: require("../../assets/sounds/quiz_color/QuizRed.m4a"),
    Blue: require("../../assets/sounds/quiz_color/QuizBlue.m4a"),
    Green: require("../../assets/sounds/quiz_color/QuizGreen.m4a"),
    Purple: require("../../assets/sounds/quiz_color/QuizPurple.m4a"),
    Yellow: require("../../assets/sounds/quiz_color/QuizYellow.m4a"),
    Brown: require("../../assets/sounds/quiz_color/QuizBrown.m4a"),
    Correct: require("../../assets/sounds/shared/Correct.m4a"),
    Incorrect: require("../../assets/sounds/shared/Incorrect.m4a")
  };
  //this is essentially my audio player
  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync(); }
      : undefined;
  },[sound]);

  useEffect(() => {
      if (random !== undefined){
        console.log("this is the random state " + random)
        console.log("this is the getRandmoColor " + getRandomColor)
    }
  },[random])

  //Our QUESTION is called by the color button
  async function questionOneAudio(color) {
    const { sound } = await Audio.Sound.createAsync(
        //referencing the color in the object above to be played
        questionFiles[color]
    );
    setSound(sound);
    await sound.playAsync();
    setRandom(getRandomColor);
    if (random === color) {
        setRandom(getRandomColor);
        // console.log("Here is the console log on 47")
        if (random === color){
            return;
        }
    }
}
    //Called if she selects the correct color
    async function Correct() { 
        console.log("correct")
        const { sound } = await Audio.Sound.createAsync(
            //referencing the color in the object above to be played
            questionFiles["Correct"]
        );
        setSound(sound);
        await sound.playAsync();
        setCorrect(correct + 1)
        //move on to next color combonation --??

    }
    //called is she selects the incorrect color
    async function Incorrect() {
        console.log("Incorrect")
        const { sound } = await Audio.Sound.createAsync(
            //referencing the color in the object above to be played
            questionFiles["Incorrect"]
        );
        setSound(sound);
        await sound.playAsync();
        setIncorrect(incorrect + 1)

    }
    console.log('correct = ' + correct )
    console.log('incorrect = ' + incorrect )


  // OK, what needs to happen
  //- Automaticaly start with audio asking "OK, Selena, what color is 'Red'"
  //- Two color blocks should be on the screen - One with the correct color and one random color (within the other 5 colors)
  //- if she touches the correct color
  //- audio plays "YAY! correct!" correct state increases by 1
  //- we move to the next question
  // if she gets it wrong
  //- audio plays "close, try again" incorrect state increase by 1
  //This continues until she get's it right and then we move on to next quesiton
  //repeat for 3 questions
  // When game is over
  //- Audio plays "Good job Selena"
  //- display Total score component displaying the amount corect and incorrect
  //- Data saves to backend with the following model:
  // date: 'string', - not sure how to auto generate this yet of course
  // correct: number
  //incorrect: number

  // Have a button that says previous scores that takes us to a new screen pulling
  //all of the previous game scores to view

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Red" onPress={() => questionOneAudio("Red")} />

      <TouchableOpacity style={styles.touch} onPress={Correct}>
        <View style={styles.box} />
      </TouchableOpacity>

      <TouchableOpacity style={[styles.touch, { backgroundColor: random }]} onPress={Incorrect}>
        <View style={styles.box} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

    const styles = StyleSheet.create({
        container: {
            display: "flex",
            backgroundColor: 'black',
            flexDirection: 'column',
            alignItems: 'center',
        },

        touch: {
            borderWidth: 2,
            borderColor: "white",
            borderRadius: 20,
            backgroundColor: "red",
            marginVertical: 20,
           
        },

        box: {
            width: 200,
            height: 200,
            marginVertical: 50,
            marginHorizontal: 30,
        }
    })


export default QuizColors