const assert = require('assert');
const { Client } = require('pg');

const database = 'students';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;

const client = new Client({
  connectionString: connectionString,
});

describe('The "students" table', () => {
  it('should have the correct "major_id" foreign key', async () => {
    const query = `SELECT tc.table_name, kcu.column_name, ccu.table_name AS foreign_table_name, ccu.column_name AS foreign_column_name FROM information_schema.table_constraints tc JOIN information_schema.key_column_usage kcu ON tc.constraint_name = kcu.constraint_name JOIN information_schema.constraint_column_usage ccu ON ccu.constraint_name = tc.constraint_name WHERE constraint_type = 'FOREIGN KEY'`;

    try {
      await client.connect();
      const res = await client.query(query);

      const foreignKey = res.rows.filter(row => {
        return row.table_name === 'students' && row.column_name === 'major_id' && row.foreign_table_name === 'majors' && row.foreign_column_name === 'major_id';
      });

      assert(foreignKey.length > 0);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});
