const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the suggested command added correctly', async () => {
    const scriptFile = await getFileContents('../insert_data.sh');

    assert(/INSERT_MAJORS_COURSES_RESULT[\s\S]*if[ \t]+\[\[[ \t]+\$INSERT_MAJORS_COURSES_RESULT[ \t]+==[ \t]+('|")INSERT 0 1\1[ \t]+\]\]([ \t]*;\s*|\s*\n+\s*)then\s+echo[ \t]+('|"|)Inserted into majors_courses, \$MAJOR : \$COURSE\3([ \t]*;\s*|\s*\n\s*)fi[\s\S]*fi[\s\S]*done/g.test(scriptFile));
  });
});
