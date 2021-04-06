const assert = require('assert');
const { getLastCommand, getCwd } = require('./utils');

describe('You', () => {
  it('should run your script by executing it', async () => {
    const cwd = await getCwd();
    const lastCommand = await getLastCommand();

    assert(lastCommand[0] === './insert_data.sh' && (lastCommand[1] === undefined || lastCommand[1].op === ';') && /\/project$/.test(cwd));
  });
});
