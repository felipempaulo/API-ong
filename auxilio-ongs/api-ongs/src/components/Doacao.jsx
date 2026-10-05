export default function Doacao() {
    return (
        <>
        <h1>Faça uma doação!</h1>

        <label htmlFor="valor">Valor:</label>
        <input type="number" id="valor" name="valor" step="0.01" />

        <button type="submit">Doar</button>
        </>
    );
}