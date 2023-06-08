import Conta from './Conta';
import Email from '../Email';

class ContaPoupanca extends Conta {
  private _juros: number;
  constructor(saldo: number, email: Email, juros: number) {
    super(saldo, email);
    this._juros = juros;
  }

  public rendimentoAnual(): number {
    return this.saldo * this._juros;
  }

  public debitar(valor: number): void {
    if (valor > this._saldo) {
      throw new Error('Saldo insuficiente');
    }
    this._saldo -= valor;
  }
}
export default ContaPoupanca;