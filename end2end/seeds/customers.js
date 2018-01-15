var faker = require('faker');

exports.seed = function(knex, Promise) {
  return knex('customers').del()
    .then(function () {
      return knex.table('users').first('id').then(function(user){
          return knex('customers').insert([
        { user_id: user.id, email: faker.internet.email() },      
        { user_id: user.id, email: faker.internet.email() }      
          ])
      }); 
    });
};
