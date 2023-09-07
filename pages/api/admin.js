var MongoClient = require('mongodb').MongoClient;

// var url = `mongodb+srv://Akhil_Ayush:${process.env.MONGO_PASS}@cluster0.1drriif.mongodb.net/?retryWrites=true&w=majority`;
var url = "mongodb://localhost:27017/";

var jwt = require('jsonwebtoken');

const handle = async (req,res) =>{
    if(req.method =="POST"){
        var data = req.body;
        var bodyJson = JSON.parse(data);
        
        var email = bodyJson.email;
        var password = bodyJson.password;
    
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("SignupDetails");
            dbo.collection("admin").findOne({"email":email}, function(err, result) {
                if (err) throw err;
                var StoredEmail = result.email;
                var StoredPassword = result.password;
                
                if(password!=StoredPassword || StoredEmail!=email){
                    // console.log("Invalid Credentials.");
                    throw err;
                }

                else if(password==StoredPassword && email==StoredEmail){
                    // console.log(bodyJson);
                    var token = jwt.sign({name:result.name, phone:result.number ,email:result.email, role:"admin"},"JwtSecret256",{expiresIn:"1h"});
                    return res.status(200).json({success:true,token});
                }

                else{
                    return res.status(200).json({success:false});
                }
            });
        });
    }
    else{
        return res.status(400).json({error:"Invalid Credentials"});
    }
}

export default handle;