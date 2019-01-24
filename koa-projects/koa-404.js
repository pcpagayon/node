const koa = require('koa')
const app = new koa();

app.use(async function pageNotFound(ctx) {
    ctx.status = 404;

    switch(ctx.accepts('html', 'json')) {
        case 'html':
            ctx.type = 'html';
            ctx.body = '<p>HTML: Page not found</p>';
            break;
        case 'json':
            ctx.body = {
                message:'JSON: Page Not Found'
            }
            break;
        default:
            ctx.type = 'text';
            ctx.body = 'PAGE NOT FOUND'    
    }
})

if (!module.parent)
app.listen(3000)