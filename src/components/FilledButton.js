import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity  } from 'react-native';


function FilledButton({title, onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.text}>{title.toUpperCase()}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'purple',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
  },

  text: {
      color: 'white',
      fontWeight: '700',
      fontSize: 18,
  }
})

export default FilledButton;