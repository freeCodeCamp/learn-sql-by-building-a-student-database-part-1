const assert = require('assert');
const { getLastQueryResult } = require('./utils');

describe('You', () => {
  it('should display the details of the "majors" table', async () => {
    const lastQueryResult = await getLastQueryResult();

    assert(/Table"public\.majors"/.test(lastQueryResult));
  });
});
