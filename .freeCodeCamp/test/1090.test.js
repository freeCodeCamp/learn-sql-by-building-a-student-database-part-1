const assert = require('assert');
const { getLastLog } = require('./utils');

describe('You', () => {
  it('should view all the data in the "students" table', async () => {
    const lastLog = await getLastLog(true);
    const selectAll = /statement:select\*fromstudents;/i;

    assert(selectAll.test(lastLog) && !/ERROR/.test(lastLog));
  });
});
