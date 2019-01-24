const koa = require('koa')
const app = new koa()
const compose = require('koa-compose')
const koaBody = require('koa-body')


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
    await next()
}

const all = compose([function1, function2])
app.use(all)                                        //<--Middleware 3 which composed(combined) functions 1 and 2


app.use(koaBody({
    jsonLimit: '1kb'
}))

app.use(async function(ctx){
    const body = ctx.request.body;
    if(!body.name) ctx.throw(400, '.name required')
    ctx.body = { name: body.name.toUpperCase() }
})

if(!module.parent)
app.listen(2000)
//to kill process (linux): ctrl+C or type in terminal : ps aux | grep node then look for the process id then type kill -9 <process id>
