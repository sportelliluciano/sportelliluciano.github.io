import React from 'react';
import './App.css';

function App(): JSX.Element {
    return (
        <div className="container">
            <header>
                <h1>WIP</h1>
                <hr />
            </header>
            <div className="content">
                <h2>Sistemas gráficos - 66.71</h2>
                <ul>
                    <li>
                        <a href="/sistemas-graficos/semana-1/01-canvas.html">Semana 1: Introducción a Canvas y WebGL</a>
                    </li>
                    <li>
                        <a href="/sistemas-graficos/semana-1/02-vbo.html">Semana 1: Ejercicio &quot;triángulos&quot;</a>
                    </li>
                    <li>
                        <a href="/sistemas-graficos/semana-2/03-1-letras.html">Semana 2: Letras 3D - Ejercicio 1</a>
                    </li>
                    <li>
                        <a href="/sistemas-graficos/semana-2/03-2-letras.html">Semana 2: Letras 3D - Ejercicio 2</a>
                    </li>
                    <li>
                        <a href="/sistemas-graficos/semana-3/04-sistema-solar.html">Semana 3: Sistema Solar</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default App;
