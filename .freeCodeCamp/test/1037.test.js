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
    const query1 = `SELECT major_id FROM majors`;
    const query2 = `SELECT course_id FROM courses`;
    const query3 = `SELECT major_id FROM majors_courses`;

    try {
      await client.connect();
      const res1 = await client.query(query1);
      const res2 = await client.query(query2);
      const res3 = await client.query(query3);

      assert(res1.rowCount === 3 && res2.rowCount === 3 && res3.rowCount === 4 && lastCommand[0] === './insert_data.sh' && (lastCommand[1] === undefined || lastCommand[1].op === ';') && /\/project$/.test(cwd));
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});
