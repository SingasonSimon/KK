import express from 'express';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

// All admin routes require authentication and admin role
router.use(protect);
router.use(authorize('admin', 'moderator'));

// Placeholder routes for admin module
router.get('/', (req, res) => {
    res.json({ message: 'Admin route - to be implemented' });
});

export default router;
