const assert = require('assert');
const { getLastLog } = require('./utils');

describe('You', () => {
  it('should enter the correct command in the psql prompt', async () => {
    const lastLog = await getLastLog(true);
    const query = /statement:select\*fromstudentswherelast_name<'m'andgpa=('|)3\.9\1;/i;

    assert(query.test(lastLog) && /'M'/.test(lastLog) && !/ERROR/.test(lastLog));
  });
});
