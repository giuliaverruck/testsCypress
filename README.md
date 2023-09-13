# Projeto de Automação de Testes Cypress para E-commerce Online

Este projeto é um exemplo de automação de testes Cypress para um e-commerce online. Ele inclui testes para várias funcionalidades, como registro de usuário, login, carrinho de compras, checkout, pesquisa de produtos e muito mais.

## Configuração do Ambiente

Certifique-se de que você possui o seguinte software instalado antes de executar os testes:

- [Node.js](https://nodejs.org/)
- [Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress)

Após a instalação, siga estas etapas:

1. Clone este repositório:

   ```
   git clone https://github.com/seu-usuario/seu-projeto.git
   ```

2. Navegue até o diretório do projeto:

   ```
   cd seu-projeto
   ```

3. Instale as dependências:

   ```
   npm install
   ```

## Estrutura do Projeto

O projeto está organizado da seguinte maneira:

- `cypress/` - Contém os testes Cypress.
- `cypress/fixtures/` - Armazena dados de teste, como usuários de exemplo.
- `cypress/integration/` - Contém os casos de teste organizados em subdiretórios por funcionalidade.
- `cypress/locators/` - Armazena os seletores de elementos da página.
- `cypress/pages/` - Contém classes de página que definem interações com as páginas.

## Execução de Testes

Para executar os testes, você pode usar o seguinte comando:

```
npm run cypress:run
```

Isso iniciará a execução dos testes em modo headless. Para executar no modo interativo (usando a interface do Cypress), você pode usar:

```
npm run cypress:open
```

## Contribuindo

Se você quiser contribuir para este projeto, sinta-se à vontade para abrir uma Issue ou enviar um Pull Request. Estamos abertos a melhorias e sugestões.

## Licença

Este projeto é licenciado sob a [Licença MIT](LICENSE).
```