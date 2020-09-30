var childProcess = require('child_process');

function exec(args, run){
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

function toList(data, args){
  var stdout = data.toString().split("\n");
  var title = stdout.splice(0,1)[0];

  return stdout.filter((value)=>value.trim() !== "").map(item=>{
    return args.reduce((result, arg, index)=>{
      result[arg.id] = item.substring(index == 0? 0: title.indexOf(args[index].title), index == args.length-1? title.length: title.indexOf(args[index+1].title)).trim()
      return result;
    },{});
  });
}

var dataForm = (dict) => 
  Object.keys(dict).reduce((result, id)=>{
    result.push({
      title: dict[id],
      id
    });
    return result;
  }, []);

module.exports = {
  exec,
  toList,
  dataForm
};
