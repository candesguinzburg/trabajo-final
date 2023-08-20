import "../css/informacion.css"
import React, { useState } from 'react';
import { useNavigate } from "react-router"

const Informacion = () => {
    const [nombre, ingresaNombre] = useState("")
    const [contra, ingresaContra] = useState("")

    const nombreEsperado = "BienestarSport"
    const contraEsperada = "1234"

    const redirigir = useNavigate();

    const Resetear = () => {
        ingresaNombre("");
        ingresaContra("");
    }

    const logear = (e) => {
        e.preventDefault();

        const usuario = {
            nombre,
            contra,
        };


        if (nombreEsperado === usuario.nombre && contraEsperada === usuario.contra) {
            alert('Bienvenido');
            redirigir("/Informacion2")
        } else {
            alert('Usuario o contraseña incorrecta');
            Resetear();
        }
    };

    return (
        <div className="fondo">
            <h1 className="titInfo">Bienestar Sport</h1>
            <h2 className="subInfo">Contactate con nosotros:</h2>
            <form onSubmit={logear} className="formulario">
                <label className="label">
                    Nombre de usuario:
                    <input className="input" type="text" value={nombre} onChange={(e) => ingresaNombre(e.target.value)} />
                </label>
                <br />
                <label className="label">
                    Contraseña:
                    <input className="input" type="password" value={contra} onChange={(e) => ingresaContra(e.target.value)} />
                </label>
                <div className="botones">
                    <button className="bot" type="submit"><strong>Iniciar Sesión</strong></button>
                    <button className="bot" type="button" onClick={Resetear}><strong>Borrar</strong></button>
                </div>
            </form>

        </div>
    );
}


export default Informacion

