const koa = require('koa');
const app = new koa();

app.use(async (ctx, next) => {
    const start = Date.now()
    await next()
    const ms = Date.now() - start
    console.log(`${ctx.method} - ${ms}ms`)
})

app.use(async ctx =>{
    console.log(ctx.request)
    console.log(ctx.response)
    ctx.body = `CTX Logger Testing`
})

app.listen(2000)