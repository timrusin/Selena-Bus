import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';



const HomeScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Selena's Bus
      </Text>
      <Image
        source={require("../../assets/Bus.png")}
        style={styles.image}
      >
        </Image>
      <View>
        <Button
          style={styles.buttonStyle}
          onPress={() => navigation.navigate("Main")}
          title="START!"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'purple'
  },

  title: {
    fontSize: 60,
    color: 'white',
    marginBottom: 30
  },

  image: {
    width: 290,
    height: 200,
    marginBottom: 50
  },


  buttonStyle: {
    borderWidth: 3,
    borderColor: "black",
    marginVertical: 10,
  },
});

export default HomeScreen;