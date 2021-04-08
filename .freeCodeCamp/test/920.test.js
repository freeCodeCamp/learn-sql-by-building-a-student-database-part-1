const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the suggested command added correctly', async () => {
    const scriptFile = await getFileContents('../insert_data.sh');

    assert(/INSERT_GPA_RESULT[\s\S]*if[ \t]+\[\[[ \t]+\$INSERT_GPA_RESULT[ \t]+==[ \t]+('|")INSERT 0 1\1[ \t]\]\]([ \t]*;\s*|\s*\n+\s*)then\s+echo[ \t]+('|"|)Successfully inserted \$GPA into gpas\3([ \t]*;\s*|\s*\n\s*)fi[\s\S]*fi/g.test(scriptFile));
  });
});
