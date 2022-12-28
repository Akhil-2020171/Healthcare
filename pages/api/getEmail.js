var MongoClient = require('mongodb').MongoClient;

// var url = `mongodb+srv://Akhil_Ayush:${process.env.MONGO_PASS}@cluster0.1drriif.mongodb.net/?retryWrites=true&w=majority`;
var url = "mongodb://localhost:27017/";

const handle = async (req,res) =>{
    if(req.method =="POST"){
        var data = req.body;
        var bodyJson = JSON.parse(data);
    
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("SignupDetails");
            dbo.collection("users").findOne(bodyJson, function(err, result) {
                if (err) throw err;
                return res.status(200).json({data:result});
            });
        });
    }
    else{
        return res.status(400).json({error:"Invalid Credentials"});
    }
}

export default handle;