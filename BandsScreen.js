import * as React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView,TouchableHighlight, ScrollView } from 'react-native';
import Metal from './components/Metal'
import metal from './metal.json'

export default function BandsScreen() {

  let metalArr = metal.map((metal) => {
    return (
      <Metal key={metal.ID} name={metal.band_name} fans={metal.fans} formed={metal.formed} origin={metal.origin} split={metal.split}/>
    )
  })

  return (
    <View style = {styles.band}>
      
      <SafeAreaView>
        <ScrollView>
          {metalArr}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  band : { 
    backgroundColor: 'black'
  }
})