<template>
    <div class="change">
        <h1>修改资料</h1>
        <tabs v-model="activeKey">
            <pane label="标题一" name="0">
                <p>这是标题一的内容</p>
            </pane>
            <pane label="标题二" name="１">
                <p>这是标题二的内容</p>
            </pane>
            <pane label="标题三" name="2">
                <p>这是标题三的内容</p>
            </pane>
        </tabs>
    </div>
</template>

<script>
import tabs from '../UI/tabs/tabs.vue'
import pane from '../UI/tabs/pane.vue'
export default {
    data(){
        return{
            activeKey:'0'
        }
    },
    components:{
        tabs,
        pane
    }
}
</script>

<style>

</style>
