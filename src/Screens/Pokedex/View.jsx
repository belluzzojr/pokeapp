import React, { useState } from 'react';
import { View , Image, TextInput } from 'react-native'

export default function PokedexView( {styles, PokemonList} ){

    const [value, onChangeValue] = useState("Search Pokemon")

    return (
            <View style={styles.container}>
                <View style={styles.toppokedex}>
                    <Image
                    source={require('../../../assets/utils/logo.png')}
                    style={styles.logo}/>
                    <TextInput
                    style={styles.search}
                    value={value}
                    />
                </View>
                <PokemonList/>
            </View>
    )
}