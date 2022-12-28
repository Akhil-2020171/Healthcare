var MongoClient = require('mongodb').MongoClient;
    
var url = "mongodb://localhost:27017/";

var jwt = require('jsonwebtoken');

const handle = async (req,res) =>{
    if(req.method =="POST"){
        var data = req.body;
        var bodyJson = JSON.parse(data);
        var password = bodyJson.password;
        var email = bodyJson.email;
        
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("SignupDetails");
            dbo.collection("users").findOne(bodyJson, function(err, result) {
                if (err) throw err;
                var StoredEmail = result.email;
                var StoredPassword = result.password;
                var StoredStatus = result.status;
                
                if(password!=StoredPassword || StoredEmail!=email){
                    // console.log("Invalid Credentials.");
                    throw err;
                }

                else if(password==StoredPassword && email==StoredEmail && StoredStatus==true){
                    // console.log(bodyJson);
                    var token = jwt.sign({name:result.name, role:result.role ,email:result.email},process.env.JwtSecret,{expiresIn:"1h"});
                    return res.status(200).json({success:true,token});
                }

                else if (StoredStatus==false){
                    return res.status(400).json({error:"Admin hasn't approved your status."});
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