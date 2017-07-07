var mqtt = require('mqtt');
var config = require('../config.js');
var controller = require('../app/controller/coleta.js');
var db = require('../app/database.js');

module.exports = function(mqttHost,mongoURL){
  db(mongoURL);
  
  var client = mqtt.connect('mqtt://'+mqttHost);
  client.on('connect',function(){
    client.subscribe('iotenv');
    client.publish('iotenv','{"dispositivo":"tcc-bruno","dados":[{"nome":"temperatura","valor":"26"}],"localizacao":{"latitude":-3.7655583,"longitude":-38.6379784}}');
  });

  client.on('message', function(topic,message){
    controller.criarColeta(message);
  });
};
