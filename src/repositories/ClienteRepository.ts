import { Pool } from 'pg';
import { Cliente } from '../entities/Cliente';

export class ClienteRepository {
    private pool: Pool;

    constructor(pool: Pool) {
        this.pool = pool;
    }

    async criarCliente(cliente: Cliente): Promise<void> {
        const query = 'INSERT INTO cliente (email, cpf, nome, senha) VALUES ($1, $2, $3, $4)';
        const values = [cliente.email, cliente.cpf, cliente.nome, cliente.senha];

        try {
            await this.pool.query(query, values);
        } catch (error) {
            throw new Error(`Erro ao criar cliente: ${error}`);
        }
    }
}
