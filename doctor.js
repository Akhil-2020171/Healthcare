var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://127.0.0.1:27017/";

const handle = (data) => {
  var new_data = {
    name: data.name,
    specilisation: data.specilisation,
    experience: data.experience,
  };

  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("SignupDetails");
    dbo.collection("Doctors").insertOne(new_data, (err, collection) => {
      if (err) throw err;
      console.log("Record Inserted Successfully");
      db.close();
    });
  });
};

doctors = [
    {
        name: "Dr Subhash Chandra",
        specilisation:"Cardiology",
        experience:"33 Years"
    },
    {
        name: "Dr Amit Agarwal",
        specilisation:"Oncology Cancer",
        experience:"26 Years"
    },
    {
        name: "Dr S Hukku",
        specilisation:"Radiation Oncology Cancer",
        experience:"37 Years"
    },
    {
        name: "Dr Vinod Raina",
        specilisation:"Oncology Cancer",
        experience:"37 Years"
    },
    {
        name: "Dr Sapna Nangia",
        specilisation:"Radiation Oncology Cancer Oncology",
        experience:"22 Years"
    },
    {
        name: "Dr Kapil Kumar",
        specilisation:"Surgical Oncology Cancer",
        experience:"23 Years"
    },
    {
        name: "Dr Harit Chaturvedi",
        specilisation:"Surgical Oncology Cancer",
        experience:"38 Years"
    },
    {
        name: "Dr Harsh Dua",
        specilisation:"Oncology Cancer",
        experience:"35 Years"
    },
    {
        name: "Dr Sudarshan De",
        specilisation:"Radiation Oncology Cancer",
        experience:"28 Years"
    },
    {
        name: "Dr Sabyasachi Bal",
        specilisation:"Surgical Oncology Cancer",
        experience:"31 Years"
    },
    {
        name: "Dr Z S Meharwal",
        specilisation:"Cardiac Surgeons",
        experience:"27 years"
    },
    {
        name: "Dr Y K Mishra ",
        specilisation:"Cardiac Surgeon",
        experience:"32 years"
    },
    {
        name: "Dr. H. S. Chhabra",
        specilisation:"Spine Surgeon",
        experience:"30 years"
    },
    {
        name: "Dr. Ajay Kaul",
        specilisation:"Cardiac Surgeon",
        experience:"36 years"
    },
    {
        name: "Dr. Ramesh Sarin",
        specilisation:"Colo-Rectal Surgeon,",
        experience:"40 years"
    },
    {
        name: "Dr. Anil Vardani",
        specilisation:"General Physician with specialization in Internal Medicine",
        experience:"25 years"
    },
    {
        name: "Dr Rachna Kucheria",
        specilisation:"MD (Family Medicine) USC California",
        experience:"26 years"
    },
];

for (let i = 0; i < doctors.length; i++) {
  handle(doctors[i]);
}