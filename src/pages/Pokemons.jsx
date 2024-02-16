import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { BulbasaurPic } from '../components';
import { Link } from 'react-router-dom'
import styles from './pokemons.module.css'

const Pokemons = () => {
  const [query, setQuery] = useState("")

  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <main>
        <nav>
          <Link to="/" className={styles.listItem}>
            <img src={BulbasaurPic} alt="Bulbasaur" className={styles.listItemIcon} />
            <div className={styles.listItemText}>
              <span>Bulbasaur</span>
              <span>001</span>
            </div>
          </Link>
        </nav>
      </main>
      <Footer />
    </>
  )
}

export default Pokemons