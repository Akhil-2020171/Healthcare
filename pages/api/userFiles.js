var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/";

const handle = async (req,res) =>{
    if(req.method =="POST"){
        var data = req.body;
        var bodyJson = JSON.parse(data);
        var email = bodyJson.email;
        var file = bodyJson.file;

        var new_data = {
            "email" :  email,
            "file" : file,
        };
    
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("SignupDetails");
            dbo.collection('uploads').insertOne(new_data,(err,result)=>{
                if(err) throw err;
                db.close();
            });
        });
        return res.status(200).json({success:true});
    }
    else{
        return res.status(400).json({error:"Error"});
    }
}

export default handle;