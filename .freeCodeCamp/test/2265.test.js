/*const assert = require('assert');
const { getLastLog } = require('./utils');

describe('You', () => {
  it('should enter the correct command in the psql prompt', async () => {
    const lastLog = await getLastLog(true);
    const lastLog2 = await getLastLog();
    const query = /statement:select(first_name,last_name,gpa|first_name,gpa,last_name|last_name,first_name,gpa|last_name,gpa,first_name|gpa,first_name,last_name|gpa,last_name,first_name)from(studentsleftjoinmajors|majorsrightjoinstudents)on(students\.major_id=majors\.major_id|majors\.major_id=students\.major_id)where(major='datascience'orgpa>=3\.8|gpa>=3\.8ormajor='datascience');/i;

    assert(query.test(lastLog) && /'Data Science'/.test(lastLog2) && !/ERROR/.test(lastLog));
  });
});*/
