import { expect } from 'chai';
import Pagamento from '../../src/entities/Pagamento';
import Conta from '../../src/entities/Conta/Conta';
import Email from '../../src/entities/Email';
import ContaPoupanca from '../../src/entities/Conta/ContaPoupanca';

describe('Pagamento', () => {
  let conta1: Conta;
  let conta2: Conta;

  beforeEach(() => {
    conta1 = new ContaPoupanca(100, new Email('teste@teste.com'), 0.1);
    conta2 = new ContaPoupanca(100, new Email('teste1@teste.com'), 0.1);
  });

  it('Deve ser possivel criar uma instancia (objeto) de Pagamento', () => {
    const pagamento = new Pagamento({
      contaOrigem: conta1,
      contaDestino: conta2,
      valor: 50,
      dataVencimento: new Date(),
      dataPagamento: new Date(),
    });
    expect(pagamento).to.be.instanceOf(Pagamento);
  });

  it('Deve alterar o saldo das constas ao realizar um pagamento', () => {
    const pagamento = new Pagamento({
      contaOrigem: conta1,
      contaDestino: conta2,
      valor: 50,
      dataVencimento: new Date(),
      dataPagamento: new Date(),
    });
    expect(conta1.saldo).to.be.equal(100);
    expect(conta2.saldo).to.be.equal(100);
    pagamento.efetivar();
    expect(conta1.saldo).to.be.equal(50);
    expect(conta2.saldo).to.be.equal(150);
  });

  it(
    `Deve ser cobrado acrescetar juros de 20% se o pagamento 
  for realizado após a data de vencimento`, 
    () => {
      const pagamento = new Pagamento({
        contaOrigem: conta1,
        contaDestino: conta2,
        valor: 10,
        dataVencimento: new Date('2023-11-1'),
        dataPagamento: new Date('2023-11-2'),
      });
      pagamento.efetivar();
      expect(conta1.saldo).to.be.equal(88);
      expect(conta2.saldo).to.be.equal(112);
    },
  );
});