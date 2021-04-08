const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the suggested command added correctly', async () => {
    const scriptFile = await getFileContents('../insert_data.sh');

    assert(/^[ \t]*STUDENT_ID[\s\S]*[ \t]*echo[ \t]+\$STUDENT_ID[ \t]*;?[ \t]*$/gm.test(scriptFile));
  });
});
