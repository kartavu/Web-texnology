import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import passport from 'passport';
import './config/passport.js';

// Routes
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/messages.routes.js';
import userRoutes from './routes/users.routes.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(passport.initialize());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

export default app;