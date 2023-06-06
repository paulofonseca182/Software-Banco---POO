import { expect } from 'chai';
import Email from '../../src/entities/Email';

describe('Email', () => {
  it('Deve ser possivel criar uma instancia (objeto) de Email', () => {
    const email = new Email('teste@email.com');
    expect(email).to.be.instanceOf(Email);
  });

  it('Deve causar um erro ao criar um email invalido', () => {
    expect(() => new Email('teste')).to.throws('Email inválido');
  });
});