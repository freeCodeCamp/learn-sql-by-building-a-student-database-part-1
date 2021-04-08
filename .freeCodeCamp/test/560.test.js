const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the suggested variable added correctly', async () => {
    const scriptFile = await getFileContents('../insert_data.sh');

    assert(/^[ \t]*PSQL="psql -X --username=freecodecamp --dbname=students --no-align --tuples-only -c"[ \t]*;?[ \t]*$/gm.test(scriptFile));
  });
});
