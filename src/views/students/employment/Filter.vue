<template>
  <van-popup position="right" :style="{ height: '100%',width: '70%', paddingTop: '30px' }" v-model="show">
        <van-collapse v-model="activeNames">
            <van-collapse-item title="学院" name="academy">
                <div>
                    <van-button size="small" plain color="rgb(81, 125, 252)">计算机学院</van-button>
                    <van-button size="small" plain color="rgb(81, 125, 252)">自动化学院</van-button>
                    <van-button size="small" plain color="rgb(81, 125, 252)">机械学院</van-button>
                    <van-button size="small" plain color="rgb(81, 125, 252)">外国语学院</van-button>
                    <van-button size="small" plain color="rgb(81, 125, 252)">理学院</van-button>
                </div>
            </van-collapse-item>
            <van-collapse-item title="部门" name="department">
                <div>
                    <van-button size="small" plain color="rgb(81, 125, 252)">图书馆</van-button>
                    <van-button size="small" plain color="rgb(81, 125, 252)">机房</van-button>
                    <van-button size="small" plain color="rgb(81, 125, 252)">部门1</van-button>
                    <van-button size="small" plain color="rgb(81, 125, 252)">部门2</van-button>
                    <van-button size="small" plain color="rgb(81, 125, 252)">部门3</van-button>
                </div>
            </van-collapse-item>
        </van-collapse>
        <van-cell>
            <h4>工种</h4>
            <div class="category">
                <van-button size="small" plain color="rgb(81, 125, 252)">固定岗</van-button>
                <van-button size="small" plain color="rgb(81, 125, 252)">临时岗</van-button>
                <van-button size="small" plain color="rgb(81, 125, 252)">假期岗</van-button>
                <van-button size="small" plain color="rgb(81, 125, 252)">助教岗</van-button>
                <van-button size="small" plain color="rgb(81, 125, 252)">助教</van-button>
            </div>
        </van-cell>
        <van-cell>
            <van-button size="small" @click="handleReset" color="rgb(81, 125, 252)">重置</van-button>
            <van-button size="small" @click="handleSubmit" color="rgb(81, 125, 252)">确定</van-button>
        </van-cell>
    </van-popup>
</template>

<script>
export default {
    data() {
        return {
            show: false,
            activeNames: ['']
        }
    },
    methods: {
        handleReset() {
            console.log('重置')
            this.show = false
        },
        handleSubmit() {
            console.log('确定')
            this.show = false
        }
    }
}

</script>
<style scoped>
    .van-button {
        margin: 5px 1px ;
    }
</style>