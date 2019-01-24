const fs = require('fs');

let data = 'Welcome'

let writerStream = fs.createWriteStream('output.txt')

writerStream.write(data, 'utf8');

writerStream.end('.');


writerStream.on( 'finish', (err) => {
    if(err) {
        console.log('Error')
    } console.log('Complete')
})