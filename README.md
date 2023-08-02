<p align="center">
  <a href="https://nextjs.org/" target="blank"><img src="https://nextjs.org/static/favicon/favicon-32x32.png" width="200" alt="Next.js Logo" /></a>
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>

</p>
</p>

## Live App description!

This is an app where you can add a user to a database and validate if the user is already registered

## Technologies Stack Used

- [Next.js](https://nextjs.org/): A React framework for building server-side rendered and statically exported applications.
- [NestJS](https://nestjs.com/): A progressive Node.js framework for building efficient and scalable server-side applications.
- [TypeScript](https://www.typescriptlang.org/): A typed superset of JavaScript that compiles to plain JavaScript.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for quickly building custom designs.
- [Docker](https://www.docker.com/): A platform for developing, shipping, and running applications inside containers.
- [Docker Compose](https://docs.docker.com/compose/): A tool for defining and running multi-container Docker applications.

## Very Important!

If you restart the server once up and the database already had records in it, you must delete them because it will cause problems in the autogeneration of entities.

## Backend Installation

1. Clone the repository and navigate to the back folder

```bash
$ cd .\Back\
```

2. Replace the .env.example file with .env, this environment variables are used in the porject and in the docker compose file
3. Execute:

```bash
$ npm install
```

4. Set up the database with docker

```bash
$ docker-compose up -d
```

7. Running the app

```bash
# development
$ npm run start:dev
```

8. The api is ready to use.

## Front End Installation

1. Go Back and navigate to the front folder

```bash
$ cd ..
$ cd .\Front\
```

2. Execute:

```bash
$ npm install
```

3. Run the project in dev Mode

```bash
$ npm run dev
```

4. Open the project

`http://localhost:3000`
