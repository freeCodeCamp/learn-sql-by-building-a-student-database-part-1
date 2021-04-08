/*const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the suggested variable added correctly', async () => {
    const scriptFile = await getFileContents('../insert_data.sh');
    const test1 = /MAJOR_ID[\s\S]*fi[\s\S]*fi[\s\S]*INSERT_STUDENTS_MAJORS_RESULT=\$\([ \t]*\$PSQL[ \t]*"INSERT[ \t]+INTO[ \t]+students_majors[ \t]*\([ \t]*student_id[ \t]*,[ \t]*major_id[ \t]*\)[ \t]*VALUES[ \t]*\([ \t]*('|)\$STUDENT_ID\1[ \t]*,[ \t]*('|)\$MAJOR_ID\2[ \t]*\)[ \t]*;?[ \t]*"[ \t]*\)[ \t]*;?[ \t]*[\s\S]*fi/gi.test(scriptFile)
    const test2 = /INSERT_STUDENTS_MAJORS_RESULT=\$\([ \t]*\$PSQL[\s\S]*('|)\$STUDENT_ID\1[ \t]*,[ \t]*('|)\$MAJOR_ID\2/g.test(scriptFile);

    assert(test1 && test2);
  });
});*/
