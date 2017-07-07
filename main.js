var db = require('./app/database.js');
var config = require('./config.js');
var mqtt = require('mqtt');
var controller = require('./app/controller/coleta.js');

db(config.mongoURL);
var client = mqtt.connect(config.mqttURL);
client.on('connect',function(){
  client.subscribe(config.mqttTopico);
});

client.on('message', function(topic,message){
  controller.criarColeta(message.toString());
});
