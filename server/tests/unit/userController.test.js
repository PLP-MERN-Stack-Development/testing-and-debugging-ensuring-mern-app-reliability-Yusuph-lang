const { getUsers } = require('../../src/controllers/userController');

test('getUsers is defined', () => {
  expect(getUsers).toBeDefined();
});
