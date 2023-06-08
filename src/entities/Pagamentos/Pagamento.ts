import Conta from '../Contas/Conta';
import ITransacao from '../ITransacao';

type PagamentoProps = {
  contaDestino: Conta,
  valor: number,
  contaOrigem: Conta,
  dataPagamento: Date,
};

abstract class Pagamento implements ITransacao {
  protected _contaOrigem: Conta;
  protected _contaDestino: Conta;
  protected _valor: number;
  protected _dataPagamento: Date;

  constructor(params: PagamentoProps) {
    this._contaOrigem = params.contaOrigem;
    this._contaDestino = params.contaDestino;
    this._valor = params.valor;
    this._dataPagamento = params.dataPagamento;
  }

  public get contaOrigem(): Conta {
    return this._contaOrigem;
  }

  public get contaDestino(): Conta {
    return this._contaDestino;
  }

  abstract efetivar(): void;
}
export default Pagamento;