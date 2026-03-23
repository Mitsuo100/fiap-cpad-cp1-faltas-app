# Registro de Faltas - FIAP

## a) Sobre o Projeto

O Registro de Faltas é um aplicativo mobile desenvolvido com React Native e Expo que permite gerenciar a presença de alunos de forma simples e eficiente.

O objetivo do app é substituir o controle manual de faltas, oferecendo uma solução digital para registro e consulta rápida.

### Operação escolhida
A operação escolhida foi a gestão acadêmica, pois o controle de presença é essencial no acompanhamento de alunos e no ambiente educacional.

### Funcionalidades implementadas
- Listagem de alunos
- Cadastro de novos alunos
- Registro de faltas por aluno
- Visualização do histórico de faltas
- Navegação entre telas com Expo Router
- Interface estilizada com tema escuro

---

## b) Integrantes do Grupo

- Pedro Mitsuo Risardi Nisiaymamoto  

---

## c) Como Rodar o Projeto

### Pré-requisitos
- Node.js instalado
- Expo CLI (via npx)
- Android Studio (emulador) ou celular com Expo Go

### Passo a passo

git clone https://github.com/Mitsuo100/fiap-cpad-cp1-faltas-app.git  
cd fiap-cpad-cp1-faltas-app  
npm install  
npx expo start -c  

Para abrir no Android:
- Pressione "a" no terminal  
ou  
npx expo start --android  

---

## d) Demonstração

### Prints das telas

#### Tela Inicial
![Home](assets/home.png)

#### Histórico
![Histórico](assets/historico.png)

#### Cadastro
![Cadastro](assets/cadastro.png)

### Vídeo

Demonstração do funcionamento do app:

![Demonstração](assets/demo.gif)

---

## e) Decisões Técnicas

### Estrutura do projeto
O projeto foi organizado em:
- app/ → telas e navegação
- data/ → gerenciamento de dados
- components/ → componentes reutilizáveis

### Hooks utilizados
- useState para controle de estado
- useEffect (quando necessário)

### Navegação
Foi utilizada navegação com Expo Router, permitindo transição entre as telas do aplicativo.

---

## f) Próximos Passos

- Implementar persistência de dados com AsyncStorage
- Evitar cadastro de alunos duplicados
- Adicionar opção de remover alunos
- Melhorar a interface com animações
- Criar gráficos de faltas

---

## Status do Projeto

Funcional e pronto para avaliação.