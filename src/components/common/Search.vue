<template>
  <van-search v-model="searchValue" :placeholder="placeholder" @search="onSearch" shape="round"/>
</template>

<script>
export default {
    data() {
        return {
            searchValue: ''
        }
    },
    props: ['placeholder'],
    methods: {
        onSearch(value) {
            console.log('搜索内容为：' + value)
        }
    }
}

</script>
<style scoped>
</style>