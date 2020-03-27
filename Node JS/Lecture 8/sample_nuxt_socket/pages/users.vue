<template>
    <div>
        <h1>Users index</h1>
        <nuxt-link :to="{ name: 'users-id', params: { id: 1 } }">User 1</nuxt-link>
        <nuxt-link :to="{ name: 'users-id', params: { id: 2 } }">User 2</nuxt-link>
        <nuxt-link :to="{ name: 'users-id', params: { id: 3 } }">User 3</nuxt-link>
        <nuxt-child></nuxt-child>
    </div>
</template>