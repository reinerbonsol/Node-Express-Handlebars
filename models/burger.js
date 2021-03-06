// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  select: function (cb) {
    orm.selectAll("burgers", function (res) {
        cb(res);
    });
  },
  
  create: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },

  update: function(id, cb) {
    var condition = `id =`, id;
    
    orm.updateOne("burgers", {devoured : true}, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
