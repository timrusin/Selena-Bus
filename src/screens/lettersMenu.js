import React from 'react';
import { View } from 'react-native'
import ModeComponent from '../components/ModeComponent';



const LettersMenu = ({ navigation }) => {

  return (
    <View>
      <ModeComponent
        navigation={navigation}
        link="listen"
        title="Listen"
        imageSource={require("../../assets/images/lettersButton.png")}
      />
      <ModeComponent
        navigation={navigation}
        link="touch"
        title="Play"
        imageSource={require("../../assets/images/lettersButton.png")}
      />
      <ModeComponent
        navigation={navigation}
        link="test"
        title="Test"
        imageSource={require("../../assets/images/lettersButton.png")}
      />
    </View>
  );
};


export default LettersMenu;