const assert = require('assert');
const { getCommandOutput } = require('./utils');

describe('Your script', () => {
  it('should print the suggested line correctly', async () => {
    const output = await getCommandOutput('./student_info.sh');

    assert(/\n\nFirst name, last name, and GPA of students with a 4\.0 GPA:\n{1}$/g.test(output));
  });
});
