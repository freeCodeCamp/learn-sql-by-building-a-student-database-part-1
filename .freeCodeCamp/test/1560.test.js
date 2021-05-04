const assert = require('assert');
const { getCommandOutput } = require('./utils');

describe('Your script', () => {
  it('should print the suggested line correctly', async () => {
    const output = await getCommandOutput('./student_info.sh');

    assert(/\n\nLast name of students whose last name contains a case insensitive 'sa' or have an 'r' as the second to last letter:\n{1}$/g.test(output));
  });
});
