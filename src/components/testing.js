import react from "react";
import { TouchableOpacity, View, Text } from 'react-native';


const Testing = ( { Bcolor }) => {

    return(
    <TouchableOpacity style={{
        borderWidth: 2,
        borderColor: "white",
        borderRadius: 20,
        backgroundColor: Bcolor,
        marginVertical: 20}}>
        <View style={styles.box} />
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
 
    touch: {
        borderWidth: 2,
        borderColor: "white",
        borderRadius: 20,
        backgroundColor: "red",
        marginVertical: 20,
    },

    box: {
        width: 50,
        height: 50,
        marginVertical: 10,
        marginHorizontal: 10,
    }
})

export default Testing