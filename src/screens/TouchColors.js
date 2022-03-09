import { React, useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Audio } from 'expo-av'


const TouchColors = ({ navigation }) => {
    const [sound, setSound] = useState()

    //loading all of my sounds
    const colorFiles = {
        Red: require('../../assets/sounds/Red.m4a'),
        Blue: require('../../assets/sounds/Blue.m4a'),
        Green: require('../../assets/sounds/Green.m4a'),
        Purple: require('../../assets/sounds/Purple.m4a'),
        Yellow: require('../../assets/sounds/Yellow.m4a'),
        Brown: require('../../assets/sounds/Brown.m4a'),
    }
    
    async function playSound(color) {
      const { sound } = await Audio.Sound.createAsync(
          //referencing the in the object above to be required
          colorFiles[color]
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
        <TouchableOpacity
          onPress={() => playSound("Red")}
          style={{
            borderWidth: 2,
            borderColor: "white",
            borderRadius: 20,
            backgroundColor: "red",
            marginTop: 20,
            marginVertical: 10,
          }}
        >
          <View style={styles.box} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => playSound("Blue")}
          style={{
            borderWidth: 2,
            borderColor: "white",
            borderRadius: 20,
            backgroundColor: "blue",
            marginTop: 20,
            marginVertical: 10,
            marginLeft: 20,
          }}
        >
          <View style={styles.box} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => playSound("Green")}
          style={{
            borderWidth: 2,
            borderColor: "white",
            borderRadius: 20,
            backgroundColor: "green",
            marginVertical: 10,
          }}
        >
          <View style={styles.box} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => playSound("Purple")}
          style={{
            borderWidth: 2,
            borderColor: "white",
            borderRadius: 20,
            backgroundColor: "purple",
            marginVertical: 10,
            marginLeft: 20,
          }}
        >
          <View style={styles.box} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => playSound("Yellow")}
          style={{
            borderWidth: 2,
            borderColor: "white",
            borderRadius: 20,
            backgroundColor: "yellow",
            marginVertical: 10,
          }}
        >
          <View style={styles.box} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => playSound("Brown")}
          style={{
            borderWidth: 2,
            borderColor: "white",
            borderRadius: 20,
            backgroundColor: "brown",
            marginVertical: 10,
            marginLeft: 20,
          }}
        >
          <View style={styles.box} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Main")}>
          <Image
            source={require("../../assets/images/Bus.png")}
            style={{ height: 90, width: 130, marginTop: 10, marginBottom: 150 }}
          />
        </TouchableOpacity>
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
        width: 100,
        height: 100,
        marginTop: 40,
        marginBottom: 40,
        marginHorizontal: 30,
    }
})

export default TouchColors