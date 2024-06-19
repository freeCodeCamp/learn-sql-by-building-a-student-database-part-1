const assert = require('assert');
const { Client } = require('pg');

const database = 'students';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;

const client = new Client({
  connectionString: connectionString,
});

describe('The "majors" table', () => {
  it('should have the correct "major" column', async () => {
    const query = `SELECT table_name, column_name FROM information_schema.columns WHERE table_schema = 'public' AND table_name='majors' AND column_name='major' AND data_type='character varying' AND character_maximum_length=50 AND is_nullable='NO'`;

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
