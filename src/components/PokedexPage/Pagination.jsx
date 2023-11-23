import React, { useRef } from 'react'
import '../../styles/Pagination.css'

const Pagination = ({ page, setPage, max, pokemons, forPage }) => {

    const total = Math.ceil(pokemons/ forPage);
    const pageInput = useRef()


    const handlePrevious = () => {

        if(pageInput.current.value > 1){
            setPage(page - 1)
        }
        
    }

    const handleNext = () => {

        if (pageInput.current.value < total) {
            setPage(page + 1)
        }
    }

    console.log(pokemons);
    console.log(total);


    return (
        <div className='pagination__div'>
            <button className='pagination__button' onClick={handlePrevious}><i className='bx bxs-left-arrow'></i></button>
            <p className='pagination__p'>page</p>
            <input className='pagination__input' autoComplete='off' type="number" ref={pageInput} value={page} />
            <p className='pagination__p'>of {total}</p>
            <button className='pagination__button' onClick={handleNext}><i className='bx bxs-right-arrow' ></i></button>

        </div>
    )
}

export default Pagination