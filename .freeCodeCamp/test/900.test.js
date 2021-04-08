const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the suggested variable added correctly', async () => {
    const scriptFile = await getFileContents('../insert_data.sh');
    const test1 = /COURSE_ID[\s\S]*COURSE_ID=\$\([ \t]*\$PSQL[ \t]*"SELECT[ \t]+course_id[ \t]+FROM[ \t]+courses[ \t]+WHERE[ \t]+course[ \t]*=[ \t]*'\$COURSE'[ \t]*;?[ \t]*"[ \t]*\)[\s\S]*fi[\s\S]*fi[\s\S]*done/gi.test(scriptFile)
    const test2 = /INSERT_COURSE_RESULT[\s\S]*COURSE_ID=\$\([ \t]*\$PSQL[\s\S]*'\$COURSE'/g.test(scriptFile);

    assert(test1 && test2);
  });
});
