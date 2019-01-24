const koa = require('koa')
const koaBody = require('koa-body')
const logger = require('koa-logger')
const serve = require('koa-static')
const fs = require('fs')
const os = require('os')
const path = require('path')
const app = new koa()

app.use(logger())

app.use(koaBody({multipart: true}))

app.use(async (ctx, next) => {
    await next()
    if (ctx.body || !ctx.idempotent) return;
    ctx.redirect('/404.html')
})

app.use(serve(path.join(__dirname, '/views')))
    console.log(__dirname)
app.use(async (ctx, next) => {
    if ('POST' != ctx.method) return await next()
    
    const file = ctx.request.body.files.file
    const reader = fs.createReadStream(file.path)
    const writer = fs.createWriteStream(
        path.join(__dirname, '/files/', Math.random().toString() 
        )
    )
    reader.pipe(writer)
    console.log('Uploading %s -> %s', file.name, writer.path)
    ctx.redirect('/')
})

app.listen(3000, console.log('Ready on 3000'))