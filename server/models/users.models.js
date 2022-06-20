module.exports = (sequelize, DataTypes) => {
   const User = sequelize.define('User', {
      firstName: {
         type: DataTypes.STRING,
         allowNull: false
      },
      lastName: {
         type: DataTypes.STRING,
         allowNull: false
      },
      email: {
         type: DataTypes.STRING,
         allowNull: false
      },
      phone: {
         type: DataTypes.STRING,
         allowNull: false
      },
      city: {
         type: DataTypes.STRING,
         allowNull: false
      },
      state: {
         type: DataTypes.STRING(25),
         allowNull: false
      },
      country: {
         type: DataTypes.STRING,
         allowNull: false
      },
   }, {
      tableName: 'users'
   });

   return User;
}