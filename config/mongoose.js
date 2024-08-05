const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const db = () => {
    mongoose.connect("mongodb://localhost:27017/ECommerceAPI", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then((con) => {
        console.log(`MongoDB database with host :: ${con.connection.host}`)
    })
};

module.exports = db;        