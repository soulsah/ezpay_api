import { Pool } from 'pg';

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    port: 5433
});

export async function connectDatabase() {
    try {
        await pool.connect();
        console.log('🔥🔥 Connected to the database! 🔥🔥');
    } catch (error) {
        console.error('Failed to connect to the database: ', error);
        throw error;
    }
}
export default pool;
