const cmd = require("./cmd.js");

var getBoardList = ()=>  cmd.exec(['board', 'list'], (data, callback)=>{
  callback(
    cmd.toList(data,cmd.dataType({
      path: "Path",
      type: "Type",
      name: "Board Name",
      fqbn: "FQBN",
      core: "Core"
    }))
  );

});

var listAllBoard = () => cmd.exec(['board', 'listall'], (data, callback)=>{
  callback(
    cmd.toList(data,cmd.dataType({
      name: "Board Name",
      fqbn: "FQBN"
    }))
  );
});

function attachBoard(board){
  return cmd.exec(['board', 'attach'], (data, callback)=>{
    callback();
  });
}

module.exports = {
  getBoardList,
  listAllBoard
}
