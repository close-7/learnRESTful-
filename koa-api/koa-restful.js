const Koa = require('koa');
const Router = require('koa-router')
const app = new Koa(); //Koa实例化
//配置前缀
const usersRouter = new Router({prefix:'/product'})



router.get('/',(ctx)=>{
    ctx.body="这是主页koa-router"
})

usersRouter.get('/',(ctx)=>{
    ctx.body= [{name:'qf'},{name:'qiufeng'}]
})

usersRouter.post('/',(ctx)=>{
    ctx.body={name:'xxs'}
})

usersRouter.get('/:id',(ctx)=>{
    ctx.body={name:'xxs'}
})

usersRouter.put('/:id',(ctx)=>{
    ctx.body={name:'xxs222'}
})

usersRouter.delete('/:id',(ctx)=>{
   ctx.status=204
})


app.use(router.routes())
app.use(usersRouter.routes())
//现在所有方法支持了--options
app.use(usersRouter.allowedMethods())

app.listen(9080)