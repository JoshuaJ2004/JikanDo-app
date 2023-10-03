import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
//icons
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
//Screens
import HomeScreen from 'jikando-app/screens/HomeScreen'
import UserScreen from 'jikando-app/screens/UserScreen'
import CalendarScreen from 'jikando-app/screens/CalendarScreen'

const Tab = createBottomTabNavigator();

function MyTabs(){
    return(
        <Tab.Navigator 
            initialRouteName="Home"
            screenOptions={
                {
                tabBarActiveTintColor: '#F7D000',
                tabBarStyle: {backgroundColor: '#394166'},
                
                }
            }
        >
            <Tab.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{
                tabBarLabel:'Tareas',
                headerShown: false,
                tabBarIcon: ({color, zise})=>(
                <MaterialIcons name="home" size={24} color={color} />                
    ), 
                
            }}
            />
            <Tab.Screen  
            name="User" 
            component={UserScreen}
            options={{
                tabBarLabel:'Mi Camino',
                headerShown: false,
                tabBarIcon: ({color, zise})=>(
                    <FontAwesome name="user" size={24} color={color} />                
        ),
            }}
            />
            <Tab.Screen  
            name="Calendar" 
            component={CalendarScreen} 
            options={{
                tabBarLabel:'calendario',
                headerShown: false,
                tabBarIcon: ({color, zise})=>(
                    <Ionicons name="calendar" size={24}  color={color} />               
        ),
            }}
            />
        </Tab.Navigator>
    );
}

export default function Navigation (){
    return(
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}
