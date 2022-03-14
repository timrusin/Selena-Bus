import { React, useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Audio } from 'expo-av'


const TouchNumbers = ({ navigation }) => {
    const [sound, setSound] = useState();

    const numberFiles = {
        One: require('../../assets/sounds/numbers/One.m4a'),
        Two: require('../../assets/sounds/numbers/Two.m4a'),
        Three: require('../../assets/sounds/numbers/Three.m4a'),
        Four: require('../../assets/sounds/numbers/Four.m4a'),
        Five: require('../../assets/sounds/numbers/Five.m4a'),
        Six: require('../../assets/sounds/numbers/Six.m4a'),
        Seven: require('../../assets/sounds/numbers/Seven.m4a'),
        Eight: require('../../assets/sounds/numbers/Eight.m4a'),
        Nine: require('../../assets/sounds/numbers/Nine.m4a'),
        Ten: require('../../assets/sounds/numbers/Ten.m4a')
    }
    
    async function playSound(number) {
      const { sound } = await Audio.Sound.createAsync(
         numberFiles[number]
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
        <TouchableOpacity onPress={() => playSound("One")}>
          <Text style={styles.number}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => playSound("Two")}>
          <Text style={styles.number}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => playSound("Three")}>
          <Text style={styles.number}>3</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => playSound("Four")}>
          <Text style={styles.number}>4</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => playSound("Five")}>
          <Text style={styles.number}>5</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => playSound("Six")}>
          <Text style={styles.number}>6</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => playSound("Seven")}>
          <Text style={styles.number}>7</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => playSound("Eight")}>
          <Text style={styles.number}>8</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => playSound("Nine")}>
          <Text style={styles.number}>9</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => playSound("Ten")}
          style={{ marginRight: 19 }}
        >
          <Text
            style={{
              display: "flex",
              alignSelf: "center",
              fontSize: 110,
              color: "white",
              width: 128,
              marginVertical: 10,
              textShadowColor: "white",
              textShadowRadius: 20,
              borderWidth: 2,
              borderRadius: 20,
              borderColor: "white",
              textAlign: "center",
            }}
          >
            10
          </Text>
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
              marginVertical: 10,
              marginBottom: 150,
              marginHorizontal: 100,
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
      fontSize: 110,
      textAlign: 'center',
      color: 'white',
      marginHorizontal:20,
      marginVertical: 10,
      textShadowColor: 'white',
      textShadowRadius: 20,
      borderWidth: 2,
      borderColor: 'white',
      borderRadius: 20,
      width: 90
    },
})

export default TouchNumbers