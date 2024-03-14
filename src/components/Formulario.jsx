import { useEffect } from "react"
import { useState } from "react"
import { BancoAnimes } from '../data/BancoAnimes'

export const Formulario = ({mudaPagina}) => {

    const [anime, setAnime] = useState('')
    const [listaAnimes, setListaAnimes] = useState(BancoAnimes);
    console.log(listaAnimes)

    // useEffect(()=>{
    //     console.log(anime)
    // }, [anime])

    const handleSubmit = (e)=>{
        e.preventDefault();
        
    }

    return (
        <div>
            <div>
                <h1>Formulário</h1>
                <nav>
                    <ul>
                        <button onClick={() => { mudaPagina('Header') }}>Home</button>
                        <button onClick={() => { mudaPagina('Formulario') }}>Formulário</button>
                        <button onClick={() => { mudaPagina('Fotos') }}>Fotos</button>
                    </ul>
                </nav>
            </div>

            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        <span>Nome: </span>
                        <input type="text" name="nome" placeholder="digita seu nome aqui" onChange={(e)=>{}} />
                    </label>
                    <br />
                    <label>
                        <span>Melhor anime: </span>
                                                     
                       
                            <select name="anime" onChange={(e)=>{setAnime(e.target.value)}}>
                                {listaAnimes.map((objeto, index)=>(
                                    <option key={index} value={objeto.anime}>{objeto.anime}</option>
                                ))}

                            </select>
                    
                        {/* <select name="anime" onChange={(e)=>{setAnime(e.target.value)}}>
                            <option value="" disabled>Escolha um anime da lista</option>
                            <option value="Naruto">Naruto</option>
                            <option value="OnePiece">One Piece</option>
                            <option value="DragonBall">Dragon Ball</option>
                        </select> */}
                    </label>
                    <br />
                    <br />
                    <button type="submit">Gravar seu anime</button>

                </form>
            </div>
        </div>
    )
}

