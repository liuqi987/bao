<template>
  <div>
    <Head></Head>

    <keep-alive>
      <router-view v-if="this.$route.meta.keepAlive"></router-view>
    </keep-alive>

    <router-view v-if="!this.$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import Head from "@/components/Head";

export default {
  components: { Head }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 0.2rem;
}
</style>
