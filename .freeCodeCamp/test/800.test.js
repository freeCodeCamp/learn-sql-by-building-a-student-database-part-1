const assert = require('assert');
const { getFileContents, removeWhitespace } = require('./utils');

describe('Your script', () => {
  it('should not have the suggested command', async () => {
    const scriptFile = await getFileContents('../insert_data.sh');
    const noSpaces = await removeWhitespace(scriptFile);

    assert(!/echo\$INSERT_MAJOR_RESULT/gm.test(noSpaces));
  });
});
