const fs = require('fs');

const readerStream = fs.createReadStream('output.txt')

const writerStream = fs.createWriteStream('new.txt')

readerStream.pipe(writerStream)

console.log("Pipe Complete")