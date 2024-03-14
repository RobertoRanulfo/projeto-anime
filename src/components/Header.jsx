const Header = ({ mudaPagina }) => {
    return (
        <header>
            <h1>Gantz</h1>
            <nav>
                <ul>
                    <button onClick={() => { mudaPagina('Header') }}>Home</button>
                    <button onClick={() => { mudaPagina('Formulario') }}>Formulário</button>
                    <button onClick={() => { mudaPagina('Fotos') }}>Fotos</button>
                </ul>
            </nav>
        </header>
    );
};


export default Header