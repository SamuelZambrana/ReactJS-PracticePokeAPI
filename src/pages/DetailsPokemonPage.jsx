import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { deletePokemon, getPokemon, modifyPokemon } from '../services/pokeAPIFetch'


function DetailsPokemonPage() {

    const {
        id
    } = useParams()

    const navigate = useNavigate()

    const [pokemon, setPokemon] = useState({})
    const [pokemonInit, setPokemonInit] = useState({})
    const [errorLoad, setErrorLoad] = useState(undefined)
    const [isEdit, setIsEdit] = useState(undefined)

    const load = () => {
        const aux = getPokemon(id)
        setPokemon(aux)
        setPokemonInit(aux)
        if(!aux) {
          setErrorLoad('No hay ningún pokemon con ese id')
        }
    }

    const pokemonHandler = (propName, propValue) => {
        setPokemon({
            ...pokemon,
            [propName]: propValue
        })
    }

    const save = () => {
        modifyPokemon(pokemon)
        setIsEdit(false)
        load()
        goToList()
    }
    
    const cancel = () => {
        setPokemon(pokemonInit)
        setIsEdit(false)
    }

    const deletePokemonEvent = () => {
        deletePokemon(id)
        goToList()
    }
    
    const goToList = () => {
        navigate('/')
    }

    useEffect(() => {
        const aux = getPokemon(id)
        if (!aux) {
            setErrorLoad('No hay ningún Pokémon con ese ID')
        } else {
            setPokemon(aux)
            setPokemonInit(aux)
        }
    }, [id])
    

  return (
    <div style={{
        backgroundColor: '#000',
        color: '#fff',
        minHeight: '100vh',
        padding: '20px',
        fontFamily: 'Arial, sans-serif'
    }}>

    <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>Información del Pokemon- {id}</h1>
    <hr tyle={{ borderColor: '#444' }}/>

    <div style={{
         display: 'flex',
         justifyContent: 'center',
         gap: '20px',
         margin: '40px 0'
    }}>

    <button 
        onClick={() => setIsEdit(true)} 
        disabled={isEdit}
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
      >Editar
    </button>
    <button 
        onClick={deletePokemonEvent}
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
        >Eliminar
    </button>
    <button 
        onClick={goToList}
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
        >Volver
    </button>
      
    </div>
      <hr />
      {
        errorLoad ? (
          <div>{errorLoad}</div>
        ): !pokemon ? (
          <div>Cargando...</div>
        ) : (
          <div>
            <div>
              {
                <img
                    src={pokemon.image}
                    alt={pokemon.name}
                    style={{
                        width: '30rem',
                        height: '30rem',
                        objectFit: 'contain',
                        borderRadius: '1.5rem',
                        boxShadow: '0 10px 25px rgba(155, 155, 155, 5)',
                        padding: '1rem',
                        margin: '1rem auto',
                        display: 'block'
                    }}
                />
              }
            </div>
            <div>
              <span>Nombre: </span>
              {
                isEdit ? ( 
                  <input type="text" placeholder={pokemon.name} onChange={(e) => pokemonHandler('name', e.target.value)}/>
                ) : (
                  <span>{pokemon.name}</span>
                )
              }
            </div>
            <div>
              <span>Url: </span>
              {
                isEdit ? (
                  <input type="text" disabled placeholder={pokemon.url} onChange={(e) => pokemonHandler('url', e.target.value)}/>
                ) : ( 
                  <span>{pokemon.url}</span>
                )
              }
            </div>
            <div>
              <span>Height: </span>
              {
                isEdit ? (
                  <input type="text" disabled placeholder={pokemon.height} onChange={(e) => pokemonHandler('height', e.target.value)} />
                ): ( 
                  <span>{pokemon.height}</span>
                )
              }
            </div>
            <div>
              <span>Weight: </span>
              {
                isEdit ? (
                  <input type="text" disabled placeholder={pokemon.weight} onChange={(e) => pokemonHandler('weight', e.target.value)}/>
                ) :( 
                  <span>{pokemon.weight}</span>
                )
              }
            </div>
            <div>
              <span>Type: </span>
              {
                isEdit ? ( 
                  <input type="text" disabled value={pokemon.type} onChange={(e) => pokemonHandler('type', e.target.value)}/>
                ) : (
                  <span>{pokemon.type}</span>
                )
              }
            </div>
            {
              isEdit && (
                <div>
                  <button 
                    onClick={save}
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
                    >Guardar
                  </button>
                  <button 
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
                    >Cancelar
                  </button>
                </div>
              )
            }
          </div>
        )
      }
    </div>
  )
}

export default DetailsPokemonPage
