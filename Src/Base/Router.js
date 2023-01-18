import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import AnaSayfa from '../Pages/Home/AnaSayfa'
import Profile from '../Pages/Profile/Profile'
import Register from '../Pages/Auth/Register'
import Login from '../Pages/Auth/Login'

const Stack = createNativeStackNavigator();

function Router () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown : false }} name = "Profile" component={Profile} />
        <Stack.Screen options={{ headerShown : false }} name = "AnaSayfa" component={AnaSayfa} />
        <Stack.Screen options={{ headerShown : false }} name = "Login" component={Login} />
        <Stack.Screen options={{ headerShown : false }} name = "Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
    )
}

export default Router;