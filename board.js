const cmd = require("./cmd.js");

function getBoardList(){
  return cmd.cmdPromiseMaker(['board', 'list'], (data, callback)=>{
    callback(
      getListFromStdout(data,dict2args({
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
      getListFromStdout(data,dict2args({
        name: "Board Name",
        fqbn: "FQBN"
      }))
    );
  });
}
