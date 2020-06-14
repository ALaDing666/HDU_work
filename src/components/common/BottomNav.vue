<template>
  <div>
    <van-tabbar active-color="#004efd" inactive-color="#333" v-model="activeValue">
        <van-tabbar-item icon="friends">应聘</van-tabbar-item>
        <van-tabbar-item icon="bell">公告</van-tabbar-item>
        <van-tabbar-item icon="todo-list">考勤</van-tabbar-item>
        <van-tabbar-item icon="column">政策</van-tabbar-item>
        <van-tabbar-item icon="manager">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
    props: ['avtive'],
    data() {
        return {
            activeValue: 0,
        }
    },
    mounted() {
      this.activeValue = this.$props.active
    }
}

</script>
<style scoped>
</style>