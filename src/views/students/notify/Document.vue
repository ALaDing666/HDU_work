<template>
    <van-tab title="文档发布">
        <dropdown-menu></dropdown-menu>
        <search />
    </van-tab>
</template>

<script>
import Search from '@/components/common/Search.vue'
import DropdownMenu from '@/components/common/DropdownMenu.vue'
export default {
    data() {
        return {
            value: ''
        }
    },
    methods: {
        
    },
    components: {
        DropdownMenu,
        Search
    }
}
</script>


<style scoped>
</style>