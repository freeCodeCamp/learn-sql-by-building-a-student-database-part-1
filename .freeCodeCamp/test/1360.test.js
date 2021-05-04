const assert = require('assert');
const { getCommandOutput } = require('./utils');

describe('Your script', () => {
  it('should print the results of the suggested query correctly', async () => {
    const output = await getCommandOutput('./student_info.sh');

    assert(/\n(Casares\|Hijo\|4\.0\n|Vanya\|Hassanah\|4\.0\n|Dejon\|Howell\|4\.0\n){3}$/g.test(output));
  });
});
