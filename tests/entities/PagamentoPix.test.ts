import { expect } from 'chai';
import ContaPoupanca from '../../src/entities/Contas/ContaPoupanca';
import Email from '../../src/entities/Email';
import PagamentoPix from '../../src/entities/Pagamentos/PagamentoPix';

describe(`PagamentoPix deve ser possivel criar uma instancia
 e efetivar o pagamentoPix`, () => {
  const conta1 = new ContaPoupanca(100, new Email('teste@teste.com'), 0.1);
  const conta2 = new ContaPoupanca(100, new Email('teste1@teste.com'), 0.1);
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
    expect(conta1.saldo).to.be.equal(100);
    expect(conta2.saldo).to.be.equal(100);
    pagamento.efetivar();
    expect(conta1.saldo).to.be.equal(50);
    expect(conta2.saldo).to.be.equal(150);
  });
});