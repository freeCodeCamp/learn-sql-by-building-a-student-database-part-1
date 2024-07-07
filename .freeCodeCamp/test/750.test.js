const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the suggested command added correctly', async () => {
    const scriptFile = await getFileContents('../insert_data.sh');

    assert(/do\s*\n+\s*if[ \t]+\[\[[ \t]+\$MAJOR[ \t]+!=[ \t]+('|"|)major\1[ \t]+\]\]([ \t]*;\s*|\s*\n\s*)then\s+[\s\S]*INSERT_MAJOR_RESULT[\s\S]*fi[\s\S]*fi[\s\S]*done/gm.test(scriptFile));
  });
});
