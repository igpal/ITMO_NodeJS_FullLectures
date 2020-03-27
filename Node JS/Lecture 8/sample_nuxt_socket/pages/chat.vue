<template>
    <div>
        <ul>
            <li v-for="mess in messages">{{mess}}</li>
        </ul>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data () {
    return { arr: [] }
  },
  sockets: {
    newMessage(data){
        this.newMessage(data.message);
    }
  },
  computed: {
   ...mapState(["messages"])
  },
  methods: {
    ...mapMutations(["newMessage"]),
  }
}

</script>