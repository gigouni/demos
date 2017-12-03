/**
 * Original work Copyright (c) 2017 [Nicolas GIGOU]
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 */

 // The node module
var Sequelize = require('sequelize');

// The connection to the database
var sequelize = new Sequelize('database_name', 'username', 'password');

// The target entity to define (table model)
var User      = sequelize.define('User', {
                  username: Sequelize.STRING,
                  password: Sequelize.STRING
                });

// Creation of the tables using the defined entities
sequelize.sync({ force: true }).then(
  function() {
    // After the creation of the tables, creation of a new User Object
    return User.create({ username: 'john', password: '1111' });
}).then(
  function(user_created) {
    // After the creation of the new User, we search it to check its creation
    return User.find({ username: 'john' })
}).then(
  function(user_found) {
    console.log(user_found.get()); // Get returns a JSON representation of the user
});
