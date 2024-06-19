const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the suggested command added correctly', async () => {
    const scriptFile = await getFileContents('../insert_data.sh');

    assert(/first_name[\s\S]*if[\s\S]*MAJOR_ID[\s\S]*then\s*#[ \t]*set[ \t]+to[ \t]+null\s*\n+\s*MAJOR_ID=('|"|)null\1([ \t]*;\s*|\s*\n+\s*)fi[\s\S]*fi[\s\S]*done/g.test(scriptFile));
  });
});
