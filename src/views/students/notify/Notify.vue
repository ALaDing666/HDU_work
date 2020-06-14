<template>
  <div class="notify">
      <top-nav title="公告通知"></top-nav>
      <tabs>
          <notice></notice>
          <document></document>
      </tabs>
      <bottom-nav :active="1"></bottom-nav>
  </div>
</template>

<script>
import TopNav from '@/components/common/TopNav.vue'
import Tabs from '@/components/common/Tabs.vue'
import DropdownMenu from '@/components/common/DropdownMenu.vue'
import Notice from './Notice.vue'
import Document from './Document.vue'
import BottomNav from '@/components/common/BottomNav.vue'
export default {
    data() {
        return {
            
        }
    },
    provide: {
        // option用于向孙子组件dropdown-menu传递数据
        option: [
            { text: '全部', value: 0 },
            { text: '未读', value: 1 },
            { text: '已读', value: 2 },
        ]
    },
    components: {
        TopNav,
        Tabs,
        BottomNav,
        DropdownMenu,
        Notice,
        Document
    }
}

</script>
<style scoped>
</style>