var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/"

const handle = async (req,res) =>{
    if(req.method =="POST"){
        var data = req.body;
        var bodyJson = JSON.parse(data);
        
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("SignupDetails");
            dbo.collection('users').insertOne(bodyJson,(err,collection)=>{
                if(err) throw err;
                // console.log("Record Inserted Successfully");
                db.close();
            });
        });
        return res.status(200).json({success:"success"});
    }
    else{
        return res.status(400).json({error:"Error"});
    }
}

export default handle;