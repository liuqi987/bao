<template>
  <div class="add">
    <input type="text" v-model="title" @keydown.enter="add()" />
    <button  :style="{background:col}">提交</button>
  </div>
</template>
<script>
import Bus from "@/Bus"
export default {
  name: "Add",
  data() {
    return {
      title: "",
      col:"pink"
    };
  },
  methods: {
    add() {
      if (this.title == "") {
        return;
        alert("数据不能为空");
      }
      var arr = JSON.parse(localStorage.getItem("todo"))||[]
      var obj = {title:this.title,flag:false}
      arr.push(obj)
      this.title=""
      localStorage.setItem("todo",JSON.stringify(arr))
      Bus.$emit("newdata",arr)
    }
  },
  created(){
      Bus.$on("changecol",((data)=>{
          this.col = data
      }))
  }
};
</script>
<style lang="scss">
.add {
  width: 100%;
  height: 0.9rem;
  display: flex;
  align-items: center;
  padding: 0 0.2rem;
  box-sizing: border-box;
  input {
    width: 80%;
    height: 0.6rem;
    border: 1px solid #ccc;
    border-radius: 0.05rem;
    margin-right: 0.15rem;
  }
  button {
    width: 1.2rem;
    font-size: 0.25rem;
    height: 0.6rem;
    border-radius: 0.05rem;
    color: #fff;
    // background-color: pink;
    border: none;
  }
}
</style>