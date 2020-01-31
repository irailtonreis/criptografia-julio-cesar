const express = require('express');
const axios = require('axios');
var fs = require('fs');

const server = express();

server.get('/decode',  async (req, res)=> {
  const response = await axios.get(
    'https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=dc667b8bbd894797bf1a7ee1cbfbfad1264aa422');
    
    const jsonFile = JSON.stringify(response.data);

    fs.writeFile('output.json', jsonFile, 'utf8', (err) => {
      if(err){
        console.log("Ocorreu um erro ao salvar o arquivo");
        return console.log(err);
      }else{
        console.log("Arquivo salvo com sucesso!");
      }
    });

    fs.readFile('output.json',
    
    function(err, data) { 
        if (err) throw err;
        const fileRead = JSON.parse(data);
    
        decodeFrase(fileRead.cifrado, fileRead.numero_casas);
        // return res.json(data);
});

  const decodeFrase = (frase, number) => {

    for (let index = 0; index < frase.length; index++) {
      const code = frase.charCodeAt(index);
      console.log(code);
      
    }
  }

});

server.listen(3333);