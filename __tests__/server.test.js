'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const request = supertest(app);

describe('API Server', () => {
  test('should handle invalid requests', async () => {
    const response = await request.get('/foo');
    expect(response.status).toEqual(404);
  });
});

