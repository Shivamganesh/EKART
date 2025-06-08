import mongoose, {Schema} from "mongoose";

const UserSchema = new Schema({
    phone:{type:String, required:true,unique:true},
    address:{type:String},
    createdAt:{type:Date, dafault: Date.now},
    updatedAt:{type:Date, dafault: Date.now},

});

const User = mongoose.model("User", UserSchema)

export default User;