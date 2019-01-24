const koa = require('koa');
const router = require('koa-router');
const app = new koa();
const _ = router();

_.get('/not_found', printErrorMessage);
_.get('/greeting', printHelloMessage);

app.use(_.routes());
app.use(handle404Errors);

function printErrorMessage() {
    this.status = 404;
    this.body = 'The resource is not available.'
}
function printHelloMessage() {
    this.status = 200;
    this.body = 'Hellooo!!';
}
function handle404Errors(next) {
    if(404 != this.status) return;
    this.redirect('/not_found');
}
app.listen(3000);