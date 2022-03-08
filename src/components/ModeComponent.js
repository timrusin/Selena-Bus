import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';


const ModeComponent = ({navigation, link, title}) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate(link)}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: "center",
    justifyContent: 'space-between',
    backgroundColor: "purple",
  },

  images: {
    width: 170,
    height: 180,
    marginTop: 30,
  },

  title: {
    marginVertical: 80,
    fontSize: 80,
  },
});

export default ModeComponent;