<template>
  <div id="app">
    Hello {{name}}!
    <TestComponent></TestComponent>
  </div>
</template>


<script lang="ts">
import {Component, Vue } from 'vue-property-decorator';
import TestComponent from '../../components/test.vue';

@Component({
  components: {
    TestComponent,
  },
})
export default class App extends Vue {
  public name: string = 'world';
  public created() {
    this.name = 'lyn';
  }
}
</script>

<style lang="scss">
</style>
