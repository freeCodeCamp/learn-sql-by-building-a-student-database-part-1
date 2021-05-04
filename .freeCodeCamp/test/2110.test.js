const assert = require('assert');
const { getCommandOutput } = require('./utils');

describe('Your script', () => {
  it('should print the suggested line correctly', async () => {
    const output = await getCommandOutput('./student_info.sh');

    assert(/\n\nList of majors, in alphabetical order, that either no student is taking or has a student whose first name contains a case insensitive 'ma':\n{1}$/g.test(output));
  });
});
