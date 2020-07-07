<template>
  <TabBar>
    <TabBarItem link="/home">
      <template v-slot:tabbar-icon="slotProps">
        <img v-if="slotProps.isActive" class="tabbar-icon" src="~assets/img/icon/home.svg" />
        <img v-else class="tabbar-icon" src="~assets/img/icon/home_active.svg" />
      </template>
      <template v-slot:tabbar-text>主页</template>
    </TabBarItem>
    <TabBarItem link="/category">
      <template v-slot:tabbar-icon="slotProps">
        <img v-if="slotProps.isActive" class="tabbar-icon" src="~assets/img/icon/category.svg" />
        <img v-else class="tabbar-icon" src="~assets/img/icon/category_active.svg" />
      </template>
      <template v-slot:tabbar-text="slotProps">
        <span :class="{active: !slotProps.isActive}">分类</span>
      </template>
    </TabBarItem>
    <TabBarItem link="/cart">
      <template v-slot:tabbar-icon="slotProps">
        <img v-if="slotProps.isActive" class="tabbar-icon" src="~assets/img/icon/cart.svg" />
        <img v-else class="tabbar-icon" src="~assets/img/icon/cart_active.svg" />
      </template>
      <template v-slot:tabbar-text="slotProps">
        <span :class="{active: !slotProps.isActive}">购物车</span>
      </template>
    </TabBarItem>
    <TabBarItem link="/profile">
      <template v-slot:tabbar-icon="slotProps">
        <img v-if="slotProps.isActive" class="tabbar-icon" src="~assets/img/icon/profile.svg" />
        <img v-else class="tabbar-icon" src="~assets/img/icon/profile_active.svg" />
      </template>
      <template v-slot:tabbar-text="slotProps">
        <span :class="{active: !slotProps.isActive}">我的</span>
      </template>
    </TabBarItem>
  </TabBar>
</template>
<script>
import TabBar from './tabbar/TabBar'
import TabBarItem from './tabbaritem/TabBarItem'

export default {
  components: {
    TabBar,
    TabBarItem
  }
}
</script>
<style lang='less'>
</style>
