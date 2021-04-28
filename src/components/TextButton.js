import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity  } from 'react-native';


function TextButton({title, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
        <Text style={styles.text}>{title.toUpperCase()}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  
    text: {
      marginTop: 20,
      color: 'purple',
      fontWeight: '500',
      fontSize: 14,
  }
})

export default TextButton;