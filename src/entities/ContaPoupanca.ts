import Conta from './Conta';
import Email from './Email';

class ContaPoupanca extends Conta {
  private _juros: number;
  constructor(saldo: number, email: Email, juros: number) {
    super(saldo, email);
    this._juros = juros;
  }

  rendimentoAnual(): number {
    return this.saldo * this._juros;
  }
}
export default ContaPoupanca;