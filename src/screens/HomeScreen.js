import { useEffect, React } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';

const HomeScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
      <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={styles.title}>Selena's Bus</Animatable.Text>

      <Text ></Text>
      <TouchableOpacity onPress={() => navigation.navigate("Main")}>
        <Image
          source={require("../../assets/images/Bus.png")}
          style={styles.image}
        ></Image>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'purple'
  },

  title: {
    fontSize: 65,
    color: 'white',
    marginTop: 100,
    marginBottom: 80,

  },

  image: {
    width: 350,
    height: 252,
    marginBottom: 150,
    shadowColor: 'white',
    shadowOpacity: 1,
    shadowRadius: 5,
  },

  buttonStyle: {
    borderWidth: 3,
    borderColor: "black",
    marginVertical: 10,
  },
});

export default HomeScreen;