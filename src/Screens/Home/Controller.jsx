import React from 'react';
import HomeView from './View'
import { styles } from './Styles';
import { useNavigation } from '@react-navigation/native';

export default function HomeController(){

    const nav = useNavigation();

    const goPokedex = () => {
        nav.navigate('pokedex')
    }

    return (
        <HomeView
        styles={styles}
        goPokedex={goPokedex}/>
    )
}