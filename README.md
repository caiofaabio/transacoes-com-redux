## README - RainbowKit Next.js Project
![image](https://github.com/caiofaabio/transacoes-com-redux/assets/109986771/51e49b06-8d60-48c8-8ffb-606a98edf52c)

Este projeto é um exemplo de integração do RainbowKit com Next.js, utilizando o Redux para gerenciamento de estado. O RainbowKit é uma biblioteca que fornece componentes e utilitários para interações com carteiras de criptomoedas em aplicativos web.
Tecnologias Utilizadas

   * Next.js
   * React
   * Redux
   * RainbowKit

## Configuração do RainbowKit

O RainbowKit é configurado no arquivo RootLayout.tsx. Ele define a configuração do RainbowKit, incluindo os wallets padrão, provedores de blockchain, configuração de conexão automática e outras opções.

No arquivo layout.tsx, você pode personalizar a configuração do RainbowKit de acordo com suas necessidades. Certifique-se de fornecer corretamente o ID do projeto RainbowKit e a chave do Alchemy API nas variáveis de ambiente.
Estrutura do Projeto

   * pages/ - Este diretório contém as páginas do Next.js. No momento, há apenas a página inicial (index.tsx), mas você pode adicionar outras páginas conforme necessário.

   * components/ - Este diretório contém componentes reutilizáveis. No momento, há o componente TransactionList, que renderiza uma lista de transações.

   * Store/ - Este diretório contém a configuração do Redux, incluindo o arquivo store.ts que cria a store e o arquivo transactionReducer.ts que define o reducer para as transações.

   * styles/ - Este diretório contém arquivos de estilo CSS para estilização dos componentes.
