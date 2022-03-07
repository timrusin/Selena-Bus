import React from 'react';
import ModeComponent from '../components/ModeComponent';
import { View } from 'react-native'


const ColorsMenu = ({navigation}) => {
    return (
        <View>
          <ModeComponent
            link="listen"
            title="Listen"
            imageSource={require("../../assets/images/colorsButton.png")}
          />
          <ModeComponent 
          link="touch"
          title="Play"
          imageSource={require("../../assets/images/colorsButton.png")}
          />
          <ModeComponent 
          link="test"
          title="Test"
          imageSource={require("../../assets/images/colorsButton.png")}
          />
    
        </View>
      );
};


export default ColorsMenu;