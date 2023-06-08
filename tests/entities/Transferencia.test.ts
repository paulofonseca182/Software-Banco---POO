import { expect } from 'chai';
import Email from '../../src/entities/Email';
import Transferencia from '../../src/entities/Transferencia';
import ContaPoupanca from '../../src/entities/Conta/ContaPoupanca';

describe('Transferencia', () => {
  it('Deve ser possivel criar uma instancia (objeto) de Transferencia', () => {
    const trasnferencia = new Transferencia({
      origem: new ContaPoupanca(100, new Email('teste2@teste.com'), 0.1),
      destino: new ContaPoupanca(100, new Email('teste1@teste.com'), 0.1),
      valor: 50,
    });
    expect(trasnferencia).to.be.instanceOf(Transferencia);
  });

  it('Deve ser possivel realizar uma transferencia entre contas', () => {
    const transferencia1 = new Transferencia({
      origem: new ContaPoupanca(100, new Email('teste3@teste.com'), 0.1),
      destino: new ContaPoupanca(100, new Email('teste4@teste.com'), 0.1),
      valor: 50,
    });

    transferencia1.efetivar();
    expect(transferencia1.origem.saldo).to.be.equal(50);
    expect(transferencia1.destino.saldo).to.be.equal(150);
  });
});