import { expect } from 'chai';
import ContaCorrente from '../../src/entities/Contas/ContaCorrente';
import Email from '../../src/entities/Email';

const email = new Email('teste@teste.com');

describe('ContaCorrente', () => {
  it('Deve ser possivel criar uma instancia (objeto) de ContaCorrente', () => {
    const conta = new ContaCorrente(100, email, 100);
    expect(conta).to.be.instanceOf(ContaCorrente);
  });

  it('Deve ser possivel debitar na contaCorrente', () => {
    const conta = new ContaCorrente(100, email, 100);
    conta.debitar(50);
    expect(conta.saldo).to.be.equal(50);
  });

  it(`Deve causar um erro ao tentar 
  debitar um valor maior que o saldo mais chque especial`, () => {
    const conta = new ContaCorrente(100, email, 100);
    expect(() => conta.debitar(250)).to.throws('Saldo insuficiente');
  });

  it('Deve ser possivel creditar um valor em uma contaCorrente', () => {
    const conta = new ContaCorrente(100, email, 100);
    conta.creditar(50);
    expect(conta.saldo).to.be.equal(150);
  });
});