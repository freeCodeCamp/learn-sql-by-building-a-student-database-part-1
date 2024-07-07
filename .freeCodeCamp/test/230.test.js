const assert = require('assert');
const { Client } = require('pg');

const database = 'students';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;

const client = new Client({
  connectionString: connectionString,
});

describe('The "majors_courses" table', () => {
  it('should the correct "major_id" column', async () => {
    const query = `SELECT column_name FROM INFORMATION_SCHEMA.COLUMNS WHERE table_schema = 'public' AND table_name='majors_courses' AND column_name='major_id' AND data_type='integer'`;

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
