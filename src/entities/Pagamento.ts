import Conta from './Conta';

type PagamentoProps = {
  contaDestino: Conta,
  valor: number,
  dataVencimento: Date,
  contaOrigem: Conta,
  dataPagamento: Date,
};

class Pagamento {
  private _contaOrigem: Conta;
  private _contaDestino: Conta;
  private _valor: number;
  private _dataVencimento: Date;
  private _dataPagamento: Date;

  constructor(params: PagamentoProps) {
    this._contaOrigem = params.contaOrigem;
    this._contaDestino = params.contaDestino;
    this._valor = params.valor;
    this._dataVencimento = params.dataVencimento;
    this._dataPagamento = params.dataPagamento;
  }
}
export default Pagamento;