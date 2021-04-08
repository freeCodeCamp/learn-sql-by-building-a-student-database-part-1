const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the suggested variable added correctly', async () => {
    const scriptFile = await getFileContents('../insert_data.sh');
    const test1 = /STUDENT_ID[\s\S]*[ \t]*INSERT_GPA_RESULT=\$\([ \t]*\$PSQL[ \t]*"INSERT[ \t]+INTO[ \t]+gpas[ \t]*\([ \t]*student_id[ \t]*,[ \t]*gpa[ \t]*\)[ \t]*VALUES[ \t]*\([ \t]*('|)\$STUDENT_ID\1[ \t]*,[ \t]*('|)\$GPA\2[ \t]*\)[ \t]*;?[ \t]*"[ \t]*\)[ \t]*;?[ \t]*[\s\S]*fi/gi.test(scriptFile)
    const test2 = /INSERT_GPA_RESULT=\$\([ \t]*\$PSQL[\s\S]*('|)\$STUDENT_ID\1[ \t]*,[ \t]*('|)\$GPA\2/g.test(scriptFile)

    assert(test1 && test2);
  });
});
