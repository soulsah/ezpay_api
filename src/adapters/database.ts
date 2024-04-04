import { Pool } from 'pg';

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    port: 5432
});

export async function connectDatabase() {
    try {
        await pool.connect();
        console.log('Conexão com o banco de dados PostgreSQL estabelecida');
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados PostgreSQL:', error);
        throw error;
    }
}

export default pool;
