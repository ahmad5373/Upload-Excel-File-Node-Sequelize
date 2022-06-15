const database = require("../database/connection");
const sequelize = require("sequelize");

const upload = database.define(
    "upload" ,
    {
        id: {
            type: sequelize.BIGINT(),
            primaryKey: true,
            autoIncrement:  true,
        },

        title:{
            type: sequelize.STRING(255),
        },

        discription:{
            type: sequelize.STRING(255),
        },
         
        published:{
            type: sequelize.BOOLEAN(),
        },
    },
    {
       paranoid: true,
       timestamps: true,
       // disable the modification of tablenames; By default, sequelize will automatically
       // transform all passed model names (first parameter of define) into plural.
       // if you don't want that, set the following
       freezeTableName: true,
       // define the table's name
       tableName: "upload",


     });
module.exports = upload;