function Header() {
    const meuNome ='bruno'
    let frase = `${meuNome} isso`
    return (
        <header>
            <p>
                {frase}
            </p>
        </header>
    );
}

export default Header;