// https://unpkg.com/pokemons@1.1.0/pokemons.json

export async function fetchPokemons() {
    const response = await fetch("https://unpkg.com/pokemons@1.1.0/pokemons.json");

    if (!response.ok) {
        throw new Error("Failed to fetch pokemons");        
    }

    const results = await response.json();
    console.log(results);

    const pokemons = results.map((pokemon:any) => ({
        name : pokemon.name,
        id: pokemon.national_number,
        imgSrc: `https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name}.gif`,
    }));
    
}