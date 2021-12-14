
import React from 'react';
import Lesstext from './components/lesstext';
import { useState } from 'react';
import './App.css';

function App() {
  //const [anoNascimento, setAnoNascimento] = useState(1987);

  return (  
    /*  
    <div>
        <p>Olá, eu nasci em {anoNascimento}</p>
        <button onClick={()=>{console.log(anoNascimento)
                              setAnoNascimento(2000)
                              console.log(anoNascimento)
                              setAnoNascimento(2021)
                              console.log(anoNascimento)
        }}>Botão</button>
    </div>
    */
  <Lesstext text="Ola, tudo bem como vai ? Como esta a familia ?" maxlength={10}>

  </Lesstext>
  
  );
}

export default App;
