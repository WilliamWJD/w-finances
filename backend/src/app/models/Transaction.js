import Sequelize, {Model} from 'sequelize'

class Transaction extends Model{
    static init(sequelize){
        super.init({
            description: Sequelize.STRING,
            type: Sequelize.ENUM('C','D'),
            amount: Sequelize.DECIMAL(10,2),
            category_id: Sequelize.INTEGER,
            account_id: Sequelize.INTEGER
        },{
            tableName:'transactions',
            sequelize
        })
    }

    static associate(models){
        this.belongsTo(models.Category, { foreignKey: 'category_id' })
        this.belongsTo(models.Account, {foreignKey: 'account_id'})
    }
}

export default Transaction