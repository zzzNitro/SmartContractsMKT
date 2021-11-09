import React from 'react'
import NavBar from './NavBar'
import Button from '@mui/material/Button';
import './Home.css'


function Home() {
    return (
        <>
                    <NavBar />

        <div className="main">

            
            <div className="area-texto">
                <div className="texto-home">
                <h1>Soluciona tus necesidades de codigo más rapido que nunca</h1>

                </div>
                <div className="texto-secundario">
                <p>Pon recompensas por tus problemas más dificiles y ve como la comunidad lo resuelve</p>

                </div>
            <Button variant="contained">Busca contratos</Button> 
            </div>

            
        <div className="imagen-home"><img src="/images/assetHome2.png" alt="imagen para home" /></div>

        </div>
        </>
        
    )
}

export default Home
