<template>
    <van-tab title="招工通知">
        <dropdown-menu></dropdown-menu>
        <search placeholder="请输入搜索关键词"/>
        
    </van-tab>
</template>

<script>
import DropdownMenu from '@/components/common/DropdownMenu.vue'
import Search from '@/components/common/Search.vue'
export default {
    data() {
        return {
            value: ''
        }
    },
    methods: {
        onSearch(val) {
            Toast(val);
        },
        onCancel() {
            Toast('取消');
        },
    },
    components: {
        DropdownMenu,
        Search
    }
}

</script>


<style scoped>
</style>