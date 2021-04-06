const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the suggested command added correctly', async () => {
    const scriptFile = await getFileContents('../insert_data.sh');

    assert(/students_test\.csv[\s\S]*do[\s\S]*if[ \t]+\[\[[ \t]+\$FIRST[ \t]+!=[ \t]+('|"|)first_name\1[ \t]\]\]([ \t]*;\s*|\s*\n\s*)then\s+[\s\S]*fi[\s\S]*done/gm.test(scriptFile));
  });
});
