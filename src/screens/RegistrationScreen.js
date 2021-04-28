import * as React from 'react';
import { Text, View, StyleSheet  } from 'react-native';
import Heading from '../components/Heading'
import Input from '../components/input'
import FilledButton from '../components/FilledButton'
import TextButton from '../components/TextButton';
import Error from '../components/Error'


function RegistrationScreen() {
  return (
    <View style={styles.container}>
        <Heading>Registration</Heading>
        <Error error={''}></Error>
        <Input 
          placeholder={'Email'}
          keyboardType={'email-address'}
        />
        <Input 
          placeholder={'Hasło'}
          secureTextEntry
        />

        <FilledButton title={'Register'}  style={styles.loginButton} onPress={() => {}}/>

        <TextButton title={'Have you an account? Create one'} onPress={() => {}} />
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    alignItems: 'center'
  },

  loginButton:{
    marginTop: 16,
  }
})

export default RegistrationScreen;