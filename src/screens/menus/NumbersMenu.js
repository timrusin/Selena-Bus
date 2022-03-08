import React from 'react';
import ModeComponent from '../../components/ModeComponent';
import { View } from 'react-native'



const NumbersMenu = ({navigation}) => {
    return (
      <View>
        <ModeComponent
          navigation={navigation}
          link="ListenNumbers"
          title="Listen"
        />
        <ModeComponent
          navigation={navigation}
          link="TouchNumbers"
          title="Play"
        />
        <ModeComponent
          navigation={navigation}
          link="TestNumbers"
          title="Test"
        />
      </View>
    );
};


export default NumbersMenu;