import React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';



const MainMenu = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Colors")}>
        <View>
          <Image
            source={require("../../../assets/images/colorsNew.png")}
            style={styles.imageOneStyle}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Numbers")}>
        <Image
          source={require("../../../assets/images/numbersNew.png")}
          style={styles.imageTwoStyle}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Letters")}>
        <Image
          source={require("../../../assets/images/lettersButton.png")}
          style={styles.imageThreeStyle}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "purple",
  },

  imageOneStyle: {
    width: 250,
    height: 240,
    shadowColor: "white",
    shadowOpacity: 1,
    shadowRadius: 5,
  },

  imageTwoStyle: {
    width: 255,
    height: 120,
    shadowColor: "white",
    shadowOpacity: 1,
    shadowRadius: 2,
  },

  imageThreeStyle: {
    width: 200,
    height: 200,
    marginBottom: 20,
    shadowColor: "white",
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
});

export default MainMenu;