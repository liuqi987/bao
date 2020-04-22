<template>
  <div>
    <van-collapse v-model="activeNames" >
      <van-collapse-item title="未完成" name="1" :style="{background:col}">
        <ul>
          <li v-for="(item,key) in list" :key="key" v-show="!item.flag">
            <input type="checkbox" v-model="item.flag" @change="save()" />
            <p>{{item.title}}</p>
            <button @click="edit(key)">取消</button>
          </li>
        </ul>
      </van-collapse-item>
      <van-collapse-item title="已完成" name="2" :style="{background:col}">
        <ul>
          <li v-for="(item,key) in list" :key="key" v-show="item.flag==1">
            <input type="checkbox" v-model="item.flag" />
            <p>{{item.title}}</p>
            <span>{{date}}</span>
          </li>
        </ul>
      </van-collapse-item>
      <van-collapse-item title="已取消" name="3" :style="{background:col}">
        <ul>
          <li v-for="(item,key) in list" :key="key" v-show="item.flag==2">
            <input type="checkbox" v-model="item.flag" />
            <p>{{item.title}}</p>
            <button @click="dell(key)">恢复</button>
          </li>
        </ul>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>
<script>
import Bus from "@/Bus";
export default {
  name: "List",
  data() {
    return {
      activeNames: ["1"],
      list: JSON.parse(localStorage.getItem("todo")) || [],
      date: new Date()
        .toLocaleDateString()
        .split("/")
        .join("-"),
        col:"pink"
    };
  },
  created() {
    Bus.$on("newdata", data => {
      this.list = data;
    });
    Bus.$on("changecol", data => {
      this.col = data;
    });
  },
  methods: {
    dell(n) {
      this.list[n].flag = false;
      this.save()
    },
    edit(n) {
      this.list[n].flag = 2;
      this.save()
    },
    save(){
        localStorage.setItem("todo",JSON.stringify(this.list))
    }
  }
};
</script>
<style lang="scss">
.van-cell{
    background-color: transparent;
}
ul {
  width: 100%;
  min-height: 0.5rem;
  li {
    width: 100%;
    display: flex;
    height: 0.5rem;
    align-items: center;
    position: relative;
    input {
      width: 0.4rem;
      height: 0.4rem;
    }
    p {
      font-size: 0.25rem;
      color: black;
      margin-left: 0.2rem;
    }
    button {
      position: absolute;
      width: 0.9rem;
      height: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 0.05rem;
      right: 0.2rem;
      background-color: transparent;
    }
    span {
      position: absolute;
      right: 0.2rem;
      color: #ccc;
    }
  }
}
.van-cell {
  color: #fff;
  span {
    font-size: 0.25rem;
  }
  i {
    color: #fff;
  }
}
</style>