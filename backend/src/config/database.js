require('dotenv').config()

module.exports={
    dialect:'postgres',
    host: process.env.HOST,
    port: process.env.PORT || 5432,
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    define:{
        timestamps:true,
        underscored:true,
        underscoredAll:true
    }
}