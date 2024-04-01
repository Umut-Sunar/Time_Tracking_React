import mongoose, { mongo } from "mongoose";
const Schema = mongoose.Schema;

mongoose
  .connect("mongodb://localhost/Timely")
  .then(() => console.log("DB Connected!"));

const UserSchema = new Schema({
  userID: Number,
  name: String,
  inspirationQuoute: String,
  userPhotoUrl: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('User',UserSchema)

module.exports = User;