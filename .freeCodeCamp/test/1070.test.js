const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the suggested command added correctly', async () => {
    const scriptFile = await getFileContents('../insert_data.sh');

    assert(/INSERT_STUDENT_RESULT[\s\S]*if[ \t]+\[\[[ \t]+\$INSERT_STUDENT_RESULT[ \t]+==[ \t]+('|")INSERT 0 1\1[ \t]+\]\]([ \t]*;\s*|\s*\n+\s*)then\s+echo[ \t]+('|"|)Inserted into students, \$FIRST \$LAST\3([ \t]*;\s*|\s*\n+\s*)fi[\s\S]*fi[\s\S]*done/g.test(scriptFile));
  });
});
