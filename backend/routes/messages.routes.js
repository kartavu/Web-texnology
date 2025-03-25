import express from 'express';
import { 
  getMessages, 
  createMessage,
  likeMessage 
} from '../controllers/messages.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/', authMiddleware, getMessages);
router.post('/', authMiddleware, createMessage);
router.patch('/:id/like', authMiddleware, likeMessage);

export default router;