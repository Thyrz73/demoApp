/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const App = () => {
  
  const [number, setNumber] = useState(0)

  const onClickButton = () => {
    setNumber(number +1 )
  }


  return (
    <View style={styles.body}>
      <Text style={styles.Texte}>Application de comptage de clic</Text>
      <Text style={styles.Texte}>{number}</Text>
      <Button style={styles.Button} title='Increase count' onPress={onClickButton} color="#00ff00" ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#0000ff",
    alignItems:'center',
    justifyContent: 'center',
    flex:1,
    borderWidth:0
  },

  Texte:{
    color: Colors.white,
    fontSize:20,
    margin: 5
  },
  Button: {
    paddingTop: 10,
    
  }
});

export default App;
