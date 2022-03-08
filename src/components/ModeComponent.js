import React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';


const ModeComponent = ({navigation, link, imageSource, title}) => {
    console.log(navigation)

  return (
      <TouchableOpacity onPress={()=> navigation.navigate(link)} >
        <Image source={imageSource} style={{height:100, width:100}}/>
        <Text>{title}</Text>
      </TouchableOpacity>
  );
};


export default ModeComponent;