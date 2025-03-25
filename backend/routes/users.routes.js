import express from 'express';
const router = express.Router();

// Пример роута
router.get('/', (req, res) => {
  res.json({ message: 'Users route works' });
});

export default router;
