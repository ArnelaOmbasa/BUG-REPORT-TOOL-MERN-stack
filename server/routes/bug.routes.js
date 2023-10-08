 import express from 'express'
import authMiddleware from '../middleware/auth.middleware.js';

import { getAllBugs, createBug, changeCompletedStatus } from '../controllers/bug.controller.js';

const router = express.Router()

router.get('/', authMiddleware, getAllBugs);
router.post('/', authMiddleware, createBug);
router.put('/:id/status', authMiddleware, changeCompletedStatus);

export default router;