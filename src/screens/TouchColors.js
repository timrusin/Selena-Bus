import { React, useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Audio } from 'expo-av'


const TouchColors = ({ navigation }) => {
    const [sound, setSound] = useState()

    //loading all of my sounds
    const colorFiles = {
        Red: require('../../assets/sounds/colors/Red.m4a'),
        Blue: require('../../assets/sounds/colors/Blue.m4a'),
        Green: require('../../assets/sounds/colors/Green.m4a'),
        Purple: require('../../assets/sounds/colors/Purple.m4a'),
        Yellow: require('../../assets/sounds/colors/Yellow.m4a'),
        Orange: require('../../assets/sounds/colors/Orange.m4a'), //**** re-record as orange *****/
    }
    //this is bscasilly my audio player
    useEffect(() => {
      return sound
        ? () => {
            sound.unloadAsync(); }
        : undefined;
    }, [sound]);

    //
    async function playSound(color) {
      const { sound } = await Audio.Sound.createAsync(
          //referencing the color in the object above to be required
          colorFiles[color]
      );
      setSound(sound);
      await sound.playAsync(); }
  

    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => playSound("Red")}
          style={[styles.button, { backgroundColor: "red" }]}
        >
          <View style={styles.box} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => playSound("Blue")}
          style={[styles.button, { backgroundColor: "blue", marginLeft: 20 }]}
        >
          <View style={styles.box} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => playSound("Green")}
          style={[styles.button, { backgroundColor: "green" }]}
        >
          <View style={styles.box} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => playSound("Orange")}//**** replace with Orange once recorded ******/
          style={[styles.button, { backgroundColor: "orange", marginLeft: 20 }]}
        >
          <View style={styles.box} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => playSound("Yellow")}
          style={[styles.button, { backgroundColor: "yellow" }]}
        >
          <View style={styles.box} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => playSound("Purple")}
          style={[styles.button, { backgroundColor: "purple", marginLeft: 20 }]}
        >
          <View style={styles.box} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Main")}>
          <Image
            source={require("../../assets/images/Bus.png")}
            style={{ height: 90, width: 130, marginTop: 10, marginBottom: 150, }}
          />
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "black",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  box: {
    width: 100,
    height: 100,
    marginTop: 40,
    marginBottom: 40,
    marginHorizontal: 30,
  },

  button: {
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 20,
    marginTop: 20,
    marginVertical: 10,
    shadowColor: "white",
    shadowOpacity: .8,
    shadowRadius: 10,
  },
});

export default TouchColors