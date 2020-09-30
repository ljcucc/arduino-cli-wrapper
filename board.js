const cmd = require("./cmd.js");

function getBoardList(){
  return cmd.cmdPromiseMaker(['board', 'list'], (data, callback)=>{
    callback(
      cmd.getListFromStdout(data,cmd.dict2args({
        path: "Path",
        type: "Type",
        name: "Board Name",
        fqbn: "FQBN Core"
      }))
    );

  });
}

function listAllBoard(){
  return cmd.cmdPromiseMaker(['board', 'listall'], (data, callback)=>{
    callback(
      cmd.getListFromStdout(data,cmd.dict2args({
        name: "Board Name",
        fqbn: "FQBN"
      }))
    );
  });
}

module.exports = {
  getBoardList,
  listAllBoard
}
