const sequelize = require('sequelize');

const connection = new sequelize("upload excel file" , "root" ,"" ,{
    host: "localhost",
    dialect : "mysql",
});

//Test Connection 
try{
    connection.authenticate ();
    console.log("Connection has been established successfully.")
}catch(error){
    console.log("Enable to connect with database" , error)
}

// sync database connection
connection.sync({
    loggin: 
    console.log ,
    force : false,
})
.then ((error)=>{
 console.log(" Sync database connection successfully.")
})
.catch ((error) =>{
    console.log("Failed to sync database connection " , error)
});

module.exports = connection;