const assert = require('assert');
const { getCommandOutput } = require('./utils');

describe('Your script', () => {
  it('should print the suggested line correctly', async () => {
    const output = await getCommandOutput('./student_info.sh');

    assert(/\n\nCourse name of the first five courses, in reverse alphabetical order, that have an 'e' as the second letter or end with an 's':\n{1}$/g.test(output));
  });
});
