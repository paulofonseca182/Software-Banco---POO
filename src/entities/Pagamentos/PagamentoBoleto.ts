import Pagamento from './Pagamento';
import Conta from '../Contas/Conta';

type PagamentoProps = {
  contaDestino: Conta,
  valor: number,
  contaOrigem: Conta,
  dataPagamento: Date,
};

class PagamentoBoleto extends Pagamento {
  private _dataVencimento: Date;
  constructor(params: PagamentoProps, dataVencimento: Date) {
    super(params);
    this._dataVencimento = dataVencimento;
  }

  public efetivar(): void {
    const juros = 1.2;
    if (this._dataPagamento.getTime() > this._dataVencimento.getTime()) {
      this._valor *= juros;
    }
    this._contaOrigem.debitar(this._valor);
    this._contaDestino.creditar(this._valor);
  }
}

export default PagamentoBoleto;