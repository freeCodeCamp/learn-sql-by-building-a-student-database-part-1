const assert = require('assert');
const { getCommandOutput } = require('./utils');

describe('Your script', () => {
  it('should print the results of the suggested query correctly', async () => {
    const output = await getCommandOutput('./student_info.sh');

    console.log(output);
    assert(/\nEfren\|Reilly\|3\.9\nMariana\|Russel\|1\.8\nMehdi\|Vandenberghe\|1\.9\n{1}$/g.test(output));
  });
});
