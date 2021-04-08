const assert = require('assert');
const { getLastLog } = require('./utils');

describe('You', () => {
  it('should view all the data in the "students_majors" table', async () => {
    const lastLog = await getLastLog(true);
    const selectAll = /statement:select\*fromstudents_majors;/i;

    assert(selectAll.test(lastLog));
  });
});
