const assert = require('assert');
const { getLastLog } = require('./utils');

describe('You', () => {
  it('should enter the correct command in the psql prompt', async () => {
    const lastLog = await getLastLog(true);
    const query = /statement:select\*from(studentsrightjoinmajors|majorsleftjoinstudents)on(students\.major_id=majors\.major_id|majors\.major_id=students\.major_id)wherestudent_idisnull;/i;

    assert(query.test(lastLog) && !/ERROR/.test(lastLog));
  });
});
