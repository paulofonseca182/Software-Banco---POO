import { expect } from 'chai';
import ContaPoupanca from '../../src/entities/Contas/ContaPoupanca';
import Email from '../../src/entities/Email';

describe('ContaPoupanca', () => {
  it('Deve ser possivel criar uma instancia (objeto) de ContaPoupanca', () => {
    const conta = new ContaPoupanca(100, (new Email('teste@teste.com')), 0.1);
    expect(conta).to.be.instanceOf(ContaPoupanca);
    expect(conta.saldo).to.be.equal(100);
    expect(conta.email.email).to.be.equal('teste@teste.com');
  });

  it('Deve prever um rendimento anual com base no saldo', () => {
    const conta = new ContaPoupanca(100, (new Email('teste1@teste.com')), 0.2);
    expect(conta.rendimentoAnual()).to.be.equal(20);
  });
});
