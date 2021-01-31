var mongoose = require('mongoose');


module.exports.connect = function() {
    mongoose.connect(`mongodb+srv://test_user:${process.env.DB_PASSWORD}@cluster0.a8822.mongodb.net/example_restaurant?retryWrites=true&w=majority`, {useNewUrlParser: true});
    var db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error"));
    db.once("open", function(callback){
        console.log("Connection Succeeded");
    });
    return db;
}
