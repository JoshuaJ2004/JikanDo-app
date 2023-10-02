import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';
import task from 'jikando-app/img/task_icon.png';
import user from 'jikando-app/img/user_icon.png';

const Menu = () => {
    return (
        <View style={styles.menuBack}>
            <View style={styles.menuItem}>
                <Image style={styles.task}
                    source={require('jikando-app/img/task_icon.png')}
                />
                <Text style={styles.menuText}>TAREAS</Text>
            </View>
            <View style={styles.menuItem}>
                <Image style={styles.user}
                    source={require('jikando-app/img/user_icon.png')}
                />
                <Text style={styles.menuText2}>MI CAMINO</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    menuBack: {
        backgroundColor: '#394166',
        position: 'absolute',
        top: 620,
        left: 0,
        right: 0,
        padding: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
    },
    
    menuItem: {
        alignItems: 'center',
        marginBottom: 20,
    },
    task: {
        width: 55,
        height: 55,
        marginLeft: -240,
        marginTop: -50
    },
    user: {
        width: 55,
        height: 55,
        marginRight: 60,
        marginTop: -90
    },
    menuText: {
        marginTop: 5,
        marginLeft: -240,
        color: 'white',
    },
    menuText2: {
        marginTop: -10,
        marginRight: 45,
        color: 'white',
    }
});

export default Menu;
