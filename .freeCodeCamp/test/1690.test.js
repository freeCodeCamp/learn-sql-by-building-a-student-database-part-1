const assert = require('assert');
const { getCommandOutput } = require('./utils');

describe('Your script', () => {
  it('should print the results of the suggested query correctly', async () => {
    const output = await getCommandOutput('./student_info.sh');

    assert(/\n(Gilbert\n|Savage\n|Saunders\n|Hilpert\n|Hassanah\n){5}$/g.test(output));
  });
});
