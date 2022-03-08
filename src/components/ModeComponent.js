import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';


const ModeComponent = ({navigation, link, imageSource, title}) => {
    console.log(navigation)

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate(link)}>
        <Image style={styles.images} source={imageSource} />
        <Text>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'purple',
  },

  images:{
    textAlign: 'center',
    width: 170,
    height: 180,
    marginTop: 30,
  }
})

export default ModeComponent;