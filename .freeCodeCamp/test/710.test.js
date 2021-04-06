const assert = require('assert');
const { getLastLog } = require('./utils');

describe('You', () => {
  it('should enter the suggested command', async () => {
    const lastLog = await getLastLog(true);
    const re = /^statement:truncate(courses,majors_courses|majors_courses,courses|coursescascade);/i;

    assert(re.test(lastLog) && !/ERROR/g.test(lastLog));
  });
});
