<template>
  <q-tab
  :label="label"
  class="q-mr-sm q-py-xs text-white "
  @click="handleClick();"
  style="width:100%;min-height:auto !important;"
  />
</template>

<script>
export default {
  name: 'ToolBarTab',
  props: {
    id: String,
    referenceElement: String,
    label: String,
    selectedTab: String
  },
  methods: {
    handleClick () {
      this.$emit('click', this.id, this.referenceElement)
    }
  }
}
</script>

<style lang="scss">
.banner-card:hover{
  background-color: #FFFFF;
  border-color: linear-gradient(to right, $primary , $secondary);
}
</style>
