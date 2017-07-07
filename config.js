var config = {};

config.mqttHost = "broker.mqttdashborad.com";
config.mqttPort = 1883;
config.mqttTopico = "iotenv";
config.mqttURL = "mqtt://"+config.mqttHost

config.mongoHost = "localhost";
config.mongoPort = "";
config.mongoDatabase = "iotenv";
config.mongoURL = "mongodb://"+config.mongoHost+"/"+config.mongoDatabase;

module.exports = config;
