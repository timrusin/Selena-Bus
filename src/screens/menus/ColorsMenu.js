import React from 'react';
import ModeComponent from '../../components/ModeComponent';
import { View } from 'react-native'


const ColorsMenu = ({navigation}) => {

    return (
      <View>
        <ModeComponent
          navigation={navigation}
          link="ListenColors"
          title="Listen"
        />
        <ModeComponent
          navigation={navigation}
          link="TouchColors"
          title="Play"
        />
        <ModeComponent
          navigation={navigation}
          link="TestColors"
          title="Test"
        />
      </View>
    );
};


export default ColorsMenu;