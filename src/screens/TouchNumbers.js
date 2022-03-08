import { React, useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Audio } from 'expo-av'
import { TouchableWithoutFeedback } from "react-native-web";


const TouchNumbers = ({ navigation }) => {
    const [one, setOne] = useState();
    const [two, setTwo] = useState();
    const [three, setThree] = useState();
    const [four, setFour] = useState();
    const [five, setFive] = useState();
    const [six, setSix] = useState();
    const [seven, setSeven] = useState();
    const [eight, setEight] = useState();
    const [nine, setNine] = useState();
    const [ten, setTen] = useState();
    
    async function playOne() {
      const { sound } = await Audio.Sound.createAsync(
         require('../../assets/sounds/One.m4a')
      );
      setOne(one);
      await sound.playAsync(); }
  
    useEffect(() => {
      return one
        ? () => {
            sound.unloadAsync(); }
        : undefined;
    }, [one]);


    async function playTwo() {
      const { sound } = await Audio.Sound.createAsync(
         require('../../assets/sounds/Two.m4a')
      );
      setTwo(two);
      await sound.playAsync(); }
  
    useEffect(() => {
      return two
        ? () => {
            sound.unloadAsync(); }
        : undefined;
    }, [two]);


    async function playThree() {
      const { sound } = await Audio.Sound.createAsync(
         require('../../assets/sounds/Three.m4a')
      );
      setThree(three);
      await sound.playAsync(); }
  
    useEffect(() => {
      return three
        ? () => {
            sound.unloadAsync(); }
        : undefined;
    }, [three]);

    async function playFour() {
      const { sound } = await Audio.Sound.createAsync(
         require('../../assets/sounds/Four.m4a')
      );
      setFour(four);
      await sound.playAsync(); }
  
    useEffect(() => {
      return four
        ? () => {
            sound.unloadAsync(); }
        : undefined;
    }, [four]);


    async function playFive() {
      const { sound } = await Audio.Sound.createAsync(
         require('../../assets/sounds/Five.m4a')
      );
      setFive(five);
      await sound.playAsync(); }
  
    useEffect(() => {
      return five
        ? () => {
            sound.unloadAsync(); }
        : undefined;
    }, [five]);

    async function playSix() {
      const { sound } = await Audio.Sound.createAsync(
         require('../../assets/sounds/Six.m4a')
      );
      setSix(six);
      await sound.playAsync(); }
  
    useEffect(() => {
      return six
        ? () => {
            sound.unloadAsync(); }
        : undefined;
    }, [six]);

    async function playSeven() {
      const { sound } = await Audio.Sound.createAsync(
         require('../../assets/sounds/Seven.m4a')
      );
      setSeven(seven);
      await sound.playAsync(); }
  
    useEffect(() => {
      return seven
        ? () => {
            sound.unloadAsync(); }
        : undefined;
    }, [seven]);

    async function playEight() {
      const { sound } = await Audio.Sound.createAsync(
         require('../../assets/sounds/Eight.m4a')
      );
      setEight(eight);
      await sound.playAsync(); }
  
    useEffect(() => {
      return eight
        ? () => {
            sound.unloadAsync(); }
        : undefined;
    }, [eight]);

    async function playNine() {
      const { sound } = await Audio.Sound.createAsync(
         require('../../assets/sounds/Nine.m4a')
      );
      setNine(nine);
      await sound.playAsync(); }
  
    useEffect(() => {
      return nine
        ? () => {
            sound.unloadAsync(); }
        : undefined;
    }, [nine]);

    async function playTen() {
      const { sound } = await Audio.Sound.createAsync(
         require('../../assets/sounds/Ten.m4a')
      );
      setTen(ten);
      await sound.playAsync(); }
  
    useEffect(() => {
      return ten
        ? () => {
            sound.unloadAsync(); }
        : undefined;
    }, [ten]);
    

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={playOne}>
          <Text style={styles.number}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={playTwo}>
          <Text style={styles.number}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={playThree}>
          <Text style={styles.number}>3</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={playFour}>
          <Text style={styles.number}>4</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={playFive}>
          <Text style={styles.number}>5</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={playSix}>
          <Text style={styles.number}>6</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={playSeven}>
          <Text style={styles.number}>7</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={playEight}>
          <Text style={styles.number}>8</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={playNine}>
          <Text style={styles.number}>9</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={playTen} style={{ marginRight: 19 }}>
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