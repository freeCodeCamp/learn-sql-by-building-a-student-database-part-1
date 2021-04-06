const assert = require('assert');
const { getLastCommand, getCwd } = require('./utils');
const { Client } = require('pg');

const database = 'students';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;

const client = new Client({
  connectionString: connectionString,
});

describe('You', () => {
  it('should run your script by executing it', async () => {
    const cwd = await getCwd();
    const lastCommand = await getLastCommand();
    const query = `SELECT major_id FROM majors`;

    try {
      await client.connect();
      const res = await client.query(query);

      assert(res.rowCount === 3 && lastCommand[0] === './insert_data.sh' && (lastCommand[1] === undefined || lastCommand[1].op === ';') && /\/project$/.test(cwd));
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});
