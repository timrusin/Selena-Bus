import { React, useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import axios from 'axios'



const GameOverComponent = ({ navigation, dt, tries, game }) => {
    const [scores, setScores] =useState()

    useEffect(()=>{
    axios.get('http:localhost:3000/?_limit=4')
        .then(res=>{
        setScores(res.data)
        })
    },[])
    
    // useEffect(()=>{
    //   axios.post('http:localhost:3000/newscore', { game: game, dt: dt, tries: tries })
    // },[])

  return (
    <>
      <View style={styles.overContainer}>
        <View style={styles.resultsContainer}>
          <Text style={[styles.text, { fontSize: 40, marginTop: 20 }]}>
            GREAT JOB SELENA!
          </Text>
          <Text style={[styles.text, { fontSize: 30, marginTop: 10 }]}>
            { game }
          </Text>
          <Text style={[styles.text, { fontSize: 18, marginVertical: 10 }]}>
            { dt }
          </Text>
          <Text style={[styles.text, { fontSize: 40, marginBottom: 20 }]}>
            Amount of Tries : {tries}
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Main")}>
          <Image
            source={require("../../assets/images/Bus.png")}
            style={{ height: 90, width: 130, marginTop: 20, marginBottom: 10 }}
          />
        </TouchableOpacity>
        <Text style={[styles.text, { fontSize: 25, marginVertical: 10 }]}>
          Previous Scores:
        </Text>
      </View>

      
      <View style={styles.overContainer}>
        <FlatList
          keyExtractor={(score) => score._id}
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

    resultsContainer: {
      borderColor: 'white', 
      borderWidth: 2, 
      alignItems: 'center', 
      paddingHorizontal: 8,
      marginTop: 20,
    },

    text: {
      color: 'white',
    },
});

export default GameOverComponent;