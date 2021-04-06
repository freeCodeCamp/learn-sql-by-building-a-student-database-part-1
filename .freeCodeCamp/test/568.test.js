const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the suggested command added correctly', async () => {
    const scriptFile = await getFileContents('../insert_data.sh');

    assert(/MAJOR_ID[\s\S]*#[ \t]*if[ \t]*not[ \t]+found\s*\n+\s*if[ \t]+\[\[[ \t]+-z[ \t]+\$MAJOR_ID[ \t]+\]\]([ \t]*;\s*|\s*\n+\s*)then\s*#[ \t]*insert major\s*\n+\s*#[ \t]*get new major_id\s*\n+\s*fi[\s\S]*#[ \t]*if[ \t]+not[ \t]+found/g.test(scriptFile));
  });
});
