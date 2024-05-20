# Controle de Ponto - Frontend

[![License](https://img.shields.io/github/license/saluki/nestjs-template.svg)](https://github.com/saluki/nestjs-template/blob/master/LICENSE)

## 🚀 Começando

Bem-vindo ao projeto Controle de Ponto, desenvolvido como parte do Teste Técnico - Fullstack para a Ilumeo Data Science. Este projeto tem como objetivo criar uma aplicação para controle de ponto dos colaboradores, permitindo que visualizem suas horas trabalhadas de forma clara e intuitiva.

## 🎯 Objetivo

- **Visualização atualizada das horas trabalhadas no dia atual:** Os colaboradores podem ver em tempo real as horas que já trabalharam no dia.

- **Possibilidade de iniciar ou finalizar um turno:** Os colaboradores podem registrar o início e o fim de seus turnos de trabalho.
- **Acompanhamento do total de horas trabalhadas nos dias anteriores:** Os colaboradores podem acompanhar um histórico detalhado de suas horas trabalhadas.

## ⚙️ Tecnologias Utilizadas

- React: Biblioteca principal para construção da interface de usuário.
- TailwindCSS: Framework de CSS utilitário para estilização.
- Axios: Biblioteca para realizar requisições HTTP.
- TypeScript: Superset de JavaScript que adiciona tipagem estática.

## 🔧 Instalação e Configuração

### Passo a Passo

1. Clone o repositório:

   ```sh
    git clone https://github.com/seu-usuario/controle-ponto-frontend.git
   ```

2. Navegue até o diretório do backend:

   ```sh
    cd controle-ponto-frontend
   ```

3. Instale as dependências:
   ```sh
   npm install
   ```
4. Configure as variáveis de ambiente:

   Crie um arquivo .env na raiz do projeto com a seguinte variavel

   ```sh
    NEXT_PUBLIC_API_BASE_URL=https://controle-ponto-backend.onrender.com
   ```

## 💻 Executando o Servidor

Para iniciar o servidor em modo de desenvolvimento, utilize o comando:

```sh
npm run dev
```

O servidor estará disponível em http://localhost:3000.

## ☕ Conclusão

Este projeto fornece uma interface de usuário intuitiva e responsiva para o controle de ponto dos colaboradores da Ilumeo Data Science. A aplicação frontend foi desenvolvida seguindo boas práticas de desenvolvimento, incluindo o uso de TypeScript. Através dessa aplicação, os colaboradores podem facilmente acompanhar suas horas trabalhadas, garantindo transparência e eficiência no controle de ponto.
