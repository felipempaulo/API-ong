export default function Login() {
    return (
        <>
        <h1>Login</h1>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="senha">Senha:</label>
        <input type="password" id="senha" name="senha" />

        <button type="submit">Entrar</button>
        </>
    );
}