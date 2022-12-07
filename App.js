import React, { useContext, useEffect, useState }from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { PokeContextProvider } from './src/Global/Context';
import HomeController from './src/Screens/Home/Controller';
import PokedexController from './src/Screens/Pokedex/Controller';

const Stack = createStackNavigator();

export default function App(){

    return(
        <PokeContextProvider>
            <NavigationContainer>     
                <Stack.Navigator>
                    <Stack.Screen
                    name='home'
                    component={HomeController}
                    options={{
                        headerShown: false
                    }}/>
                    <Stack.Screen
                    name='pokedex'
                    component={PokedexController}
                    options={{
                        headerShown: false
                    }}/>
                </Stack.Navigator>
            </NavigationContainer>
        </PokeContextProvider>
    )
}
