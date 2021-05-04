const assert = require('assert');
const { getLastLog } = require('./utils');

describe('You', () => {
  it('should enter the correct command in the psql prompt', async () => {
    const lastLog = await getLastLog(true);
    const query = /statement:select(major_id,count\(\*\)asnumber_of_students|count\(\*\)asnumber_of_students,major_id)fromstudentsgroupbymajor_idhavingcount\(\*\)<8(\.0)?;/i;

    assert(query.test(lastLog) && !/ERROR/.test(lastLog));
  });
});
