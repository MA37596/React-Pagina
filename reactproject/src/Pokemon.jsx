import { useState, useEffect } from 'react'
import styles from './Pokemon.module.css'

export function Pokemon() {
    const [pokemon, setPokemon] = useState(null)
    const [error, setError] = useState(null)
    const [pokemonId, setPokemonId] = useState(254) 
    const getRandomPokemon = () => {
        const randomId = Math.floor(Math.random() * 898) + 1
        setPokemonId(randomId)
    }
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Pokemon kon niet worden geladen')
                }
                return response.json()
            })
            .then(data => {
                setPokemon(data)
                setError(null)
            })
            .catch(err => {
                setError(err.message)
            })
    }, [pokemonId]) 
    if (error) {
        return (
            <section className={styles.pokemon}>
                <h2>Er is iets misgegaan</h2>
                <p>{error}</p>
                <button onClick={getRandomPokemon} className={styles.button}>
                    Probeer een andere Pokemon
                </button>
            </section>
        )
    }
    if (pokemon === null) {
        return (
            <section className={styles.pokemon}>
                <h2>Pokemon laden...</h2>
            </section>
        )
    }
    return (
        <section className={styles.pokemon}>
            <h2 className={styles.name}>{pokemon.name}</h2>
            <img 
                src={pokemon.sprites.front_default} 
                alt={`${pokemon.name} sprite`}
            />
            <button onClick={getRandomPokemon} className={styles.button}>
                Laad een andere Pokemon
            </button>
        </section>
    )
}
