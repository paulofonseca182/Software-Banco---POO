import { expect } from 'chai';
import PagamentoBoleto from '../../src/entities/Pagamentos/PagamentoBoleto';
import Conta from '../../src/entities/Contas/Conta';
import Email from '../../src/entities/Email';
import ContaPoupanca from '../../src/entities/Contas/ContaPoupanca';

describe('Pagamento', () => {
  let conta1: Conta;
  let conta2: Conta;

  beforeEach(() => {
    conta1 = new ContaPoupanca(100, new Email('teste@teste.com'), 0.1);
    conta2 = new ContaPoupanca(100, new Email('teste1@teste.com'), 0.1);
  });

  it(`Deve ser possivel criar uma instancia 
  (objeto) de PagamentoBoleto`, () => {
    const pagamento = new PagamentoBoleto(
      {
        contaOrigem: conta1,
        contaDestino: conta2,
        valor: 50,
        dataPagamento: new Date(),
      },
      new Date(),
    );
    expect(pagamento).to.be.instanceOf(PagamentoBoleto);
  });

  it('Deve alterar o saldo das constas ao realizar um pagamento', () => {
    const pagamento = new PagamentoBoleto(
      {
        contaOrigem: conta1,
        contaDestino: conta2,
        valor: 50,
        dataPagamento: new Date(),
      },
      new Date(),
    );
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
      const pagamento = new PagamentoBoleto(
        {
          contaOrigem: conta1,
          contaDestino: conta2,
          valor: 10,
          dataPagamento: new Date('2023-11-2') },
        new Date('2023-11-1'),
      );
      pagamento.efetivar();
      expect(conta1.saldo).to.be.equal(88);
      expect(conta2.saldo).to.be.equal(112);
    },
  );
});