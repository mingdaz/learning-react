var faker = require('faker');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('invoices').del()
    .then(function () {
      return knex.table('users').first('id').then(function(user){
          return knex('invoices').insert([
        { user_id: user.id, email: faker.internet.email(), total: faker.commerce.price() },      
        { user_id: user.id, email: faker.internet.email(), total: faker.commerce.price() },      
          ])
      });
    });
};
