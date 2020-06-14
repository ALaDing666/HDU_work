<template>
  <div class="topNav">
      <van-nav-bar :title="title" left-arrow @click-left="goback"/>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        props: ['title'],
        methods: {
            goback() {
                window.history.back()
            }
        }
    }

</script>
<style scoped>
</style>