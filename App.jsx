import { useState } from 'react'
import './App.css'
import Menu from './Menu/Menu'
import Titulo from './Titulo/Titulo'






function Formulario (){
    let titulo = 'Fomulario'
    let subTitulo = 'Fomulario'
    return  <section>
                {/* Titulo({nombre: 'contenido'}) */}
                {/* <Titulo titulo={titulo} subTitulo={subTitulo} /> */}
                <form>
                    <input type='text' name='name' placeholder='ingrese el nombre' />
                    <input type='text' name='name' placeholder='ingrese el nombre' />
                </form>
            </section>
}




// Menu()
function App() {   
    const [ counter, setCounter ] = useState(0)
    

    let style = {fontSize: 22, backgroundColor: 'Red'} // no es recomendable

    let handleCount = () => {        
        setCounter(counter + 1)        
    }


    return ( 
        <div className="App" style= { style} >
            {/* Menu(argum) js === <Menu argum /> */}
            <Menu />
            <Titulo /> 
            {/* titulo='App' subTitulo='App'  */}

            <Formulario />
            <p>Clicks: {counter}</p>
            <button onClick={handleCount}>+ 1</button> 
            
            
            <hr/>
        </div>
    )
}

export default App
