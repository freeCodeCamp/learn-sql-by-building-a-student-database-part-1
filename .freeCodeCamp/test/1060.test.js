const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the suggested variable added correctly', async () => {
    const scriptFile = await getFileContents('../insert_data.sh');
    const test1 = /students_test[\s\S]*MAJOR_ID[\s\S]*fi[\s\S]*\n+\s*INSERT_STUDENT_RESULT=\$\([ \t]*\$PSQL[ \t]*"INSERT[ \t]+INTO[ \t]+students[ \t]*\([ \t]*first_name[ \t]*,[ \t]*last_name[ \t]*,[ \t]*major_id[ \t]*,[ \t]*gpa[ \t]*\)[ \t]*VALUES[ \t]*\([ \t]*('|)\$FIRST\1[ \t]*,[ \t]*('|)\$LAST\2[ \t]*,[ \t]*\$MAJOR_ID[ \t]*,[ \t]*\$GPA[ \t]*\)[ \t]*;?[ \t]*"[ \t]*\)[ \t]*;?[ \t]*[\s\S]*fi[\s\S]*done/gi.test(scriptFile);
    const test2 = /INSERT_STUDENT_RESULT=\$\([ \t]*\$PSQL[\s\S]*'\$FIRST'[ \t]*,[ \t]*'\$LAST'[ \t]*,[ \t]*\$MAJOR_ID[ \t]*,[ \t]*\$GPA/g.test(scriptFile);

    assert(test1 && test2);
  });
});
