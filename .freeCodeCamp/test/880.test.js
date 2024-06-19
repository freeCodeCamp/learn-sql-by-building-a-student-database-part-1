const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the suggested command added correctly', async () => {
    const scriptFile = await getFileContents('../insert_data.sh');
    const test1 = /PSQL=[\s\S]*echo[ \t]+\$\([ \t]*\$PSQL[ \t]*("|')[ \t]*TRUNCATE[ \t]+students[ \t]*,[ \t]*majors[ \t]*,[ \t]*courses[ \t]*,[ \t]*majors_courses[ \t]*;?\1[ \t]*\)[\s\S]*cat/gi.test(scriptFile);
    const test2 = /echo[ \t]+\$\([ \t]*\$PSQL/g.test(scriptFile);

    assert(test1 && test2);
  });
});
