const assert = require('assert');
const { getLastQueryResult } = require('./utils');

describe('You', () => {
  it('should display the details of the "gpas" table', async () => {
    const lastQueryResult = await getLastQueryResult();

    assert(/Table"public\.gpas"/.test(lastQueryResult));
  });
});
