import { Pool, QueryResult } from 'pg';
import { User } from '../entities/User';

export class UserRepository {
    private pool: Pool;

    constructor(pool: Pool) {
        this.pool = pool;
    }

    public async get(id: number): Promise<User | null> {
        const query = 'SELECT * FROM "users" WHERE userid = $1';
        try {
            const result: QueryResult = await this.pool.query(query, [id]);
            if (result.rows.length > 0) {
                const userData = result.rows[0];
                const user = new User(userData.userid, userData.username, userData.useremail, userData.userpassword);
                return user;
            } else {
                return null;
            }
        } catch (error) {
            console.error('Erro ao buscar usuário por ID:', error);
            throw new Error('Falha ao buscar usuário');
        }
    }

    async create(user: User): Promise<void> {
        const query = 'INSERT INTO "users" (email, cpf, nome, senha) VALUES ($1, $2, $3, $4)';
        const values = [user.username, user.useremail, user.userpassword];

        try {
            await this.pool.query(query, values);
        } catch (error) {
            console.error('Erro ao criar usuário:', error);
            throw new Error('Falha ao criar usuário');
        }
    }
}
