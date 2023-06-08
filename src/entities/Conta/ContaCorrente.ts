import Conta from './Conta';

class ContaCorrente extends Conta {    
  debitar(valor: number): void {
    console.log(valor);
  }
}

export default ContaCorrente;