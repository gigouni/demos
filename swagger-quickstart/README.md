# Skeleton project for Swagger - Quickstart

Result of the quickstart coming from [Scotch.io](https://scotch.io/tutorials/speed-up-your-restful-api-development-in-node-js-with-swagger)

## Getting started
### Installation

Install the Swagger module to use its CLI version

```shell
$ npm install -g swagger
```

Clone the project and download the dependencies

```shell
$ git clone https://github.com/gigouni/swagger-quickstart
$ cd swagger-quickstart/
$ npm i
```

### Run

Launch the quickstart

```shell
$ swagger project start
```

In another terminal, start the Swagger editor

```shell
$ swagger project edit
```

Go [here](http://localhost:10010) to access to the API or here to access to [the editor](http://127.0.0.1:59273/#!/).

## Swagger CLI examples

Create a new Swagger project

```shell
$ swagger project create project-name
```

Launch the project with mocks

```shell
$ swagger project start -m
```

Run the tests

```shell
$ swagger project test
```

## _Nota Bene_

* Link to the Swagger documentation: [Swagger docs](http://swagger.io/docs/)
* Link to the Github repo of the tutorial: [@Samuxyz repo - Movie collection](https://github.com/samuxyz/movie-collection)
* Link to the NodeJS + Swagger implementation: [Authenticate a Node.js API with JSON Web Tokens](https://scotch.io/tutorials/authenticate-a-node-js-api-with-json-web-tokens)