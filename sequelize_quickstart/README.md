# Sequelize

A basic example of Sequelize usage. Source here: [Sequelizejs.com/v3/Getting-Started](http://docs.sequelizejs.com/en/v3/docs/getting-started/)

## Getting started

Clone the project

```shell
git clone https://github.com/gigouni/sequelize_quickstart
```

Install the dependencies

```shell
npm i
```

Edit the database access in app.js

```javascript
var sequelize = new Sequelize('YOUR_DATABASE_NAME', 'YOUR_USERNAME', 'YOUR_PASSWORD');
```

Run the app in your terminal

```shell
node app.js
```

## Snippets

Here are some Sequelize examples as a basic usage to assume how to

* Import Sequelize

```javascript
var Sequelize = require('sequelize');
```

* Instanciate a database connection with Sequelize

```javascript
var sequelize = new Sequelize('database_name', 'username', 'password');
```

* Define new entity models

```javascript
var User      = sequelize.define('User', {
                  username: Sequelize.STRING,
                  password: Sequelize.STRING
                });
```

* Synchronize the models with the previous database connection to create tables

```javascript
sequelize.sync({ force: true })
```

* Create new Object and push it

```javascript
User.create({ username: 'john', password: '1111' });
```

* Find an Object in the database using its entity type

```javascript
User.find({ username: 'john' })
```

## Possible improvements

* Load models from file
* Add a web interface to interact with the database
* Improve the security checkings of database insertions
* Add relationships between entities