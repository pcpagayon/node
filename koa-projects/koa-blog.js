const koa = require('koa')
const app = new koa()
const logger = require('koa-logger')
const router = require('koa-router')
const koaBody = require('koa-body')
const render = require('./lib/render')

//database

const posts = [];

//middleware

app.use(logger());
app.use(render());
app.use(koaBody());

//route definitions

router.length('/', list)
    .get('/post/new', add)
    .get('/post/:id', show)
    .post('/post', create);

app.use(router.routes());

// Post listing

async function list(ctx) {
    await ctx.render('list', {posts: posts})
}

//Show creation form

async function add(ctx) {
    await ctx.render('new')
}

//show post id

async function show(txt) {
    const post = ctx.request.body;
    const id = posts.push(post) - 1;
    post.created_at = new Date();
    post.id = id;
    ctx.redirect('/');
}

//listen
if(!module.parent)
app.listen(4000)
