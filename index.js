(()=>{

  var childProcess = require('child_process');
  const fs = require('fs');
  const path = require('path');

  const cmd = require("./cmd.js");
  const board = require("./board.js");
  const sketch = require("./sketch.js");

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


  module.exports = {
    board:{
      list: board.getBoardList,
      listall: board.listAllBoard,
      attach: attachBoard,
    },
    sketch:{
      new: sketch.createSketch
    },
    config: {
      get: ()=>config,
      set: (newConfig)=> config = newConfig
    }
  };
})();
