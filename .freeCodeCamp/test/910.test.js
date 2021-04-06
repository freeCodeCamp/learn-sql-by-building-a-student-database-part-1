const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the suggested variable added correctly', async () => {
    const scriptFile = await getFileContents('../insert_data.sh');
    const test1 = /COURSE_ID[\s\S]*fi[\s\S]*\n+\s*INSERT_MAJORS_COURSES_RESULT=\$\([ \t]*\$PSQL[ \t]*"INSERT[ \t]+INTO[ \t]+majors_courses[ \t]*\([ \t]*major_id[ \t]*,[ \t]*course_id[ \t]*\)[ \t]*VALUES[ \t]*\([ \t]*('|)\$MAJOR_ID\1[ \t]*,[ \t]*('|)\$COURSE_ID\2[ \t]*\)[ \t]*;?[ \t]*"[ \t]*\)[ \t]*;?[ \t]*[\s\S]*fi[\s\S]*done/gi.test(scriptFile)
    const test2 = /INSERT_MAJORS_COURSES_RESULT=\$\([ \t]*\$PSQL[\s\S]*('|)\$MAJOR_ID\1[ \t]*,[ \t]*('|)\$COURSE_ID\2/g.test(scriptFile)

    assert(test1 && test2);
  });
});
