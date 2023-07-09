import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {logoImage} from '../../../assets/Logo.png'

export const SplashScreen = () => {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={logoImage}/>
        <StatusBar style="auto" />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      height: 400,
      width: 400
    }
  });