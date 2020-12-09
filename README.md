# REST

## REST基础

### REST是什么
+ REST就是一种风格，万维网软件架构风格
+ 用来创建网络服务

### 为何叫REST
+ Representational State Transfer
+ Representational:数据的表现形式（JSON,XML ...)
+ State:当前状态或者数据
+ Transfer:数据传输

### REST的六个限制
+ 客户-服务器（client-server）
    1. 本质是一种软件架构思想--关注点分离
    2. 服务端专注数据存储，提升了简单性--让服务端代码更简单
    3. 前端专注用户界面，提升了可移植性--软件可以方便移植其他平台
+ 无状态（Statless）
    1. 所有用户会话信息都保存在客户端
    2. 每次请求必须包括所有信息，不能依赖上下文信息
    3. 服务端不会保存会话信息，提升了简单性，可靠性，可见性
+ 缓存（Cache）
    1. 所有服务端响应都要被标为可缓存或不可缓存
    2. 减少前后端交互，提升了性能
+ 统一接口（Uniform Interface）重点
    1. 接口设计尽可能统一通用，提升简单性，可见性
    2. 接口与实现解耦，使前后端可以对立开发迭代
+ 分层系统（Layered System）
    1. 每层只知道相邻的一层，后面隐藏的就不知道了
    2. 客户端不知道是和代理还是真实服务器通信
    3. 其他层： 安全层，负载均衡，缓存层等
+ 按需代码（可选）

### 统一接口的限制
+ 资源的标识
    1. 资源是任何可以命名的事物，比如用户，评论等
    2. 每个资源可以通过URI被唯一的标识
        + https://api.github/com/users
        + https://api.github/com/users/qiufeng
+ 通过表述来操作资源
    1. 表述就是Representational，比如JSON,XML等
    2. 客户端不能直接操作（比如SQL）服务端资源
    3. 客户端应该通过表述（比如JSON）来操作资源
+ 自描述消息
    1. 每个消息（请求或响应）必须提供足够的信息让接受者理解
    2. 媒体类型（application/json,application/xml)
    3. HTTP方法：GET(查),POST(增),DELETE(删)
    4. 是否缓存: Cache-Control
+ 超媒体作为应用状态的引擎
    1. 超媒体：带文字的连接
    2. 应用状态：一个网页
    3. 引擎：驱动，跳转
    4. 合起来：点击链接跳转到另一个网页

### RESTful API简介
+ 符合REST架构风格的API
+ RESTful API具体的样子
    1. 基本的URI，如https://api.github.com/users
    2. 标准HTTP方法，如GET,POST,PUT,PATCH,DELETE
    3. 传输的数据媒体类型,如JSON,XML
+ 现实举例
    1. GET /users #获取user列表
    2. GET /users/12 #查看某个具体的user
    3. POST /users #新建一个user
    4. PUT /users/12 #更新user 12
    5. DELETE /users/12 #删除user 12

### RESTful API设计最佳实践
+ 请求设计规范
    1. URI使用名词，尽量用复数，如 /users
    2. URI使用嵌套表示关联关系，如 /users/12/repos/5
    3. 使用正确的HTTP方法，如GET/POST/PUT/DELETE
    4. 不符合CRUD的情况：POST/action/子资源
+ 响应设计规范
    1. 查询--每一个响应都是可以被过滤的，可以加各种限制条件，限制返回的内容
    2. 分页--本质也是查询
    3. 字段过滤--返回的结果只能是选择的字段
    4. 状态码--
    5. 错误处理--响应中加入错误处理，返回通用的错误格式和信息，比如message代表一条错误信息，error代表一组错误信息
+ 安全
    1. HTTPS
    2. 鉴权--用户鉴权
    3. 限流--防止故意攻击


## KOA

### KOA是什么
+ 基于Node.js的下一代Web框架
+ 基于Node.js-->KOA是Node.js的一个模块
+ 下一代:蚕丝第一代Web框架Express的市场
+ Web框架:不是命令行工具，不是算法
+ 利用async函数，丢弃回调函数
+ 增强错误处理:try catch
+ 没有捆绑任何中间件--根据需要自行使用中间件

### 搭建Koa程序
参考koa-api目录
+ 操作步骤
    1. 初始化项目--npm init
    2. 安装Koa--npm i koa --save
    3. 编写 hello world
    4. 学习自动重启--npm i nodemon --save-dev
    5. nodemon用法--nodemon index.js--写入npm script

### Koa中间件与洋葱模型
参考
+ 操作步骤
    1. 学习async await
    2. 学习编写Koa中间件，并理解执行顺序
    3. 学习洋葱模型

## 路由简介
+ 路由是什么
    1. 路由决定了不同URL是如何被不同的执行的
    2. 在Koa中，路由的本质是一个中间件
