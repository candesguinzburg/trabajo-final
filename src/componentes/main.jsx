import React from "react";
import { Carousel } from "react-bootstrap";
import "../css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FotoI from "../img/fi.jpg";
import Foto2 from "../img/fi2.jpg";
import Foto3 from "../img/fe.jpg"

const Main = () => {
    return (
        <div className="fondo">
            <h1>Bienestar Sport</h1>
            <h2>Todos los deportes en una sola esquina</h2>
            <Carousel className="carousel">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={FotoI}
                        alt="Primera imagen"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Foto2}
                        alt="Segunda imagen"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Foto3}
                        alt="Tercera imagen"
                    />
                </Carousel.Item>
            </Carousel>
            <p className="descripcionL">Somos un negocio familiar, con más de 33 años de trayectoria. En nuestro local puedes encontrar artículos de todos los deportes y disciplinas, de excelente calidad y al mejor precio. Además, contamos con un staff de vendedores que siempre te van a atender y asesorar de la mejor manera posible.</p>

        </div>
    );
};

export default Main;