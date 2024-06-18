# Events Manager - Backend
Projeto do Módulo 6 - Empregabilidade já (PdA)

> #### STATUS: 🚧Em desenvolvimento🚧

## Contextualização do Projeto
#### Este projeto foi desenvolvido para gerenciar eventos, organizadores e participantes. O sistema permite criar, atualizar, visualizar e deletar eventos, além de gerenciar as associações entre organizadores e eventos e entre participantes e eventos. A estrutura do banco de dados foi projetada para suportar múltiplos organizadores por evento e múltiplos participantes inscritos em diversos eventos, proporcionando flexibilidade e escalabilidade.

## Tecnologias Utilizadas
- **Node.js:** Ambiente de execução JavaScript para o backend.
- **Express:** Framework para Node.js para criação de servidores web.
- **Sequelize:** ORM (Object-Relational Mapping) para Node.js, utilizado para interagir com o banco de dados MySQL.
- **MySQL:** Sistema de gerenciamento de banco de dados relacional.

## Funcionalidades
##### ✅ Gerenciamento de Eventos(CRUD)

##### ✅ Gerenciamento de Organizadores(CRUD)

##### ✅ Gerenciamento de Participantes(CRUD)

##### ⚒️ Associações 🚧
- ❌ Associar Organizadores a Eventos
- ❌ Associar Participantes a Eventos
--- 

## Passo a Passo para Execução do Projeto
## Pré-requisitos
- Node.js e npm instalados
- MySQL instalado e em execução
  
## Configuração do Ambiente

**1. Clone o Repositório**

```bash
git clone https://github.com/devoziel-s/M6-Events-Manager-BackEnd.git
cd M6-Events-Manager-BackEnd
```
**2. Instale as Dependências**

```bash

npm install
```

## Configuração do Banco de Dados

**- Crie um arquivo .env na raiz do projeto e configure as variáveis de ambiente conforme necessário. Um exemplo de configuração pode ser:**

```env
DB_USER=root
DB_PASSWORD=sua-senha
DB_NAME=events_manager
```

## Inicie o Servidor

```bash
npm start
```
## Exemplos de Rotas
### Rotas padrão
- **Organizadores:** ```/api/organizers```
- **Eventos:** ```/api/events```
- **Participantes:** ```/api/attendees```


##### Cria um novo participante

POST ```/api/attendees ```

```json
{
  "name": "Nome",
  "email": "email@example.com",
  "phone": "62912345678"
}
````
##### Busca todos os participantes cadastrados
GET ```/api/attendees ```

##### Busca um participante pelo ID
GET ``` /api/attendees/id-do-participante ```

##### Atualizar dados de um participante
> ##### ⚠️ Apenas numeros no telefone!
PUT ``` /api/attendees/id-do-participante```

```json
{
  "name": "novoNome",
  "email": "novoEmail@example.com",
  "phone": "novoTelefone"
}
```
##### Deletar um participante 
DELETE ```/api/attendees/id-do-participante```

#### Para as as tabelas Organizadores e Eventos é seguido a mesma lógica
##### Muda somente o corpo da requisição

**Organizadores (POST e PUT)**
```json
{
  "name": "Nome",
  "email": "email@example.com",
  "phone": "62912345678"
}
```
**Events (POST e PUT)**
```json
{
  "eventName": "Formatura PdA T4",
  "eventDescription": "Formatura da TURMA 4",
  "eventData": "2024-05-10",
  "eventLocation": "Online via ZOOM",
  "maxAttendees": "150"
}
```

# Contribuições
### Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests para melhorar o projeto.

Licença
Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LISENCE](LISENCE) para mais detalhes.

