const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should not have the suggested echo command', async () => {
    const scriptFile = await getFileContents('../insert_data.sh');

    assert(!/echo[ \t]*\$MAJOR_ID/g.test(scriptFile));
  });
});
