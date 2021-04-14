const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the suggested command added correctly', async () => {
    const scriptFile = await getFileContents('../insert_data.sh');

    assert(/cat[ \t]+students\.csv[ \t]+\|[ \t]+while[ \t]+IFS=('|"|),\1[ \t]+read[ \t]+FIRST[ \t]+LAST[ \t]+MAJOR[ \t]+GPA([ \t]+;\s*|\s*\n+\s*)do\s+echo[ \t]+\$FIRST[ \t]+\$LAST[ \t]+\$MAJOR[ \t]+\$GPA([ \t]+;\s*|\s*\n+\s*)done/g.test(scriptFile));
  });
});
