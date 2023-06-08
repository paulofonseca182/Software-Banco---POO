import { expect } from 'chai';
import ContaCorrente from '../../src/entities/Conta/ContaCorrente';
import Email from '../../src/entities/Email';

const email = new Email('teste@teste.com');

describe('ContaCorrente', () => {
  it('Deve ser possivel criar uma instancia (objeto) de ContaCorrente', () => {
    const conta = new ContaCorrente(100, email, 100);
    expect(conta).to.be.instanceOf(ContaCorrente);
  });
/* 
  it('Deve ser possivel debitar na conta', () => {
    const conta = new Conta(100, email);
    conta.debitar(50);
    expect(conta.saldo).to.be.equal(50);
  });

  it('Deve causar um erro ao tentar debitar um valor maior que o saldo', () => {
    const conta = new Conta(100, email);
    expect(() => conta.debitar(150)).to.throws('Saldo insuficiente');
  });

  it('Deve ser possivel creditar um valor em uma conta', () => {
    const conta = new Conta(100, email);
    conta.creditar(50);
    expect(conta.saldo).to.be.equal(150);
  }); */
});