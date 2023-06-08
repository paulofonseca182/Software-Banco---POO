# Software-Banco---POO

 - Criando um novo software para um banco utiliazando Programacao Orientada a Objeto.

## Etapa 1

  - Deve ser possível clientes criarem contas com um valor depositado inicialmente;
  - Deve ser possível realizar um débito na conta, contanto que a pessoa possua saldo suficiente.
  - Deve ser possível realizar um pagamento, debitando da conta origem e creditando na conta destino
  - O pagamento deve ter um vencimento, caso seja efetivado após o vencimento, deve-se cobrar uma multa de 20%.

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

## Etapa 3
  
  - Conta Corrente possui um limite de cheque especial, podendo ficar no negativo, conta poupança não. 
  - Há mais tipos de pagamento:
    - Pagamento no Pix
      - Ao efetivar envia uma notificação ao BACEN
    - Pagamento no Cartão de Débito
      - Ao efetivar valida antifraude com a bandeira
    - Pagamento no Boleto
      - Apenas o pagamento via boleto tem vencimento e aplica multa no caso de atraso.
  - Ao ser efetivado, o pagamento gera um código de transação no formato `TT-UU`
    - T: timestamp do momento da efetivação
    - U: uuid 
  - O código de transação do pagamento via boleto tem um formato específico: `TT-UU-VV`
    - T: timestamp do momento da efetivação
    - U: uuid
    - V: timestamp do vencimento
  

### Especificações 

  - Reconhecer o polimorfismo como a capacidade de múltiplas classes implementarem um comportamento de formas diferentes.
  - Identificar a aplicação de polimorfismo com interfaces.
  - Utilizar a sobrescrita de métodos para aplicar o polimorfismo.
  - Utilizar classes e métodos abstratos para aplicar o polimorfismo.
  - Diferenciar características e comportamentos das classes (estáticos) e das instâncias (dinâmicos).
  - Utilizar membros estáticos para definir características e comportamentos das classes.