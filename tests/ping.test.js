const request = require('supertest');
const app = require('../src/app'); // Importamos nuestra configuración de Express

describe('Pruebas para el endpoint de Ping', () => {
    
    // Prueba 1: Validación de Status Code
    it('Debe retornar un status 200', async () => {
        const response = await request(app).get('/api/ping');
        expect(response.statusCode).toBe(200);
    });

    // Prueba 2: Validación del contenido de la respuesta
    it('Debe retornar un JSON con el mensaje "pong"', async () => {
        const response = await request(app).get('/api/ping');
        expect(response.body).toBeDefined();
        expect(response.body.message).toBe('pong');
    });

});