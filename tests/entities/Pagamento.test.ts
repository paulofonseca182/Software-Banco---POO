import { expect } from 'chai';
import Pagamento from '../../src/entities/Pagamento';
import Conta from '../../src/entities/Conta';

describe('Pagamento', () => {
  let conta1: Conta;
  let conta2: Conta;

  beforeEach(() => {
    conta1 = new Conta(100, 'teste@teste.com');
    conta2 = new Conta(100, 'teste1@teste.com');
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

  it('Deve alterar o salfo das constas ao realizar um pagamento', () => {
    const pagamento = new Pagamento({
      contaOrigem: conta1,
      contaDestino: conta2,
      valor: 50,
      dataVencimento: new Date(),
      dataPagamento: new Date(),
    });
    expect(conta1.saldo).to.be.equal(100);
    expect(conta2.saldo).to.be.equal(100);
    pagamento.pagamento();
    expect(conta1.saldo).to.be.equal(50);
    expect(conta2.saldo).to.be.equal(150);
  });
});