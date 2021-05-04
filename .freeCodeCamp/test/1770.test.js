const assert = require('assert');
const { getCommandOutput } = require('./utils');

describe('Your script', () => {
  it('should print the results of the suggested query correctly', async () => {
    const output = await getCommandOutput('./student_info.sh');

    assert(/\n(Noe\|Savage\|3\.6\n|Danh\|Nhung\|2\.4\n|Hugo\|Duran\|3\.8\n){3}$/g.test(output));
  });
});
