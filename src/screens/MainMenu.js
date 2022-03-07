import React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


const MainMenu = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <View>
          <Image
            source={require("../../assets/colorsButton.png")}
            style={styles.imageOneStyle}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Image
          source={require("../../assets/numbersButton.png")}
          style={styles.imageTwoStyle}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Image
          source={require("../../assets/lettersButton.png")}
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
    width: 200,
    height: 150,
    marginTop: 20
  
  },

  imageTwoStyle: {
    width:250,
    height: 155,
    marginTop: 20
  },

  imageThreeStyle: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
});

export default MainMenu;