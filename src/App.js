import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap/dist/react-bootstrap.min.js'
//import './src/assets/js/script.js'
//import './src/assets/css/css.css'
//import 'jquery/dist/jquery.js'
//import 'bootstrap/dist/js/bootstrap.min.js'
//import 'jquery/dist/jquery.js'
import './App.css';

import Navegacion from './componentes/navegacion'
//import listaEstadistica from './componentes/listaEstadistica'
import landingFutbol from './componentes/landingFutbol'
import crearUsuario from './componentes/crearUsuario'
import datosJugador from './componentes/datosJugador'
import Login from './componentes/login'
import Jugadores from './componentes/jugadores'



function App() {
    return (
      <Router>
       <Navegacion/>
       
         
       
        <div className="container p-4">

           <Route path="/" component={landingFutbol} exact/> 
          <Route path="/datosJugador" component={datosJugador}/>
          <Route path="/crearusuario" component={crearUsuario}/>
          {/* <Route path="/listaEstadistica" component={listaEstadistica}/> */}
          <Route path="/Login" component={Login}/>
          <Route path="/Jugadores" component={Jugadores}/>
        </div>

      </Router>
    );
}

export default App;
