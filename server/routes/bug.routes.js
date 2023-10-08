import Express  from "express";
import { getAllBugs, createBug,changeCompletedStatus, getBugsByUserId} from "../controllers/bug.controller.js";


const router = Express.Router();

router.get('/', getAllBugs);

router.post('/', createBug);

router.put('/:id/status', changeCompletedStatus);

router.get('/:userId',getBugsByUserId);

export default router;