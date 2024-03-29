const mongoose = require('mongoose');
require('dotenv').config();

main().catch(err => console.log(err));

async function main(){
    await mongoose.connect(process.env.DB_URL);
    //don't forget to add the database name between '.net/' and '?'
}

module.exports = mongoose.connection;