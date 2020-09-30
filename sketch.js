const cmd = require("./cmd.js");

function createSketch(name){
  const path = `${config.sketch_folder}/${name}`;
  //console.log(path);
  mkdirp(path).then(e=>{
    cmd.cmdPromiseMaker(['sketch','new'], (data, callback)=>{
    });
  }).catch(e=>{
    throw e;
  })
}

module.exports = {
  createSketch
}
