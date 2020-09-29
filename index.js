(()=>{

  var childProcess = require('child_process');
  var config = {
    sketch_path: "./arduino-cli/sketch"
  };

  function cmdPromiseMaker(args, run){
    var child = childProcess.spawn('arduino-cli', args);
    return new Promise((callback)=>{
      child.on('close', function(code) {
        process.exit(code);

      });

      child.stdout.on('data', data=>{
        run(data, callback);
      });
    });
  }

  function getBoardList(){

    return cmdPromiseMaker(['board', 'list'], (data, callback)=>{
      var stdout = data.toString().split("\n");
      var title = stdout.splice(0,1)[0];
      stdout = stdout.filter((item)=>item.trim() !== "").map((item)=>({
        path: item.substring(0, title.indexOf("Type")).trim(),
        type: item.substring(title.indexOf("Type"), title.indexOf("Board Name")).trim(),
        name: item.substring(title.indexOf("Board Name"), title.indexOf("FQBN Core")).trim(),
        fqbn: item.substring(title.indexOf("FQBN Core"), title.length).trim()
      }));

      callback(stdout);
    });
  }

  function listAllBoard(){

    return cmdPromiseMaker(['board', 'listall'], (data, callback)=>{
      let stdout = data.toString().split("\n");
      let title = stdout.splice(0,1)[0];

      stdout = stdout.filter(item=>item.trim() !== "").map((item)=>({
        name: item.substring(0, title.indexOf("FQBN")).trim(),
        fqbn: item.substring(title.indexOf("FQBN"), title.length).trim()
      }));

      callback(stdout);
    });
  }

  function attachBoard(){
  }

  function getInstalledCore(){
    
  }

  module.exports = {
    board:{
      list: getBoardList,
      listall: listAllBoard,
      attach: attachBoard
    }
  };
})();