+ 为什么要用路由
    1. 如果没有路由会怎么样
        + 所有的请求都会做相同的事
        + 所有的请求都会返回相同的结果
    2. 路由存在的意义
        + 处理不同的URL
        + 处理不同的HTTP方法
        + 解析URL上的参数
### 自己编写Koa路由中间件
+ 要求
    1. 处理不同的URL
    2. 处理不同的HTTP方法
    3. 解析URL上的参数

### 使用koa-router实现路由
参考 koa-router.js
+ 目标
    1. 更优雅的实现路由的基本功能
    2. 演示高级路由功能，如前缀，多中间件等

### HTTP options方法的作用
+ 检测服务器所支持的请求方法
+ CORS(跨域)中的预检请求

### allowedMethods的作用
+ 响应options方法，告诉它所支持的请求方法
+ 相应的返回405（不允许）和501（没实现）

### RESTful API--增删改查应该返回什么响应
参考 koa-restful.js
+ 操作步骤
    1. 实现增删改查
    2. 返回正确响应


## 控制器简介

###什么是控制器
+ 拿到路由分配的任务，并执行
+ 在Koa中，控制器也是一个中间件

### 为什么要用控制器
+ 获取HTTP请求参数
    1. Query String 查询字符串,一般为可选，如?id=123
    2. Router Params 路由参数,一般为必选，如 /users/:id
    3. Body 请求体, 如 {name：xxs}
    4. Header 请求头，如 Accept，Cookie
+ 处理业务逻辑-获取计算存储数据等等
+ 发送HTTP响应
    1. 发送status，如200/400等
    2. 发送Body 响应体，如 {name：xxs}
    3. 发送Header 响应头，如 Allow，Content-Type

### 编写控制器最佳实践
+ 每个资源的控制器放在不同的文件里
+ 尽量实用类+类方法的形式编写控制器
+ 严谨的错误处理--不要相信客户端传递的信息

### 获取控制器请求参数
参考controller.js
+ 操作步骤
    1. 学习断点调试
    2. 获取query--ctx.query
    3. 获取 router params--ctx.params
    4. 获取 body--安装koa-bodyparser npm i koa-bodyparser --save ---ctx.request.body
    5. 获取 header--ctx.header

### 发送HTTP响应
参考controller.js
+ 发送status
+ 发送body
+ 发送header
+ 实现用户的增删改查

### RESTful API 项目合理目录结构
+ 操作步骤
    1. 将路由单独放在一个目录
    2. 将控制器单独放在一个目录
    3. 使用类+类方法的方式组织控制器

## 错误处理

### 什么是错误处理
+ 编程语言或计算机硬件里的一种机制
+ 处理软件或信息系统中出现的异常状况

### 异常状况有哪些
+ 运行时错误，都返回 500
+ 逻辑错误，如找不到（400），先决条件失败（412），
无法处理的实体（参数格式不对，422）等

### 为什么要用错误处理
+ 防止程序挂掉-保证程序健壮-->try catch（js）
+ 告知用户错误信息--保证用户体验
+ 便于开发者调试

### koa自带的错误处理
+ 操作步骤
    1. 制造404，412（需要手动抛出，ctx.throw）,500三种错误
    2. 了解koa自带的错误处理做了什么

### 自己编写错误处理中间件
+ 操作步骤
    1. 自己编写错误处理中间件
    2. 制造404,412,500错误来测试

### 使用koa-json-error进行错误处理
+ 操作步骤
    1. 安装koa-json-error
    2. 使用koa-json-error的默认配置处理错误
    3. 修改配置使其在生产环境下禁用错误堆栈的返回

### 使用koa-parameter校验参数
+ 操作步骤
    1. 安装koa-parameter
    2. 使用koa-parameter

## MongoDB

### 用Mongoose连接MongoDB
+ 安装Mongoose
    npm i mongoose --save
+ 用Mongoose连接MongoDB
```
mongoose.connect(connectionStr,{useNewUrlParser: true },()=>{
    console.log('mongodb连接成功')
})
mongoose.connection.on('error',console.error)
```

### 设计用户模块的Schema
+ 分析用户模块的属性
+ 编写用户模块的Schema
+ 使用Schema生成用户Model（模型）

### MongoDB实现用户增删改查
+ 用Mongoose实现增删改查接口--不直接操作MongoDB
+ 用postman检查接口



## Session简介
+ session工作原理
    1. 客户端通过用户名，密码请求服务端
    2. 服务端通过用户名，密码生成session数据，并将sessionId返回客户端--set-cookie：session=xxx
    3. 此后客户端的请求都携带Cookie：session=xxx
    4. 服务端根据sessionId保存了客户端用户状态
    5. 客户端登出--清理存储的Cookie
    6. 服务端强制客户端重新认证--清理session
