const path = require('path');

// 
const path_join = path.join( "fs" , "fs.js")
console.log(path_join);
// Papkaning aniq joyini olish

const path__dirname = path.join(__dirname, "path", "path.js")
console.log(path__dirname);

// Faylning aniq joyini olish 
const path__filename = path.join(__filename, 'path' ,"path.js")
console.log(path__filename);


// Fayl nomini olish 

console.log(path.basename("/home/samandar/Desktop/Homework-4-month/lesson-1/path/path.js/path/path.js"));

// papka yo'lini olish

console.log(path.dirname("/home/samandar/Desktop/Homework-4-month/lesson-1/path/path/path.js"));

// pathni bo'laklash

console.log(path.parse("/home/samandar/Desktop/Homework-4-month/lesson-1/path/path/path.js"));

// Path absolute yoki yo'qligini aniqlash
console.log(path.isAbsolute("/home/samandar/Desktop/Homework-4-month/lesson-1/path/path/path.js"));
