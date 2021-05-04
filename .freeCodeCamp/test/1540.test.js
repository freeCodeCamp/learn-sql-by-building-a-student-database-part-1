const assert = require('assert');
const { getCommandOutput } = require('./utils');

describe('Your script', () => {
  it('should print the results of the suggested query correctly', async () => {
    const output = await getCommandOutput('./student_info.sh');

    assert(/\n(Efren\|Reilly\|3\.9\n|Mariana\|Russel\|1\.8\n|Mehdi\|Vandenberghe\|1\.9\n){3}$/g.test(output));
  });
});
