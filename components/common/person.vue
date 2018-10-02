<template>
    <div class="person" >
        <div class="personMess">
            <div class="main-info">
                <img src="../../images/qq.png"/>
                <p>{{message.name}}</p>
                <p>{{message.email}}</p>
                <span @click="handleChange">修改资料</span>
            </div>
            <div class="all-info">
                <h1>{{message.group}}</h1>
                <p>昵称：{{message.nickname}}</p>
                <p>性别：{{message.sex}}</p>
                <p>生日：{{message.birthday}}</p>
                <p>年级：{{message.grade}}</p>
                <p>大学：{{message.college}}</p>
                <p>户籍所在地：{{message.homeTown}}</p>
                <p>工作地点：{{message.company}}</p>
                <p>加入时间：{{message.inTime}}</p>
                <p>电话：{{message.phone}}</p>
                <p>QQ：{{message.qq}}</p>
                <p>微信：{{message.weChat}}</p>
            </div>
        </div>
        <Alert :closed="tip.closed" :type="tip.type">
            <span>{{tip.message}}</span>
        </Alert>
    </div>
</template>

<script>
import $ from '../../libs/util.js'
import Alert from './alert.vue'
export default {
    data(){
        return{
            name:this.$route.params.name,
            message:{},
            tip:{
                type:'success',
                closed:true,
                message:'',
                timer:null
            },
        }
    },
    components:{
        Alert
    },
    computed:{
        
    },
    methods:{
        getMessage() {
            $.ajax.get('/byname?name='+this.name).then((res) => {
                if(res.status === 200 && res.data.status === 1){
                    this.message = res.data.result;
                    console.log(this.message);
                    this.inspect();
                }
                else{
                    alert(res.data.error);
                }
            })
            .catch((error) => {
                console.log(error);
            })
            
            // console.log(this.name);
        },
        handleChange(){
            alert('1111');
        },
        setTip(message,type){
            this.tip.message = message;
            this.tip.type = type;
            this.tip.closed = false;
            this.tip.timer = setTimeout(() => {
                 this.tip.closed = true;
            },4000);
        },
        clearTimer() {
            if(this.tip.timer !==null)
                this.tip.timer = null;
        },
        inspect(){
            for(let k in this.message){
                if(this.message[k] === null){
                    this.setTip('请您尽快完善基本信息!','warning');
                    this.clearTimer();
                    return;
                }
            }
        }
    },
    mounted() {
        this.getMessage();
    }
}
</script>

<style scoped>
    .person{
        width: 60%;
        height: 500px;
        margin: 70px auto;
    }
    .main-info{
        float: left;
        width: 30%;
        height: 450px;
        padding-top: 50px;
        border-right: 1px solid #aaa;
        text-align: center;
        
    }
    .main-info img{
        display: inline-block;
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
    .main-info p{
        font-size: 20px;
        padding: 5px 0px;
        margin-top: 10px;
    }
    .main-info span{
        display: inline-block;
        margin-top: 20px;
        padding: 6px 15px;
        cursor: pointer;
        color: #ffffff;
        background: #2d8cf0;
        border-radius: 3px;
    }
    .all-info{
        float: left;
        padding-left: 40px;
    }
    .all-info h1{
        font-weight: 100;
        margin-bottom: 10px;
    }
    .all-info p{
        font-size: 17px;
        padding-left: 10px;
        margin-top: 15px;
    }
</style>
