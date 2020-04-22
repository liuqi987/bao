<template>
  <div>
    <div class="aaa">
      <select v-model="val" @click="ch(val)">
        <option value="" selected>选择类型</option>
        <option v-for="(item,key) in op" :key="key" :value="item">{{item}}</option>
      </select>
      <input class="sou" type="text" placeholder="搜索关键字" v-model="kw" @input="search()" />
      <ul>
        <li v-for="(item,key) in lists" :key="key">{{item.title}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Search",
  data() {
    return {
      val: "",
      op: ["全部","未完成", "已完成", "已取消"],
      kw: "",
      lists: [],
      list: JSON.parse(localStorage.getItem("todo")) || []
    };
  },
  methods: {
    ch(e) {
     this.lists = []
      if (e == "全部") {
        this.lists = this.list;
      } else if (e == "未完成") {
        this.list.forEach(v => {
          if (!v.flag) {
            this.lists.push(v);
          }
        });
      } else if (e == "已完成") {
        this.list.forEach(v => {
          if (v.flag == 1) {
            this.lists.push(v);
          }
        });
      } else if (e == "已取消") {
        this.list.forEach(v => {
          if (v.flag == 2) {
            this.lists.push(v);
          }
        });
      }
    },
    search() {
      this.lists = [];
      if (this.kw == "") {
        return false;
      }
      this.list.forEach(v => {
        if (v.title.indexOf(this.kw) != -1) {
          this.lists.push(v);
        }
      });
    }
  }
};
</script>
<style lang="scss">
.aaa {
  select {
    width: 60%;
    height: 0.5rem;
    margin: 0.2rem 0.2rem;
    font-size: 0.25rem;
    option {
      color: black;
    }
  }
}
.sou {
  width: 60%;
  height: 0.5rem;
  margin: 0.2rem 0.2rem;
  font-size: 0.25rem;
  border: 1px solid #ccc;
  text-indent: 0.2rem;
}
</style>