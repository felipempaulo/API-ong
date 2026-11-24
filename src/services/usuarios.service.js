import * as model from "../models/usuarioes.model";

export async function criar({nome, email}) {
    if (typeof nome !== 'string' || typeof email !== 'string'
        || !nome || !email
    ) {
        return res
        .status(400)
        .json({ error: "Os campos Nome e Email são obrigatórios e devem ser escritos."})
    }

    const novoUsuario = {
        nome: nome,
        email: email,
        tipo: tipo
    }

    try{
          const idInserido = await model.inserir(novoUsuario);
    
          const documentoCriado = {
            _id: idInserido,
            ...novoUsuario
          }
    
          return documentoCriado;
      }catch(error) {
        throw new Error("Erro ao inserir no banco.");
      }
}