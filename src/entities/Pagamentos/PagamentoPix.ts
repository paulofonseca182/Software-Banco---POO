import Pagamento from './Pagamento';

class PagamentoPix extends Pagamento {
  public efetivar(): void {
    if (this._contaOrigem.saldo < this._valor) {
      return console.log('Saldo insuficiente');
    }
    this._contaOrigem.debitar(this._valor);
    this._contaDestino.creditar(this._valor);
    console.log('Enviar notificação pro BACEN');
  }
}

export default PagamentoPix;