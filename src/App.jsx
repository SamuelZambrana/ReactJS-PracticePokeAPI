import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import CreatePokemonPage from './pages/CreatePokemonPage'
import DetailsPokemonPage from './pages/DetailsPokemonPage'
import FavouritePokemonComponent from './components/FavouritePokemonComponent'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/create' element={<CreatePokemonPage />} />
        <Route path='/detailsPokemon/:id' element={<DetailsPokemonPage />} />
        <Route path='/favouritePokemon' element={<FavouritePokemonComponent />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
