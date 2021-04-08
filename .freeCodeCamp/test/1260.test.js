const assert = require('assert');
const { getCommandOutput } = require('./utils');

describe('Your script', () => {
  it('should "echo" the correct title', async () => {
    const output = await getCommandOutput('./student_info.sh');

    assert(/^\n~~ My Computer Science Students ~~\n{2}/g.test(output));
  });
});
