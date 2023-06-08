import Conta from './Conta';
import Email from '../Email';

class ContaCorrente extends Conta {   
  private _chequeEspecial: number;
  constructor(saldo: number, email: Email, chequeEspecial: number) {
    super(saldo, email);
    this._chequeEspecial = chequeEspecial;
  }
 
  debitar(valor: number): void {
    if (valor > (this._saldo + this._chequeEspecial)) {
      throw new Error('Saldo insuficiente');
    }
    this._saldo -= valor;
  }
}

export default ContaCorrente;