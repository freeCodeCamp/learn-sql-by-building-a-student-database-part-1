const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your "courses_test.csv" file', () => {
  it('should have the correct rows', async () => {
    const fileContents = await getFileContents('../courses_test.csv');
    const re = /^major,course\nDatabase Administration,Data Structures and Algorithms\nWeb Development,Web Programming\nDatabase Administration,Database Systems\nData Science,Data Structures and Algorithms\n$/g

    assert(re.test(fileContents));
  });
});
