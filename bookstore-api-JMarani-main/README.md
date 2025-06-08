[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/Qbxu66hE)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=19679684)

# 📘 Atividade Prática: Cadastro e Gerenciamento de Reviews Literárias

## 🎯 Objetivo

Desenvolver uma aplicação NestJS com TypeORM para realizar o CRUD da entidade `BookReview`, treinando habilidades de modelagem, persistência e exposição de endpoints RESTful.

O repositório de referência utilizado em sala de aula se encontra em: [https://github.com/rafael-labegalini/nestjs-api.git](https://github.com/rafael-labegalini/nestjs-api.git)

Ele possui todas as configurações necessárias e implementações para conseguir resolver o exercício.

---

## ✅ Requisitos

### 📌 Backend (NestJS + TypeORM)

1. Configurar o acesso ao banco de dados pelo NestJS:
    - adicionar as configurações necessárias no `app.module`

2. Criar a entidade `BookReview` com os seguintes campos:
   - `bookTitle`: String
   - `reviewerName`: String
   - `reviewText`: String
   - `rating`: Integer
   - `recommended`: Boolean

3. Criar o repositório `BookReviewRepository`

4. Implementar as operações de **CRUD completo**:
   - Criar uma nova review
   - Listar todas as reviews
   - Buscar uma review por ID
   - Atualizar uma review existente
   - Deletar uma review

3. Todos os dados devem ser retornados em formato JSON.

---

## 📂 Entrega

- O código deve ser entregue pelo GitHub Education.

---

## Links da Documentação
1. [Instalation and Get Started](https://docs.nestjs.com/first-steps)
2. [Controllers and Routes](https://docs.nestjs.com/controllers)
3. [TypeORM Documentation](https://typeorm.io/)
4. [Entities in TypeORM](https://typeorm.io/entities)

Boa prática e mãos à obra! 🚀
