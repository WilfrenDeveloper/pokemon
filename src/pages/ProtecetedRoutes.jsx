import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import '../styles/ProtectedRoutes.css'


const ProtecetedRoutes = () => {
  const trainerName = useSelector(store => store.trainerName)
  if (trainerName.length > 3) {
    return (
      <>
        <figure className='protected__figure'>
          <img className='protected__logo' src="/pokedex-logo.png" alt="pokedex logo" />
          <span className='protected__span'></span>
        </figure>
        <Outlet />
        <p className='protected__copy'>
          <i class='bx bx-copyright' ></i> Wilfren Quintero / Academlo's student
        </p>
      </>
    )
  }
  else {
    return <Navigate to='/' />
  }
}

export default ProtecetedRoutes