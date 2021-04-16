const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the suggested command added correctly', async () => {
    const scriptFile = await getFileContents('../insert_data.sh');

    assert(/students_test[\s\S]*MAJOR_ID[\s\S]*(;\s*|\s*\n+\s*)echo[ \t]+\$MAJOR_ID[ \t]*;?[\s\S]+done/g.test(scriptFile));
  });
});
