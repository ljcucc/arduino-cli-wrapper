const cmd = require("./cmd.js");

function createSketch(config, name){
  const path = `${config.sketch_folder}/${name}`;
  //console.log(path);
  mkdirp(path).then(e=>{
    cmd.cmdPromiseMaker(['sketch','new'], (data, callback)=>{
      callback(data.toString());
    });
  }).catch(e=>{
    throw e;
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
