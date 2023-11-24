import { useEffect, useRef } from "react"
import useFetch from "../../hooks/userFetch"
import '../../styles/SelectType.css'


const SelectType = ({ setSelectValue, forPage, setForPage }) => {
    const url = 'https://pokeapi.co/api/v2/type'

    const [infoTypes, getInfoTypes] = useFetch(url)
    useEffect(() => {
        getInfoTypes()
    }, [])

    const selectElement = useRef()

    const handleChange = () => {
        setSelectValue(selectElement.current.value)
    }

    const totalCards = [3, 4, 5, 6, 9, 10, 12, 15, 20]

    const selectNum = useRef()

    const handleCard = () => {
        setForPage(selectNum.current.value)
    }

    return (
        <div className="select__container">
            <select className="select" ref={selectElement} onChange={handleChange}>
                <option className="select__option" value="allPokemons">All pokemons</option>
                {
                    infoTypes?.results.map(type => (
                        <option key={type.url} value={type.url}>{type.name}</option>
                    ))
                }
            </select>
            <div className="cards__div">
                <select className="select select__page" ref={selectNum} onChange={handleCard}>
                    <option className="select__option" value={forPage}>{forPage}</option>
                    {
                        totalCards.map(num => (
                            <option key={num} value={num}>{num}</option>
                        ))
                    }

                </select>
                <span className="select__span">Cards for Page</span>
            </div>
        </div>
    )
}

export default SelectType