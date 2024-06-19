const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have all the suggested comments added correctly', async () => {
    const scriptFile = await getFileContents('../insert_data.sh');

    assert(/do(\s*\n+\s*)#[ \t]*get major_id(\s*\n+\s*)#[ \t]*if not found(\s*\n+\s*)#[ \t]*insert major(\s*\n+\s*)#[ \t]*get new major_id(\s*\n+\s*)#[ \t]*get course_id(\s*\n+\s*)#[ \t]*if not found(\s*\n+\s*)#[ \t]*insert course(\s*\n+\s*)#[ \t]*get new course_id(\s*\n+\s*)#[ \t]*insert into majors_courses(\s*\n+\s*)done/g.test(scriptFile));
  });
});
