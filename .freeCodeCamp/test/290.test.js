const assert = require('assert');
const { getLastQueryResult } = require('./utils');

describe('You', () => {
  it('should display the details of the "majors_courses" table', async () => {
    const lastQueryResult = await getLastQueryResult();

    assert(/Table"public\.majors_courses"/.test(lastQueryResult));
  });
});
