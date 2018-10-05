<template>
    <div class="change">
        <h1>修改资料</h1>
        <tabs v-model="activeKey">
            <pane label="基本信息" name="0">
                <div>
                    <span>头像：</span>
                    <img :src="message.avatar" style="width:50px;">
                </div>
                <div>
                    <span>姓名</span>
                    <input type="text" v-model="message.name"/>
                </div>
                <div>
                    <span>昵称：</span>
                    <input type="text" v-model="message.nickname">
                </div>
                <div>
                    <span>性别:</span>
                    <input type="radio" id="one" value="男" v-model="message.sex">
                    <label for="one">男</label>
                    <input type="radio" id="two" value="女" v-model="message.sex">
                    <label for="two">女</label>
                </div>
                <div>
                    <span>出生日期:</span>
                    <input type="text" v-model="message.birthday" placeholder="输入格式1998-05-12">
                </div>
                <div>
                    <span>籍贯：</span>
                    <input type="text" v-model="message.homeTown">
                </div>
                <div>
                    <span>专业班级</span>
                    <input type="text" v-model="message.className">
                </div>
                <div>
                    <span>学号</span>
                    <input type="text" v-model="message.studentID" disabled>
                </div>
                <div>
                    <span>组别</span>
                    <input type="text" v-model="message.group">
                </div>
                <div>
                    <span>所属院系</span>
                    <input type="text" v-model="message.college">
                </div>
                <div>
                    <span>入学年份</span>
                    <input type="text" v-model="message.grade">
                </div>
            </pane>
            <pane label="就业信息" name="１">
                <p>这是标题二的内容</p>
                <div>
                    <span>工作地点:</span>
                    <input type="text" v-model="message.workPlace">
                </div>
                <div>
                    <span>工作单位:</span>
                    <input type="text" v-model="message.company">
                </div>
                <div>
                    <span>研究方向</span>
                    <input type="text" v-model="message.job">
                </div>
                <div>
                    <span>就读高校</span>
                    <input type="text" v-model="message.school">
                </div>
            </pane>
            <pane label="联系方式" name="2">
                <div>
                    <span>QQ:</span>
                    <input type="text" v-model="message.qq">
                </div>
                <div>
                    <span>微信:</span>
                    <input type="text" v-model="message.wechat">
                </div>
                <div>
                    <span>电话:</span>
                    <input type="text" v-model="message.phone"/>
                </div>
                <div>
                    <span>邮箱:</span>
                    <input type="text" v-model="message.email" disabled>
                </div>
            </pane>
        </tabs>
    </div>
</template>

<script>
import $ from '../../libs/util.js'
import tabs from '../UI/tabs/tabs.vue'
import pane from '../UI/tabs/pane.vue'
export default {
    data(){
        return{
            email:this.$route.params.email,
            message:{},
            activeKey:'0'
        }
    },
    components:{
        tabs,
        pane
    },
    methods:{
        getMessage(){
            $.ajax.get('/byemail?email='+this.email).then((res) => {
                if(res.status === 200 && res.data.status === 1){
                    this.message = res.data.result;
                    //console.log(this.message);
                }
                else{
                    alert(res.data.error);
                }
            })
            .catch((error) => {
                console.log(error);
            })
        }
    },
    mounted() {
        this.getMessage();
    },
}
</script>

<style scoped>
    .change{
        width: 50%;
        margin: 50px auto;
    }
    .change h1{
        padding-left: 10px; 
        border-left: 4px solid #4386dd;
        margin-bottom: 20px;
        font-weight: 100;
    }
    .change p{
        display: inline-block;
    }
</style>
