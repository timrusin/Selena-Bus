import React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';



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
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'purple'
   
    
  },

  imageOneStyle: {
    width: 250,
    height: 240,
  },

  imageTwoStyle: {
    width:255,
    height: 120,
  },

  imageThreeStyle: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
});

export default MainMenu;