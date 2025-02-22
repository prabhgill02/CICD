const request = require('supertest');
const app = require('../src/index');

describe('API Tests', () => {
    test('GET /ping should return pong', async () => {
        const res = await request(app).get('/ping');
        expect(res.status).toBe(200);
        expect(res.body).toEqual({ message: 'pong' });
    });

    test('POST /add should return sum of two numbers', async () => {
        const res = await request(app).post('/add').send({ a: 3, b: 5 });
        expect(res.status).toBe(200);
        expect(res.body).toEqual({ result: 8 });
    });

    test('POST /add should return error for missing inputs', async () => {
        const res = await request(app).post('/add').send({ a: 3 });
        expect(res.status).toBe(400);
        expect(res.body).toEqual({ error: 'Invalid input' });
    });

    test('POST /add should return error for non-numeric inputs', async () => {
        const res = await request(app).post('/add').send({ a: 'x', b: 5 });
        expect(res.status).toBe(400);
        expect(res.body).toEqual({ error: 'Invalid input' });
    });
});
