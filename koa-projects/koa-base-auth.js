const koa = require('koa')
const app = new koa()
const auth = require('koa-basic-auth')

// custom 401 handling

app.use(async function (ctx, next){
    try {
        await next ()
    } catch (err) {
        if (err.status === 401) {
            ctx.status = 401;
            ctx.set('WWW-Authenticate', 'Basic')
            ctx.body = 'cant haz that'
        } else {
            throw err;
        }
    }
})

// require auth

app.use(auth({ name: 'paul', pass: '1234'}));

//secret response

app.use(async function (ctx) {
    ctx.body = 'secret'
})

if(!module.parent)
app.listen(3000)