1./Users/margaretculotta/Documents/Prime_Notes/Notes/Week5/prime_mongo_cli_00-master/bios.js
 2. db.bios.find({awards:{$exists:true}}).pretty();
 3. db.bios.find({awards:{$exists:false}}).pretty();
 4. db.bios.find({$or:[{"contribs":"OOP"},{"contribs":"UNIX"}]}).pretty();
 5. db.bios.find({"awards.award":"Turing Award"}).pretty();
 6. db.bios.find({ $and: [{_id: {$lt: 7}}, {_id: {$gt: 3}}]}).pretty();
 7. db.bios.find({"awards.year":{$lt:2000}}).pretty();
 8. db.bios.find({ $and: [{birth: {$exists: true}}, {death: {$exists: false}}]}).pretty();
