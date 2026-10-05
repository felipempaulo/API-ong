export default function CadastroCampanhas() {
    return (
        <>
        <h1>Cadastro de Campanhas</h1>

        <label htmlFor="nome">Nome da Campanha:</label>
        <input type="text" id="nome" name="nome" />

        <label htmlFor="Meta">Meta de arrecadação:</label>
        <input type="number" id="Meta" name="Meta" />

        <label htmlFor="objetivo">Objetivo da Campanha:</label>
        <input type="text" id="objetivo" name="objetivo" />

        <button type="submit">Cadastrar</button>

        </>
    );
}