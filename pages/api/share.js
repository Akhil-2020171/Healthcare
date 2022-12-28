var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/"

const handle = async (req,res) =>{
    if(req.method =="POST"){
        var data = req.body;
        var bodyJson = JSON.parse(data);
        
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("SignupDetails");
            dbo.collection('uploads').insertOne(bodyJson,(err,collection)=>{
                if(err) throw err;
                console.log(collection);
                db.close();
                return res.status(200).json({success:true});
            });
        });
        return res.status(200).json({success:true});
    }
    else{
        return res.status(400).json({error:"Error"});
    }
}

export default handle;