import "./App.css";
import React from "react";
import logo from "./logo.svg";
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import { EventosES6, EventosES7, MasSobreEventos } from "./components/Eventos";
import ComunicacionComponentes from "./components/ComunicacionComponentes";
import CicloVida from "./components/CicloDeVida";
import AjaxApis from "./components/AjaxApis";
import ApiLol from "./components/ApiLol";
import ContadorHooks from "./components/ContadorHooks";
import ScrollHooks from "./components/ScrollHooks";
import RelojHooks from "./components/RelojHooks";
import AjaxHooks from "./components/AjaxHooks";
import HooksPersonalizados from "./components/HooksPersonalizados";
import Referencias from "./components/Referencias";
import Formularios from "./components/Formularios";
import Estilos from "./components/Estilos";
import ComponentesEstilizados from "./components/ComponentesEstilizados";

function App() {
  let nombre = "Lucas",
    auth = true,
    estaciones = ["Verano", "Otoño", "Privamera", "Invierno"];
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <label htmlFor="nombre">Nombre</label>
          <h1>Hola {nombre}</h1>
          <p>{auth ? "El usuario está logueado" : "No está logueado"}</p>
          <ul>
            {estaciones.map((el, index) => (
              <li key={index}>{el}</li>
            ))}
          </ul>

          <p>
            Editar <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>
        <section>
          <Componente msg="Hola soy un Componente Funcional Expresado desde una prop" />
          <hr />
          <Propiedades
            cadena="Esto es una cadena de texto"
            numero={20}
            booleano={true}
            arreglo={[1, 2, 3]}
            objeto={{ nombre: "Lucas", correo: "lucasn.gimenez20@gmail.com" }}
            funcion={(num) => num * num}
            elementoReact={<i>Esto es un elemento React </i>}
            componenteReact={
              <Componente msg="Soy un componente pasado como Prop" />
            }
          />
          <hr />
          <Estado />
          <hr />
          <RenderizadoCondicional />
          <hr />
          <RenderizadoElementos />
          <hr />
          <EventosES6 />
          <hr />
          <EventosES7 />
          <hr />
          <MasSobreEventos />
          <hr />
          <ComunicacionComponentes />
          <hr />
          <CicloVida />
          <hr />
          <AjaxApis />
          <hr />
          <ApiLol />
          <hr />
          <ContadorHooks titulo="Seguidores" />
          <hr />
          <ScrollHooks />
          <hr />
          <RelojHooks />
          {/* <hr /> */}
          {/* <AjaxHooks /> */}
          <hr />
          <HooksPersonalizados />
          <hr />
          <Referencias />
          <hr />
          <Formularios />
          <hr />
          <Estilos />
          <hr />
          <ComponentesEstilizados />
        </section>
      </header>
    </div>
  );
}

export default App;
