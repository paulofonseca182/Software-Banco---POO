import { expect } from 'chai';
import Conta from '../../src/entities/Conta';

const email = 'teste@teste.com';

describe('Conta', () => {
  it('Deve ser possivel criar uma instancia (objeto) de Conta', () => {
    const conta = new Conta(100, email);
    expect(conta).to.be.instanceOf(Conta);
  });

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
  });
});