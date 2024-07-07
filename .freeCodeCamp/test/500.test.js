const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the suggested command added correctly', async () => {
    const scriptFile = await getFileContents('../insert_data.sh');

    assert(/^[ \t]*cat[ \t]+courses\.csv[ \t]*\|[ \t]+while[ \t]+read[ \t]+MAJOR[ \t]+COURSE([ \t]*;\s*|\s*\n+\s*)do\s+echo[ \t]+\$MAJOR([ \t]*;\s*|\s*\n+\s*)done/gm.test(scriptFile));
  });
});
