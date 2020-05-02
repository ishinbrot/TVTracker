import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home';
import ShowOverview from '../screens/ShowOverview'
//import AddShow from '../screens/AddShow';

const Stack = createStackNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
          headerStyle: {
              backgroundColor: '#0000ff',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
              fontWeight: 'bold'
          }
      }} initialRouteName="Home">
        <Stack.Screen
        name="Home"
        component={Home}
        options={({ route }) => ({ title: 'TV Tracker',
         headerTitleAlign: 'center'
         })}
      />
        <Stack.Screen
        name="ShowOverview"
        component={ShowOverview}
        options={({ route }) => ({ title: route.params.name })}
      />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator;