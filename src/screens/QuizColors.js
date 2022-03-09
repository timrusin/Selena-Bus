import { useState, useEffect } from 'react'
import { View, TouchableOpacity, Button, Text, StyleSheet } from 'react-native'
import { Audio } from 'expo-av' 

const QuizColors = ()=>{
  const [sound, setSound] = useState();
  const [color, setColor] = useState();

  let correct = 0;
  let incorrect = 0;
    
  const colorsArray = ["Red", "Blue", "Green", "Purple", "Yellow", "Brown"];

  const questionFiles = {
    Red: require("../../assets/sounds/quiz_color/QuizRed.m4a"),
    Blue: require("../../assets/sounds/quiz_color/QuizBlue.m4a"),
    Green: require("../../assets/sounds/quiz_color/QuizGreen.m4a"),
    Purple: require("../../assets/sounds/quiz_color/QuizPurple.m4a"),
    Yellow: require("../../assets/sounds/quiz_color/QuizYellow.m4a"),
    Brown: require("../../assets/sounds/quiz_color/QuizBrown.m4a"),
  };

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync(); }
      : undefined;
  },[sound]);


  async function questionOneAudio(color) {
    const { sound } = await Audio.Sound.createAsync(
        //referencing the in the object above to be required
        questionFiles[color]
    );
    setSound(sound);
    await sound.playAsync(); }


 

  // OK, what needs to happen
  //- Automaticaly start with audio asking "OK, Selena, what color is 'Red'"
  //- Two color blocks should be on the screen - One with the correct color and one random color (within the other 5 colors)
  //- if she touches the correct color
  //- audio plays "YAY! correct!" +1 to correct score variable
  //- we move to the next question
  // if she gets it wrong
  //- audio plays "close, try again" +1 to incorrect score variable
  //This continues until she get's it right and then we move on to next quesiton
  //repeat for 3 questions
  // When game is over
  //- Audio plays "Good job Selena"
  //- display Total score component displaying the amount corect and incorrect
  //- Data saves to backend with the following model:
  // date: 'string', - not ure how to aout generate this yet of course
  // correct: number
  //incorrect: number

  // Have a button that says previous scores that takes us to a new screen pulling
  //all of the previous game scores to view

  return (
    <View style={styles.container}>
      <Button title="Red" onPress={() => questionOneAudio("Red")} />
      <TouchableOpacity  style={{
            borderWidth: 2,
            borderColor: "white",
            borderRadius: 20,
            backgroundColor: "red",
            marginVertical: 10,
            marginLeft: 20,
          }}>
          <View style={styles.box}/>
          
      </TouchableOpacity  >
      
      <TouchableOpacity  style={{
            borderWidth: 2,
            borderColor: "white",
            borderRadius: 20,
            backgroundColor: "green",
            marginVertical: 10,
            marginLeft: 20,
          }}>
      <View style={styles.box}/>

      </TouchableOpacity  >
    
    </View>
  );
}

    const styles = StyleSheet.create({
        container: {
            display: "flex",
            justifyContent: 'center',
            backgroundColor: 'black',
            flexDirection: 'row',
            flexWrap: 'wrap',
        },
        box: {
            width: 50,
            height: 50,
            marginTop: 40,
            marginBottom: 40,
            marginHorizontal: 30,
        }
    })


export default QuizColors