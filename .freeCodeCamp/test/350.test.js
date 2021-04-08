/*const assert = require('assert');
const { Client } = require('pg');

const database = 'students';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;

const client = new Client({
  connectionString: connectionString,
});

describe('The "gpas" table', () => {
  it('should have the correct row added', async () => {
    const query = `SELECT student_id FROM students WHERE first_name='Rhea' AND last_name='Kellems'`;

    try {
      await client.connect();
      const res = await client.query(query);

      const student_id = res.rows[0].student_id;
      const query2 = `SELECT * FROM gpas WHERE student_id=${student_id} AND gpa=2.5`;
      const res2 = await client.query(query2);      

      assert(res2.rowCount > 0);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});*/
