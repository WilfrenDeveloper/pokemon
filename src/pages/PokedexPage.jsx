import { useSelector } from "react-redux"
import useFetch from "../hooks/userFetch"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../components/PokedexPage/PokeCard"
import SelectType from "../components/PokedexPage/SelectType"
import '../styles/PokedexPage.css'


const PokedexPage = () => {
  const trainerName = useSelector(store => store.trainerName)
  const [inputValue, setInputValue] = useState('')
  const [selectValue, setSelectValue] = useState('allPokemons')
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'
  const [pokemons, getPokemons, getByTypePokemons] = useFetch(url)
  useEffect(() => {
    if (selectValue === 'allPokemons') {
      getPokemons()
    }
    else {
      getByTypePokemons(selectValue)

    }

  }, [selectValue])
  const inputSearch = useRef()
  const handleSubmit = e => {
    e.preventDefault()//para que no recargue en automatico
    setInputValue(inputSearch.current.value.toLowerCase().trim())
    inputSearch.current.value = ''
  }
  const cbFilter = poke => {
    //filto por nombre ebn el input
    const nameFiltered = poke.name.includes(inputValue)

    return nameFiltered
  }


  return (
    <div className="pokedex__container">
      <p className="pokedex__p">Welcome <span className="pokedex__span">{trainerName}</span>, here you can find your favorite pokemon. Let's go!</p>
      <form className="pokedex__form" onSubmit={handleSubmit} action="">
        <input className="pokedex__input" ref={inputSearch} type="text" placeholder="Search one pokemon"/>
        <button className="pokedex__button">Search</button>
      </form>
      <SelectType
        setSelectValue={setSelectValue}
      />
      <div className="pokedex__container--div">
        {
          pokemons?.results.filter(cbFilter).map(poke => (
            <PokeCard
              key={poke.url}
              url={poke.url}
            />
          ))
        }
      </div>
    </div>
  )
}

export default PokedexPage