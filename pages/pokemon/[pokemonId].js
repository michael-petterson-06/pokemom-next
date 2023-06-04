import Image from 'next/image';
import styles from '../../styles/Pokemon.module.css';

export const getStaticPaths = async() => {
    const maxPokemons = 251;
    const api = `https://pokeapi.co/api/v2/pokemon/`;
    const res = await fetch((`${api}/?limit=${maxPokemons}`));
    const data = await res.json();
    
    // params
    const paths = data.results.map((pokemon, index) => {
        return {
            params: { pokemonId: index.toString()},
       }
    })
    console.log('1')
    return {
        paths,
        fallback: false,
     }
     
}

export const getStaticProps = async(context) => {
    console.log('2')
    const id = context.params.pokemonId;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await res.json();
    return {
        props: { pokemon: data},
    }
}

export default function Pokemon({pokemon}) {
    return(
        
        <div>
            <h1>{ pokemon.name}</h1>
            <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                width="400"
                height="400"
                alt={pokemon.name}
            />
            <div>
                <h3>Número:</h3>
                <p>#{ pokemon.id }</p>
            </div>
            <div>
                <h3>Tipo:</h3>
                <div>
                    {pokemon.types.map((item, index ) => (
                         <span key={index}>{item.type.name}</span>
                    ))}
                </div>
            </div>
            <div>
                <div>
                    <h4>Altura:</h4>
                    <p>{pokemon.height * 10} cm</p>
                </div>
                <div>
                    <h4>Peso:</h4>
                    <p>{pokemon.weight / 10} kg</p>
                </div>
            </div>
        </div>
    )
}














