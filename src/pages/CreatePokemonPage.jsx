import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { createPokemon } from '../services/pokeAPIFetch'

const ERROR_MESSAGE = 'Este campo no puede estar vacío'

function CreatePokemonPage() {

  const navigate = useNavigate()
  const [newPokemon, setNewPokemon] = useState({})
  const [errorMessageState, setErrorMessageState] = useState({})


  const pokemonImagesRandon = [
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",   // Squirtle
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",   // Wartortle
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",   // Blastoise
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",  // Caterpie
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",  // Metapod
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",  // Butterfree
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",  // Weedle
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",  // Kakuna
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",  // Beedrill
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png"   // Pidgey
];

 const pokemonHandler = (propName, propValue) => {
  if (propName === 'type') {
    const typeArray = propValue.split(',').map(t => t.trim()).filter(Boolean);
    setNewPokemon(prev => ({ ...prev, type: typeArray }));
  } else {
    setNewPokemon(prev => ({ ...prev, [propName]: propValue }));
  }
};


  const checkFields = () => {

    let isError = false
    let errorMessages = {}
  

    if(!newPokemon.name || newPokemon.name === ''){
      errorMessages = {
        ...errorMessages,
        name: ERROR_MESSAGE
      }
      isError = true
    }
    if(!newPokemon.url || newPokemon.url === ''){
      errorMessages = {
        ...errorMessages,
        url: ERROR_MESSAGE
      }
      isError = true
    }
    if(!newPokemon.height || newPokemon.height === ''){
      errorMessages = {
        ...errorMessages,
        height: ERROR_MESSAGE
      }
      isError = true
    }
    if(!newPokemon.weight || newPokemon.weight === ''){
      errorMessages = {
        ...errorMessages,
        weight: ERROR_MESSAGE
      }
      isError = true
    }
     if(!newPokemon.type || newPokemon.type.length === 0){
      errorMessages = {
        ...errorMessages,
        type: ERROR_MESSAGE
      }
      isError = true
    }
    if (!newPokemon.image || newPokemon.image.trim() === '') {
        errorMessages.image = ERROR_MESSAGE;
        isError = true;
    }
    if(isError) {
      setErrorMessageState(errorMessages)
      return false
    }else {
      return true
    }
  }

  const cancel = () => {
    navigate('/')
  }

  const savePokemon = () => {
      const check = checkFields()
      if(check) {
        createPokemon(newPokemon)
        navigate('/')
      }
  }

const getRandomImage = () => {
  const index = Math.floor(Math.random() * pokemonImagesRandon.length);
  return pokemonImagesRandon[index];
};

  return (
  <div
    style={{
        backgroundColor: '#000',
        color: '#fff',
        minHeight: '100vh',
        padding: '40px 20px',
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }}>

  <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>Añadir Nuevo Pokemon</h1>
  <hr style={{ borderColor: '#444', 
    width: '100%',
    border: 'none',
    borderTop: '1px solid #444',
    margin: '20px 0' }} />

  <form
  style={{
    width: '100%',
    maxWidth: '500px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}
>
  {[
    { label: 'Nombre', name: 'name', value: newPokemon.name },
    { label: 'Url', name: 'url', value: newPokemon.url },
    { label: 'Height', name: 'height', value: newPokemon.height },
    { label: 'Weight', name: 'weight', value: newPokemon.weight },
    { label: 'Tipo', name: 'type', value: newPokemon.type?.join(', ') || '' },
    { label: 'Imagen',  name: 'image', value: newPokemon.image }
  ].map(({ label, name, value }) => (
    <div key={name} style={{ display: 'flex', flexDirection: 'column' }}>
      <label style={{ marginBottom: '5px', fontWeight: 'bold' }}>{label}:</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={(e) => pokemonHandler(name, e.target.value)}
        style={{
          padding: '10px',
          borderRadius: '6px',
          border: '1px solid #ccc',
          backgroundColor: '#222',
          color: '#fff'
        }}
      />
      {typeof errorMessageState === 'object' && errorMessageState[name] && (
        <span style={{ color: '#FF0000', fontSize: '1rem', marginTop: '2px' }}>
          {errorMessageState[name]}
        </span> 
      )}
    </div>
    ))}

    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
      <button
        type="button"
        onClick={savePokemon}
        style={{
          padding: '12px 24px',
          fontSize: '16px',
          backgroundColor: '#61dafb',
          border: 'none',
          borderRadius: '6px',
          color: '#000',
          cursor: 'pointer',
          fontWeight: 'bold',
          transition: 'all 0.3s ease'
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        Guardar
      </button>
      <button
        type="button"
        onClick={() =>
          setNewPokemon(prev => ({
            ...prev,
            image: getRandomImage()
          }))
        }
        style={{
          padding: '12px 24px',
          fontSize: '16px',
          backgroundColor: '#61dafb',
          border: 'none',
          borderRadius: '6px',
          color: '#000',
          cursor: 'pointer',
          fontWeight: 'bold',
          transition: 'all 0.3s ease'
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
        Asignar imagen aleatoria
      </button>
      <button
        type="button"
        onClick={cancel}
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
        Cancelar
      </button>
    </div>
  </form>
</div>
  )
}

export default CreatePokemonPage
