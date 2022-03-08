import { React, useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Audio } from 'expo-av'


const TouchColors = ({ navigation }) => {
    const [red, setRed] = useState();
    const [blue, setBlue] = useState();
    const [green, setGreen] = useState();
    const [purple, setPurple] = useState();
    const [yellow, setYellow] = useState();
    const [brown, setBrown] = useState();
    
    async function playRed() {
      const { sound } = await Audio.Sound.createAsync(
         require('../../assets/sounds/Red.m4a')
      );
      setRed(red);
      await sound.playAsync(); }
  
    useEffect(() => {
      return red
        ? () => {
            sound.unloadAsync(); }
        : undefined;
    }, [red]);


    async function playBlue() {
      const { sound } = await Audio.Sound.createAsync(
         require('../../assets/sounds/Blue.m4a')
      );
      setBlue(blue);
      await sound.playAsync(); }
  
    useEffect(() => {
      return blue
        ? () => {
            sound.unloadAsync(); }
        : undefined;
    }, [blue]);


    async function playGreen() {
      const { sound } = await Audio.Sound.createAsync(
         require('../../assets/sounds/Green.m4a')
      );
      setGreen(green);
      await sound.playAsync(); }
  
    useEffect(() => {
      return green
        ? () => {
            sound.unloadAsync(); }
        : undefined;
    }, [green]);

    async function playPurple() {
      const { sound } = await Audio.Sound.createAsync(
         require('../../assets/sounds/Purple.m4a')
      );
      setPurple(purple);
      await sound.playAsync(); }
  
    useEffect(() => {
      return purple
        ? () => {
            sound.unloadAsync(); }
        : undefined;
    }, [purple]);


    async function playYellow() {
      const { sound } = await Audio.Sound.createAsync(
         require('../../assets/sounds/Yellow.m4a')
      );
      setYellow(yellow);
      await sound.playAsync(); }
  
    useEffect(() => {
      return yellow
        ? () => {
            sound.unloadAsync(); }
        : undefined;
    }, [yellow]);

    async function playBrown() {
      const { sound } = await Audio.Sound.createAsync(
         require('../../assets/sounds/Brown.m4a')
      );
      setBrown(brown);
      await sound.playAsync(); }
  
    useEffect(() => {
      return brown
        ? () => {
            sound.unloadAsync(); }
        : undefined;
    }, [brown]);



    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={playRed}
          style={{ backgroundColor: "red", marginTop: 20, marginVertical: 10 }}
        >
          <View style={styles.box} />
        </TouchableOpacity>
        <TouchableOpacity onPress={playBlue}
          style={{ backgroundColor: "blue", marginTop: 20, marginVertical: 10 }}
        >
          <View style={styles.box} />
        </TouchableOpacity>
        <TouchableOpacity onPress={playGreen}
          style={{ backgroundColor: "green", marginVertical: 10 }}
        >
          <View style={styles.box} />
        </TouchableOpacity>
        <TouchableOpacity onPress={playPurple}
          style={{ backgroundColor: "purple", marginVertical: 10 }}
        >
          <View style={styles.box} />
        </TouchableOpacity>
        <TouchableOpacity onPress={playYellow}
          style={{
            backgroundColor: "yellow",
            marginVertical: 10,

          }}
        >
          <View style={styles.box} />
        </TouchableOpacity>
        <TouchableOpacity onPress={playBrown}
          style={{
            backgroundColor: "brown",
            marginVertical: 10,

          }}
        >
          <View style={styles.box} />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={()=> navigation.navigate("Home")}>
            <Image
              source={require("../../assets/images/Bus.png")}
              style={{ height: 120, width:160, marginVertical: 10 }}
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