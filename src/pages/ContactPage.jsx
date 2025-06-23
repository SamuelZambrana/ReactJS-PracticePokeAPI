import React from 'react'
import fileImage from '../assets/file.png';
import { useNavigate } from 'react-router'


function ContactPage() {

  const navigate = useNavigate()

  const goToHomePage= () => {
        navigate('/')
    }

  return (
  <div
  style={{
    backgroundColor: '#000',
    color: '#fff',
    minHeight: '100vh',
    padding: '40px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
    lineHeight: 1.6,
    textAlign: 'center'
  }}
>
  <img
    src={fileImage}
    alt="Samuel Zambrana"
    style={{
      width: '120px',
      height: '120px',
      objectFit: 'cover',
      borderRadius: '50%',
      marginBottom: '20px',
      border: '2px solid white'
    }}
  />
  <h2 style={{ margin: '0 0 10px' }}>Samuel Zambrana González</h2>
  <h3 style={{ margin: 0, color: '#ccc', fontWeight: 'normal' }}>
    Full Stack Web & Blockchain Developer
  </h3>

  <p style={{ maxWidth: '800px', marginTop: '30px' }}>
    Soy un desarrollador full stack apasionado por el mundo de la tecnología, con un firme enfoque en el ecosistema Web3 y Blockchain. Me he formado en dos bootcamps intensivos —uno enfocado en criptoactivos y otro en desarrollo web y aplicaciones móviles— que me han dado las herramientas para abordar proyectos innovadores y construir soluciones tecnológicas de alto impacto.
    <br /><br />
    Inicié mi trayectoria profesional como técnico en sistemas microinformáticos y redes, aplicando los conocimientos adquiridos en mi formación profesional trabajando en App Informática como empleado y posteriormente como autónomo. Esa etapa cimentó mi amor por la informática práctica y el aprendizaje continuo.
    <br /><br />
    He acumulado también una sólida experiencia comercial, destacando por mi rol como Jefe de Ventas en Securitas Direct y posteriormente como Delegado Comercial freelance en ADT Alarmas. Estas experiencias me permitieron desarrollar habilidades de liderazgo, trabajo en equipo y gestión de clientes que hoy aplico en el desarrollo de software con visión de usuario.
    <br /><br />
    Actualmente perfecciono mi inglés para abrir puertas a oportunidades globales, mientras desarrollo proyectos personales y colaborativos. Mi perfil combina la técnica, la pasión por aprender y el compromiso por mejorar constantemente.
    <br /><br />
    🔗 GitHub: <a href="https://github.com/SamuelZambrana" style={{ color: '#61dafb' }} target="_blank" rel="noopener noreferrer">github.com/SamuelZambrana</a>
    <br />
    📄 CV: <a href="https://samuelzambrana.github.io/" style={{ color: '#61dafb' }} target="_blank" rel="noopener noreferrer">samuelzambrana.github.io</a>
  </p>

  <button
    onClick={goToHomePage}
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
  >
    Volver a página de inicio
  </button>
</div>
  )
}

export default ContactPage
