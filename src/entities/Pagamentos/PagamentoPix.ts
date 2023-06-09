import Pagamento from './Pagamento';

class PagamentoPix extends Pagamento {
  public efetivar(): void {
    if (this._contaOrigem.saldo < this._valor) {
      console.log('Saldo insuficiente');
    }
    this._contaOrigem.debitar(this._valor);
    this._contaDestino.creditar(this._valor);
    console.log('Verifica probabilidade de fraude com a bandeira');
  }
}

export default PagamentoPix;