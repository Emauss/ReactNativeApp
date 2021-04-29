import * as React from 'react';
import { Text, View, StyleSheet  } from 'react-native';
import Heading from '../components/Heading'
import Input from '../components/input'
import FilledButton from '../components/FilledButton'
import TextButton from '../components/TextButton';
import Error from '../components/Error'
import { AuthContext } from '../contexts/AuthContext';


function RegistrationScreen({navigation}) {

/* const {register} = React.useContext(AuthContext);
const [email, setEmail] = React.useState('qwerty@wp.pl');
const [password, setPassword] = React.useState('123'); */

  return (
    <View style={styles.container}>
        <Heading>Registration</Heading>
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

        <FilledButton title={'Register'}  style={styles.loginButton} onPress={() => {
            //register(email, password);
        }}/>
        <TextButton title={'Back'} onPress={() => {
          navigation.pop();
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
  },

  backButton: {
    padding: 10,
    backgroundColor: 'purple'
  }
})

export default RegistrationScreen;