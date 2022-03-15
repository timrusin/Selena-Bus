import React from 'react';
import ModeComponent from '../../components/ModeComponent';
import { View } from 'react-native'

const NumbersMenu = ({navigation}) => {
const image1 = require('../../../assets/images/animatedGifs/numbersPractice.gif')
const image2 = require('../../../assets/images/animatedGifs/numbersQuiz.gif')
    return (
      <View>
        <ModeComponent
          navigation={navigation}
          link="TouchNumbers"
          title="Practice"
          image={image1}
        />
        <ModeComponent
          navigation={navigation}
          link="QuizNumbers"
          title="Quiz"
          image={image2}
        />
      </View>
    );
};


export default NumbersMenu;