const assert = require('assert');
const app = require('../../src/app');

describe('\'database\' service', () => {
  it('registered the service', () => {
    const service = app.service('database');

    assert.ok(service, 'Registered the service');
  });
});
