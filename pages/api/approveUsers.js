var MongoClient = require('mongodb').MongoClient;

// var url = `mongodb+srv://Akhil_Ayush:${process.env.MONGO_PASS}@cluster0.1drriif.mongodb.net/?retryWrites=true&w=majority`;
var url = "mongodb://localhost:27017/";

const handle = async (req,res) =>{
    if(req.method =="POST"){
        var data = req.body;
        var bodyJson = JSON.parse(data);        
        var Email = bodyJson.email;

        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("SignupDetails");
            dbo.collection("users").findOne({email:Email}, function(err, result) {
                if (err) throw err;
                var new_data = {
                    "name": result.name,
                    "phone": result.phone,
                    "role" : result.role,
                    "email" : result.email,
                    "password" : result.password,
                    "status" : true
                }
                dbo.collection("users").deleteOne({email:Email},(err,obj)=>{
                    if(err) throw err;
                });
                dbo.collection("users").insertOne(new_data,(err,obj)=>{
                    if(err) throw err;
                });

                // db.close();
                return res.status(200).json({success:true});
            });
        });
    }
    else{
        return res.status(400).json({error:"Error"});
    }
}

export default handle;