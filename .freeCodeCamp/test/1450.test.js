const assert = require('assert');
const { getCommandOutput } = require('./utils');

describe('Your script', () => {
  it('should print the results of the suggested query correctly', async () => {
    const output = await getCommandOutput('./student_info.sh');

    assert(/\n(Computer Networks\n|Computer Systems\n|Artificial Intelligence\n|Calculus\n|Algorithms\n){5}$/g.test(output));
  });
});
