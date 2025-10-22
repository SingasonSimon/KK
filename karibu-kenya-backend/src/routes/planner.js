import express from 'express';
import { protect, optionalAuth } from '../middleware/auth.js';

const router = express.Router();

// All routes can be accessed with or without authentication
router.use(optionalAuth);

// Placeholder routes for travel planner module
router.get('/', (req, res) => {
    res.json({ message: 'Travel Planner route - to be implemented' });
});

export default router;
