
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('item').del()
    .then(function () {
      // Inserts seed entries
      return knex('item').insert([
        {name: 'bike', reason: 'not in use', cleanliness: 'sparkling', created_at: '2017-09-14T15:37:00.914Z', updated_at: '2017-09-14T15:37:00.914Z'},
        {name: 'mystical creatures', reason: 'too scary', cleanliness: 'dusty', created_at: '2017-09-14T15:37:00.914Z', updated_at: '2017-09-14T15:37:00.914Z'},
        {name: 'backpacking gear', reason: 'wrongseason', cleanliness: 'rancid', created_at: '2017-09-14T15:37:34.567Z', updated_at: '2017-09-14T15:37:34.567Z'},
        {name: 'electronics', reason: 'old', cleanliness: 'dusty', created_at: '2017-09-14T15:38:06.766Z', updated_at: '2017-09-14T15:38:06.766Z'},
        {name: 'beer', reason: 'not cold', cleanliness: 'dusty', created_at: '2017-09-14T15:38:27.358Z', updated_at: '2017-09-14T15:38:27.358Z'},
      ]);
    });
};