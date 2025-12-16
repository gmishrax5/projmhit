import dotenv from 'dotenv'

dotenv.config({
    path: "./.env",

});

let myusername = process.env.database;

console.log("value:", myusername);


// dotenv.config({ path: '/custom/path/to/.env'})

console.log("aaee haaalo ");
console.log("hii");