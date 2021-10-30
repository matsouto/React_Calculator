import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Btn from './Components/Button'
import Display from './Components/Display'

export default function App() {

  return (
    <View style={styles.container}>
      <Display value={1}></Display>
      <View style={styles.buttons}>
        <Btn label="AC" light />
        <Btn label="+/-" light />
        <Btn label="/" light />
        <Btn label="<=" orange />
        <Btn label="7" />
        <Btn label="8" />
        <Btn label="9" />
        <Btn label="x" orange />
        <Btn label="4" />
        <Btn label="5" />
        <Btn label="6" />
        <Btn label="-" orange />
        <Btn label="1" />
        <Btn label="2" />
        <Btn label="3" />
        <Btn label="+" orange />
        <Btn label="0" large />
        <Btn label="." />
        <Btn label="=" orange />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },

  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});
