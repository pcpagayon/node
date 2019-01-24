const koa = require('koa')
const app = new koa()
const Router = require('koa-router')
const router = new Router()

router.get('/hello/pol', (ctx) => {     //<-- :pol is the param , : means variable
    const name = ctx.params.pol
    const data = `Helloo!!! pol`
    ctx.status = 200
    ctx.body = data
})


// Query param (?=...)
router.get('/hello/', (ctx) => {     //<--no need for the param path bcoz it will query the name
    const name = ctx.query.name
    const data = `Helloo!!! ${name}`
    ctx.status = 200
    ctx.body = data
})

router.all('*', (ctx)=> {                 //<-- catch ALL(*) error
    ctx.status = 404
    ctx.body = 'Page not found';     
})

//expressions
// router.get('/hello/:name([A-Z,a-z]{4})', (ctx) => {     //<--no need for the param path bcoz it will query the name
//     const name = ctx.params.name
//     const data = `Letters: ${name}`
//     ctx.status = 200
//     ctx.body = data
// })


app.use(router.routes())
app.listen(5000);
console.log('Server started at 5000')
