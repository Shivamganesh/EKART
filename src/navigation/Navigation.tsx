import React, {FC} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Splash from '@modules/onboard'
import Home from '@modules/home'
import { navigationRef } from './NavigationUtils'
import MainNavigator from './MainNavigator'
import Products from '@modules/products'
import Cart from '@modules/cart'
import PaymentSuccess from '@modules/payment_success'
import ARViewer from '@modules/ar_viewer'
import Account from '@modules/account'


const Stack = createNativeStackNavigator()

const Navigation:FC = ()=>{
    return(
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator
            screenOptions={{
                headerShown:false
            }}
            initialRouteName='Splash'
            >
                <Stack.Screen name='Splash' component={Splash} />
                <Stack.Screen name='MainNavigator' component={MainNavigator} />
                <Stack.Screen name='Products' component={Products} />
                <Stack.Screen name='Cart' component={Cart} />
                <Stack.Screen name='Account' component={Account} />
                <Stack.Screen name='ARViewer' component={ARViewer} />
                <Stack.Screen name='PaymentSuccess' component={PaymentSuccess} />


            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation