export class ErroDeValidacao extends Error {
  constructor(mensagem) {
    super(mensagem);
    this.name = 'ErroDeValidacao';
  }
}

export class ErroNaoEncontrado extends Error {
  constructor(mensagem) {
    super(mensagem);
    this.name = 'ErroNaoEncontrado';
  }
}