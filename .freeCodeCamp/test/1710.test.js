const assert = require('assert');
const { getCommandOutput } = require('./utils');

describe('Your script', () => {
  it('should print the suggested line correctly', async () => {
    const output = await getCommandOutput('./student_info.sh');

    assert(/\n\nFirst name, last name, and GPA of students who have not selected a major and either their first name begins with 'D' or they have a GPA greater than 3\.0:\n{1}$/g.test(output));
  });
});
