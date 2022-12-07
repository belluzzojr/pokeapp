import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    /* Header */
    container:{
        flex: 1,
        backgroundColor: '#24272E',
        alignItems: 'center',
    },
    toppokedex:{
        alignItems: 'center',

        width: '100%',
        height: 238,
        backgroundColor: '#24272E'
    },
    logo:{
        marginTop: 50,
    },
    search:{
        marginTop: 15,

        width: 228,
        height: 42,
        borderRadius: 30,
        borderWidth: 0.8,

        backgroundColor: 'white',

        textAlign: 'center',

        color: '#838282',
        fontWeight: '400',
        fontSize: 14,
    },
    /* PokeList */
    pokedexlist:{
        flex: 2,
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        backgroundColor: '#D9D9D9',

        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        borderWidth: 0.8
        
    },
    pokemon:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

        width: 162,
        height: 157,

        marginTop: 50,
        marginLeft: '5.5%',
        marginBottom: 10,

        backgroundColor: '#24272E',
        borderRadius: 37,
        borderWidth: 0.8
    },
    imgpokemon:{
        transform: [{translateY: -70}],
        position: 'absolute',
        width: 120,
        height: 120
    },
    info:{
        marginTop: 10,

        fontWeight: '800',
        fontSize: 13.5,
        color: 'white',
    },
    configinfo:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',

        justifyContent: 'space-around'
    },
    goinfo:{
        transform: [{translateY: 40}],
        position: 'absolute',
    },
})