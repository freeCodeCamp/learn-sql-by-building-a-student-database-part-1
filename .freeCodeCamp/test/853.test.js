const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the suggested variable added correctly', async () => {
    const scriptFile = await getFileContents('../insert_data.sh');
    const test1 = /-z[ \t]+\$COURSE_ID[\s\S]*then[\s\S]*\n+\s*INSERT_COURSE_RESULT=\$\([ \t]*\$PSQL[ \t]*"INSERT[ \t]+INTO[ \t]+courses[ \t]*\([ \t]*course[ \t]*\)[ \t]*VALUES[ \t]*\([ \t]*'\$COURSE'[ \t]*\)[ \t]*;?[ \t]*"[ \t]*\)[\s\S]*fi[\s\S]*fi[\s\S]*done/gi.test(scriptFile);
    const test2 = /INSERT_COURSE_RESULT=\$\([ \t]*\$PSQL[\s\S]*'\$COURSE'/g.test(scriptFile);

    assert(test1 && test2);
  });
});
