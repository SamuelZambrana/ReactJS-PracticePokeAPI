import React, {useEffect, useState } from 'react'
import { getFavoritePokemon } from '../services/pokeAPIFetch';
import { useNavigate} from 'react-router'

function FavouritePokemonComponent() {


 const navigate = useNavigate()

 const [favorites, setFavorites] = useState([]);


  const volver = () => {
      navigate('/')
  }

  useEffect(() => {
    const favoritesList = getFavoritePokemon();
    if (Array.isArray(favoritesList)) {
      setFavorites(favoritesList);
    } else {
      console.warn('getFavoritePokemon() no devolvió un array.');
    }
  }, []);

  return (
    <div style={{
        backgroundColor: '#000',
        color: '#fff',
        minHeight: '100vh',
        padding: '20px',
        fontFamily: 'Arial, sans-serif'
    }}>

    <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>Mis Pokemon Favoritos</h1>
    <hr style={{ borderColor: '#444' }} />

      {favorites.length > 0 ? (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            overflowX: 'auto',
            padding: '10px 0'
          }}
        >
          {favorites.map((pokemon) => (
            <div
              key={pokemon._id}
              style={{
                backgroundColor: '#FFEB3B',
                borderRadius: '10px',
                padding: '1rem',
                textAlign: 'center',
                minWidth: '180px',
                boxShadow: '0 6px 16px rgba(0,0,0,0.3)',
                flex: '0 0 auto'
              }}
            >
              <img
                src={pokemon.image}
                alt={pokemon.name}
                style={{
                  width: '100px',
                  height: '100px',
                  objectFit: 'contain',
                  display: 'block',
                  margin: '0 auto'
                }}
              />
              <p style={{ marginTop: '10px', fontWeight: 'bold', color: '#000' }}>
                {pokemon.name}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ color: '#ccc', marginTop: '1rem' }}>
          No hay Pokémon en favoritos por ahora.
        </p>
      )}
      <button
        type="button"
        onClick={volver}
        style={{
          padding: '12px 24px',
          fontSize: '16px',
          backgroundColor: '#888',
          border: 'none',
          borderRadius: '6px',
          color: '#fff',
          cursor: 'pointer',
          fontWeight: 'bold',
          transition: 'all 0.3s ease'
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        Volver
      </button>
    </div>
  );
}

export default FavouritePokemonComponent
