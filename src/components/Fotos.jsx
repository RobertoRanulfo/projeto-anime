export const Fotos = ({mudaPagina}) => {
    return (
        <div>
            <h1>Fotos</h1>
            <nav>
                <ul>
                    <button onClick={() => { mudaPagina('Header') }}>Home</button>
                    <button onClick={() => { mudaPagina('Formulario') }}>Formulário</button>
                    <button onClick={() => { mudaPagina('Fotos') }}>Fotos</button>
                </ul>
            </nav>
        </div>
    )
}