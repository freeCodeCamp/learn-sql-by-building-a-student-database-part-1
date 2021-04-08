const assert = require('assert');
const { Client } = require('pg');

const database = 'students';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;

const client = new Client({
  connectionString: connectionString,
});

describe('The "students" database', () => {
  it('should have a table named "majors_courses"', async () => {
    const query = `SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' AND table_name='majors_courses'`;

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
