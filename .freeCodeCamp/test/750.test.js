const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the suggested command added correctly', async () => {
    const scriptFile = await getFileContents('../insert_data.sh');

    assert(/do[\s\S]*if[ \t]+\[\[[ \t]+\$FIRST[ \t]+!=[ \t]+('|"|)first_name\1[ \t]\]\]([ \t]*;\s*|\s*\n\s*)then[\s\S]*INSERT_STUDENT_RESULT[\s\S]*fi[\s\S]*done/gm.test(scriptFile));
  });
});
