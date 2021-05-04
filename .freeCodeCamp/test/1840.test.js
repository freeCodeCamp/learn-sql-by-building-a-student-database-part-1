const assert = require('assert');
const { getCommandOutput } = require('./utils');

describe('Your script', () => {
  it('should print the results of the suggested query correctly', async () => {
    const output = await getCommandOutput('./student_info.sh');

    assert(/\nWeb Programming\nWeb Applications\nServer Administration\nNetwork Security\nDatabase Systems\n{1}$/g.test(output));
  });
});
