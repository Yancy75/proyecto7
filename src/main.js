import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import {usuarioApp} from './usuarios/usuarios-app.js';
//import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      
    </div>
  </div>
`;

const elemento = document.querySelector('.card');
usuarioApp(elemento);
//setupCounter(document.querySelector('#counter'))
