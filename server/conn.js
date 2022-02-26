const { MongoClient } = require("mongodb");

const connectionString = "mongodb+srv://411team:2000123@cluster0.hhxsc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";;
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection;

let dbo = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (err || !db) {
        return callback(err);
      }

      dbConnection = db.db("411project");
      console.log("Successfully connected to MongoDB.");

      return callback();
    });
  },

  getDb: function () {
    return dbConnection;
  },
};

module.exports = dbo;