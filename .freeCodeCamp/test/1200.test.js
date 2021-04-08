const assert = require('assert');
const { getLastCommand, getDirectoryContents, getCwd } = require('./utils');

describe('You', () => {
  it('should use the "remove" command to delete the correct file', async () => {
    const cwd = await getCwd();
    const directoryContents = await getDirectoryContents(`..`);
    const lastCommand = await getLastCommand();

    assert(!directoryContents.includes('students_test.csv') && lastCommand[0] === 'rm' && /students_test\.csv/g.test(lastCommand[1]) && cwd === '/home/strove/project');
  });
});
