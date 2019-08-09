import React from 'react';
import logo from '../assets/logo.svg';
import './Login.css';
import { isContainer } from 'postcss-selector-parser';

export default function Login(){
   return (
    <div className="login-container">
        <form>
            <img src={logo} alt='Tindev'></img>
            <input
            placeholder="Digite seu usuário do GitHub" 
            type="text" 
            name="" 
            id=""/>
            <button type="submit">Enviar</button>
        </form>
    </div>   
   );
}