import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import qs from 'qs'
import App from './App.vue';
import Message from './components/UI/message/message.js'
import './style.css'//全局css属性
import Routers from './router.js'//路由配置文件
import $ from './libs/util.js'
//import $ from './libs/util.js'//引入公共函数文件
//import 'iview/dist/styles/iview.css';
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.prototype.$qs = qs;
Vue.prototype.$message = Message;
//路由的配置
const RouterConfig ={
    //mode:'history',
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
        LoginMess:JSON.parse(localStorage.getItem('loginMess'))
    },
    getters:{
       
    },
    mutations:{
        setAllMess (state,arr){
            // let index = arr.indexOf(state.LoginMess);
            // alert(index);
            // arr.splice(index,1);
            state.allMessage = arr;
        },
        setLoginMess (state){
            state.LoginMess = JSON.parse(localStorage.getItem('loginMess'));
        },
        updateAllMess(state,arr){
            state.allMessage = arr;
        }
    },
    actions:{
        getLoginMess(context,email){
            
            $.ajax.get('/byemail?email='+email).then((res) => {
                localStorage.setItem('loginMess',JSON.stringify(res.data.result));
                context.commit('setLoginMess');
            })
            .then((error) => {
                console.log(error)
            })
        },
        getAllMessage (context){
            $.ajax.post('/all').then((res) => {
                if(res.status === 200)
                    context.commit('setAllMess',res.data.result);
                    console.log(res);
            })
            .catch((error) => {
                console.log(error);
            })
        },
        removeMess (context,str){
            alert(str);
            $.ajax.post('/delete',qs.stringify({email:str})).then((res) => {
                if(res.status === 200)
                    context.commit('updateAllMess',res.data.result);
            })
        },
        
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