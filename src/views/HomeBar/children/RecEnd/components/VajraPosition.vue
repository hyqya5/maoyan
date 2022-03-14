<template>
  <div class="position-bar">
    <!-- 金刚位上 -->
    <div class="position-top">
      <dl v-for="(item, index) in images2" :key="index">
        <dt>
          <img :src="item.materialItems[2].value" alt="">
        </dt>
        <dd>{{item.materialItems[0].value}}</dd>
      </dl>
    </div>
    <!-- 金刚位下 -->
    <div class="position-btm">

    </div>
  </div>
</template>

<script>
export default {
  name: 'vajra-position',
  props: {
    images2: Array
  }
}
</script>

<style lang="scss">
.position-bar{
  .position-top{
   dt{
   }
  }
}
</style>
