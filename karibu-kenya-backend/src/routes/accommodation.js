import express from 'express';
import { protect, optionalAuth } from '../middleware/auth.js';

const router = express.Router();

// All routes can be accessed with or without authentication
router.use(optionalAuth);

// Placeholder routes for accommodation module
router.get('/', (req, res) => {
    res.json({ message: 'Accommodation route - to be implemented' });
});

export default router;
