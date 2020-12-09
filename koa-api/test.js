const Koa = require('koa');
const app = new Koa(); //Koa实例化

// app.use(async(ctx,next)=>{
//     console.log(1)
//     await next() //等待异步执行完，再向下执行
//     console.log(2)
//     ctx.body = 'Hello koa-api'
// })

// app.use(async(ctx,next)=>{
//     console.log(3)
//     await next() 
//     console.log(4)
// })
// app.use(async(ctx)=>{
//     console.log(5)
// })
//1-3-5-4-2

//手动实现路由中间件
//处理不同的URL
app.use((ctx)=>{
    //通过ctx.url判断url
    // console.log(ctx)
    if(ctx.url === '/'){
        ctx.body = '这是主页'
    }else if(ctx.url==='/users'){
        //通过ctx.method判断方法
        if(ctx.method === 'GET'){
            ctx.body = '这是用户列表页'
        }else if(ctx.method === 'POST'){
            ctx.body = '创建用户'
        }else{
            ctx.status = 405;
        }
    }else if(ctx.url.match(/\/users\/\w+/)){
         //通过ctx.method.match正则的方式获取url参数
        const userId = ctx.url.match(/\/users\/(\w+)/)[1];
        ctx.body = `这是用户${userId}`
    }
    else{
        ctx.status = 404;
    }
})

app.listen(9080)