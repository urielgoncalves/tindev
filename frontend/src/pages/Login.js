import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import './Login.css';
import { isContainer } from 'postcss-selector-parser';
import api from '../services/api';

//componente, estado, propriedade
//history = propriedade herdada do react-router-dom
export default function Login({history}){
    const [username, setUsername] = useState('');

    async function handleSubmit(e){
        e.preventDefault();

        const response = await api.post('/devs',{
            username
        });
        //console.log(response);
        //console.log(username);
        const { _id } = response.data;

        history.push(`/dev/${_id}`);
    }

   return (
    <div className="login-container">
        <form onSubmit={handleSubmit}>
            <img src={logo} alt='Tindev'></img>
            <input
            placeholder="Digite seu usuário do GitHub" 
            type="text" 
            value={username}
            onChange={e=>setUsername(e.target.value)}
            id=""/>
            <button type="submit">Enviar</button>
        </form>
    </div>   
   );
}