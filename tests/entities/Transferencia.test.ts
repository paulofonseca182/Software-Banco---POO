import { expect } from 'chai';
import Conta from '../../src/entities/Conta';
import Email from '../../src/entities/Email';
import Transferencia from '../../src/entities/Transferencia';

describe('Transferencia', () => {
  it('Deve ser possivel criar uma instancia (objeto) de Transferencia', () => {
    const trasnferencia = new Transferencia({
      origem: new Conta(100, new Email('teste2@teste.com')),
      destino: new Conta(100, new Email('teste1@teste.com')),
      valor: 50,
    });
    expect(trasnferencia).to.be.instanceOf(Transferencia);
  });

  it('Deve ser possivel realizar uma transferencia entre contas', () => {
    const transferencia1 = new Transferencia({
      origem: new Conta(100, new Email('teste3@teste.com')),
      destino: new Conta(100, new Email('teste4@teste.com')),
      valor: 50,
    });

    transferencia1.efetivar();
    expect(transferencia1.origem.saldo).to.be.equal(50);
    expect(transferencia1.destino.saldo).to.be.equal(150);
  });
});