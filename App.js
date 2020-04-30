import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomePage from './src/pages/HomePage';
import DetailPage from './src/pages/DetailPage';

const Stack = createStackNavigator();

const App = ()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomePage" component={HomePage} options={{ title: 'Rick and Morty' }}/>
        <Stack.Screen name="DetailPage" component={DetailPage} options={({ route }) => ({ title: route.params.data.name })}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App