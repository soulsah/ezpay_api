import { Pool } from 'pg';
import { User } from '../entities/User';

export class UserRepository {
    private pool: Pool;

    constructor(pool: Pool) {
        this.pool = pool;
    }

    async create(user: User): Promise<void> {
        const query = 'INSERT INTO user (email, cpf, nome, senha) VALUES ($1, $2, $3, $4)';
        const values = [user.email, user.cpf, user.nome, user.senha];

        try {
            await this.pool.query(query, values);
        } catch (error) {
            throw new Error(`Erro ao criar user: ${error}`);
        }
    }
}
