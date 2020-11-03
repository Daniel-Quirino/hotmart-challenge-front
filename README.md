<p align="center"><img src="https://logodownload.org/wp-content/uploads/2018/03/hotmart-logo.png" width="30%"/></p>

<h2 align="center">📊 Hotmart Challenge</h2>

## Conteúdo

- [Conteúdo](#conteúdo)
- [Início](#início)
- [Estrutura de diretórios](#estrutura-de-diretórios)
- [Executando localmente](#executando-localmente)
- [Arquitetura](#arquitetura)
  - [Organização de pastas](#organização-de-pastas)
  - [Common](#common)
  - [Enum](#enum)
  - [Infrastructure](#Infrastructure)
  - [Mocks](#mocks)
  - [Pages](#pages)
  - [Testes](#testes)
- [Gerenciador de Estado](#gerenciador-de-estado)
- [Arquitetura das APIs](#arquitetura-das-apis)
- [Testes](#testes)
- [Servidor e armazenamento de arquivos](#servidor-e-armazenamento-de-arquivos)

## Início

Clone o projeto localmente:
```bash
git clone https://github.com/Daniel-Quirino/hotmart-challenge-front
```

## Estrutura de diretórios

- Gerenciador de pacotes padrão: [yarn](https://yarnpkg.com/)
- Back-end (API): [Nodejs](https://nodejs.org/en/)
- Front-end (Client): [Reactjs](https://pt-br.reactjs.org/)

```bash
├── public
├── src
│    ├── Test
|    |    └── Unitary
|    |
│    ├── Common  
|    ├── Enum
│    ├── Mock
│    ├── Infrastructure
│    │          ├── Actions  
│    │          ├── Services
│    │          └── Store 
|    │
│    ├── Pages
|    │     ├── AntipationRefund
|    │     └── Components
|    └── ...       ├── Header
|                  └── Timeline
|
|
├── package.json
├── ...
└── README.md
```

## Executando localmente
 
- Baixar as dependências 
`yarn start`

- Inicializar o projeto 
`yarn start`

## Arquitetura
A arquitetura pensada para resolver esse problema proposto pela Hotmart foi feita da seguinte maneira:

### Organização de pastas 
O projeto foi feito pensando em escalabilidade, portanto foram criados pastas que abarcariam necessidades de todas as páginas e componentes.
Pastas gerais: Common / Enum / Infrastructure / Mocks / Pages.

### Common
A ideia dessa pasta é abarcar todos os métodos que poderiam ser utilizados em todas as aplicações, um exemplo utilizado nesse projeto foi o tratamento de datas, que pode ser algo genérico a toda a aplicação.

### Enum
Pasta em que possui conjuntos fixos de constantes utilizadas na aplicação.

### Infrastructure
Nessa pasta possui a arquitetura de chamadas de APIs, ela será explicada com mais detalhes posteriormente.

### Mocks
Nessa pasta possui alguns dados mockados apenas para possibilitar os testes unitários.

### Pages
Nesse diretório possui todas as páginas que a aplicação poderia ter, nessa aplicação, como só temos uma única página, essa ideia foi feita apenas pensando em escalabilidade

## Testes
- Testes unitários:
Foram feitos testes unitários para algumas funções do javaScript. Foram criandos também arquivos de Mock para podere facilitar em alguns testes. Esses testes e mocks se encontram no seguinte diretório:

```bash
├── src
│    ├── Test
|    |    └── Unitary
|    ├── Mock
|    └── ...
|
└── ...
```
Para testá-los, basta rodar o seguinte comando no diretório raiz
`yarn test`

## Gerenciador de Estado
O gerenciador de estado utilizado foi o React Context. Essa arquitetura possibilita a termos um estado global na aplicação (arquito Store.js). Dessa forma, podemos ter uma mudança em um componente e essa mudança ser observada em outro componente.

Como no projeto proposto, tinhamos apenas uma tela, não teria uma necessidade de possuir esse tipo de gerenciador de estado. Porém, como a ideia era fazer um projeto mais escalável, foi escolhido essa arquitetura, pois ela permite uma interação melhor entre componentes.
Foi escolhico React Context ao inves do Redux pelo fato dele ser mais simples para implementar e, nesse caso, pela simplicidade da aplicação, não teria necessidade de fazer uma  configuração mais complexa.

## Arquitetura das APIs
Para manter sempre a modularização, essa arquitetura para poder chamar as APIs foi feita de forma a retirar a lógica de serviços dos componentes do react, de forma que se, posteriormente, fosse necessário chamar a mesma API, bastasse chamar a mesma Action que todo o restante já estaria configurado.

No diretório 'Infrastructure', possui 3(três) arquivos, que servem para as seguintes funções:
Actions -> Arquivo de ponto inicial para poder chamar a API, é o método nesse arquivo que será chamado pelos componentes do React. Além disso, esse arquivo irá possibilitar dar um dispatch no arquivo de Store e alterar o estado Global da Aplicação
Server -> Arquivo que fará a chamada da API (chamar o endpoint), e pode fazer algum tratamento dos dados retornados do endpoint antes de mandar as informações para o Store.js
Store -> Arquivo onde é iniciado e gerenciado e estado da Global da Aplicação. O JSON desse arquivo pode ser acessado por qualquer componente da aplicação. Além disso, ele recebe o dispatch da Action para poder alterar o estado Global.

```bash
├── Infrastructure
│       ├── Actions  
│       ├── Services
│       └── Store 
└── ...
```

## Servidor e armazenamento de arquivos
O projeto foi feito apenas no intuito de ser rodado localmente, não está hospedado em nenhum servidor
