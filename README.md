
# MEAN-FAIN Mono-Repo

This is supposed to be the base for a MONO-Repository using the MEAN Stack (MongoExpressAngularNode) and FirebaseAngularIonic

It has a base API with a sample TODO Service aswell as a base client which uses the API to insert, delete and getAll Todo Objects from the Mongo Database.

The API/Client Setup was done via a guide from Loïc Combis. Tooling was later on added by myself.

Further projects in this repo are also my own work.


## Installation

Prerequesites
- [nrwlNX](https://nx.dev/)
- [angularCLI](https://angular.io/cli)
- [MongoDB and MongoDB Compass](https://www.mongodb.com/try/download)

Install my-project with npm

```bash
  npm install
```
    
## Run Locally

Clone the project

```bash
  git clone https://github.com/adlerpat/zeitdiebe-mono.git
```

Go to the project directory

```bash
  cd zeitdiebe-mono
```

Install dependencies

```bash
  npm install
```

Start your mongo server at localhost:27017

Start the API

```bash
  npm start api
```

Start the Client

```bash
  npm start client
```

Navigate to http://localhost:4200/


## API Reference

#### Get all todos

```http
  GET /api/todos
```

#### Create todo

```http
  POST /api/todos
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `todo`      | `todo object` | **Required**. todo object to create |

#### delete todo

```http
  DELETE /api/todos/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. id of todo object to delete |


## Acknowledgements

 - [Project Template - Loïc Combis](https://medium.com/shopstyle-engineering/how-to-set-up-a-mean-stack-with-nx-in-less-than-20-minutes-fb0a1108ae67)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)


## Authors

- [@loic-combis](https://github.com/loic-combis) - Author of the Sample Code
- [@adlerpat](https://github.com/adlerpat) - Creator of the Sample Repository


## Tech Stack

**Client:** Angular

**Server:** Node, Express, Mongo

