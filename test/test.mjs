// test/test.js


// Habilita el soporte de módulos ES con el módulo esm
//require = require('esm')(module /*, options*/);
//module.exports = require('./test.mjs'); // Importa tus pruebas normales
/*
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index'); // Importa tu archivo principal donde está configurado Express
*/
import * as chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index.js';


// Configura chai para usar chai-http
chai.use(chaiHttp);
const expect = chai.expect;

describe('API de Usuarios', () => {
    describe('GET /api/users', () => {
        it('devuelve todos los usuarios', (done) => {
            chai.request(app)
                .get('/api/users')
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('array');
                    done();
                });
        });
    });

    describe('GET /api/users/:id', () => {
        it('devuelve un usuario por su ID', (done) => {
            chai.request(app)
                .get('/api/users/1')
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('object');
                    expect(res.body).to.have.property('id', 1);
                    done();
                });
        });

        it('devuelve un error 404 si el usuario no existe', (done) => {
            chai.request(app)
                .get('/api/users/999')
                .end((err, res) => {
                    expect(res).to.have.status(404);
                    done();
                });
        });
    });
});
