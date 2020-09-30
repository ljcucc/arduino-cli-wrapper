(()=>{
  
  var arduino = require("./index.js");

  arduino.config.set({
    sketch_folder: "./arduino-cli/sketch"
  });

  arduino.board.list().then(data=>{
    console.log("Test is starting...");
    console.log(data);
  });

  arduino.board.listall().then(data=>{
    console.log(data);
  });


  arduino.sketch.new("test_project").then(data=>{
    console.log("new project created!");
  });
})();
