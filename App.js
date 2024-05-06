import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './Screens/Login';
import Signin from './Screens/Signin';
import OTP from './Screens/OTP';
import HomePage from './Screens/HomePage';

const  stack = createNativeStackNavigator()

export default function App() {
  return (
   <NavigationContainer initialRouteName="Signin">
    <stack.Navigator>
      <stack.Screen name="LogIn" component={Login}/>
      <stack.Screen name="Sign Up" component={Signin}/>
      <stack.Screen name="OTP" component={OTP}/>
      <stack.Screen name="Home Page" component={HomePage}/>
    </stack.Navigator>
   </NavigationContainer>
  );
}

