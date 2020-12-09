const Koa = require('koa');
//安装koa-router npm i koa-router --save
const Router = require('koa-router')

const app = new Koa(); //Koa实例化
const router = new Router; //实例化koa-router

//配置前缀
const usersRouter = new Router({prefix:'/product'})


//模拟多中间件-鉴权中间件
const auth = async(ctx,next)=>{
    if(ctx.url !== '/users'){
        ctx.throw(401)
    }
    await next()
}

//处理请求主页
router.get('/',auth,(ctx)=>{
    ctx.body="这是主页koa-router"
})

//处理请求用户列表
// router.get('/users',(ctx)=>{
//     ctx.body="这是用户列表koa-router"
// })

//处理请求用户列表下面的不同方法--router.post
router.post('/users',(ctx)=>{
    ctx.body="这是创建用户接口koa-router"
})

//处理url参数
router.get('/users/:id',(ctx)=>{
    // console.log(ctx.params)
    ctx.body=`这是用户${ctx.params.id}`
})
//通过koa-router处理url前缀
usersRouter.get('/:id',(ctx)=>{
    // console.log(ctx.params)
    ctx.body=`这是商品id--${ctx.params.id}`
})

//多中间件--场景：用户校验、数据安全
router.get('/users',auth,(ctx)=>{
    ctx.body="这是用户列表koa-router"
})


//koa的中间件都要注册到实例化的Koa中才能使用
//将router注册到app
app.use(router.routes())
app.use(usersRouter.routes())

//现在所有方法支持了--options
app.use(usersRouter.allowedMethods())

app.listen(9080)