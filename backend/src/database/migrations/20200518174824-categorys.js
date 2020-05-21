module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('categorys', { 
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
        type:{
          type:Sequelize.ENUM,
          values: ["RECEITAS", "DESPESAS"],
          allowNull: false,
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
      return queryInterface.dropTable('categorys');
  }
};
