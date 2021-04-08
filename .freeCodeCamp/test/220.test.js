const assert = require('assert');
const { getLastQueryResult } = require('./utils');

describe('You', () => {
  it('should display the details of the "courses" table', async () => {
    const lastQueryResult = await getLastQueryResult();

    assert(/Table"public\.courses"/.test(lastQueryResult));
  });
});
