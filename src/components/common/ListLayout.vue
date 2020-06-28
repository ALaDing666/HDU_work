<template>
  <li>
    <van-row>
        <van-col span="4">
            <slot name="left-icon"></slot>
        </van-col>
        <van-col span="15">
            <slot name="content"></slot>
        </van-col>
        <van-col span="5">
            <slot name="right"></slot>
        </van-col>
    </van-row>
  </li>
</template>

<script>
export default {

}

</script>
<style scoped>
</style>