import React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PhotoFeed from './components/PhotoFeed';
import ViewPhoto from './components/ViewPhoto'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Photo Feed">
        <Stack.Screen name="Photo Feed">
          {(props) => <PhotoFeed {...props} />}
        </Stack.Screen>
        <Stack.Screen name="View Photo">
          {(props) => <ViewPhoto {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}