import React from "react";
import './styles.css';

function MainSection() {
    return (
        <div className="Main-container">
            <div className="main-data-container">

                <h1>Rick And Morty</h1>
                <p>O brilhante cientista beberrão Rick sequestra Morty, seu neto aborrescente,
                    para viver loucuras em outros mundos e dimensões alternativas. </p>
                <button type="submit"> Veja mais </button>
            </div>
            <img
                src="https://img.elo7.com.br/product/zoom/2AC1187/placa-decorativa-quadro-anime-rick-and-morty-h347-filme.jpg"
                alt="Rick-Morty-Img"
            />
        </div>
    );
}

export default MainSection;