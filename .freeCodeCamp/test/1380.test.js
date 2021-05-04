const assert = require('assert');
const { getCommandOutput } = require('./utils');

describe('Your script', () => {
  it('should print the suggested line correctly', async () => {
    const output = await getCommandOutput('./student_info.sh');

    assert(/\n\nAll course names whose first letter is before 'D' in the alphabet:\n{1}$/g.test(output));
  });
});
