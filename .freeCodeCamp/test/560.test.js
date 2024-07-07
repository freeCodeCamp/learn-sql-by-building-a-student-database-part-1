const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the suggested variable added correctly', async () => {
    const scriptFile = await getFileContents('../insert_data.sh');

    assert(/\/bash[\s\S]*\n[ \t]*PSQL="psql -X --username=freecodecamp --dbname=students --no-align --tuples-only -c"[ \t]*;?[\s\S]*cat/g.test(scriptFile));
  });
});
