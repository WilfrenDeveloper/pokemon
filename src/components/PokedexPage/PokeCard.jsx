import React, { useEffect } from 'react'
import useFetch from '../../hooks/userFetch'
import { useNavigate } from 'react-router-dom'

const PokeCard = ({url}) => {
    const [infoPoke, getInfoPoke]=useFetch(url)

    useEffect(()=>{
        getInfoPoke()
    },[])

    const navigate=useNavigate()
    const handleNavigate =()=> {
        navigate(`/pokedex/${infoPoke.id}`)
    }
    
    console.log(infoPoke);

  return (
    <article className='pokecard__article' onClick={handleNavigate}>
        <header className='pokecard__header'>
            <img className='pokecard__img' src={infoPoke?.sprites.other["official-artwork"].front_default} alt="" />
        </header>
        <section className='pokecard__section'>
            <h3 className='pokecard__h3'>{infoPoke?.name}</h3>
            <ul className='pokecard__ul'>
                {
                    infoPoke?.types.map(infoType=>(
                        <li className='pokecard__li' key={infoType.type.url}>{infoType.type.name}</li>
                    ))
                }
            </ul>
            <hr />
            <ul className='pokecard__ul'>
                {
                    infoPoke?.stats.map(infoStat=>(
                        <li className='pokecard__li' key={infoStat.stat.url}>
                            <span className='pokecard__span'>{infoStat.stat.name} </span>
                            <span className='pokecard__span'>{infoStat.base_stat}</span>
                        </li>
                    ))
                }
            </ul>
        </section>
    </article>
  )
}

export default PokeCard