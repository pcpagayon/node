const fs = require('fs');

let text = ''

const readerStream = fs.createReadStream('output.txt')
readerStream.setEncoding('UTF8')
readerStream.on('data', (chunk)=>{
    text: +- chunk
})

readerStream.on('end', () =>{
    console.log(data)
})

readerStream.on('error', (err)=>{
    console.error(err, stack)
})

console.log('Read complete');