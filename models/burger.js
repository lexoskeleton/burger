var orm = require("../config/orm.js");

//create the burger model
var burger = {
 selectAll: function (cb) {
   orm.selectAll(function (result) {
     //cb: callback that stops asynchronous problem
     //doesn't execute the JavaScript until the database is queried
     cb(result);
   });
 },

 insertOne: function (burger_name,cb) {
   orm.insertOne(burger_name, function (result) {
     cb(result);
   });
 },

 updateOne: function (burgerID, cb) {
   orm.updateOne(burgerID, function (result) {
     cb(result);
   });
 },
};
module.exports = burger;