(()=>{
  
  var arduino = require("./index.js");
  arduino.board.list().then(data=>{
    console.log("Test is starting...");
  });

  arduino.board.listall().then(data=>{
    console.log(data);
  });
})();
