<template>
    <div>
        <h1 class="red">Hello {{ name }}! {{ ($store.state.authenticated)? 'Пользователь' : 'Гость' }}</h1>
        <button @click="$store.commit('increment')">{{ $store.state.counter }}</button>
        
    </div>
</template>

<script>
export default {
  data () {
    return { name: 'World' }
  },
  head:{
    title: "Основная страница",
    meta: [
        { name: 'description', content: 'Тестовая основная страница' }
    ],
    link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
    ]  
  }
}
</script>

<style lang="sass">
.red
  color: red
  font-family: 'Roboto', sans-serif
</style>