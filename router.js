const routers = [
    {
        path:'/login',
        meta:{
            title:'登录',
            
        },
        component: (resolve) => require(['./components/login.vue'],resolve)
    },
    {
        path:'*',
        redirect:'/login'
    },
    {
        path:'/register',
        meta:{
            title:'注册',
        },
        component: (resolve) => require(['./components/register.vue'],resolve)
    },
    {
        path:'/index',
        meta:{
            requireAuth: true,
            title:'账号中心',
        },
        component :(resolve) => require(['./components/index.vue'],resolve)
    },
    {
        path:'/person/:email',
        meta:{
            title:'个人信息'
        },
        component:(resolve) => require(['./components/common/person.vue'],resolve)
    },
    {
        path:'/change/:email',
        meta:{
            title:'修改资料'
        },
        component:(resolve) => require(['./components/common/change.vue'],resolve)
    }
]
export default routers;