
# 📘 Atividade: Refatoração e Implementação de CRUD com NestJS + TypeORM

## 🎯 Objetivo

Refatorar o projeto anterior da livraria para se adequar ao novo modelo conceitual fornecido e implementar um CRUD completo com NestJS e TypeORM, incluindo uma nova funcionalidade de avaliação de livros (reviews).

---

## 🧱 Modelo Conceitual Atualizado (DER)

Implemente as seguintes entidades e relacionamentos:

### Entidades

- **Livro**
  - `id`: number
  - `titulo`: string
  - `anoPublicacao`: number
  - `isbn`: string
  - `autor_id`: FK para Autor
  - `editora_id`: FK para Editora

- **Autor**
  - `id`: number
  - `nome`: string
  - `nacionalidade`: string

- **Editora**
  - `id`: number
  - `nome`: string
  - `cidade`: string

- **BookReview**
  - `id`: number
  - `comentario`: string
  - `nota`: number (de 1 a 5)
  - `livro_id`: FK para Livro

---

## 🔄 Relacionamentos

- Um **autor** tem muitos **livros** → `@OneToMany`
- Um **livro** pertence a um **autor** → `@ManyToOne`
- Uma **editora** tem muitos **livros** → `@OneToMany`
- Um **livro** pertence a uma **editora** → `@ManyToOne`
- Um **livro** tem muitas **reviews** → `@OneToMany`
- Uma **review** pertence a um **livro** → `@ManyToOne`

---

## 🔧 Instruções

### 1. Refatoração
- Adapte a entidade `BookReview` para seguir o novo DER.
- Crie as entidades `Autor`, `Editora` e `Livro`.
- Configure os relacionamentos adequados com os decorators do TypeORM.

### 2. CRUD completo
- Implemente as rotas REST para:
  - `/livros`
  - `/autores`
  - `/editoras`
  - `/reviews`

Os recursos de livros, autores, editoras e reviews devem implementar o CRUD completo, ou seja, criar, editar, listar, atualizar e excluir 

### 3. Funcionalidade de Reviews
- Permitir adicionar avaliações (`BookReview`) a um livro existente.
- Exibir as avaliações ao consultar detalhes de um livro.

---

## 🧪 Exemplos esperados

- `POST /livros` cria um livro com autor e editora.
- `POST /reviews` cria uma avaliação vinculada a um livro.
- `GET /livros/:id` traz os dados do livro com autor, editora e lista de reviews.
- `DELETE /reviews/:id` remove uma avaliação.

---

## 📁 Entrega

- Utilize o mesmo repositório utilizado na última atividade do GitHub Classroom e apenas refatore ele
- A entrega será na mesma atividade do Classroom realizada anteriormente
- Banco de dados pode ser SQLite
