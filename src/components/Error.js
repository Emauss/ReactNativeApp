import * as React from 'react';
import { Text, View, StyleSheet  } from 'react-native';


function Error({error}) {
  return (
  <View style={styles.container}>
     <Text style={styles.text}>{error}</Text>
  </View>

  );
}

const styles = StyleSheet.create({
  
    text: {
      marginTop: 20,
      color: 'red',
      fontWeight: '700',
      fontSize: 14,
    },

    container: {
        paddingVertical: 12,
    },
});

export default Error;