function Livro(props) {
    return (
        <li>
            {props.livro.titulo}
            {props.livro.autor}
            {props.livro.ano}
            {props.livro.genero}
        </li>
    );
}

export default Livro;