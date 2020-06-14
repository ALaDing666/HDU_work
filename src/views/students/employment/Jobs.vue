<template>
    <van-tab title="应聘岗位">
        <van-row>
            <van-col span="9">
                <search placeholder="搜索"/>
            </van-col>
            <van-col span="9">
                <dropdown-menu @changeValue="handleChange"/>
            </van-col>
            <van-col span="6">
                <van-button icon="filter-o" type="info" size="small">筛选</van-button>
            </van-col>
        </van-row>
        
    </van-tab>
</template>

<script>
import Search from '@/components/common/Search.vue'
import DropdownMenu from '@/components/common/DropdownMenu.vue'
export default {
    components: {
        DropdownMenu,
        Search
    },
    methods: {
        handleChange(value) {
            console.log(value)
        },
    }
}

</script>
<style scoped>
.van-row .van-col--9:nth-child(2){
    margin-top: 10px;
    padding-left: 1px;
}

.van-col--9 .van-search {
    margin-top: 10px;
    height: 36px;
    padding: 3px;
}

.van-dropdown-menu >>> .van-dropdown-menu__bar {
    height: 36px;
    box-shadow: 0 0 0 #fff;
}
.van-button {
    margin-top: 13px;
    margin-left: 15px;
}
</style>

