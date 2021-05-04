const assert = require('assert');
const { getLastLog } = require('./utils');

describe('You', () => {
  it('should enter the correct command in the psql prompt', async () => {
    const lastLog = await getLastLog(true);
    const query = /statement:selectfirst_name,last_name,gpafromstudentswheregpa!=('|)4(\.0)?\1;/i;

    assert(query.test(lastLog) && !/ERROR/.test(lastLog));
  });
});
