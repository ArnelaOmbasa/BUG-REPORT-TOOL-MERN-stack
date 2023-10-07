import mongoose from 'mongoose';
const { Schema } = mongoose;

const BugSchema = new Schema({
    title: String,
    steps: String,
    assignedTo: String,
    reportedBy: String,
    completed: Boolean,
    timeStamp: {type: Date, default: new Date()},
    severity: Number
});

const Bug= mongoose.model('bugs', BugSchema);

export default Bug;
