'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn('categorys','color',{
        type:Sequelize.STRING,
        allowNull:false,
        defaultValue:"#9b59b6"
      })
  },

  down: queryInterface => {
      return queryInterface.removeColumn('categorys','color')
  }
};
