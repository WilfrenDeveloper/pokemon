
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import PokedexPage from './pages/PokedexPage'
import PokeInfoPage from './pages/PokeInfoPage'
import ProtecetedRoutes from './pages/ProtecetedRoutes'

function App() {

  return (
    <div className='app__container'>
      <Routes className="app__routes">
        <Route path='/' element={<HomePage />} />
        <Route element={<ProtecetedRoutes />}>
          <Route path='/pokedex' element={<PokedexPage />} />
          <Route path='/pokedex/:id' element={<PokeInfoPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
