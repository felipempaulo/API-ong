import { colecaoUsuarios } from "../data/database";
import { ErroDeValidacao } from "./acoes.service";

function formatado(documento) {
    return {
        id: documento._id.toHexString(),
        nome: documento.nome,
        email: documento.email,
    }
}

export async function criar({nome, email}) {
    if (typeof nome !== 'string' || typeof email !== 'string') {
        throw new ErroDeValidacao('O nome e email devem ser escritos.')
    }
    const novoUsuario = {nome: nome.trim(), email: email.trim()};
    const insertId = await module.inserir(novoUsuario);
    return formatado({_id: insertId, ...novoUsuario})
}