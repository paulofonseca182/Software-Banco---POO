class Conta {
  private _saldo: number;

  private _email: string;

  constructor(saldo: number, email: string) {
    this._saldo = saldo;
    this._email = email;
  }

  get saldo(): number {
    return this._saldo;
  }

  public debitar(valor: number): void {
    if (valor > this._saldo) {
      throw new Error('Saldo insuficiente');
    }
    this._saldo -= valor;
  }
}

export default Conta;