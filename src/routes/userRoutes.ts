import express from 'express';
import { userController } from '../controllers/UserController';

const router = express.Router();

router.get('/:id', userController.get);

export default router;
