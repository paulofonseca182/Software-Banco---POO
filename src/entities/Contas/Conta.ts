import Email from '../Email';

abstract class Conta {
  protected _saldo: number;
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

  abstract debitar(valor: number): void;

  public creditar(valor: number): void {
    this._saldo += valor;
  }
}

export default Conta;