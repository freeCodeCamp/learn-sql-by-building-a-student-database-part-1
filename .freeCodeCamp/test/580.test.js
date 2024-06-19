const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the suggested command added correctly', async () => {
    const scriptFile = await getFileContents('../insert_data.sh');

    assert(/^[ \t]*INSERT_MAJOR_RESULT[\s\S]*[ \t]*echo[ \t]+\$INSERT_MAJOR_RESULT[ \t]*;?[ \t]*$/gm.test(scriptFile));
  });
});
