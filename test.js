var arduino = require("./index.js");

var commands = ['config set', 'board list', 'sketch new', 'compile'];
var board = {};

for(var index in commands){
  runMode(commands[index]);
}

function runMode(mode){
  console.log(mode);
  switch(mode){
    case 'config set':
      arduino.config.set({
        sketch_folder: "./arduino-cli/sketch"
      })
      break;
    case 'board list':
      arduino.board.list().then(data=>{
        console.log("Test is starting...");
        board = data[data.length -1];

        console.log(board);
      });
      break;
    case 'board listall':
      arduino.board.listall().then(data=>{
        console.log(data);
      });
      break;
    case "sketch new":
      arduino.sketch.new("test_project").then(data=>{
        console.log("new project created!");
      });
      break;

    case "compile":
      arduino.compile("test_project");
      break;

    case "quit":
      quit = true;
      return;
    default:
      console.log("mode not found");
  }
}
