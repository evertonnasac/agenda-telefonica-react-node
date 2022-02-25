const conn = require("sequelize")

const sequelize = new conn(
    "postgres://bzqgsunj:0che6tCNjET4hIr3Qw-Kwd6Mhze3TODc@kesavan.db.elephantsql.com/bzqgsunj",{
        dialect: "postgres",
        define:{
            timestamps: false,
            freezeTableName: true,
            modelName: "singlarName"

        }

    }
    
)

module.exports = sequelize
