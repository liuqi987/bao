<template>
    <div>
        <header :style="{background:col}">
            <h2>学习记事本</h2>
             <Hide></Hide>
        </header>
       
    </div>
</template>
<script>
import Hide from "@/components/Hide"
import Bus from "@/Bus"
export default {
    name:"Head",
    components:{Hide},
    data(){
        return{
            col:"pink"
        }
    },
    created(){
        Bus.$on("changecol",(data)=>{
            this.col = data
        })
    }
}
</script>
<style lang="scss">
    header{
        width: 100%;
        height: 0.8rem;
        // background-color: pink;
        display: flex;
        align-items: center;
        padding: 0 0.2rem;
        box-sizing: border-box;
        h2{
            margin:  0 auto;
            font-size: 0.35rem;
            color:#fff;
            font-weight: bold;
        }
        p{
             font-size: 0.4rem;
            color:#fff;
            font-weight: bold;
        }
    }
</style>