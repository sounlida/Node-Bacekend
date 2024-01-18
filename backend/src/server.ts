import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes';
import { Pool, QueryResult } from 'pg';

const app = express();
const port = process.env.PORT || 3000;

const pool = new Pool({
  user: 'your_postgres_user',
  host: 'localhost',
  database: 'your_database_name',
  password: 'your_postgres_password',
  port: 5432,
});

app.use(cors());
app.use(express.json());
app.use('/api', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

process.on('SIGINT', () => {
  console.log('Closing pool due to application termination');
  pool.end().then(() => process.exit(0));
});