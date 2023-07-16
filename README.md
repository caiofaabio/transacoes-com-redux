## README - RainbowKit Next.js Project

![Captura de tela 2023-07-16 094105](https://github.com/caiofaabio/transacoes-com-redux/assets/109986771/2116cfd7-7343-4465-bd71-c7f839c60806)

Este projeto é um exemplo de integração do RainbowKit com Next.js, utilizando o Redux para gerenciamento de estado. O RainbowKit é uma biblioteca que fornece componentes e utilitários para interações com carteiras de criptomoedas em aplicativos web.
Tecnologias Utilizadas

   * Next.js
   * React
   * Redux
   * RainbowKit

## Última funcionalidade implementada
A função handleCallContract é responsável por assinar um contrato inteligente e interagir com ele na blockchain Ethereum. Através do uso da biblioteca Web3, o usuário pode executar uma transação no contrato, invocando uma função específica e passando os parâmetros necessários.

  *  Verifica a existência do objeto window.ethereum para garantir que a extensão MetaMask ou uma carteira Ethereum compatível esteja instalada no navegador.

   * Chama o método window.ethereum.enable() para solicitar permissão ao usuário para acessar sua conta Ethereum.

    * Cria uma instância da classe Web3 utilizando o objeto window.ethereum para interagir com a blockchain Ethereum.

    * Cria uma instância da classe Contract do Web3, passando o ABI (Application Binary Interface) e o endereço do contrato como parâmetros. O ABI é uma descrição em JSON das funções e eventos disponíveis no contrato.

    * Obtém as contas disponíveis do usuário utilizando o método web3.eth.getAccounts().

 *   Envia a transação chamando o método send na função sumNumbers do contrato, passando o número como parâmetro e a conta do usuário que está realizando a transação.

  *  Em caso de sucesso, a transação é enviada e executada na blockchain.

   * Em caso de erro, uma mensagem de erro é exibida no console.

## Configuração do RainbowKit

O RainbowKit é configurado no arquivo RootLayout.tsx. Ele define a configuração do RainbowKit, incluindo os wallets padrão, provedores de blockchain, configuração de conexão automática e outras opções.

No arquivo layout.tsx, você pode personalizar a configuração do RainbowKit de acordo com suas necessidades. Certifique-se de fornecer corretamente o ID do projeto RainbowKit e a chave do Alchemy API nas variáveis de ambiente.
Estrutura do Projeto

   * pages/ - Este diretório contém as páginas do Next.js. No momento, há apenas a página inicial (index.tsx), mas você pode adicionar outras páginas conforme necessário.

   * components/ - Este diretório contém componentes reutilizáveis. No momento, há o componente TransactionList, que renderiza uma lista de transações.

   * Store/ - Este diretório contém a configuração do Redux, incluindo o arquivo store.ts que cria a store e o arquivo transactionReducer.ts que define o reducer para as transações.

   * styles/ - Este diretório contém arquivos de estilo CSS para estilização dos componentes.
