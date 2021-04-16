const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have all the suggested comments added correctly', async () => {
    const scriptFile = await getFileContents('../insert_data.sh');

    assert(/first_name[\s\S]*then\s*#[ \t]*get major_id\s*\n+\s*#[ \t]*if not found\s*\n+\s*#[ \t]*set to null\s*\n+\s*#[ \t]*insert student\s*\n+\s*fi\s*\n+\s*done/g.test(scriptFile));
  });
});
