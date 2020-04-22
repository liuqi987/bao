<template>
  <div>
    <p @click="showPopup">三</p>
    <van-popup
      v-model="show"
      position="left"
      :style="{ height: '100%',width:'55%',backgroundColor:'rgba(0,0,0,0.6)'}"
      :overlay="false"
    >
      <ul class="sj"  v-if="!zshow">
        <li @click="huan()">切换主题</li>
        <li>下载数据</li>
        <li>导入数据</li>
        <li @click="save()">编辑数据</li>
        <li>清空数据</li>
      </ul>
      <!-- 切换主题的 -->
      <ul class="zt"  v-if="zshow">
        <li @click="changeColor(item)" v-for="(item,key) in zt" :key="key" :style="{background:item}">{{item}}</li>
      </ul>
    </van-popup>
  </div>
</template>
<script>
import Bus from "@/Bus"
export default {
  name: "Hide",
  data() {
    return {
      show: false,
      zt: ["pink", "blue", "plum", "yellow","black","green","red"],
      zshow:false,
    };
  },

  methods: {
    showPopup() {
      this.show = !this.show;
    },
    save() {
      this.$router.push({ path: "/search" });
    },
    huan(){
      this.zshow = !this.zshow
    },
    changeColor(col){
      Bus.$emit("changecol",col)
    }
  }
};
</script>
<style lang="scss">
// 主题颜色
.zt {
  padding-top: 1rem;
  box-sizing: border-box;
  li{
     color: #fff;
  margin: 0 auto;
  width: 2rem;
  height: 0.8rem;
  border-radius: 0.05rem;
  line-height: 0.8rem;
  margin-top: 0.2rem;
  text-indent: 0.45rem;
  font-size: 0.3rem;
  }
}

.sj {
  padding-top: 1rem;
  box-sizing: border-box;
  li {
    margin: 0 auto;
    width: 2rem;
    height: 0.8rem;
    background-color: pink;
    font-size: 0.25rem;
    color: #fff;
    border-radius: 0.05rem;
    line-height: 0.8rem;
    margin-top: 0.2rem;
    text-indent: 0.45rem;
  }
}
</style>