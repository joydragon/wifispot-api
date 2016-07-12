'use strict';

var SwaggerHapi = require('swagger-hapi');
var Hapi = require('hapi');
var app = new Hapi.Server();

var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/TestingDB', function(err) {
    if(err){
        console.error(err);
    }
});

var swaggerMongoose = require('swagger-mongoose-fork');
var baseModel = require('./api/helpers/baseConfig.js');

module.exports = app; // for testing

var config = {
    appRoot: __dirname, // required config
};

SwaggerHapi.create(config, function(err, swaggerHapi) {
    if (err) { throw err; }

    var port = process.env.PORT || 10010;
    app.connection({ port: port });
    app.address = function() {
        return { port: port };
    };
  
    app.register({
        register: baseModel,
        options: {
                swaggerMongoose: swaggerMongoose,
                swaggerHapi: swaggerHapi
        }
    }, function(err){
        if(err){
            return console.error('Failed to load baseConfig plugin:', err);
        }
    });
    
    app.register(swaggerHapi.plugin, function(err) {
        if (err) { return console.error('Failed to load plugin:', err); }
        app.start(function() {
            if (swaggerHapi.runner.swagger.paths['/hello']) {
                console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
            }
        });
    });
});
