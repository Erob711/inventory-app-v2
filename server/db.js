const { Sequelize, DataTypes, Model } = require('sequelize');
// const path = require('path');

// const db = new Sequelize({
//   dialect: 'sqlite',
//   storage: path.join(__dirname, 'db.sqlite'),
//   logging: false
// });

const db = new Sequelize('postgres://ericroberson:Pj48FTARtgmhCb0T5XDyCON51WdjDccf@dpg-cmaqqtmn7f5s73966hc0-a.oregon-postgres.render.com/inventoryappdb?ssl=true');
module.exports = { db, DataTypes, Model };

async () => {
  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};


// const { Sequelize, DataTypes, Model } = require('sequelize');
// const path = require('path');

// const sequelize = new Sequelize({
//     dialect: 'sqlite',
//     storage: path.join(__dirname, 'db.sqlite'),
//     logging: false
// });

// module.exports = {sequelize}