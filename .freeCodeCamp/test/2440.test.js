const assert = require('assert');
const { getCommandOutput } = require('./utils');

describe('Your script', () => {
  it('should print the suggested line correctly', async () => {
    const output = await getCommandOutput('./student_info.sh');

    assert(/\n\nList of courses, in alphabetical order, with only one student enrolled:\n{1}$/g.test(output));
  });
});
