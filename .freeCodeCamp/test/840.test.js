const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the suggested variable added correctly', async () => {
    const scriptFile = await getFileContents('../insert_data.sh');
    const test1 = /INSERT_STUDENT_RESULT[\s\S]*[ \t]*STUDENT_ID=\$\([ \t]*\$PSQL[ \t]*"SELECT[ \t]+student_id[ \t]+FROM[ \t]+students[ \t]+WHERE[ \t]+first_name[ \t]*=[ \t]*'\$FIRST'[ \t]+AND[ \t]+last_name[ \t]*=[ \t]*'\$LAST'[ \t]*;?[ \t]*"[ \t]*\)/gi.test(scriptFile)
    const test2 = /STUDENT_ID=\$\([ \t]*\$PSQL[\s\S]*'\$FIRST'[\s\S]*'\$LAST'/g.test(scriptFile);

    assert(test1 && test2);
  });
});
