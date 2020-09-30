(()=>{

  var childProcess = require('child_process');
  const fs = require('fs');
  const path = require('path');
  
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

  function getListFromStdout(data, args){
    var stdout = data.toString().split("\n");
    var title = stdout.splice(0,1)[0];

    return stdout.filter((value)=>value.trim() !== "").map(item=>{
      return args.reduce((result, arg, index)=>{
        result[arg.id] = item.substring(index == 0? 0: title.indexOf(args[index].title), index == args.length-1? title.length: title.indexOf(args[index+1].title)).trim()
        return result;
      },{});
    });
  }

 var dict2args = (dict) => 
    Object.keys(dict).reduce((result, id)=>{
      result.push({
        title: dict[id],
        id
      });
      return result;
    }, []);

  function getBoardList(){
    return cmdPromiseMaker(['board', 'list'], (data, callback)=>{
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
    return cmdPromiseMaker(['board', 'listall'], (data, callback)=>{
      callback(
        getListFromStdout(data,dict2args({
          name: "Board Name",
          fqbn: "FQBN"
        }))
      );
    });
  }

  function attachBoard(){
    fs.writeFile(config.sketch_path.dirname(), "", function(err) {
      if(err) {
        return console.log(err);
      }
      console.log("The file was saved!");
    }); 
  }

  function getInstalledCore(){

  }

  module.exports = {
    board:{
      list: getBoardList,
      listall: listAllBoard,
      attach: attachBoard,
      config: {
        get: ()=>config,
        set: (newConfig)=> config = newConfig;
      }
    },
  };
})();
