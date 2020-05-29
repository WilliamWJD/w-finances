import Sequelize,{ Model } from 'sequelize'

class Category extends Model{
    static init(sequelize){
        super.init({
            description: Sequelize.STRING,
            type: Sequelize.ENUM('RECEITAS', 'DESPESAS'),
            color: Sequelize.STRING
        },{
            sequelize,
            tableName:'categorys'
        })
    }

    static associate(models){
        this.hasMany(models.Transaction)
    }
}

export default Category