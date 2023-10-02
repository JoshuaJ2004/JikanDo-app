import React from "react";
import {Text,View, StyleSheet, Image} from 'react-native';
import logo from 'jikando-app/img/logo.png';
import Menu from 'jikando-app/src/components/Menu.jsx';

const Main = () => {
    return (
        <Menu />
    )
}

const styles = StyleSheet.create({
    header:{

    },
    container:{
       /* padding: 100,
        paddingBottom:50,
        paddingTop: 10,
        paddingLeft: 10,
       */
    },
    letter:{
        color:'#5B38BA',
        fontWeight: "bold",
        fontSize:25
    },
    logo:{
        width: 200,
        height:50
        
    }
    
})
export default Main
