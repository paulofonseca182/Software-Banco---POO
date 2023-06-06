import Email from './Email';

class Conta {
  private _saldo: number;
  private _email: Email;

  constructor(saldo: number, email: Email) {
    this._saldo = saldo;
    this._email = email;
  }

  public get saldo(): number {
    return this._saldo;
  }

  private set saldo(value: number) {
    this._saldo = value;
  }

  public get email(): Email {
    return this._email;
  }

  public set email(value: Email) {
    this._email = value;
  }

  public debitar(valor: number): void {
    if (valor > this._saldo) {
      throw new Error('Saldo insuficiente');
    }
    this._saldo -= valor;
  }

  public creditar(valor: number): void {
    this._saldo += valor;
  }
}

export default Conta;