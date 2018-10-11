import React, { Component } from 'react';
import {Platform, StyleSheet, Text, Image, View} from 'react-native';
import Judul from './Judul';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Judul/>
        <Text style={styles.instructions}>Nama : Bunga fadhillah</Text>
        <Text style={styles.instructions}>Absen : 12</Text>
        <Text style={styles.instructions}>Kelas : XI RPL 3</Text>
        <Image source={require('../fotoku.jpg')} style={{width: 200, height: 200}}/>     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
