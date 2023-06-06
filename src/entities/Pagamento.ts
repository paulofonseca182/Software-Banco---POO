import Conta from './Conta';
import ITransacao from './ITransacao';

type PagamentoProps = {
  contaDestino: Conta,
  valor: number,
  dataVencimento: Date,
  contaOrigem: Conta,
  dataPagamento: Date,
};

class Pagamento implements ITransacao {
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

  public get contaOrigem(): Conta {
    return this._contaOrigem;
  }

  public get contaDestino(): Conta {
    return this._contaDestino;
  }

  public efetivar(): void {
    if (this._dataPagamento.getTime() > this._dataVencimento.getTime()) {
      this._valor *= 1.2;
    }
    this._contaOrigem.debitar(this._valor);
    this._contaDestino.creditar(this._valor);
  }
}
export default Pagamento;