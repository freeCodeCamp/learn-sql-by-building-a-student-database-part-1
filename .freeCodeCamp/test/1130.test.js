const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the suggested command added correctly', async () => {
    const scriptFile = await getFileContents('../insert_data.sh');

    assert(/^[ \t]*cat[ \t]+students\.csv[ \t]*\|[ \t]*while/gm.test(scriptFile) && !/students_test/g.test(scriptFile));
  });
});
