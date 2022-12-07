import React, { useState } from 'react';
import { View , Image, TextInput } from 'react-native'

export default function PokedexView( {styles, PokemonList} ){


    return (
            <View style={styles.container}>
                <View style={styles.toppokedex}>
                    <Image
                    source={require('../../../assets/utils/logo.png')}
                    style={styles.logo}/>
                </View>
                <PokemonList/>
            </View>
    )
}