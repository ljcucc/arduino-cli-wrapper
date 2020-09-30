const cmd = require("./cmd.js");

function getBoardList(){
  return cmd.exec(['board', 'list'], (data, callback)=>{
    callback(
      cmd.toList(data,cmd.dataType({
        path: "Path",
        type: "Type",
        name: "Board Name",
        fqbn: "FQBN Core"
      }))
    );

  });
}

function listAllBoard(){
  return cmd.exec(['board', 'listall'], (data, callback)=>{
    callback(
      cmd.toList(data,cmd.dataType({
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
