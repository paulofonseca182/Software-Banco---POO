import ITransacao from '../entities/ITransacao';

const processarFila = (fila: ITransacao[]) => {
  fila.forEach((transacao: ITransacao) => transacao.efetivar());
};

export default processarFila;