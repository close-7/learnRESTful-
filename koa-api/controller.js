const Koa = require('koa');
const Router = require('koa-router')
const bodyparser = require('koa-bodyparser')

const app = new Koa(); //Koa实例化

const router = new Router; //实例化koa-router

//配置前缀
const usersRouter = new Router({prefix:'/users'})

//内存数据库
const db = [{name:'zhangsan'},{name:'lishi'}]


router.get('/',(ctx)=>{
    ctx.body="<h1>这是主页koa-router</h1>" //发送body
})

//实现用户的增删改查
usersRouter.get('/',(ctx)=>{
    ctx.set('Allow','GET,POST') //发送设置header
    ctx.body= db //发送body
})

usersRouter.post('/',(ctx)=>{
    db.push(ctx.request.body)
    ctx.body=ctx.request.body //发送body
})

usersRouter.get('/:id',(ctx)=>{
    ctx.body=db[ctx.params.id*1] 
})

//put 修改整体替换
usersRouter.put('/:id',(ctx)=>{
    db[ctx.params.id * 1] = ctx.request.body;
    ctx.body = ctx.request.body
})

usersRouter.delete('/:id',(ctx)=>{
    db.splice(ctx.params.id * 1,1)
   ctx.status=204  //发送status
})



app.use(bodyparser())
app.use(router.routes())
app.use(usersRouter.routes())
//现在所有方法支持了--options
app.use(usersRouter.allowedMethods())

app.listen(9080)