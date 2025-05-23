# Employee Management Backend

A modular, scalable NestJS application to manage employee data, using **GraphQL** as the API layer and **PostgreSQL** with **TypeORM** for persistent storage.

## 🚀 Tech Stack

- [NestJS](https://nestjs.com/) – Progressive Node.js framework
- [GraphQL](https://graphql.org/) – API query language with Apollo Server
- [TypeORM](https://typeorm.io/) – ORM for TypeScript and Node.js
- [PostgreSQL](https://www.postgresql.org/) – Open-source SQL database
- [TypeScript](https://www.typescriptlang.org/) – Static typing for JavaScript

---

## 📦 Project Structure

```

src/
├── app.module.ts
├── config/
│   ├── database.config.ts
│   └── graphql.config.ts
└── employee/
├── dto/
│   ├── employee-filter.input.ts
│   └── employee.type.ts
├── entities/
│   └── employee.entity.ts
├── employee.module.ts
├── employee.resolver.ts
└── employee.service.ts

````

---

## 📄 Features

- Create & retrieve employees with filtering and pagination
- GraphQL API with auto-generated schema
- Modular structure with feature modules
- Environment-agnostic DB setup (PostgreSQL)
- Easily extendable for additional features (e.g., mutations, auth)

---

## ⚙️ Prerequisites

- Node.js v18+
- npm or yarn
- PostgreSQL running locally or on a server

---

## 🛠️ Installation

``` bash
# Clone the repository
git clone https://github.com/your-username/employee-management-backend.git
cd employee-management-backend

# Install dependencies
npm install

# Configure PostgreSQL (optional)
# Make sure a DB named `employees_db` exists with correct credentials
createdb -U postgres employees_db
````

---

## 🔧 Configuration

Update the DB credentials in `src/config/database.config.ts`:

```ts
export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'your_password_here',
  database: 'employees_db',
  ...
};
```

---

## ▶️ Running the App

```bash
# Start the server in development mode
npm run start:dev
```

Nest will run at:
📍 `http://localhost:5000`

---

## 🔍 GraphQL Playground

Open [http://localhost:3000/graphql](http://localhost:3000/graphql) to test queries.

### Sample Queries:

#### 🔹 Get Employees (with filters & pagination)

```graphql
query {
  employees(filters: { department: "Engineering" }, page: 1, limit: 5) {
    id
    name
    email
    title
  }
}
```

#### 🔹 Get Employee by ID

```graphql
query {
  employee(id: 1) {
    id
    name
    department
    status
  }
}
```

---

## 🧱 Entities

### `Employee`

| Field      | Type   | Description       |
| ---------- | ------ | ----------------- |
| id         | number | Primary Key       |
| name       | string | Employee name     |
| title      | string | Job title         |
| department | string | Department name   |
| location   | string | Office location   |
| email      | string | Work email        |
| phone      | string | Contact number    |
| status     | string | Active/Inactive   |
| dateHired  | string | Date of hire      |
| manager    | string | Reporting manager |
| notes      | string | Optional notes    |

---

## 🧪 Testing (Coming Soon)

This project does not yet include unit or integration tests. Suggestions for implementation:

* Use `@nestjs/testing` for service & resolver tests
* Use an in-memory PostgreSQL instance (e.g. `pg-mem`) for DB-related unit tests

---

## 📤 Deployment

1. Set `synchronize: false` in production.
2. Use environment variables with `@nestjs/config`.
3. Use a process manager like `PM2` or containerize using Docker.

---

## 📚 Future Enhancements

* Add `CreateEmployee` & `UpdateEmployee` mutations
* Add user authentication (JWT)
* Add audit logs and soft deletes
* Deploy GraphQL schema with Apollo Studio

---

## 📄 License

This project is licensed under the MIT License.

