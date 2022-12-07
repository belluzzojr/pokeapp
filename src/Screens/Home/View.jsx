import React from 'react';
import { View , Image, Text, TouchableOpacity } from 'react-native'

export default function HomeView({ styles, goPokedex }){

    return (
            <View style={styles.container}>
                <View>
                    <Image
                    source={require('../../../assets/utils/logo.png')}
                    style={styles.logo}/>
                </View>
                <View>
                <Image
                    source={require('../../../assets/utils/mew.png')}
                    style={styles.mew}/>
                </View>
                <View style={styles.pokedex}>
                    <Image
                    source={require('../../../assets/utils/pokedex.png')}
                    style={styles.pokedeximg}/>
                    <TouchableOpacity onPress={goPokedex}>
                        <View style={styles.openpokedex}>
                            <Text style={styles.textpokedex}>OPEN POKEDEX</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
    )
}