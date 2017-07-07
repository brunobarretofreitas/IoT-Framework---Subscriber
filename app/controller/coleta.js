var Coleta = require('../model/coleta.js');

module.exports.criarColeta = function(coleta){
  console.log("Entrei");
  var c = JSON.parse(coleta);
  coleta = new Coleta();
  coleta.dispositivo = c.dispositivo;
  coleta.localizacao = c.localizacao;
  coleta.dados = c.dados;
  coleta.data = new Date(2017, 06, 25);

  coleta.save(function(err){
            if(err)
              return response.sendStatus(500);
  });
}
