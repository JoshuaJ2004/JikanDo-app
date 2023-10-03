import React from "react";
import { View,Text, StyleSheet } from "react-native";

const HomeScreen = () =>{
    return(
        <View style={styles.container}>
            <Text>USER</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2A3350'

    },
});
export default HomeScreen;