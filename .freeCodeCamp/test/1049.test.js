const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the suggested command added correctly', async () => {
    const scriptFile = await getFileContents('../insert_data.sh');

    assert(/MAJOR_ID=('|"|)null\1[\s\S]*echo[ \t]+\$MAJOR_ID[\s\S]*fi[\s\S]*done/g.test(scriptFile));
  });
});
