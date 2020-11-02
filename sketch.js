const cmd = require("./cmd.js");
const mkdirp = require('mkdirp');

function createSketch(config, name){
  const path = `${config.sketch_folder}/${name}`;

  return new Promise((callback)=>{
    mkdirp(path).then(e=>{
      cmd.exec(['sketch','new', path], (data, callback)=>{
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
  console.log(board);
  const path = `${config.sketch_folder}/${name}`;
  return cmd.exec(['compile', '-u', '-b', board.fqbn,'-p',board.path,  path], (data, callback)=>{
    console.log("done!");
    callback(data);
  });
}

module.exports = {
  createSketch,
  compileSketch
}
