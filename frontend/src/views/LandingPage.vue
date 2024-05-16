<template>
    <div class="flex flex-col gap-9 md:gap-6">
        <TopSection />
        <Services />
    </div>
</template>

<script>
import TopSection from '../components/TopSection.vue'
import Services from '../components/ServicesSection.vue'

export default {
    name: 'App',
    components: {
        TopSection,
        Services
    }
}
</script>

<style></style>
