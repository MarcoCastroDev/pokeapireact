import { useEffect, useState } from 'react'
import Header from '../components/Header'

const Pokemons = () => {
  const [query, setQuery] = useState("")

  return (
    <>
      <Header query = { query } setQuery= { setQuery } />
      <main>
        <h1>Pokemons</h1>
      </main>
      <footer>Footer</footer>
    </>
  )
}

export default Pokemons