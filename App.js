import React from 'react'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import { createStore, combineReducers } from 'redux';
import store from './store/createStore'
import { Provider } from 'react-redux'

import MainStackNavigator from './navigation/MainStackNavigator'


const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

export default function App() {

  return (
  <Provider store={store}>
    <PaperProvider theme={theme}>
      <MainStackNavigator />
    </PaperProvider>
  </Provider>
  )
}