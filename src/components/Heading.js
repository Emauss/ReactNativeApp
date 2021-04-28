import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';



function Heading({children, props}) {
  return (
    <View>
        <Text {...props} style={style.text}>{children}</Text>
    </View>
  );
}

const style = StyleSheet.create({

  text: {
    fontSize: 32,
    color: 'black',
    flex: 1,
    paddingTop: 80,
    margin: 'auto',
    marginBottom: 15,
  }

})


export default Heading;