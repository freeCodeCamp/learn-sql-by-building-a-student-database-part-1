const assert = require('assert');
const { getCommandOutput } = require('./utils');

describe('Your script', () => {
  it('should print the results of the suggested query correctly', async () => {
    const output = await getCommandOutput('./student_info.sh');

    assert(/\nComputer Programming\nDatabase Administration\nNetwork Engineering\nWeb Development\n{1}$/g.test(output));
  });
});
