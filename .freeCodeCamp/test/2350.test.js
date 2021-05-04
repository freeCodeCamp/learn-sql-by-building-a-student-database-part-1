const assert = require('assert');
const { getLastLog } = require('./utils');

describe('You', () => {
  it('should enter the correct command in the psql prompt', async () => {
    const lastLog = await getLastLog(true);
    const query = /statement:selectstudents\.major_idfrom(studentsfull(outer)?joinmajors|majorsfull(outer)?joinstudents)on(students\.major_id=majors\.major_id|majors\.major_id=students\.major_id);/i;

    assert(query.test(lastLog) && !/ERROR/.test(lastLog));
  });
});
