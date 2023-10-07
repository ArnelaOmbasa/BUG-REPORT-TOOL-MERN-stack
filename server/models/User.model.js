import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    role: String
});

const User= mongoose.model('users', UserSchema);

export default User;