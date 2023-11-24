import React, { useRef } from 'react'
import '../../styles/Pagination.css'

const Pagination = ({ page, setPage, pokemons, forPage }) => {

    const total = Math.ceil(pokemons/ forPage);
    const pageInput = useRef()


    const handlePrevious = () => {

        if(page > 1){
            setPage(page - 1)
        }
        
    }

    const handleNext = () => {

        if (page < total) {
            setPage(page + 1)
        }
    }

    const handleChange = e => {
        if(e.target.value >= 1 && e.target.value <= total) {
            setPage(e.target.value)
        }
    }


    return (
        <div className='pagination__div'>
            <button className='pagination__button' onClick={handlePrevious}><i className='bx bxs-left-arrow'></i></button>
            <p className='pagination__p'>page</p>
            <span className='pagination__input' ref={pageInput}>{page}</span>
            <p className='pagination__p'>of {total}</p>
            <button className='pagination__button' onClick={handleNext}><i className='bx bxs-right-arrow' ></i></button>
        </div>
    )
}

export default Pagination