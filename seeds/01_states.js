exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE states RESTART IDENTITY CASCADE;')
    .then(function() {
      // Inserts seed entries
      return knex('states').insert([{
          name: 'Pennsylvania',
          capital: 'Harrisburg'
        },
        {
          name: 'California',
          capital: 'Sacramento'
        },
        {
          name: 'Colorado',
          capital: 'Denver'
        },
        {
          name: 'Wisconsin',
          capital: 'Madison'
        },
        {
          name: 'Maryland',
          capital: 'Annapolis'
        },
      ]);
    });
};
