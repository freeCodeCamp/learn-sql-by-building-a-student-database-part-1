const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your "courses_test.csv" file', () => {
  it('should have the correct rows', async () => {
    const fileContents = await getFileContents('../students_test.csv');
    const re = /^first_name,last_name,major,gpa\nRhea,Kellems,Database Administration,2.5\nEmma,Gilbert,null,null\nKimberly,Whitley,Web Development,3.8\nJimmy,Felipe,Database Administration,3.7\n$/g

    assert(re.test(fileContents));
  });
});
