var bcrypt = require('bcrypt-nodejs')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
        return knex('users').insert({
            username: 'admin',
            password: bcrypt.hashSync('notmypassword',bcrypt.genSaltSync(10))
        })
    });
};