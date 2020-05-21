import Sequelize, { Model } from 'sequelize'

class Account extends Model{
    static init(sequelize){
        super.init({
            description: Sequelize.STRING,
            balance: Sequelize.DECIMAL(10, 2)
        },{
            tableName:'accounts',
            sequelize
        })
    }

    static associate(models){
        // this.hasMany(models.Transacoes)
    }
}

export default Account