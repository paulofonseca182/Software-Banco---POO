import { expect } from 'chai';
import ContaPoupanca from '../../src/entities/Contas/ContaPoupanca';
import Email from '../../src/entities/Email';
import PagamentoPix from '../../src/entities/Pagamentos/PagamentoPix';

describe(`PagamentoPix deve ser possivel criar uma instancia
 e efetivar o pagamentoPix`, () => {
  let conta1: ContaPoupanca;
  let conta2: ContaPoupanca;
  beforeEach(() => {
    conta1 = new ContaPoupanca(100, new Email('teste@teste.com'), 0.1);
    conta2 = new ContaPoupanca(100, new Email('teste1@teste.com'), 0.1);
  });
  it('Deve ser possivel criar uma instancia (objeto) de PagamentoPix', () => {
    const pagamento = new PagamentoPix(
      {
        contaOrigem: conta1,
        contaDestino: conta2,
        valor: 50,
        dataPagamento: new Date(),
      },
    );
    expect(pagamento).to.be.instanceOf(PagamentoPix);
  });

  it('Deve ser possivel efetivar o pagamentoPix', () => {
    const pagamento = new PagamentoPix(
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
  });

  it(`Nao deve ser possivel efetivar o 
  pagamentoPix com saldo insuficiente`, () => {
    const pagamento = new PagamentoPix(
      {
        contaOrigem: conta1,
        contaDestino: conta2,
        valor: 500,
        dataPagamento: new Date(),
      },
    );
    expect(pagamento.efetivar()).to.be.equal(console.log('Saldo insuficiente'));
  });
});