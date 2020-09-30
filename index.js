(()=>{

  var childProcess = require('child_process');
  const fs = require('fs');
  const path = require('path');

  const cmd = require("./cmd.js");
  const board = require("./board.js");

  var mkdirp = require('mkdirp');
  
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

  function createSketch(name){
    return new Promise((callback)=>{
      mkdrip(`${config.sketch_folder}/${name}`, e=>{
        if(e) throw e;
        callback(true);
      });
    });
  }

  module.exports = {
    board:{
      list: board.getBoardList,
      listall: board.listAllBoard,
      attach: attachBoard,
    },
    sketch:{
      new: createSketch
    },
    config: {
      get: ()=>config,
      set: (newConfig)=> config = newConfig
    }
  };
})();
