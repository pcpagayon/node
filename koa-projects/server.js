// const koa = require('koa')

// // const app = new koa()

// // app.use(async (ctx) => {
// //     console.log('Hellloooo!!!')
// // })

// app.listen(3000)

//-----
const koa = require('koa')
const serve = require('koa-static-server')
const app = new koa()

const hostname = 'localhost'
const port = 8000

app.use(serve({rootDir: 'public'})) 

app.listen(port, hostname, () => {
    console.log(`Server at http://${hostname}:${port}/`)
})