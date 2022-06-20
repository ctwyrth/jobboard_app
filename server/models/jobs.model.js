module.exports = (sequelize, DataTypes) => {
   const Job = sequelize.define('Job', {
      client: {
         type: DataTypes.STRING,
         allowNull: false
      },
      poc: {
         type: DataTypes.STRING,
         allowNull: false
      },
      email: {
         type: DataTypes.STRING,
         allowNull: false
      },
      role: {
         type: DataTypes.STRING,
         allowNull: false
      },
      urgency: {
         type: DataTypes.STRING,
         allowNull: false
      },
      quantity: {
         type: DataTypes.INTEGER,
         allowNull: false
      },
      skills: {
         type: DataTypes.STRING,
         allowNull: false
      },
   }, {
      tableName: 'jobs'
   });

   return Job;
}