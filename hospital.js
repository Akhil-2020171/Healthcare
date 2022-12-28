var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://127.0.0.1:27017/";

const handle = (data) => {
  var new_data = {
    name: data.name,
    location: data.location,
    rating: data.rating,
  };

  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("SignupDetails");
    dbo.collection("Hospital").insertOne(new_data, (err, collection) => {
      if (err) throw err;
      console.log("Record Inserted Successfully");
      db.close();
    });
  });
};

doctors = [
    {
        name: "Fortis",
        location:"Okhla road, Sukhdev Vihar Metro Station, New Delhi, Delhi 110025",
        rating:1
    },
    {
        name: "Dharamshila Narayana Superspeciality Hospital",
        location:"Dharamshila Marg, Vasundhara Enclave, Delhi - 110096, Near New Ashok Nagar Metro Station",
        rating:4
    },
    {
        name: "Jeevan Hospital",
        location:"Plot No - 1/83, Bahlolpur Main Road, Noida Sector 63, Noida - 201301, Near By TVS Showroom",
        rating:3
    },
    {
        name: "Healing Tree Hospital",
        location:"Plot No -30/1, Shakti Khand 3-Indirapuram, Ghaziabad - 201014, Near One Square Mall",
        rating:2
    },
    {
        name: "Medanta The Medicity",
        location:"CH Baktawar Singh Road, Gurgaon Sector 38, Gurgaon - 122001, Near Bakhtawar Chowk",
        rating:5
    },
    {
        name: "Taj Dawakhana",
        location:"3606, N S Marg Gali, Darya Ganj, Delhi - 110002, Near Golcha Cinema",
        rating:1
    },
    {
        name: "Dr. Ankur Gupta Ent Clinic ",
        location:"Noida Sector 12, Noida, Delhi",
        rating:2
    },
    {
        name: "Indo Global Phsyiotherapy",
        location:"Plot No. 68-P, Basement, Subhash Marg, Sector-46, Gurgaon Sector 46, Gurgaon - 122003, Near Gate No.1, Opposite Cyber Park",
        rating:5
    },
    {
        name: "Dr. Bhatia's Multi Speciality Dental Centre",
        location:"B1367, Main Road, Palam Vihar, Gurgaon - 122017, Near Columbia Asia Hospital & Palam Vyapar Kendra",
        rating:2
    },
    {
        name: "Uphi Urogynecology & Pelvic Health Institute",   
        location:"Plot Number 7 SP, DLF City Phase 5, Gurgaon - 122002, Sector 43, Next To Global Foyer Building",
        rating:4
    },
    {
        name: "Nfl Physiotherapy Clinic",
        location:"Shop No.LG- 1B, Panchsheel Square Mall, Crossing Republik, Ghaziabad - 201016, Near Gol Chakkar",
        rating:2
    },
    {
        name: "Indraprastha Apollo Hospital New Delhi",
        location:"Indraprastha Apollo Hospitals, Sarita Vihar, Delhi Mathura Road",
        rating:5
    },
    {
        name: "Indian Spinal Injuries Center",
        location:"Vasant Kunj Marg, Opp Vasant Valley School, IAA Colony, Sector C, Vasant Kunj",
        rating:4
    },
    {
        name: "Max Super Speciality Hospital",
        location:"Press Enclave Road, Mandir Marg, Saket, New Delhi, Delhi 110017",
        rating:5
    },
    {
        name: "Sir Ganga Ram Hospital",
        location:"Old Rajinder Nagar, Rajinder Nagar, New Delhi, Delhi 110060",
        rating:4
    },
    {
        name: "BLK Super Specialty Hospital",
        location:"Pusa Rd, Radha Soami Satsang, Rajendra Place, New Delhi, Delhi 110005",
        rating:3
    },
    {
        name: "Manipal Hospitals Dwarka",
        location:"Palam Vihar, Sector 6, Dwarka,New Delhi 110075",
        rating:4
    },
];

for (let i = 0; i < doctors.length; i++) {
  handle(doctors[i]);
}