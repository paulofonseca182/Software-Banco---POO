import { expect } from 'chai';

import Conta from '../../src/entities/Conta';
import Email from '../../src/entities/Email';
import Transferencia from '../../src/entities/Transferencia';
import processarFila from '../../src/services/processarFilas';

describe('ProcessarFila', () => {
  it('Deve ser possivel processar uma fila de transferencias', () => {
    const conta1 = new Conta(100, new Email('teste@teste.com'));
    const conta2 = new Conta(100, new Email('teste2@teste.com'));
    const pagamento = new Transferencia({
      origem: conta1,
      destino: conta2,
      valor: 50,
    });
    const transferencia = new Transferencia({
      origem: conta1,
      destino: conta2,
      valor: 30,
    });

    processarFila([pagamento, transferencia]);
    expect(conta1.saldo).to.be.equal(20);
    expect(conta2.saldo).to.be.equal(180);
  });   
});