const assert = require('assert');
const { getCommandOutput, getFileContents } = require('./utils');

describe('Your script', () => {
  it('should print the results of the suggested query correctly', async () => {
    const output = await getCommandOutput('./student_info.sh');
    const scriptFile = await getFileContents('../student_info.sh');

    assert(/\n(\|8\|2\.97\n|\d+\|6\|3\.38\n|\d+\|6\|2\.92\n|\d+\|6\|3\.53\n|\d+\|4\|2\.73\n){5}$/g.test(output) && /number_of_students/.test(scriptFile) && /average_gpa/.test(scriptFile));
  });
});
