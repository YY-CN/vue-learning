<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
   <h1>counter : {{ counter }}</h1>
   <h2>counter:{{ getCounter }}</h2>
   <button @click="addClickHandle">点击修改</button>
    <button @click="addAsyncClickHandle">异步增加</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';
import { mapActions } from 'vuex';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed:({
    ...mapState(["counter"]),
    ...mapGetters(["getCounter"]),
  }),
  methods:{

    // 简化this.$store.commit("addCounter",15)
    ...mapMutations(["addCounter"]),

    // 简化this.$store.dispatch("asyncAddCounter")
    ...mapActions(["asyncAddCounter"]),

    addClickHandle(){
      // this.$store.commit("addCounter",15)
      this.addCounter(20)
    },
    addAsyncClickHandle(){
      // this.$store.dispatch("asyncAddCounter")
      // 直接调用Action里面写的方法
      this.asyncAddCounter()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
