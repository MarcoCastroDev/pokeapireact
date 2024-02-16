import { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import { PokemonPic, Footer, LoadingScreen } from "./index";
import styles from './pokemon.module.css'
import { fetchPokemon } from '../api/fetchPokemon';
import { PokemonDetails } from '../types/types';
import { waitFor } from '../utils/utils';

const Pokemon = () => {
  const [pokemon, setPokemon] = useState<PokemonDetails>();
  const [isLoading, setIsLoading] = useState(false);
  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function getPokemon() {
      setIsLoading(true);
      await waitFor(500)
      const fetchedPokemon = await fetchPokemon(name as string);
      setPokemon(fetchedPokemon);
      setIsLoading(false);
    }
    getPokemon();
  }, [name]);

  if (isLoading || !pokemon) {
    return <LoadingScreen />
  }

  return (
    <>
      <button className={styles.pokeballButton} onClick={() => navigate(-1)}>
        <img className={styles.pokeballImg} src={PokemonPic} alt="Pokeball" /> {" "} Go Back
      </button>
      <div className={styles.pokemon}>
          <main className={styles.pokemonInfo}>
            <div className={styles.pokemonTitle}>{pokemon?.name?.toUpperCase()}</div>
            <div>No. {pokemon?.id}</div>
            <div>
              <img className={styles.pokemonInfoImg} src={pokemon?.imgSrc} alt={name} />
            </div>
            <div>HP: {pokemon?.hp}</div>
            <div>Attack: {pokemon?.attack}</div>
            <div>Defense: {pokemon?.defense}</div>
          </main>
      </div>
      <Footer />
    </>
  )
}

export default Pokemon
