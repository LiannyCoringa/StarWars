# Boas-vindas ao repositório do projeto Star Wars Planets Search!

![img](projectIntro.gif)

Para realizar o projeto, atente a cada passo descrito a seguir e, se tiver qualquer dúvida, nos envie por Slack! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento de seu projeto a partir deste repositório utilizando uma branch específica e um Pull Request para colocar seus códigos.

# Termos e acordos

Ao iniciar este projeto, você concorda com as diretrizes do Código de Conduta e do Manual da Pessoa Estudante da Trybe.

# Entregáveis

<details>
  <summary><strong>🤷🏽‍♀️ Como entregar</strong></summary><br />

  Para entregar seu projeto, você deverá criar um Pull Request neste repositório.

  Lembre-se de que você pode consultar nosso conteúdo sobre [Git & GitHub](https://app.betrybe.com/course/4d67f5b4-34a6-489f-a205-b6c7dc50fc16/) e nosso [Blog - Git & GitHub](https://blog.betrybe.com/tecnologia/git-e-github/) sempre que precisar!
</details>

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />

  Você vai desenvolver uma lista com filtros de planetas do universo Star Wars usando **Context API e Hooks** para controlar os estados globais.

  **Segue link do deploy de um modelo do projeto:**
  https://trybe-starwars.surge.sh/

  :warning:**IMPORTANTE**: O modelo serve apenas para fins de ilustração. Para desenvolver o projeto, é necessário que você siga os requisitos apontados no readme.

</details>

<details>
  <summary><strong>:memo: Habilidades</strong></summary><br />

  Neste projeto, você irá:

  * Utilizar a _Context API_ do **React** para gerenciar estado.
  * Utilizar o _React Hook useState_.
  * Utilizar o _React Hook useContext_.
  * Utilizar o _React Hook useEffect_.
  * Criar _React Hooks_ customizados.
  * Escrever testes para garantir que sua aplicação tenha uma boa cobertura de testes.

</details>

<details>
  <summary><strong>🗓 Data de entrega</strong></summary><br />

  * Este projeto é individual;
  * São `X` dias de projeto;
  * Data para entrega final do projeto: `DD/MM/YYYY - 14:00h`.

</details>

# Orientações

<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary><br />

  1. Clone o repositório

  - Use o comando: `git clone git@github.com:tryber/sd-0x-project-starwars-planets-search.git`.
  - Entre na pasta do repositório que você acabou de clonar:
    - `cd sd-0x-project-starwars-planets-search`

  2. Instale as dependências

  - `npm install`.

  3. Crie uma branch a partir da branch `master`

  - Verifique se você está na branch `master`.
    - Exemplo: `git branch`
  - Se não estiver, mude para a branch `master`.
    - Exemplo: `git checkout master`
  - Agora, crie uma branch à qual você vai submeter os `commits` de seu projeto.
    - Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
    - Exemplo: `git checkout -b joaozinho-sd-0x-project-starwars-planets-search`

  4. Adicione as mudanças ao stage do Git e faça um `commit`

  - Verifique se as mudanças ainda não estão no stage.
    - Exemplo: `git status` (deve aparecer listada a pasta _joaozinho_ em vermelho)
  - Adicione o novo arquivo ao stage do Git.
    - Exemplo:
      - `git add .` (adicionando todas as mudanças – _que estavam em vermelho_ – ao stage do Git)
      - `git status` (deve aparecer listado o arquivo _joaozinho/README.md_ em verde)
  - Faça o `commit` inicial.
    - Exemplo:
      - `git commit -m 'iniciando o projeto x'` (fazendo o primeiro commit)
      - `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

  5. Adicione sua branch com o novo `commit` ao repositório remoto

  - Usando o exemplo anterior: `git push -u origin joaozinho-sd-0x-project-starwars-planets-search`

  6. Crie um novo Pull Request (PR)

  - Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-0x-project-starwars-planets-search/pulls)
  - Clique no botão verde _"New pull request"_
  - Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  - Coloque um título para a sua _Pull Request_
    - Exemplo: _"Cria tela de busca"_
  - Clique no botão verde _"Create pull request"_
  - Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
  - **Não se preocupe em preencher mais nada por enquanto!**
  - Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-0x-project-starwars-planets-search/pulls) e confira que o seu _Pull Request_ está criado

</details>

<details>
  <summary><strong>⌨️ Durante o desenvolvimento</strong></summary><br />

  - Faça `commits` das alterações que você fizer no código regularmente.

  - Lembre-se de sempre atualizar o repositório remoto após um ou alguns `commits`.

  - Os comandos que você utilizará com mais frequência são:
    1. `git status` (para verificar o que está em vermelho – fora do stage – e o que está em verde – no stage)
    2. `git add` (para adicionar arquivos ao stage do Git)
    3. `git commit` (para criar um commit com os arquivos que estão no stage do Git)
    4. `git push -u origin nome-da-branch` (para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)
    5. `git push` (para enviar o commit para o repositório remoto após o passo anterior)

</details>

<details>
  <summary><strong>🤝 Depois de terminar o desenvolvimento (opcional)</strong></summary><br />

  Para sinalizar que seu projeto está pronto para o _Code Review_, faça o seguinte:

  - Vá até a página **DO SEU** Pull Request, adicione a label **code-review** e marque seus colegas:

    - No menu à direita, clique no link **Labels** e escolha a label **code-review**.

    - No menu à direita, clique no link **Assignees** e escolha **seu usuário**.

    - No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-0x`.

  Caso tenha alguma dúvida, [assista a este vídeo explicativo](https://vimeo.com/362189205).

</details>

<details>
  <summary><strong>🕵🏿 Revisando um Pull Request</strong></summary><br />

  Use o conteúdo sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para revisar os Pull Requests.

</details>

<details>
  <summary><strong>🎛 Linter</strong></summary><br />

  Para garantir a qualidade de seu código de forma que ele seja mais legível, de fácil manutenção e seguindo as boas práticas de desenvolvimento, utilize neste projeto o linter `ESLint` e o `Stylelint`. Para rodar o linter localmente em seu projeto, execute o comando a seguir:

  ```bash
  npm run lint
  npm run lint:styles
  ```

  ⚠️ **IMPORTANTE!** ⚠️ Pull Requests com erros de linter não serão avaliados. Resolva os erros de linter antes de finalizar o desenvolvimento.
</details>

<details>
  <summary><strong>🛠 Testes</strong></summary><br />

* <details><summary><b> Execução de testes de requisito</b></summary>

  Os testes deste projeto foram feitos utilizando o [Cypress](https://www.cypress.io/how-it-works/). A resolução `1366 x 768` (1366 pixels de largura por 768 pixels de altura) é utiliza em testes de layout. Logo, recomenda-se desenvolver seu projeto usando a mesma resolução. Para facilitar a configuração dessa resolução, instale [este plugin](https://chrome.google.com/webstore/detail/window-resizer/kkelicaakdanhinjdeammmilcgefonfh?hl=en) do `Chrome`.

  Para o projeto ser validado, todos os testes de comportamento devem passar. É possível testar isso rodando `npm run cy`. Esse comando roda a suíte de testes do Cypress que valida se o fluxo geral e os requisitos funcionais estão funcionando como deveriam. Você pode também executar o comando `npm run cy:open` para ter um resultado visual dos testes executados.

  Esses testes não consideram o layout de maneira geral, mas, sim, os atributos e as informações corretas. Então, preste atenção nisso! Os testes devolverão uma mensagem de erro caso não estejam passando (seja qual for o motivo). 😉
  </details>

* <details><summary><b> Execução de um teste específico</b></summary>

  Para executar somente uma `spec` de testes, você pode selecionar qual delas você deseja após executar o comando `npm run cy:open`. Além disso, você pode rodar todas as `specs` clicando no botão `Run all specs`.

  ![img](./cypress-specs.jpeg)

  **Atenção**: Sua aplicação deve estar rodando para o Cypress no terminal poder testar.
  </details>

* <details><summary><b> Execução de teste de cobertura</b></summary>

  Alguns requisitos irão pedir para a você que desenvolva testes para sua aplicação. Esses testes serão avaliados por meio da cobertura de testes.

  É possível verificar o percentual da cobertura de testes com o comando `npm run coverage`. Caso queira visualizar melhor o resultado do teste, esse comando irá gerar uma pasta `coverage` na raiz de seu projeto. Dentro dela, você encontrará um arquivo `index.html`. Abra-o em seu navegador para visualizar a cobertura de testes.
  </details><br />
</details>

</details>

<details>
  <summary><strong>:convenience_store: Desenvolvimento </strong></summary><br />

  Neste projeto, você utilizará **Context API e Hooks** para desenvolver uma lista com filtros de planetas do universo Star Wars.

  Este repositório já contém um template de uma aplicação React criado e configurado. Após clonar o projeto e instalar as dependências, você poderá criar sua branch e iniciar o trabalho.

  O modelo do projeto pode ser acessado [neste link](https://trybe-starwars.surge.sh/).

  :warning: **IMPORTANTE**: O modelo serve apenas para fins de ilustração. Para desenvolver o projeto, é necessário que você siga os requisitos apontados no readme.
</details>

<details>
  <summary><strong>🗣 Nos dê feedbacks sobre o projeto!</strong></summary><br />

Ao finalizar e submeter o projeto, não se esqueça de avaliar sua experiência preenchendo o formulário a seguir.
**Leva menos de 3 minutos!**

[FORMULÁRIO DE AVALIAÇÃO DE PROJETO](https://be-trybe.typeform.com/to/ZTeR4IbH)

</details>

<details>
  <summary><strong>💻 Protótipo do projeto no Figma</strong></summary><br />

  Além da qualidade do código e do atendimento aos requisitos, um bom layout é um dos aspectos responsáveis por melhorar a usabilidade de uma aplicação e turbinar seu portfólio!

  Você pode estar se perguntando: *Como deixo meu projeto com um layout mais atrativo?* 🤔

  Para isso, disponibilizamos [este protótipo do Figma](https://www.figma.com/file/Z7MzAgaMHyd4DYaLGQX830/%5BProjeto%5D%5BFrontend%5D-StarWars?node-id=0%3A1) para ajudar você!

  ⚠️ A estilização de sua aplicação não será avaliada nesse projeto. Portanto, esse protótipo é apenas uma **sugestão** e seu uso é **opcional**. Sinta-se à vontade para modificar o layout e deixá-lo do seu jeito.

</details>

<details>
  <summary><strong>🗂 Compartilhe seu portfólio!</strong></summary><br />

  Você sabia que o LinkedIn é a principal rede social profissional e compartilhar o seu aprendizado lá é muito importante caso deseje construir uma carreira de sucesso? Compartilhe este projeto em seu LinkedIn, marque o perfil da Trybe (@trybe) e mostre à sua rede toda a sua evolução.
</details>

# Requisitos

 ⚠️ **IMPORTANTE! PULL REQUESTS COM ISSUES DE LINTER NÃO SERÃO AVALIADAS.** :warning:

:warning: Os GIFs são meramente ilustrativos para visualizar o fluxo da aplicação. Os nomes devem seguir os requisitos e não o GIF. :warning:

---

## 1 – Faça uma requisição para o endpoint `/planets` da API de Star Wars e preencha uma tabela com os dados retornados, com exceção dos dados da coluna `residents`

<details><summary> Ilustração da tabela:</summary>

  ![image](req-1.png)
</details><br />

<details><summary> A tabela deve ser renderizada por um componente chamado <code>Table</code>:</summary>

  - Você deve apagar a coluna `residents` de cada planeta antes de salvar os dados recebidos da API no contexto.
  - A requisição deve ser feita em um componente separado do componente da tabela.
  - A API a ser consultada está [neste link](https://swapi.dev/api/planets). Você deverá fazer um fetch para a URL `https://swapi.dev/api/planets`.
  - A primeira linha da tabela deve conter os headers de cada coluna. As demais linhas serão as informações de cada planeta recebido da API.
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary><br />

- Realiza uma requisição para a API.
- Preenche a tabela com os dados retornados.
- Verifica se a tabela tem 13 colunas.
- Verifica se a tabela tem uma linha para cada planeta retornado.
</details>

---

## 2 – Crie um filtro de texto para a tabela
<details><summary> A tabela deve ser atualizada com os planetas que se encaixam no filtro à medida que o nome é digitado, sem ter de apertar um botão para efetuar a filtragem. Por exemplo, se for digitado "Tatoo" no campo de texto, o planeta "Tatooine" deve ser exibido, como demonstrado na <b>ilustração</b>:</summary>

  ![img](req-2.gif)
</details><br />

<details><summary>Observações técnicas</summary>

  - O campo de texto deve possuir a propriedade `data-testid='name-filter'` para que a avaliação automatizada funcione.
  - Você deve usar **Context API e Hooks** para fazer o gerenciamento do estado da aplicação. Isso facilitará o desenvolvimento dos próximos requisitos.
</details>


<br /><details>
  <summary><strong>O que será verificado</strong></summary><br />

- Renderiza o campo de texto para o filtro de nomes.
- Filtra os planetas que têm a letra "o" no nome.
- Filtra planetas que têm as letras "oo" no nome.
- Realiza os dois filtros acima em sequência e, depois, testa a remoção do filtro por texto.
</details>

---

## 3 – Crie um filtro para valores numéricos

<details><summary> O filtro funcionará com três seletores:</summary>

  - O primeiro deve abrir um dropdown que permita a quem usa selecionar uma das seguintes colunas: `population`, `orbital_period`, `diameter`, `rotation_period` e `surface_water`. Deve ser uma tag `select` com a propriedade `data-testid='column-filter'`.
  - O segundo deve determinar se a faixa de valor será `maior que`, `menor que` ou `igual a` o numero que virá a seguir. Deve ser uma tag `select` com a propriedade `data-testid='comparison-filter'`.
  - O terceiro deve ser uma caixa de texto que só aceita números. Essa caixa deve ser uma tag `input` com a propriedade `data-testid='value-filter'`.
  - Deve haver um botão para acionar o filtro, com a propriedade `data-testid='button-filter'`.
</details>

<details><summary> A combinação desses três seletores, após a pessoa usuária clicar no botão, deve filtrar os dados da tabela de acordo com a coluna correspondente e com os valores escolhidos. Por exemplo:</summary>

  - A seleção `population | maior que | 100000` seleciona somente planetas com mais de 100000 habitantes.
  - A seleção `diameter | menor que | 8000` seleciona somente planetas com diâmetro menor que 8000.
</details>

<details><summary><b>Ilustração do filtro:</b></summary>

  ![img](req-3.gif)
</details><br />


<details><summary>Observações técnicas</summary>

  - Você deve usar **Context API e Hooks** para fazer o gerenciamento do estado da aplicação. Isso facilitará o desenvolvimento dos próximos requisitos.

</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary><br />

- Renderiza o select de coluna e suas opções.
- Renderiza o select de comparação e suas opções.
- Renderiza o input para o valor do filtro.
- Renderiza o botão para executar a filtragem.
- Verifica se os valores iniciais de cada campo são (`population` | `maior que` | `0`).
- Utiliza o botão de filtrar sem alterar os valores iniciais dos inputs de filtro.
- Filtra utilizando a comparação "menor que".
- Filtra utilizando a comparação "maior que".
- Filtra utilizando a comparação "igual a".
</details>

---

## 4 – Implemente múltiplos filtros numéricos

<details><summary> Deverá ser possível adicionar múltiplos filtros numéricos. Todos os filtros adicionados devem funcionar de forma conjunta:</summary>

  ![img](req-4.gif)
</details><br />

Por exemplo, você pode filtrar pelos planetas que tenham _Orbital period maior que 400_  **e** _Diameter menor que 10000_.

<br /><details>
  <summary><strong>O que será verificado</strong></summary><br />

- Adiciona dois filtros e verifica se a tabela foi atualizada com as informações filtradas.
- Adiciona três filtros e verifica se a tabela foi atualizada com as informações filtradas.
</details>

---

## 5 – Desenvolva testes para atingir 30% de cobertura total da aplicação

>:eyes: Observação: neste requisito, cubra a aplicação com testes unitários utilizando a biblioteca [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/). Aproveite essa oportunidade para colocar em prática o [Desenvolvimento Orientado por Testes](https://blog.betrybe.com/tecnologia/tdd-test-driven-development/).

<details><summary>Observações técnicas</summary>

  * Os testes criados por você não influenciarão os outros requisitos no avaliador. Você deverá desenvolver seus testes unitários e de integração usando a biblioteca React Testing Library, enquanto o avaliador usará a biblioteca [Cypress](https://docs.cypress.io/) para avaliar os requisitos, inclusive os de cobertura.
</details><br />

<br /><details>
  <summary><strong>O que será verificado</strong></summary><br />

  * Será validado se, ao executar `npm run coverage`, são obtidos os seguintes resultados:
      * `% Stmts` da linha `All files` é maior ou igual a 30.
      * `% Branch` da linha `All files` é maior ou igual a 30.
      * `% Funcs` da linha `All files` é maior ou igual a 30.
</details>

---

## 6 – Não utilize filtros repetidos

<details><summary> Caso um filtro seja totalmente preenchido, um novo filtro de valores numéricos deve ser carregado.</summary>

  * Esse novo filtro não deve incluir quaisquer colunas que já tenham sido selecionadas em filtros de valores numéricos anteriores.
  * Caso todas as colunas já tenham sido inclusas em filtros anteriores, não deve ser carregado um novo filtro.
  * Você deve usar **Context API e Hooks** para fazer o gerenciamento do estado da aplicação.
</details>

<details><summary> Ilustração:</summary>

  ![img](req-6.gif)
</details><br />

<details><summary> Exemplo:</summary>

  - O primeiro filtro tem as seguintes seleções: `population | maior que | 100000`.
  - Um segundo filtro deve aparecer após essas seleções serem todas feitas.
  - No primeiro dropdown deste segundo filtro, a opção `population` deve estar ausente.
  - <details><summary> Se, no segundo filtro, fosse selecionado `diameter | menor que | 8000`, o estado ficaria assim:</summary>

    ```javascript
    {
      filterByNumericValues: [
        {
          column: 'population',
          comparison: 'maior que',
          value: '100000',
        },
        {
          column: 'diameter',
          comparison: 'menor que',
          value: '8000',
        }
      ]
    }
    ```
  </details>


<br /><details>
  <summary><strong>O que será verificado</strong></summary><br />

- Filtra por população e remove a opção `population` das opções do dropdown de filtro por coluna.
- Filtra por diâmetro e remove a opção `diameter` das opções do dropdown de filtro por coluna.
- Filtra por superfície aquática e remove a opção `surface_water` das opções do dropdown de filtro por coluna.
- Filtra por período em órbita e remove a opção `orbit_period` das opções do dropdown de filtro por coluna.
- Filtra por período em rotação e remove a opção `rotation_period` das opções do dropdown de filtro por coluna.
</details>

---

## 7 – Apague um filtro de valor numérico ao clicar no ícone `X` de um dos filtros e apague todas as filtragens numéricas simultaneamente ao clicar em outro botão `Remover todas filtragens`.

* <details><summary> O <code>button</code> que permite exclusão de um filtro deve existir em todos os filtros de valores numéricos:</summary>

  - Cada linha que demonstra o filtro já utilizado deve ter a propriedade `data-testid='filter'`, com um `button` que deve ser filho direto da tag onde foi utilizado o `data-testid='filter'`.
  - Após a exclusão, a coluna que esse filtro selecionava deve passar a ficar disponível nos dropdowns dos demais filtros já presentes na tela.
  - Você deve usar **Context API e Hooks** para fazer o gerenciamento do estado da aplicação.
  - <details><summary> Exemplo:</summary>

    ```html
    data-testid='filter'
        ⬑ column
        ⬑ comparison
        ⬑ value
        ⬑ button
    ```
  </details>
</details>


* O button `Remover todas filtragens` deverá possuir o `data-testid='button-remove-filters'`. Esse button será responsável pela remoção de todos os filtros numéricos simultaneamente.

<details><summary> Ilustração do requisito:</summary>

  ![img](req-7.gif)
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary><br />

- Adiciona um filtro e verifica se a tabela foi atualizada com as informações filtradas. Depois, remove o filtro e verifica se os valores da tabela voltaram ao original.
- Adiciona dois filtros e verifica se a tabela foi atualizada com as informações filtradas. Depois, remove os filtros e verifica se os valores da tabela voltaram ao original.
- Adiciona três filtros e verifica se a tabela foi atualizada com as informações filtradas. Depois, remove os filtros utilizando o botão `button-remove-filters` e verifica se os valores da tabela voltaram ao original.
</details>

---

## 8 – Desenvolva testes para atingir 60% de cobertura total da aplicação

<details><summary>Observações técnicas</summary>

  * Os testes criados por você não influenciarão os outros requisitos no avaliador. Você deverá desenvolver seus testes unitários e de integração usando a biblioteca React Testing Library, enquanto o avaliador usará a biblioteca [Cypress](https://docs.cypress.io/) para avaliar os requisitos, inclusive os de cobertura.
</details><br />

<br /><details>
  <summary><strong>O que será verificado</strong></summary><br />

  * Será validado se, ao executar `npm run coverage`, são obtidos os seguintes resultados:
    * `% Stmts` da linha `All files` é maior ou igual a 60.
    * `% Branch` da linha `All files` é maior ou igual a 60.
    * `% Funcs` da linha `All files` é maior ou igual a 60.
</details>

---

## 9 – Ordene as colunas de forma ascendente ou descendente

* A ordenação deve ser feita via filtro: um dropdown selecionará a coluna a basear a ordenação e um par de radio buttons determinará se a coluna é ascendente ou descendente.

* <details><summary> A informação acerca da ordenação das colunas deve ser armazenada em um novo campo <code>{ order: { column: 'population', sort: 'ASC'} }</code>:</summary>

  - O campo `column` representa o nome da coluna a ordenar.
  - O campo `sort` representa a ordenação, em que 'ASC' ascendente e 'DESC' descendente.
</details>

* <details><summary> O dropdown deve ser um elemento <code>select</code>:</summary>

  - O `dropdown` precisa ter a propriedade `data-testid='column-sort'`.
  - <details><summary> As colunas selecionáveis por meio desse <code>dropdown</code> são:</summary>

    - 'population';
    - 'orbital_period';
    - 'diameter';
    - 'rotation_period';
    - 'surface_water'.
    </details>
</details>

* <details><summary> É necessário ter dois <code>inputs</code> de tipo <code>radio</code>:</summary>

  - O primeiro deve ter o atributo `data-testid='column-sort-input-asc'` e `value` sendo `ASC`,
  - O segundo deve ter o atributo `data-testid='column-sort-input-desc'` e `value` sendo `DESC`.
</details>

* :eyes: Caso a coluna ordenada tenha planetas com valores `unknown`, você deverá ordenar os planetas de forma que os valores `unknown` fiquem em último lugar na ordenação.

* Por fim, crie um botão para submeter a ordenação, com uma tag `button` e a propriedade `data-testid='column-sort-button'`.

* Adicione o atributo `data-testid` com o valor `planet-name` em todos os elementos da tabela que tenham o nome de um planeta.

<details><summary><b> Ilustração do requisito:</b></summary>

  ![img](req-9.gif)
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary><br />

- Ordena os planetas do maior período orbital para o menor período orbital.
- Ordena os planetas do menor diâmetro para o maior diâmetro.
- Ordena os planetas do menos populoso para o mais populoso:
    - Verifica se os oito primeiros planetas estão ordenados corretamente.
    - Verifica se os dois últimos planetas têm os valores `unknown` na coluna population.
- Ordena os planetas do mais populoso para o menos populoso:
    - Verifica se os oito primeiros planetas estão ordenados corretamente.
    - Verifica se os dois últimos planetas têm os valores `unknown` na coluna population.

</details>

---

# Requisito Bônus

## 10 – Desenvolva testes para atingir 90% de cobertura total da aplicação

<details><summary>Observações técnicas</summary>

  * Os testes criados por você não influenciarão os outros requisitos no avaliador. Você deverá desenvolver seus testes unitários e de integração usando a biblioteca React Testing Library, enquanto o avaliador usará a biblioteca [Cypress](https://docs.cypress.io/) para avaliar os requisitos, inclusive os de cobertura.
</details><br />

<br /><details>
  <summary><strong>O que será verificado</strong></summary><br />

  * Será validado se, ao executar `npm run coverage`, são obtidos os seguintes resultados:
    * `% Stmts` da linha `All files` é maior ou igual a 90.
    * `% Branch` da linha `All files` é maior ou igual a 90.
    * `% Funcs` da linha `All files` é maior ou igual a 90.
</details>
