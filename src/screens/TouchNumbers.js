import { React, useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Audio } from 'expo-av'
import { TouchableWithoutFeedback } from "react-native-web";


const TouchNumbers = ({ navigation }) => {
    const [sound, setSound] = useState();

    const numberFiles = {
        One: require('../../assets/sounds/One.m4a'),
        Two: require('../../assets/sounds/Two.m4a'),
        Three: require('../../assets/sounds/Three.m4a'),
        Four: require('../../assets/sounds/Four.m4a'),
        Five: require('../../assets/sounds/Five.m4a'),
        Six: require('../../assets/sounds/Six.m4a'),
        Seven: require('../../assets/sounds/Seven.m4a'),
        Eight: require('../../assets/sounds/Eight.m4a'),
        Nine: require('../../assets/sounds/Nine.m4a'),
        Ten: require('../../assets/sounds/Ten.m4a')
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
        <TouchableOpacity onPress={()=>playSound('One')}>
          <Text style={styles.number}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>playSound('Two')}>
          <Text style={styles.number}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>playSound('Three')}>
          <Text style={styles.number}>3</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>playSound('Four')}>
          <Text style={styles.number}>4</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>playSound('Five')}>
          <Text style={styles.number}>5</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>playSound('Six')}>
          <Text style={styles.number}>6</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>playSound('Seven')}>
          <Text style={styles.number}>7</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>playSound('Eight')}>
          <Text style={styles.number}>8</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>playSound('Nine')}>
          <Text style={styles.number}>9</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>playSound('Ten')} style={{ marginRight: 19 }}>
          <Text style={styles.number}>10</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ marginLeft: 40 }}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            source={require("../../assets/images/Bus.png")}
            style={{ height: 90, width: 130, marginVertical: 10 }}
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

    number: {
      fontSize: 130,
      color: 'white',
      marginHorizontal:20,
      textShadowColor: 'white',
      textShadowRadius: 20
    },
})

export default TouchNumbers