const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the suggested comment added correctly', async () => {
    const scriptFile = await getFileContents('../insert_data.sh');

    assert(/^#[ \t]*Script to insert data from courses.csv and students.csv into students database[ \t]*$/gm.test(scriptFile));
  });
});
