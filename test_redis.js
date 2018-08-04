var redis = require('redis');
var client = redis.createClient(); // this creates a new client

client.on('connect', function() {
    console.log('Redis client connected');
});