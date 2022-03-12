import { React, useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import axios from 'axios'



const GameOverComponent = ({ navigation, dt, tries, game }) => {
    const [scores, setScores] =useState()

    useEffect(()=>{
    axios.get('http:localhost:3000/')
        .then(res=>{
        setScores(res.data)
        })
    },[])
    if (!scores) return (
        <Text>loading.....</Text>
    )
  return (
    <>
      <View style={styles.overContainer}>
        <Text style={[styles.text, { fontSize: 40, marginVertical: 10 }]}>
          GREAT JOB SELENA!
        </Text>
        <Text style={[styles.text, { fontSize: 15, marginVertical: 10 }]}>
          { dt }
        </Text>
        <Text style={[styles.text, { fontSize: 40 }]}>
          Amount of tries : { tries }
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Main")}>
          <Image
            source={require("../../assets/images/Bus.png")}
            style={{ height: 90, width: 130, marginTop: 20, marginBottom: 50 }}
          />
        </TouchableOpacity>
        <Text style={[styles.text, { fontSize: 20, marginVertical: 20 }]}>
          Previous Scores:
        </Text>
      </View>

      <View style={styles.overContainer}>
        <FlatList
          data={scores}
          renderItem={({ item }) => {
            return (
              <View>
                <Text style={[styles.text, { fontSize: 15 }]}>
                  {" "}
                  {item.game}{" "}
                </Text>
                <Text style={[styles.text, { fontSize: 15 }]}> {item.dt} </Text>
                <Text style={[styles.text, { fontSize: 25, marginBottom: 10 }]}>
                  Amount of tries : {item.tries}
                </Text>
              </View>
            );
          }}
        />
      </View>
    </>
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