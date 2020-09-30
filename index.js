(()=>{

  var childProcess = require('child_process');
  const fs = require('fs');
  const path = require('path');

  const cmd = require("./cmd.js");
  const board = require("./board.js");
  
  var config = {
    sketch_folder: "./arduino-cli/sketch"
  };


  function attachBoard(){
    fs.writeFile(config.sketch_path.dirname(), "", function(err) {
      if(err) {
        return console.log(err);
      }
      console.log("The file was saved!");
    }); 
  }

  function getInstalledCore(){

  }

  function createSketch(){
  }

  module.exports = {
    board:{
      list: board.getBoardList,
      listall: board.listAllBoard,
      attach: attachBoard,
    },
    config: {
      get: ()=>config,
      set: (newConfig)=> config = newConfig;
    }
  };
})();
