import { React } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ModeComponent = ({navigation, link, title, image}) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate(link)}>
        <Image source={image} style={styles.images} />
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
    backgroundColor: "black",
  },

  images: {
    width: 177,
    height: 275,
    marginTop: 40,
  },

  title: {
    color: 'white',
    marginBottom:30,
    fontSize: 30,
    textAlign: 'center',

  },
});

export default (ModeComponent);