+ session的优势
    1. 相比JWT，最大的优势在于可以主动清除session
    2. session保存在服务器端，相对较为安全
    3. 结合cookie使用，较为灵活的控制登录态，兼容性较好
+ session的劣势
    1. cookie+session在跨域场景表现并不好--主要是cookie
    2. 如果是分布式部署，需要做多机共享session机制
    3. 基于cookie的机制很容易被CSRF
    4. 查询session信息可能会有数据库查询操作
+ session相关的概念介绍
    1. session：主要放在服务器端，相对安全
    2. cookie：主要存放在客户端，并且不是很安全
    3. sessionStorage：仅在当前会话下有效，关闭页面或浏览器后被清除
    4. localstorage：除非被清除，否则永久保存

## JWT简介

### 什么是JWT
+ JSON WEB Token 是一个开放标准（RFC 7519）--请求意见稿7519
+ JWT定义了一种紧凑且独立的方式，可以将各方之间的信息作为json对象进行安全传输
+ 该信息是可以验证和信任，因为是经过数字签名的

### JWT的构成
+ 头部（Header）
    1. typ：token的类型，这里固定为JWT
    2. alg：使用的hash算法，例如：HMAC SHA256或者RSA
    3. {"alg":"HS256","typ":"JWT"}---会base64编码
+ 有效载荷（Payload）
    1. 存储需要传递的信息，如用户ID，用户名等
    2. 还包含元数据，如过期时间，发布人等
    3. 与Header不同，Payload可以加密
    4. {"user_id":"zhangsan"}--不仅仅是base64URL编码
+ 签名（Signature）
    1. 对Header和Payload部分进行签名
    2. 保证Token在传输的过程中没有被篡改或者损坏
    3. Signature = HMACSHA256(base64UrlEncode(header)+'.'+base64UrlEncode(payload),secret)

### JWT对比Session
+ 可拓展性
+ 安全性-xss攻击
+ RESTful API
+ 性能
+ 时效性

### Nodejs中使用JWT
+ 操作步骤
    1. 安装 jsonwebtoken npm i jsonwebtoken
        + jwt = require('jsonwebtoken')
    2. 对json对象签名，生成token
        + token = jwt.sign({name:'qiufeng'},'secret')
    3. 验证用户发过来的token
        + jwt.decode(token)--解码
        + jwt.verify(token,'secret')--验证

### 实现用户注册
+ 重新设计用户Schema
+ 编写保证

### 实现登录并获取Token
+ 登录接口设计--post方法+动词形式
+ 用jsonwebtoken生成token

### 编写Koa中间件实现用户认证与授权
+ 认证：验证token，并获取用户信息
+ 授权：使用中间件保护接口

### 用koa-jwt中间件实现用户认证与授权
+ 安装koa-jwt npm i koa-jwt --save
+ 使用中间件保护接口
+ 使用中间件获取用户信息

## 上传图片
### 上传图片需求分析
+ 上传图片的需求场景
    1. 用户头像
    2. 封面图片
    3. 问题和回答中的图片
    4. 话题图片
+ 上传图片的功能点
    1. 基础功能：上传图片，生成图片链接
    2. 附加功能：限制上传图片的大小，类型；生成高中低三种分辨率的图片链接，生成CDN
+ 上传图片的技术方案
    1. 阿里云oss
    2. 直接上传到服务器，不推荐在生产环境中使用--分布式环境不友好

### 使用koa-body获取上传的文件
+ 安装koa-body，替换koa-bodyparser--只支持json和form两种请求体，不支持文件格式
+ 设置图片上传目录
+ 使用Postman上传文件

### 使用koa-static中间件生成图片链接
+ 安装koa-static---npm i koa-static --save
+ 设置静态文件目录
+ 生成图片链接

### 编写前端页面上传文件
+ 编写上传文件的前端页面
+ 与后端接口联调测试

## 个人资料模块
### 个人资料需求分析
+ 不同类型（如字符串，数组）的属性
+ 字段过滤
### 个人资料schema设计--json数据结构设计
+ 分析个人资料的数据结构
+ 设计个人资料的schema

### 个人资料参数校验--请求体校验
+ 分析个人资料的数据结构
+ 编写代码校验个人资料参数
+ 使用postman测试

### RESTful API最佳实践---字段过滤
+ 设计schema默认隐藏部分字段
+ 通过查询字符串显示隐藏字段
?fields=xxx;xxxx
+ 使用postman测试

## 关注与粉丝模块
### 关注与粉丝需求分析
+ 关注，取消关注
+ 获取关注人，粉丝列表（用户-用户多对多关系）
### 关注与粉丝schema设计
+ 分析关注与粉丝的数据结构
+ 设计关注与粉丝schema
+ 使用postman测试
### RESTful 风格的关注与粉丝接口
+ 实现获取关注人和粉丝列表接口
+ 实现关注和取消关注接口
+ 使用postman测试