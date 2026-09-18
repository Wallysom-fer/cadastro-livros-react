import { useState } from "react";
import CampoTexto from "./CampoTexto";
import Livro from "./Livro";
import "./FormularioLivro.css";

function FormularioLivro() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [ano, setAno] = useState("");
  const [genero, setGenero] = useState("");
  const [livros, setLivros] = useState([]);

  function cadastrarLivro() {
    const novoLivro = {
      id: Date.now(),
      titulo: titulo,
      autor: autor,
      ano: ano,
      genero: genero,
    };

    setLivros([...livros, novoLivro]);

    setTitulo("");
    setAutor("");
    setAno("");
    setGenero("");
  }

  return (
    <div className="formulario-livro">
      <h1>Cadastro de Livros</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          cadastrarLivro();
        }}
      >
        <CampoTexto
          label="Título"
          name="titulo"
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <CampoTexto
          label="Autor"
          name="autor"
          type="text"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
        />
        <CampoTexto
          label="Ano de publicação"
          name="ano"
          type="text"
          value={ano}
          onChange={(e) => setAno(e.target.value)}
        />
        <CampoTexto
          label="Gênero"
          name="genero"
          type="text"
          value={genero}
          onChange={(e) => setGenero(e.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </form>

      <div className="formulario-livro-lista">
        <h2>Livros cadastrados</h2>
        {livros.length === 0 ? (
          <p>Nenhum livro cadastrado ainda.</p>
        ) : (
          <ul>
            {livros.map((livro) => (
              <Livro key={livro.id} livro={livro} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default FormularioLivro;