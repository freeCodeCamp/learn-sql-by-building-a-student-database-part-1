const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the suggested command added correctly', async () => {
    const scriptFile = await getFileContents('../insert_data.sh');

    assert(/^[ \t]*cat[ \t]+courses\.csv[ \t]*\|[ \t]*while/gm.test(scriptFile) && !/courses_test/g.test(scriptFile));
  });
});
