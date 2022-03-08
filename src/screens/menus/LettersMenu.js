import React from 'react';
import { View } from 'react-native'
import ModeComponent from '../../components/ModeComponent';



const LettersMenu = ({ navigation }) => {

  return (
    <View>
      <ModeComponent
        navigation={navigation}
        link="ListenLetters"
        title="Listen"
      />
      <ModeComponent
        navigation={navigation}
        link="TouchLetters"
        title="Play"
      />
      <ModeComponent
        navigation={navigation}
        link="TestLetters"
        title="Test"
      />
    </View>
  );
};


export default LettersMenu;