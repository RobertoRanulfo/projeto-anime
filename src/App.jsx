import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import {Formulario} from './components/Formulario'
import {Fotos} from './components/Fotos'


function App() {
  const[pagina, setPagina] = useState('Header')

  const mudaPagina = (pagina)=>{
    setPagina(pagina)
  }

  


    return(
      <div>
        {pagina === 'Header' && <Header mudaPagina={mudaPagina}/>}
        {pagina === 'Formulario' && <Formulario mudaPagina={mudaPagina}/>}
        {pagina === 'Fotos' && <Fotos mudaPagina={mudaPagina}/>}
      </div>
    )
  }




  
  


export default App
