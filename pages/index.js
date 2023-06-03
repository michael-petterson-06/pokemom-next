import styles from "../styles/Home.module.css";

export async function getStaticProps() {
  const maxPokemons = 251;
  const api = `https://pokeapi.co/api/v2/pokemon/`;
  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  //Adicionar um indice no Pokemom
  data.results.forEach((item, index) => {
    item.id = index + 1;
  });


  return {
    props: {
      pokemons: data.results,
    },
  }

}
export default function Home({ pokemons }) {
  return (
    <div>
      <h1>Pokemons</h1>
      <ul>
          {pokemons.map((pokemom) => (
            <li key={pokemom.id}>{pokemom.name}</li>
          ))}
      </ul>
    </div>
  ) 
}
