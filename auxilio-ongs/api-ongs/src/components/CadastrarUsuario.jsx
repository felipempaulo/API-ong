export default function CadastrarUsuario() {
    return (
        <>
        <h1>Cadastrar Usuário</h1>

        <label htmlFor="nome">Nome:</label>
        <input type="text" id="nome" name="nome" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="senha">Senha:</label>
        <input type="password" id="senha" name="senha" />   

        <p>Como pretende ajudar?</p>

        <label htmlFor="doador">Doador</label>
        <input type="checkbox" id="doador" name="tipo" value="doador" />
        <label htmlFor="voluntario">Voluntário</label>
        <input type="checkbox" id="voluntario" name="tipo" value="voluntario" />
        
        <button type="submit">Cadastrar</button>
        </>
    );
}