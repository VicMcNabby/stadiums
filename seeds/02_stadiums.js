exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE stadiums RESTART IDENTITY CASCADE;')
    .then(function() {
      // Inserts seed entries
      return knex('stadiums').insert([{
          name: 'Sports Authority Field',
          team: 'Broncos',
          sport: 'football',
          photo: 'http://stadiumparkingguides.com/wp-content/uploads/2014/10/1Sports-Authority-Field.jpg',
          capacity: 76125,
          state_id: 3
        },
        {
          name: 'Coors Field',
          team: 'Rockies',
          sport: 'baseball',
          photo: 'http://www.andrewclem.com/Baseball/Photos/CoorsField_grand_view.jpg',
          capacity: 50398,
          state_id: 3
        },
        {
          name: 'Linclon Financial Field',
          team: 'Eagles',
          sport: 'football',
          photo: 'https://chairnerd.global.ssl.fastly.net/images/seatview/330/nfl/nfl/a3f0b6/212/640/lincoln-financial-field-section-212-view.jpg',
          capacity: 69596,
          state_id: 1
        },
        {
          name: 'Citizens Bank Park',
          team: 'Phillies',
          sport: 'baseball',
          photo: 'https://cdn.pastemagazine.com/www/blogs/lists/CitizensBankPark-MainImage.jpg',
          capacity: 43651,
          state_id: 1
        },
        {
          name: 'Dodger Stadium',
          team: 'Dodgers',
          sport: 'baseball',
          photo: 'http://m.mlb.com/assets/images/1/4/8/209856148/cuts/top_of_park960x720_oz2w4e8r_lmz7033k.jpg',
          capacity: 56000,
          state_id: 2
        },
        {
          name: 'Petco Park',
          team: 'Padres',
          sport: 'baseball',
          photo: 'http://ifollosports.com/sites/default/files/u25/petco-park.jpg',
          capacity: 40209,
          state_id: 2
        },
        {
          name: 'Oakland Coliseum',
          team: 'Raiders',
          sport: 'football',
          photo: 'http://www.stadiumsofprofootball.com/wp-content/uploads/2016/07/oakland16_top.jpg',
          capacity: 56063,
          state_id: 2
        },
        {
          name: 'Heinz Field',
          team: 'Steelers',
          sport: 'football',
          photo: 'http://www.baltimoreravens.com/assets/images/imported/BAL/news-articles/2013/10-October/03/18_HeinzField_news.jpg',
          capacity: 68400,
          state_id: 1
        },
        {
          name: 'Levis Stadium',
          team: '49ers',
          sport: 'football',
          photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Broncos_vs_49ers_preseason_game_at_Levi%27s_Stadium.jpg/1200px-Broncos_vs_49ers_preseason_game_at_Levi%27s_Stadium.jpg',
          capacity: 68500,
          state_id: 2
        },
        {
          name: 'Lambeau Field',
          team: 'Packers',
          sport: 'football',
          photo: 'http://s3.amazonaws.com/kidzworld_photo/images/2016106/e21b0271-73ca-418e-b81e-ca65c85af9eb/lambeau-field-packers.jpg',
          capacity: 81435,
          state_id: 4
        },
        {
          name: 'Camden Yards',
          team: 'Orioles',
          sport: 'baseball',
          photo: 'http://www.ballparksofbaseball.com/wp-content/uploads/2016/02/camden09972.jpg',
          capacity: 45971,
          state_id: 5
        }
      ]);
    });
};
