var MongoClient = require("mongodb").MongoClient;

// var url = `mongodb+srv://Akhil_Ayush:${process.env.MONGO_PASS}@cluster0.1drriif.mongodb.net/?retryWrites=true&w=majority`;
var url = "mongodb://localhost:27017/";

const handle = async (req, res) => {
  if (req.method == "POST") {
    var body = req.body;
    var bodyJson = JSON.parse(body);

    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("SignupDetails");
      dbo
        .collection("users")
        .find(bodyJson)
        .toArray((err, result) => {
          if (err) throw err;
          db.close();
          return res.status(200).json({ success: true, result: result });
        });
    });
  } else {
    return res.status(400).json({ success: false, error: "Error" });
  }
};

export default handle;
