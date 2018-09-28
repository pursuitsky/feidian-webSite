<template>
    <div class="person">
        <span>{{message.name}}</span>
        <span>{{message.group}}</span>
        <span>{{message.email}}</span>
    </div>
</template>

<script>
import $ from '../../libs/util.js'
export default {
    data(){
        return{
            name:this.$route.params.name,
            message:{}
        }
    },
    methods:{
        getMessage() {
            $.ajax.get('/byname?name='+this.name).then((res) => {
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
            
            // console.log(this.name);
        }
    },
    mounted() {
        this.getMessage();
        //console.log(this.message);
    }
}
</script>

<style>

</style>
