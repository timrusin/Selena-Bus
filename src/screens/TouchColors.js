import react from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";


const TouchColors = ({ navigation }) => {
    console.log(navigation)
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={{ backgroundColor: "red", marginTop: 20, marginVertical: 10 }}
        >
          <View style={styles.box} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ backgroundColor: "blue", marginTop: 20, marginVertical: 10 }}
        >
          <View style={styles.box} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ backgroundColor: "green", marginVertical: 10 }}
        >
          <View style={styles.box} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ backgroundColor: "purple", marginVertical: 10 }}
        >
          <View style={styles.box} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "yellow",
            marginVertical: 10,

          }}
        >
          <View style={styles.box} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "brown",
            marginVertical: 10,

          }}
        >
          <View style={styles.box} />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={()=> navigation.navigate("Home")}>
            <Image
              source={require("../../assets/images/Bus.png")}
              style={{ height: 120, width:160, marginVertical: 10 }}
            />
        </TouchableOpacity>
        
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: 'center',
        backgroundColor: 'black',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    box: {
      
        width: 100,
        height: 100,
        marginTop: 40,
        marginBottom: 40,
        marginHorizontal: 30,
    }
})

export default TouchColors