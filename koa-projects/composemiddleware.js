const koa = require('koa')
const app = new koa()
const compose = require('koa-compose')

app.use(async (ctx, next) => {                      //<--Middleware 1
    const start = Date.now()
    console.log(start)
    await next()
    const ms = Date.now() - start
    console.log(`${ctx.method} - ${ms}ms`)
})

app.use(async (ctx,next) => {                       //<--Middleware 2
    console.log(ctx.request)
    console.log(ctx.response)
    ctx.body = `I am using koa-compose.`
    await next()
})

async function function1 (ctx, next) {
    console.log('First function')
    await next()
}

async function function2 (ctx, next) {
    console.log('Second function')
}

const all = compose([function1, function2])
app.use(all)                                        //<--Middleware 3 which composed(combined) functions 1 and 2

app.listen(9000)

//to kill process (linux): ctrl+z or type in terminal : ps aux | grep node then look for the process id then type kill -9 <process id>