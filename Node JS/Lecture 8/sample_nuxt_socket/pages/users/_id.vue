<template>
    <div>
        <h1>User {{$route.params.id}}</h1>
        <nuxt-link :to="{ name: 'users' }">Users index</nuxt-link>
    </div>
</template>

<script> 
export default { 
    validate ({ params }) { 
        // Должен быть числом 
        return /^\d+$/.test(params.id) 
    },    
} 
</script>
