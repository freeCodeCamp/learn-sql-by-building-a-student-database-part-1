const assert = require('assert');
const { getCommandOutput } = require('./utils');

describe('Your script', () => {
  it('should print the results of the suggested query correctly', async () => {
    const output = await getCommandOutput('./student_info.sh');

    assert(/\nWeb Programming\nWeb Applications\nPython\nObject-Oriented Programming\nNetwork Security\nData Structures and Algorithms\nComputer Systems\nComputer Networks\nAlgorithms\n{1}$/g.test(output));
  });
});
