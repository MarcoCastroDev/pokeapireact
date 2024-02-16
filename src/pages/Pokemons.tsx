import { useEffect, useState } from 'react'
import { Header, Footer, LoadingScreen } from '../components'
import { Link } from 'react-router-dom'
import styles from './pokemons.module.css'
import { fetchPokemons } from '../api/fetchPokemons';
import { waitFor } from '../utils/utils';
import { Pokemon } from '../types/types';

const Pokemons = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("")
  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  useEffect(() => {
    const fetchAllPokemons = async () => {
      setIsLoading(true);
      await waitFor(1000)
      const allPokemons = await fetchPokemons();
      setPokemons(allPokemons);
      setIsLoading(false);
    }
    fetchAllPokemons();
  }, []);

  if (isLoading || !pokemons) {
    return <LoadingScreen />
  }

  const filteredPokemons = pokemons?.slice(0, 151).filter((pokemon) =>{
    return pokemon.name.toLowerCase().match(query.toLowerCase());
  })

  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <main>
        <nav className={styles.nav}>
          {filteredPokemons?.slice(0, 151).map((pokemon) => (
          <Link key={pokemon.id} to={`/pokemons/${pokemon.name.toLowerCase()}`} className={styles.listItem}>
            <img src={pokemon.imgSrc} alt={pokemon.name} className={styles.listItemIcon} />
            <div className={styles.listItemText}>
              <span>{pokemon.name}</span>
              <span>{pokemon.id}</span>
            </div>
          </Link>
          ))}
        </nav>
      </main>
      <Footer />
    </>
  )
}

export default Pokemons