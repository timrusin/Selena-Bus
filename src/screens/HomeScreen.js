import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';


const HomeScreen = ({navigation}) => {


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selena's Bus</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Main")}>
        <Image
          source={require("../../assets/images/Bus.png")}
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
    justifyContent: 'space-evenly',
    backgroundColor: 'purple'
  },

  title: {
    fontSize: 60,
    color: 'white',

  },

  image: {
    width: 310,
    height: 230,
    marginBottom: 150
  },


  buttonStyle: {
    borderWidth: 3,
    borderColor: "black",
    marginVertical: 10,
  },
});

export default HomeScreen;