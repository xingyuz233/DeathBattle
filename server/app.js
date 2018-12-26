const Koa = require('koa')
const app = new Koa()

const bodyparser = require('koa-bodyparser')
const jwt = require('koa-jwt')

const index = require('./routes/index')
const secret = require('./config/secret')


// 此接口列表，过滤不用jwt验证
app.use(jwt({secret: secret.sign}).unless({
    path: [
        // 登录
        /^\/api\/v1\/user\/login/,
        // 创建用户
        /^\/api\/v1\/user\/register/,
    ]
}))

// middlewares
app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
}))

// routes
app.use(index.routes(), index.allowedMethods())


module.exports = app