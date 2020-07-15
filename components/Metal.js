import * as React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';

export default function Metal({name, fans, formed, origin, split}) {
  return (
    <View style={styles.metal}>
      <View>
        <Text style={split === '-' ? styles.text : styles.split}>{name}</Text>
        <Text style={styles.text}>{formed}</Text> 
      </View>
      <View style={styles.right}>
        <Text style={styles.origin}>{origin}</Text>
        <Text style={styles.text}>{(parseInt(fans)*1000).toLocaleString()}</Text>
      </View>
  </View>
  );
}


const styles = StyleSheet.create({
  metal : { 
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#000',
    borderColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    padding: 10
  },
  text: {
    fontSize: 25,
    color: '#fff',
  },
  origin : {
    fontSize: 25,
    color: 'grey',
  },
  right : {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
  split: {
    fontSize: 25,
    color: '#666',
    textDecorationLine: 'line-through'
  }

})