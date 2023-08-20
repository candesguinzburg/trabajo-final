import React, { useState } from "react";
import "../css/informacion2.css"

const Informacion2 = () => {
    const [mail, ingresaMail] = useState("")

    const Resetear = () => {
        ingresaMail("");
    }

    const enviar = (e) => {
        e.preventDefault();
        console.log({ mail })
        alert("Mail enviado correctamente")
        Resetear()
    }
    return (
        <div className="fondo">

            <h1 className="titInfo2">Bienestar Sport</h1>
            <h2 className="subInfo2">Mandanos un mail con tu consulta:</h2>
            <form onSubmit={enviar}>
                <label className="label2">
                    <textarea className="mail" value={mail} onChange={(e) => ingresaMail(e.target.value)} cols="100" rows="6"></textarea>
                </label>
                <div className="botones2">
                    <button className="bot2" type="submit"><strong>Enviar</strong></button>
                    <button className="bot2" type="button" onClick={Resetear} ><strong>Borrar</strong></button>
                </div>
            </form>

        </div>
    )
}
export default Informacion2;