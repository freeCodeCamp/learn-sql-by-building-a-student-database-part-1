const assert = require('assert');
const { Client } = require('pg');

const database = 'students';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;

const client = new Client({
  connectionString: connectionString,
});

describe('The "students" table', () => {
  it('should have the correct "student_id" column', async () => {
    const query1 = `SELECT column_default FROM INFORMATION_SCHEMA.COLUMNS WHERE table_schema = 'public' AND table_name='students' AND column_name='student_id'`;
    const query2 = `SELECT c.table_name, c.column_name FROM information_schema.key_column_usage AS c LEFT JOIN information_schema.table_constraints AS t ON t.constraint_name = c.constraint_name WHERE t.constraint_type = 'PRIMARY KEY' AND t.table_name = 'students' AND c.column_name = 'student_id'`;

    try {
      await client.connect();
      const res1 = await client.query(query1);
      const res2 = await client.query(query2);

      assert(res1.rows[0].column_default === "nextval('students_student_id_seq'::regclass)" && res2.rowCount > 0);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});
