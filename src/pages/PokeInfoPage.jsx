import { useParams } from "react-router-dom"
import useFetch from "../hooks/userFetch"
import { useEffect } from "react"
import '../styles/PokeInfoPage.css'
import Stats from "../components/PokeInfoPage/Stats.jsx"

const PokeInfoPage = () => {

  const { id } = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const [pokemon, getPokemons] = useFetch(url)

  useEffect(() => {
    getPokemons()
  }, [])
  console.log(pokemon);
  return (
    <div className="pokeinfo__container">
      <article className="pokeinfo__article">
        <figure className="pokeinfo__figure" style={{background: `var(--${pokemon?.types[0].type.name})`}}>
          <img className="pokeinfo__img" src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
        </figure>

        <h2 className="pokeinfo__h2" style={{color: `var(--b-${pokemon?.types[0].type.name})`}}>
          <span className="pokeinfo__h2--span span__num">#{pokemon?.id}</span>
          <span className="pokeinfo__h2--span span__name">{pokemon?.name}</span>
        </h2>

        <ul className="pokeinfo__ul ul__carac ">
          <li className="pokeinfo__li li__carac">
            <span className="pokeinfo__li--span span__lbl">Weight</span>
            <span className="pokeinfo__li--span span__value">{pokemon?.weight}</span>
          </li>
          <li className="pokeinfo__li li__carac">
            <span className="pokeinfo__li--span span__lbl">Height</span>
            <span className="pokeinfo__li--span span__value">{pokemon?.height}</span>
          </li>
        </ul>

        <div className="pokeinfo__div div__type">
          <ul className="pokeinfo__div--ul ul__type">
            <span className="pokeinfo__ul--span span__type">Type</span>
            {
              pokemon?.types.map(typ => (
                <li className="li__type type__li" style={{backgroundColor: `var(--b-${typ.type.name})`}}>{typ.type.name}</li>
              ))
            }
          </ul>
          <ul className="pokeinfo__div--ul ul__habilities">
            <span className="pokeinfo__ul--span span__habilities">Habilities</span>
            {
              pokemon?.abilities.map(hability => (
                <li className="li__habilities type__li">{hability.ability.name}</li>
              ))
            }
          </ul>
        </div>

        <div className="pokeinfo__div div__stats">
          <h3 className="pokeinfo__h3">Stats</h3>
          <ul className="stats__ul">
            {
              pokemon?.stats.map(sta => 
                <Stats
                key={pokemon.id}
                sta = {sta} 
                />
                )
            }
          </ul>
        </div>

        <div className="pokeinfo__div div__moves">
          <h3 className="pokeinfo__h3">Movements</h3>
          <ul className="moves__ul">
            {
              pokemon?.moves.map(mov => (
                <li className="moves__li">{mov.move.name}</li>
              ))
            }
          </ul>
        </div>

      </article>
    </div>
  )
}

export default PokeInfoPage