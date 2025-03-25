import passport from 'passport';

// Изменяем на экспорт по умолчанию
const authMiddleware = passport.authenticate('jwt', { session: false });

export default authMiddleware;  // Добавляем default

// Если есть другие middleware, экспортируем их отдельно
export const errorHandler = (err, req, res, next) => {
  res.status(500).json({ message: err.message });
};