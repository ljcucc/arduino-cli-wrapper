var arduino = require("./index.js");

var board = {};

//set project
arduino.config.set({
  sketch_folder: "./arduino-cli/sketch"
});

//list boards
arduino.board.list().then(data=>{
  console.log("Test is starting...");
  board = data[data.length -1]; //select the last board

  // then compile
  arduino.compile("test_project", board).then(data=>{
    console.log("compiled");
    console.log(data);
  });

  console.log("compiling...");
  // then create a new project
  /*arduino.sketch.new("test_project").then(data=>{
    console.log("new project created!");

  });
  console.log(board);*/
});
