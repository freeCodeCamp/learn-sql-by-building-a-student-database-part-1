const assert = require('assert');
const { getCommandOutput } = require('./utils');

describe('Your script', () => {
  it('should print the suggested line correctly', async () => {
    const output = await getCommandOutput('./student_info.sh');

    assert(/\n\nList of unique courses, in reverse alphabetical order, that no student or 'Obie Hilpert' is taking:\n{1}$/g.test(output));
  });
});
