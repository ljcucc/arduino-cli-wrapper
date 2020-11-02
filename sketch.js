const cmd = require("./cmd.js");
const mkdirp = require('mkdirp');

function createSketch(config, name){
  const path = `${config.sketch_folder}/${name}`;

  return new Promise((callback)=>{
    mkdirp(path).then(e=>{
      cmd.exec(['sketch','new'], (data, callback)=>{
        callback(data.toString());
      });
    }).catch(e=>{
      throw e;
    });

    callback();
  });
}

function compileSketch(config, board, name){
  console.log("compiling sketch...");
  const path = `${config.sketch_folder}/${name}`;
  return cmd.exec(['compile', '-u', '-b', board.fqbn,'-p', path], (data, callback)=>{
  });
}

module.exports = {
  createSketch,
  compileSketch
}
