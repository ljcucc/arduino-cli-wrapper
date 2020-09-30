# Arduino CLI Wrapper
this is a arduino-cli wrapper for npm package, allows you to create apps with arduino compiler application.

(*This project is in development*)

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
## Reference
### Methods
| arduino command | description  | function |
|---|---|---|
| `arduino-cli board list` | get all connected board info | `arduino.board.list()::Promise<array<board>>` |
| `arduino-cli board listall` | get all installed and available board info | `arduino.board.listall()::Promise<array<board>>` |
| `arduino-cli sketch new` | create new sketch in the path you config (default is `./arduino-cli/sketch`) | `arduino.sketch.new(name::string)::Promise<boolean>` | 
| *(None)*  | Set config | `arduino.config.set(Object<config>)` |
| *(None)* | Get config | `arduino.config.get()::Object<config>` |

### `board` type object
| key | type | description |
|---|---|---|
| `path` | string | Your arduino board path (or COM) on your computer |
| `type` | string | board type |
| `name` | string | board name (ex. Arduino uno, ardunino nano) |
| `fqbn` | string | FQBN code (like   `arduino:avr:uno`)|
| `core` | string | the core name of board (like the core of `arduino:avr:uno` is `arduino:avr`) |

### `Object<config>`
| key | type | description |
| --- | ----- | ------------|
| `sketch_folder` | string | Folder path of sketch that will store. |

