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

  module.exports = {
    board:{
      list: board.getBoardList,
      listall: board.listAllBoard,
      attach: board.attachBoard,
    },
    sketch:{
      new: sketch.createSketch
    },
    compile: (sketch_name)=>sketch.compileSketch(config, sketch_name),
    config: {
      get: ()=>config,
      set: (newConfig)=> config = newConfig
    }
  };
})();
