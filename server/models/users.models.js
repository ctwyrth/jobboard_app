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
      zipCode: {
         type: DataTypes.INTEGER(5),
         allowNull: false
      },
      job_id: {
         type: DataTypes.INTEGER,
         allowNull: false
      }
   }, {
      tableName: 'users'
   });

   return User;
}