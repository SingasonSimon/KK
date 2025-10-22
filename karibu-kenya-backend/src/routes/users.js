import express from 'express';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

// All routes are protected
router.use(protect);

// Placeholder routes for user management
router.get('/', (req, res) => {
    res.json({ message: 'Users route - to be implemented' });
});

export default router;
