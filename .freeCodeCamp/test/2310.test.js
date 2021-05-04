const assert = require('assert');
const { getCommandOutput } = require('./utils');

describe('Your script', () => {
  it('should print the results of the suggested query correctly', async () => {
    const output = await getCommandOutput('./student_info.sh');

    assert(/\n(Computer Programming\n|Database Administration\n|Network Engineering|\nWeb Development\n){4}$/g.test(output));
  });
});
