import Sequelize from 'sequelize'

import dbConfig from '../config/database'

import Account from '../app/models/Account'
import Category from '../app/models/Category'
import Transaction from '../app/models/Transaction'

const models = [ Account, Category, Transaction ]

class Database{
    constructor(){
        this.connection = new Sequelize(dbConfig)
        this.init()
        this.associate()
    }

    init(){
        models.forEach(model => model.init(this.connection))
    }

    associate(){
        models.forEach(model=>{
            if(model.associate){
                model.associate(this.connection.models)
            }
        })
    }
}

export default new Database()