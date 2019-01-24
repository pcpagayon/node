// console.log(__dirname);
// console.log(__filename);

// setTimeout(function(){
//     console.log('Ready', 'Set', 'Go')
// }, 10000);

// // console.log(process.cwd());
// // console.log(process.cpuUsage());
// console.log(process.argv);

//-----------------

//
// const http = require("http");

// const hostname = "localhost"
// const port = 3000

// const server = http.createServer((req, res) => {
//     console.log(req.headers)

//     res.writeHead(200,{'Content-Type': 'text/html'})
//     res.write('Hello Achievers')
//     res.end("<h1>Hello World</h1>")
//     res.setDefaultEncoding('utaf8')
// })

// server.listen(port, hostname, () => {
//     console.log(`Check http://${hostname}:${port}`)
// })

//-----------------
const dns = require("dns");

dns.resolve4 ('instagram.com', (err,addresses) => {
    if (err) {
        throw err;
    } else {
        console.log('addresses: ' + JSON.stringify(addresses))
    }
})

//-------------

