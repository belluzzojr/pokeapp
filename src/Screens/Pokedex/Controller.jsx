import React, { useContext, useEffect, useState } from 'react';
import PokedexView from './View'
import { FlatList, View, Image, Text, TouchableOpacity, Modal } from 'react-native';
import { styles } from './Styles';
import { AntDesign } from '@expo/vector-icons'; 

import { PokeContext } from '../../Global/Context';


export default function PokedexController(){

    const context = useContext(PokeContext)

    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon', {
            mathod: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            setPokemons(data.results)
        })
    }, [])

    const PokemonList = () => {

        return(
                <View style={styles.pokedexlist}>
                <FlatList
                    numColumns={2}
                    keyExtractor={ (pokemon) => pokemon.name}
                    data={pokemons}
                    contentContainerStyle={{ flexGrow: 1}}
                    renderItem={PokemonShow}
                />
                </View>
        )
    }

    const  PokemonShow = (item) => {

            const { name, url} = item.item

            const id = url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '')

            const pokeNumber = url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '')
            const imgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'+ pokeNumber + '.png'

            const modal = () => {
                setModalView(true)
            }
            
            return (
            <View style={styles.pokemon}>
                <Image
                    style={styles.imgpokemon}
                    source={{
                        uri: imgUrl
                    }}
                />
                    <View style={styles.configinfo}>
                    <Text style={styles.info}>#0{id}</Text>
                    <Text style={styles.info}>{name.toUpperCase()}</Text>
                    </View>
                <TouchableOpacity style={styles.goinfo} onPress={modal}>
                    <AntDesign name="infocirlceo" size={22} color="white" />
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <PokedexView
        styles={styles}
        PokemonList={PokemonList}/>
    )
}