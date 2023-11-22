import React, { useEffect } from 'react'
import useFetch from '../../hooks/userFetch'
import { useNavigate } from 'react-router-dom'
import '../../styles/PokeCard.css'

const PokeCard = ({url}) => {
    const [infoPoke, getInfoPoke]=useFetch(url)

    useEffect(()=>{
        getInfoPoke()
    },[])

    const navigate=useNavigate()
    const handleNavigate =()=> {
        navigate(`/pokedex/${infoPoke.id}`)
    }

    const typePoke = infoPoke?.types[0].type.name
  

  return (
    <article className={`pokecard__article article__${typePoke}`} onClick={handleNavigate}>
        <header className={`pokecard__header header__${typePoke}`}>
            <img className='pokecard__img' src={infoPoke?.sprites.other["official-artwork"].front_default} alt="" />
        </header>
        <section className='pokecard__section'>
            <h3 className={`pokecard__h3 text__${typePoke}`}>{infoPoke?.name}</h3>
            <ul className='pokecard__ul--type'>
                {
                    infoPoke?.types.map(infoType=>(
                        <li className='pokecard__li--type' key={infoType.type.url}>{infoType.type.name}</li>
                    ))
                }
            </ul>
            <p className='pokecard__p'>type</p>
            <ul className='pokecard__ul--stats'>
                {
                    infoPoke?.stats.map(infoStat=>(
                        <li className='pokecard__li--stats' key={infoStat.stat.url}>
                            <span className='pokecard__span--label'>{infoStat.stat.name.toUpperCase()} </span>
                            <span className={`pokecard__span--value text__${typePoke}`}>{infoStat.base_stat}</span>
                        </li>
                    ))
                }
            </ul>
        </section>
    </article>
  )
}

export default PokeCard