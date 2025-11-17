import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const UserSchema = new mongoose.Schema({
  name: {
    type: String
    },
    email: {
    type: String,
    unique: true
    },
    password: {
    type: String
    }
},
{ timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;