<template>
  <q-btn
    flat
    @click="handleClick();"
    class="q-py-xs"
  >
    <q-item-section> {{ label }} </q-item-section>
  </q-btn>
</template>

<script>
export default {
  name: 'ToolBarListItem',
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
