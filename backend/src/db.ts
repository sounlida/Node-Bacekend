import { Pool } from 'pg';

const pool = new Pool({
  user: 'your_postgres_user',
  host: 'localhost',
  database: 'your_database_name',
  password: 'your_postgres_password',
  port: 5432,
});

export default pool;