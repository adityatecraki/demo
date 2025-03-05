const { DataTypes } = require('sequelize');
const sequelize = require('./connection.js'); 


const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
});


(async () => {
  await User.sync();
  console.log('User table has been created.');
})();

module.exports = User; 
