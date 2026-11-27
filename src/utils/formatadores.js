export function formatarCampanha(id) {
    return {
        id: id._id.toHexString(),
        titulo: id.titulo,
        meta: id.meta,
        objetivo: id.objetivo,
        arrecadado: id.arrecadado ?? 0
    };
}

export function formatarAcao(id) {
  return {
    id: id._id.toHexString(),
    campanhaId: id.campanhaId.toHexString(),
    titulo: id.titulo,
    descricao: id.descricao,
    data: id.data,
    vagas: id.vagas,
  };
}

export function formatarUsuario(id) {
  return {
    id: id._id.toHexString(),
    nome: id.nome,
    email: id.email,
    tipo: id.tipo,
  };
}

export function formatarDoacao(id) {
  return {
    id: id._id.toHexString(),
    campanhaId: id.campanhaId.toHexString(),
    usuarioId: id.usuarioId.toHexString(),
    valor: id.valor,
    anonima: id.anonima,
  };
}

export function formatarEscala(id) {
  return {
    id: id._id.toHexString(),
    acaoId: id.acaoId.toHexString(),
    usuarioId: id.usuarioId.toHexString(),
  };
}