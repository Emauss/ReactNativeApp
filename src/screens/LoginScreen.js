import * as React from 'react';
import { Text, View, StyleSheet  } from 'react-native';
import Heading from '../components/Heading'
import Input from '../components/Input'
import FilledButton from '../components/FilledButton'
import TextButton from '../components/TextButton';
import Error from '../components/Error'
import { AuthContext } from '../contexts/AuthContext';


function LoginScreen({navigation}) {

    /* const {login} = React.useContext(AuthContext);
    const [email, setEmail] = React.useState('qwerty@wp.pl');
    const [password, setPassword] = React.useState('123'); */

  return (
    <View style={styles.container}>
        <Heading>Login Screen</Heading>
        <Error error={''}></Error>
        <Input 
          placeholder={'Email'}
          keyboardType={'email-address'}
          //value={email}
          //onChangeText={setEmail}
        />
        <Input 
          placeholder={'Hasło'}
          secureTextEntry
          //value={password}
          //onChangeText={setPassword}
        />

        <FilledButton title={'Login'}  style={styles.loginButton} onPress={() => {
          //login(email, password);
          
        }}/>

        <TextButton title={'Have you an account? Create one'} onPress={() => {
          navigation.navigate('Registration');
        }} />
        
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

export default LoginScreen;