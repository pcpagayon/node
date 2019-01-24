const koa = require('koa')
const app = new koa()
const Router = require('koa-router')
const router= new Router()

router.get('/hello', (ctx) => {
    const data = 'Helloo!!!'
    ctx.status = 200
    ctx.body = data
})

app.use(router.routes())
app.listen(3000)
console.log('Server started at port 3000')