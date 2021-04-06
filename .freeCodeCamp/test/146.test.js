const assert = require('assert');
const { Client } = require('pg');

const database = 'students';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;

const client = new Client({
  connectionString: connectionString,
});

describe('The "students" table', () => {
  it('should have the correct "gpa" column', async () => {
    const query = `SELECT table_name, column_name FROM information_schema.columns WHERE table_schema = 'public' AND table_name='students' AND column_name='gpa' AND data_type='numeric' AND numeric_precision=2 AND numeric_scale=1`;

    try {
      await client.connect();
      const res = await client.query(query);

      assert(res.rowCount > 0);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});
