import Express  from "express";
import { getAllBugs, createBug,changeCompletedStatus, getBugsByUserId} from "../controllers/bug.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";



const router = Express.Router();

router.get('/', authMiddleware ,getAllBugs);

router.post('/', authMiddleware,createBug);

router.put('/:id/status', authMiddleware,changeCompletedStatus);

router.get('/:userId',authMiddleware,getBugsByUserId);

export default router;