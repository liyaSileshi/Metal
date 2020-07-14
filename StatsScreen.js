import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import metal from './metal.json'
import { acc } from 'react-native-reanimated';

export default function StatsScreen() {
  let uniqueCountries = new Set(); //to hold all unique countries
  let metalObj = metal.reduce((acc, item) => {
    uniqueCountries.add(item.origin)
    acc.fans += parseInt(item.fans)
    acc.count += 1
    acc.countries = uniqueCountries.size
    if (item.split === '-') {
      acc.active += 1
    }

    return acc
  }, {count: 0, fans: 0, countries: 0, active: 0})
  

  return (
    <View style={styles.metal}>
      <Text style={styles.main}>METAL 🤘</Text>
      <Text style={styles.text}>Count: {metalObj.count}</Text>
      <Text style={styles.text}>Fans: {(metalObj.fans*1000).toLocaleString()}</Text>
      <Text style={styles.text}>Countries: {metalObj.countries}</Text>
      <Text style={styles.text}>Active: {metalObj.active}</Text>
      <Text style={styles.text}>Split: {metalObj.count - metalObj.active}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  metal : { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: 'black'
  },
  text: {
    fontSize: 25,
    color: '#fff',
    borderColor: 'white'
  },
  main: {
    fontSize: 40,
    color: '#fff',
    borderColor: 'white'
  }
})
