<template>
    <van-tab title="应聘岗位">
        <my-filter ref="filter" />
        <van-row>
            <van-col span="9">
                <search placeholder="搜索"/>
            </van-col>
            <van-col span="9">
                <dropdown-menu @changeValue="handleChange"/>
            </van-col>
            <van-col span="6">
                <van-button color="rgb(81, 125, 252)" @click="showFilter" icon="filter-o" type="info" size="small">筛选</van-button>
            </van-col>
        </van-row>

        <ul>
            <!-- v-for="(item,index) in list" :key="index" -->
            <list-layout >
                <van-icon dot size="40" name="contact" slot="left-icon" color="rgb(81, 125, 252)"/>
                <div slot="content">
                    <h4>h4</h4> 
                    <span>老师</span>
                    <span>人</span>
                    <span>3</span>
                </div>
                <div slot="right">
                    <span></span>
                    <van-button @click="handleEmploy()" color="rgb(81, 125, 252)" size="mini">我要应聘</van-button>
                </div>
            </list-layout>
        </ul> 
    </van-tab>
</template>

<script>
import Search from '@/components/common/Search.vue'
import DropdownMenu from '@/components/common/DropdownMenu.vue'
import ListLayout from '@/components/common/ListLayout.vue'
import MyFilter from './Filter'
export default {
    data() {
        return {
            list: []
        }
    },
    components: {
        DropdownMenu,
        Search,
        ListLayout,
        MyFilter
    },
    methods: {
        handleChange(value) {
            console.log(value)
        },
        handleEmploy() {
            // console.log(index,publisher)
            this.$router.push("/employ")
        },
        async getList() {
            await this.$ajax.get("/employmentList")
            .then(res => {
                console.log(res);
                this.List = res.data;
            }).catch(err => {
                console.log(err)
                this.$notify({ type: 'danger', message: '网络错误，请重试',duration: 1000, })
            })
        },
        showFilter() {
            this.$refs.filter.show = true
        }
    },
    mounted() {
        this.getList()
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

