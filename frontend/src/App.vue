<template>
    <div id="app">
        <topBar />
        <router-view />
    </div>
</template>

<script>
import TopBar from './components/TopBar'

export default {
    name: 'App',
    components: {
        TopBar
    }
}
</script>

<style>
/* Add your styles here */
</style>
