const Item = require('./Item');
const User = require('./User');

Item.belongsToMany(User, { through : 'user_table_item' });
User.belongsToMany(Item, { through : 'user_table_item' });

module.exports = {
  Item,
  User
};
