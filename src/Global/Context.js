import React, { useState } from 'react'
import { createContext } from 'react'
export const PokeContext = createContext();

export const PokeContextProvider = (props) => {

    const [pokemons, setPokemons] = useState([]);

return (
    <PokeContext.Provider
    value={{

        pokemons,
        setPokemons
    }}
    >
        {props.children}
    </PokeContext.Provider>
)
}