import Conta from './Conta';

type TransferenciaProps = {
  origem: Conta,
  destino: Conta,
  valor: number,
};

class Trasnferencia {
  private _origem: Conta;
  private _destino: Conta;
  private _valor: number;

  constructor(params: TransferenciaProps) {
    this._origem = params.origem;
    this._destino = params.destino;
    this._valor = params.valor;
  }

  get origem(): Conta {
    return this._origem;
  }

  get destino(): Conta {
    return this._destino;
  }

  efetivar(): void {
    this._origem.debitar(this._valor);
    this._destino.creditar(this._valor);
  }
}

export default Trasnferencia;