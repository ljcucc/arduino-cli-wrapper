# Arduino CLI Wrapper
this is a arduino-cli wrapper for npm package, allows you to create apps with arduino compiler application.
*This project is in development*

**Notice:** your device required to pre-install arduino-cli before running with this library.

## Get Started
Install by using npm:
```bash
npm install ljcucc/arduino-cli-wrapper
```

## Examples:
Get connected boards with command-like syntax:
```js
const arduino = require("arduino-cli-wrapper");
arduino.board.list().then(console.log); // will execute command: arduino-cli board list
```

Get All installed boards should be like:
```js
const arduino = require("arduino-cli-wrapper");
arduino.board.listall().then(console.log) // will execute command: arduino-cli board listall
```
