const assert = require('assert');
const { getLastLog } = require('./utils');

describe('You', () => {
  it('should view all the data in the "majors_courses" table', async () => {
    const lastLog = await getLastLog(true);
    const selectAll = /statement:select\*frommajors_courses;/i;

    assert(selectAll.test(lastLog) && !/ERROR/.test(lastLog));
  });
});
