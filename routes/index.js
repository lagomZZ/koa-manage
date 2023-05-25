//实例化一个路由对象
const router = require('koa-router')()
const mockdata=require('../mock/index.js')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('/mock/post/resourceUIService/getDomainsByFilter',async ctx=>{
  ctx.body={
    code:200,
    msg:mockdata
  }
})

router.post('/ISV01/getDomain',async ctx=>{
  ctx.body={
    code:200,
    result:mockdata
  }
})

module.exports = router
