const assert = require('assert');
const { getLastLog } = require('./utils');

describe('You', () => {
  it('should enter the correct command in the psql prompt', async () => {
    const lastLog = await getLastLog(true);
    const lastLog2 = await getLastLog();
    const query = /select(\*|course)fromcourseswhere(coursenotilike'%a%'andcoursei?like'%%'|coursei?like'%%'andcoursenotilike'%a%');/i;

    assert(query.test(lastLog) && /% %/.test(lastLog2) && !/ERROR/.test(lastLog));
  });
});
