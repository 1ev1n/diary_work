import { Pool } from 'pg';

const pool = new Pool({
    connectionString: "postgresql://student4:student27112024@81.177.136.21:5432/diary",
    ssl: false,
});

export const db = async (query, params = []) => {
    const client = await pool.connect();
    try {
        const res = await client.query(query, params);
        return res.rows;
    } catch (err) {
        console.error('Database query error:', err);
        throw err;
    } finally {
        client.release();
    }
};