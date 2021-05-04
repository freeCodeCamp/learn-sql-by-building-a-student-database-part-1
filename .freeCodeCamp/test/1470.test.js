const assert = require('assert');
const { getCommandOutput } = require('./utils');

describe('Your script', () => {
  it('should print the suggested line correctly', async () => {
    const output = await getCommandOutput('./student_info.sh');

    assert(/\n\nFirst name, last name, and GPA of students whose last name begins with an 'R' or after and have a GPA greater than 3\.8 or less than 2\.0:\n{1}$/g.test(output));
  });
});
