import { React, useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Audio } from 'expo-av'

const TouchLetters = ({ navigation }) => {
    const [sound, setSound] = useState()

    //loading all of my sounds
    const letterFiles = {
        A: require('../../assets/sounds/letters/A.m4a'),
        B: require('../../assets/sounds/letters/B.m4a'),
        C: require('../../assets/sounds/letters/C.m4a'),
        D: require('../../assets/sounds/letters/D.m4a'),
        E: require('../../assets/sounds/letters/E.m4a'),
        F: require('../../assets/sounds/letters/F.m4a'),
        G: require('../../assets/sounds/letters/G.m4a'),
    }
    
    async function playSound(letter) {
      const { sound } = await Audio.Sound.createAsync(
          //referencing the in the object above to be required
          letterFiles[letter]
      );
      setSound(sound);
      await sound.playAsync(); }
  
    useEffect(() => {
      return sound
        ? () => {
            sound.unloadAsync(); }
        : undefined;
    }, [sound]);

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => playSound("A")}>
          <Text style={styles.number}>A</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => playSound("B")}>
          <Text style={styles.number}>B</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => playSound("C")}>
          <Text style={styles.number}>C</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => playSound("D")}>
          <Text style={styles.number}>D</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => playSound("E")}>
          <Text style={styles.number}>E</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => playSound("F")}>
          <Text style={styles.number}>F</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => playSound("G")}>
          <Text style={styles.number}>G</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginHorizontal: 57 }}
          onPress={() => navigation.navigate("Main")}
        >
          <Image
            source={require("../../assets/images/BusSmall.png")}
            style={{
              height: 90,
              width: 130,
              marginHorizontal: 100,
              marginVertical: 50,
              marginBottom: 60,
            }} 
          />
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: 'black',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    number: {
      fontSize: 130,
      textAlign: 'center',
      color: 'white',
      marginHorizontal:10,
      marginVertical: 20,
      textShadowColor: 'white',
      textShadowRadius: 20,
      borderWidth: 2,
      borderColor: 'white',
      borderRadius: 20,
      width: 110
    },
})

export default TouchLetters