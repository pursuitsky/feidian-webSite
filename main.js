import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import axios from 'axios';
import qs from 'qs'
import App from './App.vue';
import './style.css'//全局css属性
import Routers from './router.js'//路由配置文件
import $ from './libs/util.js'
//import $ from './libs/util.js'//引入公共函数文件
//import 'iview/dist/styles/iview.css';
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.prototype.$qs = qs;
//路由的配置
const RouterConfig ={
    mode:'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);
router.beforeEach((to,from,next) => {
    window.document.title = to.meta.title;
    next();
    
});
router.afterEach((to,from,next) => {
    window.screenTo=(0,0);
});


//状态管理配置
const store = new Vuex.Store({
    state:{
        allMessage:[],
        LoginMess:JSON.parse(window.localStorage.getItem('form'))
    },
    getters:{
       
    },
    mutations:{
        setAllMess (state,arr){
            state.allMessage = arr;
        },
        // setLoginMess (state,obj){
        //     state.LoginMess = JSON.parse(window.localStorage.getItem('form'));
        // }
    },
    actions:{
        getAllMessage (context){
            $.ajax.post('/all').then((res) => {
                if(res.status === 200)
                    context.commit('setAllMess',res.data.result);
                    //console.log(res);
            })
            .catch((error) => {
                console.log(error);
            })
        }
    }
});

//vue根实例

new Vue({
    el:'#app',
    router,
    store,
    render:h => {
        return h(App);
    }
})