import React from 'react';
import { Button, StyleSheet, Text, View, AppRegistry } from 'react-native';
import 'react-native-gesture-handler';
import  {NavigationContainer}  from '@react-navigation/native';
import  {createStackNavigator}  from '@react-navigation/stack';
import  {createBottomTabNavigator}  from '@react-navigation/bottom-tabs';
import LoginScreen from './screens/LoginScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import AuthStackNavigator from './navigators/AuthStackNavigator';
import { AuthContext } from './contexts/AuthContext';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        
        onPress={() => navigation.push('Details')}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const RootStack = createStackNavigator();
const AuthStack = createStackNavigator();
const Tab = createBottomTabNavigator();


class App extends React.Component {

  constructor(props){
    super(props)
    this.state={
      userEmail: '',
      userPassword: '',
    }
  }

  userRegister = () =>{
    alert('ok');
  }

  /* const auth = React.useMemo( 
    () => ({

      login: (email, password) => {
        console.log('login', email, password);
      },

      logout: () => {
        console.log('logout');
      },

      register: (email, password) => {
        console.log('register', email, password);
      },
    }),
    [],
  ); */


  render (){
    /* <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer> */

    /*
      <Tab.Navigator>
        <Tab.Screen name="Home" component={RegistrationScreen} />
        <Tab.Screen name="Details" component={LoginScreen} />
      </Tab.Navigator>
      */

      return(
        
        <NavigationContainer>
          <RootStack.Navigator 
            screenOptions={{
              headerShown: false,
            }}
          >
            <RootStack.Screen name={'RootStack'} component={AuthStackNavigator} />
          </RootStack.Navigator>
        </NavigationContainer> 

      );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;


