const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should not have the echo command or any of the variables', async () => {
    const scriptFile = await getFileContents('../insert_data.sh');

    assert(!/echo\s*\$FIRST/gm.test(scriptFile));
  });
});
