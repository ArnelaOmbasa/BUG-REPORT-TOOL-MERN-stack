import Bug from "../models/Bug.model.js";
import { ROLES } from "../constants.js";

export const getAllBugs = async (req, res) => {
    const { role, id } = req.user;

    try {
        let bugs = [];

        if (role === ROLES.QA) {
            bugs = await Bug.find({reportedBy: id});
        } else {
            bugs = await Bug.find({assignedTo: id});
        }

        res.status(200).send(bugs);
    } catch (error) {
        res.status(500).send("Something went wrong");
        console.log(error);
    }	
}

export const createBug = async (req, res) => {
    const bug = req.body;

    try {
        const newBug = new Bug(bug);
        try {
            await newBug.save();
    
            res.status(200).send("Created");
        } catch (err) {
            res.status(500).send("Something went wrong");
        }
    } catch (error) {
        res.status(500).send("Something went wrong");
    }
}

export const changeCompletedStatus = async (req, res) => {
    try {
        const { completed } = req.body;
        const { id } = req.params;
    
        await Bug.findByIdAndUpdate(id, { completed: completed });

        res.status(200).send("Updated");
        console.log(result);
    } catch (err) {
        res.status(500).send("Something went wrong");
    }
}