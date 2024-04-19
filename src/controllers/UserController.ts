// controllers/UserController.ts
import { Request, Response } from 'express';
import { UserRepository } from '../repositories/UserRepository';
import pool from '../adapters/database';

const userRepository = new UserRepository(pool);

class UserController {
    public async get(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const user = await userRepository.get(id);

            if (user) {
                res.status(200).json({
                    status: true,
                    user
                });
            } else {
                res.status(404).json({
                    status: false,
                    msg: 'Usuário não encontrado'
                });
            }
        } catch (err) {
            console.error('Erro ao buscar usuário:', err);
            res.status(500).json({
                status: false,
                msg: 'Falha ao buscar usuário'
            });
        }
    }
}

export const userController = new UserController();
