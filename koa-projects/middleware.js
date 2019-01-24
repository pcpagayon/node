const koa = require('koa')
const app = new koa()

app.use(async function (ctx, next) {
    console.log(`>> one`)
    await next()
    console.log(`>> ???`)
})

app.use(async function (ctx, next){
    console.log(`>> two`)
    ctx.body ='two'
})

app.use(async function (ctx, next){
    console.log(`>> throw`)
    await next()
})

app.listen(3000)