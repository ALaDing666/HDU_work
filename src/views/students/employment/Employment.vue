<template>
  <div>
    <top-nav title="应聘"></top-nav>
    <tabs>
          <jobs></jobs>
          <record></record>
    </tabs>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
import TopNav from '@/components/common/TopNav.vue'
import Tabs from '@/components/common/Tabs.vue'
import Jobs from './Jobs.vue'
import Record from './Record.vue'
import BottomNav from '@/components/common/BottomNav.vue'
export default {
    components: {
        TopNav,
        Tabs,
        Jobs,
        Record,
        BottomNav,
    },
    provide: {
        // option用于向孙子组件dropdown-menu传递数据
        option: [
          {
            text: '按发布日期降序',
            value: 0
          }, 
          {
            text: '按用工人数降序',
            value: 1
          }
        ]
    }
}

</script>
<style scoped>
</style>