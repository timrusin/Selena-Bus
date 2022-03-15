import React from 'react';
import { View } from 'react-native'
import ModeComponent from '../../components/ModeComponent';

const LettersMenu = ({ navigation }) => {
  const image1 = require('../../../assets/images/animatedGifs/lettersPractice.gif')
  const image2 = require('../../../assets/images/animatedGifs/lettersQuiz.gif')
      return (
        <View>
          <ModeComponent
            navigation={navigation}
            link="TouchLetters"
            title="Practice"
            image={image1}
          />
          <ModeComponent
            navigation={navigation}
            link="QuizLetters"
            title="Quiz"
            image={image2}
          />
        </View>
      );
  };


export default LettersMenu;