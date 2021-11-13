// import the Sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();

//Jaws DB connection
const sequelize = //process.env.AWS_HOST ?
     new Sequelize("vakp1om9uhkcguvx","goc49ffi9ayizlco","usg9dtr3kytl6lvv", {
        host:"j8oay8teq9xaycnm.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        dialect: 'mysql',
        port: 3306
    })
    //:
    //This is the local mysql db connection
    //  new Sequelize('cartalk2021_db', 'root', '1998Hlsg8sql', {
    //     host: 'localhost',
    //     dialect: 'mysql',
    //     port: 3306
    // });

// create connection to our database, pass in your MySQL information for username and password - Hibram: 1998Hlsg8sql
// const sequelize = new Sequelize('cartalk2021_db', 'root', 'Bootcamp2021!', {
//     host: 'localhost',
//     dialect: 'mysql',
//     port: 3306
// });

//NOT WORKING!!!
 // //create connection to AWS , pass in your MySQL information for username and password
// const sequelize = new Sequelize('cartalk2021', 'admin', 'C8rtalk!', {
//     host: 'http://cartalk2021.caw2jnsosmx5.us-east-2.rds.amazonaws.com/',
//     dialect: 'mysql',
//     port: 3306
// });

module.exports = sequelize;