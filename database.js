const mongoose = require("mongoose");
//mongoose.set("useNewUrlParser", true);

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    mongoose
      .connect(
        "mongodb+srv://kmjmm4231:qL5YOFxFGLZC2UZe@twitterclonecluster.nwzezy0.mongodb.net/TwitterCloneCluster?retryWrites=true&w=majority",
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          // useFindAndModify: false,
          useUnifiedTopology: true,
        }
      )
      .then(() => {
        console.log("database connection successful");
      })
      .catch((err) => {
        console.log("database connection error " + err);
      });
  }
}

module.exports = new Database();
