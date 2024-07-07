const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the suggested command added correctly', async () => {
    const scriptFile = await getFileContents('../insert_data.sh');

    assert(/done[\s\S]*cat[ \t]+students_test\.csv[ \t]*\|[ \t]+while[ \t]+IFS=('|"|),\1[ \t]+read[ \t]+FIRST[ \t]+LAST[ \t]+MAJOR[ \t]+GPA([ \t]*;\s*|\s*\n+\s*)do\s+echo[ \t]+\$FIRST([ \t]*;\s*|\s*\n+\s*)done/gm.test(scriptFile));
  });
});
