import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { BulbasaurPic } from '../components';
import { Link } from 'react-router-dom'
import styles from './pokemons.module.css'
import { fetchPokemons } from '../api/fetchPokemons';

const Pokemons = () => {
  const [query, setQuery] = useState("")
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    const fetchAllPokemons = async () => {
      const allPokemons = await fetchPokemons();
      setPokemons(allPokemons)
    }
    fetchAllPokemons();
  }, []);

  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <main>
        <nav className={styles.nav}>
          {pokemons?.slice(0, 151).map((pokemon) => (
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