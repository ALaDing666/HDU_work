<template>
  <div>
    <van-tabs v-model="active" 
    line-width="50%"
    color="rgb(48, 52, 253)"
    title-active-color="#3880ff">
        <slot></slot>
    </van-tabs>
  </div>
</template>

<script>
export default {
    data() {
        return {
            active: 0
        }
    }
}

</script>
<style scoped>

</style>