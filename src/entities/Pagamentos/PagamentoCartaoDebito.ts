import Pagamento from './Pagamento';

class PagamentoCartaoDebito extends Pagamento {
  public efetivar(): void {
    this._contaOrigem.debitar(this._valor);
    this._contaDestino.creditar(this._valor);
    console.log('Verifica probabilidade de fraude com a bandeira');
  }
}

export default PagamentoCartaoDebito;