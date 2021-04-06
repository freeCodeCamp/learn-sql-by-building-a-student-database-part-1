const assert = require('assert');
const { getLastCommand, getDirectoryContents, getCwd } = require('./utils');

describe('You', () => {
  it('should use the "copy" command to create the correct file', async () => {
    const cwd = await getCwd();
    const directoryContents = await getDirectoryContents(`..`);
    const lastCommand = await getLastCommand();

    assert(directoryContents.includes('courses_test.csv') && lastCommand[0] === 'cp' && /courses\.csv/g.test(lastCommand[1]) && /courses_test\.csv/g.test(lastCommand[2]) && /\/project$/.test(cwd));
  });
});
