import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';



const GameOverComponent = ({ navigation, dt, tries }) => {

  return (
    <View style={styles.overContainer}>
      <Text style={[styles.text, { fontSize: 40, marginVertical: 30 }]}>
        GREAT JOB SELENA!
      </Text>
      <Text style={[styles.text, { fontSize: 20 }]}>{dt}</Text>
      <Text style={[styles.text, { fontSize: 40 }]}>
        Amount of tries : {tries}
      </Text>
      <Text style={[styles.text, { fontSize: 20, marginVertical: 20 }]}>
        Previous Scores:
      </Text>

      <TouchableOpacity onPress={() => navigation.navigate("Main")}>
        <Image
          source={require("../../assets/images/Bus.png")}
          style={{ height: 90, width: 130, marginTop: 10, marginBottom: 150 }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    overContainer: {
      backgroundColor: 'black',
      alignItems: 'center',
    },

    text: {
      color: 'white',
    },
});

export default GameOverComponent;