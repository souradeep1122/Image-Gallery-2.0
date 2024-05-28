// models/User.js
const mongoose =require("mongoose");
mongoose.connect('mongodb+srv://souradeep418saha:HGNIErfgHHnMt4r3@aiavengerdb.je1poyy.mongodb.net/?retryWrites=true&w=majority');

const UserSchema = new mongoose.Schema({
    Link: { type: String, required: true },
    Desc: { type: String, required: true },
    date: { type: String, required: true }
   
});

module.exports = mongoose.model('Image-Gallery', UserSchema);
