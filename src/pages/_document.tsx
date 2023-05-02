import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

// O document, é utilizado para ser renderizado na parte do servidor,
// Sendo chamado apenas uma vez
// Inicializa as bibliotecas javascripts e css necessarias para a pagina, alem de outras configurações
// Caso fosse removida, o next usaria o _app como componente de renderização
// mas para customizações é necessario o document

// Html representa o html da pagina, com o lang servindo para ajudar o assistente de acessibilidade
// para os mecanismos de busca

// Head serve para representar a seção do head do documento
// onde pode colocar links, metas e configurações
// links, estilos e scripts

// Main para adicionar o conteudo principal, que renderiza as pagina,
// renderizada dinamicamente pelo next.js

// NextScript, para renderizar scripts necessarios na pagina
// incluindo do react e do next, e as que podemos adicionar
