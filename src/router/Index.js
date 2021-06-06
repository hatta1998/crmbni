import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import  Home from '../pages/Home/Index'
import  KPI from '../pages/KPI/Index'
import  DPK from '../pages/DPK/Index'



const Stack = createStackNavigator();

const Router = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="KPI" component={KPI} />
        <Stack.Screen name="DPK" component={DPK} />
      </Stack.Navigator>
    
    )
}

export default Router