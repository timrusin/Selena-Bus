import React from 'react';
import ModeComponent from '../components/ModeComponent';
import { View } from 'react-native'


const ColorsMenu = ({navigation}) => {

    return (
      <View>
        <ModeComponent
          navigation={navigation}
          link="Home"
          title="Listen"
          imageSource={require("../../assets/images/colorsButton.png")}
        />
        <ModeComponent
          navigation={navigation}
          link="touch"
          title="Play"
          imageSource={require("../../assets/images/colorsButton.png")}
        />
        <ModeComponent
          navigation={navigation}
          link="test"
          title="Test"
          imageSource={require("../../assets/images/colorsButton.png")}
        />
      </View>
    );
};


export default ColorsMenu;