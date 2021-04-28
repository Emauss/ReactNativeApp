import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';


function Input({...props}) {
  return (
    <TextInput {...props} style={[styles.text, styles.input]} />
  );
}

const styles = StyleSheet.create({

  text: {
    fontSize: 20,
    color: 'black',
  },

  input: {
    width: '100%',
    backgroundColor: '#ccc',
    borderWidth: 1,
    borderColor: '#000',
    borderStyle: 'solid',
    borderRadius: 5,
    marginVertical: 8,
    padding: 10,
  }

})


export default Input;