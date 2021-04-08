const assert = require('assert');
const { getLastLog } = require('./utils');

describe('You', () => {
  it('should enter the suggested command', async () => {
    const lastLog = await getLastLog(true);
    const re = /^statement:truncate(majorscascade|majors,students,majors_courses|majors,majors_courses,students|students,majors,majors_courses|students,majors_courses,majors|majors_courses,majors,students|majors_courses,students,majors);/i;

    assert(re.test(lastLog) && !/ERROR/g.test(lastLog));
  });
});
