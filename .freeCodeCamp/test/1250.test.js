const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the suggested comment added correctly', async () => {
    const scriptFile = await getFileContents('../student_info.sh');

    assert(/^#[ \t]*Info about my computer science students from students database[ \t]*$/gm.test(scriptFile));
  });
});
