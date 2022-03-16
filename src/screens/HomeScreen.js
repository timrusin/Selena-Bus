import { useEffect, React } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Audio } from "expo-av";

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    BusSounds();
  },[]);
  
  async function BusSounds () {
    const Bus = require("../../assets/sounds/sfx/BusSounds.wav")
    const { sound } = await Audio.Sound.createAsync(Bus); 
    await sound.playAsync();
  }
  return (
    <View style={styles.container}>
      <Animatable.Text
        animation="pulse"
        easing="ease-out"
        iterationCount="infinite"
        style={styles.title}
      >
        Selena's Bus
      </Animatable.Text>

      <Text></Text>
      <TouchableOpacity onPress={() => navigation.navigate("Main")}>
        <Image
          source={require("../../assets/images/BusLarge.png")}
          style={styles.image}
        ></Image>
      </TouchableOpacity>
    </View>
  );   
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'purple'
  },

  title: {
    fontSize: 65,
    color: 'white',
    textShadowColor: 'white',
    textShadowRadius: 2,
    marginTop: 100,
    marginBottom: 80,

  },

  image: {
    width: 350,
    height: 252,
    marginBottom: 150,
    shadowColor: 'white',
    shadowOpacity: 1,
    shadowRadius: 2,
  },

  buttonStyle: {
    borderWidth: 3,
    borderColor: "black",
    marginVertical: 10,
  },
});

export default HomeScreen;