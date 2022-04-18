const app = require('../index'); // Link to your server file
const supertest = require('supertest');
const request = supertest(app);

describe('Test endpoint responses', () => {
  it('should gets the valid endpoint response', async (): Promise<void> => {
    // note:  use "/images" and not "http://localhost:3000/images"
    const response = await request.get(
      '/images/encenadaport?width=200&height=200'
    );
    expect(response.status).toBe(200);
  });

  it('should return Error-404 for invalid image name', async (): Promise<void> => {
    const response = await request.get('/images/dummyImg');
    expect(response.status).toBe(404);
  });
});
