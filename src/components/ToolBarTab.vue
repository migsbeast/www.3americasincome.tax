<template>
  <q-tab
  :label="label"
  class="q-mr-sm q-py-xs"
  @click="handleClick();"
  style="width:120px;min-height:auto !important;"
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

<style>

</style>
