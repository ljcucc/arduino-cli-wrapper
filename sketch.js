const cmd = require("./cmd.js");
const mkdirp = require('mkdirp');

function createSketch(config, name){
  const path = `${config.sketch_folder}/${name}`;
  //console.log(path);
  //
  return new Promise((callback)=>{
    mkdirp(path).then(e=>{
      cmd.cmdPromiseMaker(['sketch','new'], (data, callback)=>{
        callback(data.toString());
      });
    }).catch(e=>{
      throw e;
    });

    callback();
  });
}

function compileSketch(config, board, name){
  const path = `${config.sketch_folder}/${name}`;

  return cmd.cmdPromiseMaker(['compile', '-b', board.fqbn, path], (data, callback)=>{
  });
}

module.exports = {
  createSketch
}
