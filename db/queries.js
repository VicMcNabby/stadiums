const knex = require('./knex')

module.exports = {
  getAll() {
    return knex('states')
  },
  getStadiums() {
    return knex('stadiums')
  },
  getStadium(id) {
    return knex('stadiums').where('id', id).first()
  },
  getState(id) {
    return knex('states').where('id', id).first()
  },
  create(stadium) {
    return knex('stadiums').insert(stadium, '*');
  },
  delete(id) {
    return knex('stadiums').where('id', id).del()
  },
  getStadiumsByState(state_id){
    return knex('stadiums')
      .join('states', 'states.id', 'stadiums.state_id')
      .select('states.name as state_name','stadiums.name as stadium_name', 'stadiums.id as stadium_id', 'team', 'sport', 'photo')
      .where('states.id', state_id)
  }
};
