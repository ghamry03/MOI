<template>
    <div>
        <ServicesNavBar />
        <router-link class="grid sm:grid-cols-1 md:grid-cols-3 gap-3" to="/service">
            <ServiceCard v-for="(service, index) in services" :key="index" class="col-span-1"
                :imageSrc="getServiceImagePath(service.imageSrc)" :imageAlt="service.imageAlt" :title="service.title"
                :description="service.description" :buttonText="service.buttonText" :buttonLink="service.buttonLink" />
        </router-link>
    </div>
</template>

<script>
import ServicesNavBar from './ServicesNavBar.vue';
import ServiceCard from './ServiceCard.vue';

export default {
    name: 'App',
    components: {
        ServicesNavBar,
        ServiceCard
    },
    data() {
        return {
            services: []
        };
    },
    created() {
        this.fetchServices();
    },
    methods: {
        async fetchServices() {
            const fallbackServices = [
            ];

            try {
                const response = await fetch('http://backend:3000/services');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                this.services = data;
            } catch (error) {
                console.error('Error fetching services:', error);
                this.services = fallbackServices;
            }
        },
        getServiceImagePath(imgSrc) {
            return require(`@/assets/svgs/${imgSrc}`);
        }
    }
};
</script>

<style></style>
