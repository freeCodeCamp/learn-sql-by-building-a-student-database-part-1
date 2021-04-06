const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the suggested variable added correctly', async () => {
    const scriptFile = await getFileContents('../insert_data.sh');
    const test1 = /then[\s\S]*\n+\s*INSERT_MAJOR_RESULT=\$\([ \t]*\$PSQL[ \t]*"INSERT[ \t]+INTO[ \t]+majors[ \t]*\([ \t]*major[ \t]*\)[ \t]*VALUES[ \t]*\([ \t]*'\$MAJOR'[ \t]*\)[ \t]*;?[ \t]*"[ \t]*\)[ \t]*;?[ \t]*[\s\S]*fi/gi.test(scriptFile);
    const test2 = /INSERT_MAJOR_RESULT=\$\([ \t]*\$PSQL[\s\S]*'\$MAJOR'/g.test(scriptFile);

    assert(test1 && test2);
  });
});
