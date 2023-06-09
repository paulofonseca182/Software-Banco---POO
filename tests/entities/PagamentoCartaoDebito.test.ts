import { expect } from 'chai';
import ContaPoupanca from '../../src/entities/Contas/ContaPoupanca';
import Email from '../../src/entities/Email';
import PagamentoCartaoDebito from
  '../../src/entities/Pagamentos/PagamentoCartaoDebito';

describe('PagamentoCartaoDebito', () => {
  let conta1: ContaPoupanca;
  let conta2: ContaPoupanca;
  beforeEach(() => {
    conta1 = new ContaPoupanca(100, new Email('teste@teste.com'), 0.1);
    conta2 = new ContaPoupanca(100, new Email('teste1@teste.com'), 0.1);
  });

  it(`Deve ser possivel criar uma instancia 
  (objeto) de PagamentoCartaoDebito`, () => {
    const pagamento = new PagamentoCartaoDebito(
      {
        contaOrigem: conta1,
        contaDestino: conta2,
        valor: 50,
        dataPagamento: new Date(),
      },
    );
    expect(pagamento).to.be.instanceOf(PagamentoCartaoDebito);
  });

  it('Deve ser possivel efetivar o PagamentoCartaoDebito', () => {
    const pagamento = new PagamentoCartaoDebito(
      {
        contaOrigem: conta1,
        contaDestino: conta2,
        valor: 50,
        dataPagamento: new Date(),
      },
    );
    expect(conta1.saldo).to.be.equal(100);
    expect(conta2.saldo).to.be.equal(100);
    pagamento.efetivar();
    expect(conta1.saldo).to.be.equal(50);
    expect(conta2.saldo).to.be.equal(150);
    expect(pagamento.efetivar())
      .to.be.equal(console.log('Enviar notificação pro BACEN'));
  });
});