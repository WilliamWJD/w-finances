module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('accounts', { 
        id:{
          type:Sequelize.INTEGER,
          primaryKey:true,
          autoIncrement:true,
          allowNull:false
        },
        description:{
          type:Sequelize.STRING,
          allowNull:false
        },
        balance:{
          type:Sequelize.DECIMAL(10, 2),
          allowNull:false
        },
        created_at:{
          type:Sequelize.DATE,
          allowNull:false
        },
        updated_at:{
          type:Sequelize.DATE,
          allowNull:false
        }
      });
  },

  down: queryInterface => {
      return queryInterface.dropTable('accounts');
  }
};
