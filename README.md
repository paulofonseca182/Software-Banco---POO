# Software-Banco---POO

 - Criando um novo software para um banco.

## Etapa 1

* Deve ser possível clientes criarem contas com um valor depositado inicialmente;
* Deve ser possível realizar um débito na conta, contanto que a pessoa possua saldo suficiente.
* Deve ser possível realizar um pagamento, debitando da conta origem e creditando na conta destino
* O pagamento deve ter um vencimento, caso seja efetivado após o vencimento, deve-se cobrar uma multa de 20%.

## Especificações 

Conta: 
  - saldo
  - email

Pagamento:
  - origem
  - destino
  - valor
  - data de vencimento
  - data de pagamento

## Etapa 2

- Uma conta precisa ter um Email Válido
- Uma conta poupança deve poder prever o rendimento anual com base no saldo.
- Cada conta poupança pode ter um juros anual específico.
- Transferências devem poder ser realizadas de uma conta pra outra.
- Uma fila de Pagamentos e Transferências deve poder ser efetivada de uma vez.

## Especificações 

- Utilizar composição para dividir responsabilidades, desacoplar o código e tornar possível a reutilização
- Utilizar herança para especializar classes, reutilizando comportamentos em comum
- Utilizar interfaces para definir uma estrutura sem um comportamento especifífico