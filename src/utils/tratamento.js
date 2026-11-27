import { ErroDeValidacao, ErroNaoEncontrado } from '../errors.js';

export function comTratamento(mensagemErroInterno, controller) {
  return async (req, res) => {
    try {
      await controller(req, res);
    } catch (error) {
      if (error instanceof ErroDeValidacao) {
        return res.status(400).json({ error: error.message });
      }
      if (error instanceof ErroNaoEncontrado) {
        return res.status(404).json({ error: error.message });
      }
      console.error(error);
      res.status(500).json({ error: mensagemErroInterno });
    }
  };
}
