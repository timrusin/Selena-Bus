import React from 'react';
import ModeComponent from '../../components/ModeComponent';
import { View } from 'react-native'


const ColorsMenu = ({navigation}) => {
const image1 = require('../../../assets/images/animatedGifs/colorsPractice.gif')
const image2 = require('../../../assets/images/animatedGifs/colorsQuiz.gif')
    return (
      <View>
        <ModeComponent
          navigation={navigation}
          link="TouchColors"
          title="Practice"
          image={ image1 }
        />
        <ModeComponent
          navigation={navigation}
          link="QuizColors"
          title="Quiz"
          image={ image2 }
        />
      </View>
    );
};


export default ColorsMenu;