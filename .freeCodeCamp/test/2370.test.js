const assert = require('assert');
const { getLastLog } = require('./utils');

describe('You', () => {
  it('should enter the correct command in the psql prompt', async () => {
    const lastLog = await getLastLog(true);
    const query = /statement:selects\.major_idfrom(studentsassfull(outer)?joinmajorsasm|majorsasmfull(outer)?joinstudentsass)on(s.major_id=m\.major_id|m\.major_id=s\.major_id);/i;

    assert(query.test(lastLog) && !/ERROR/.test(lastLog));
  });
});
