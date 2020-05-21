module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('transactions', { 
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
          values: ["C", "D"],
          allowNull: false,
        },
        amount:{
          type: Sequelize.DECIMAL(10, 2),
          allowNull:false
        },
        category_id:{
          type:Sequelize.INTEGER,
          references:{model:'categorys', key:'id'},
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
          allowNull:false
        },
        account_id:{
          type:Sequelize.INTEGER,
          references:{model:'accounts', key:'id'},
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
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
      return queryInterface.dropTable('transactions');
  }
};
