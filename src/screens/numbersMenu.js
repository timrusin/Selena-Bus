import React from 'react';
import ModeComponent from '../components/ModeComponent';
import { View } from 'react-native'



const NumbersMenu = ({navigation}) => {
    return (
        <View>
          <ModeComponent
            link="listen"
            title="Listen"
            imageSource={require("../../assets/images/numbersButton.png")}
          />
          <ModeComponent 
          link="touch"
          title="Play"
          imageSource={require("../../assets/images/numbersButton.png")}
          />
          <ModeComponent 
          link="test"
          title="Test"
          imageSource={require("../../assets/images/numbersButton.png")}
          />
    
        </View>
      );
};


export default NumbersMenu;