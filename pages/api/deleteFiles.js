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
            dbo.collection("uploads").deleteOne(bodyJson, function(err, obj) {
                if (err) throw err;
                db.close();
                return res.status(200).json({success:true});
            });
        });
    }
    else{
        return res.status(400).json({error:"Error"});
    }
}

export default handle;