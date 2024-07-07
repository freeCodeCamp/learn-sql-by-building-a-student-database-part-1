const assert = require('assert');
const { getLastCommand, getFileContents } = require('./utils');

describe('You', () => {
  it('should enter the suggested command in the terminal', async () => {
    const dumpFile = await getFileContents('../students.sql');
    const lastCommand = await getLastCommand();

    const pgDumpUsed = lastCommand[0] === 'pg_dump';
    const cleanFlag = lastCommand.includes('-c') || lastCommand.includes('--clean');
    const createFlag = lastCommand.includes('-C') || lastCommand.includes('--create');
    const insertFlag = lastCommand.includes('--inserts');

    assert(/--\n-- PostgreSQL database dump complete\n--\s*$/g.test(dumpFile) && pgDumpUsed && cleanFlag && createFlag && insertFlag);
  });
});
