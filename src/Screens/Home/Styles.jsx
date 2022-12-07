import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#D6DBDE',
        alignItems: 'center',
    },
    logo:{
        marginTop: 80,
    },
    mew:{
        transform: [{translateY: 100}, {translateX: 20}],
        zIndex: 1
    },
    pokedex:{
        flexDirection: 'column',
        alignItems: 'center',

        width: '100%',
        height: '100%',
        backgroundColor: '#24272E',
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        borderWidth: 0.8
    },
    pokedeximg:{
        marginTop: 80,
    },
    openpokedex:{
        width: 192,
        height: 41,

        backgroundColor: 'white',
        borderRadius: 12,
        borderWidth: 0.8,
        transform: [{translateY: -30}]
    },
    textpokedex:{
        marginTop: 10,

        textAlign: "center",
        color: '#1E1E1E',

        fontWeight: '500',
        letterSpacing: 0.8
    },
})