const assert = require('assert');
const { getLastLog } = require('./utils');

describe('You', () => {
  it('should enter the correct command in the psql prompt', async () => {
    const lastLog = await getLastLog(true);
    const query = /statement:select(first_name,last_name,gpa|first_name,gpa,last_name|last_name,first_name,gpa|last_name,gpa,first_name|gpa,first_name,last_name|gpa,last_name,first_name)fromstudents;/i;

    assert(query.test(lastLog) && !/ERROR/.test(lastLog));
  });
});
