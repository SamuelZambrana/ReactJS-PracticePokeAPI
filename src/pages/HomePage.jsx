import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { addToFavorites, getAllPokemon } from '../services/pokeAPIFetch'


function HomePage() {

    const navigate = useNavigate()
    const [pokemons, setPokemons] = useState(undefined)

    const load = () => {
        const aux = getAllPokemon()
        setPokemons(aux)
    }

    const goToCreatePokemon = () => {
        navigate('/create')
    }

     const goToContact= () => {
        navigate('/contact')
    }

    const goToDetailsPokemon = (id) => {
        navigate(`/detailsPokemon/${id}`)
    }

    const goToFavouritePokemon = (pokemon) => {
        addToFavorites(pokemon);
        navigate('/favouritePokemon');
    };
    

    useEffect(() => {
        load()
    }, [])


  return (

    <div style={{
        backgroundColor: '#000',
        color: '#fff',
        minHeight: '100vh',
        padding: '20px',
        fontFamily: 'Arial, sans-serif'
    }}>
    <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>Lista PokeAPI</h1>
    <hr style={{ borderColor: '#444' }} />

    <div style={{
         display: 'flex',
         justifyContent: 'center',
         gap: '20px',
         margin: '40px 0'
    }}>

    <button
        onClick={goToCreatePokemon}
        style={{
        padding: '12px 28px',
        fontSize: '16px',
        backgroundColor: '#61dafb',
        border: 'none',
        borderRadius: '8px',
        color: '#000',
        fontWeight: 'bold',
        boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
        cursor: 'pointer',
        transition: 'all 0.3s ease'
      }}
      onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
      onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      Añadir Pokémon
    </button>

    <button
      onClick={goToContact}
      style={{
        padding: '12px 28px',
        fontSize: '16px',
        backgroundColor: '#61dafb',
        border: 'none',
        borderRadius: '8px',
        color: '#000',
        fontWeight: 'bold',
        boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
        cursor: 'pointer',
        transition: 'all 0.3s ease'
      }}
      onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
      onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      Contacto
    </button>
  </div>
  <hr style={{ borderColor: '#444' }} />
      {!pokemons ? (
        <div>Cargando...</div>
      ) : pokemons.length === 0 ? (
        <div>No hay ningún Pokémon</div>
      ) : (
        pokemons.map((s, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 10,
              padding: '10px 0',
              borderBottom: '1px solid #ccc'
            }}
          >
            <img
              src={s.image}
              alt={s.name}
              style={{ width: '60px', height: '60px', objectFit: 'contain' }}
            />
            <span>{s._id}</span>
            <span style={{ textTransform: 'capitalize' }}>{s.name}</span>
            <span>{s.url}</span>
            <button 
                style={{
                marginTop: '30px',
                padding: '12px 24px',
                fontSize: '16px',
                backgroundColor: '#61dafb',
                border: 'none',
                borderRadius: '6px',
                color: '#000',
                cursor: 'pointer',
                transition: 'transform 0.2s ease'
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                onClick={() => goToDetailsPokemon(s._id)}>
                Ver info
            </button>
            <button 
                style={{
                marginTop: '30px',
                padding: '12px 24px',
                fontSize: '16px',
                backgroundColor: '#FFEB3B',
                border: 'none',
                borderRadius: '6px',
                color: '#000',
                cursor: 'pointer',
                transition: 'transform 0.2s ease'
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            onClick={() => goToFavouritePokemon(s)}>
                Añadir a Favoritos
            </button>

          </div>
        ))
      )}    
    </div>
  )
}

export default HomePage
