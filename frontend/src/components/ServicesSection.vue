<template>
    <ServicesNavBar />
    <div class="grid sm:grid-cols-1 md:grid-cols-3 gap-3">
        <ServiceCard
        v-for="(service, index) in services"
        :key="index"
        class="col-span-1"
        :imageSrc="service.imageSrc"
        :imageAlt="service.imageAlt"
        :title="service.title"
        :description="service.description"
        :buttonText="service.buttonText"
        :buttonLink="service.buttonLink"
    />
    </div>
</template>

<style></style>

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
            services: [] // Initialize services as an empty array
        };
    },
    created() {
        this.fetchServices();
    },
    methods: {
        async fetchServices() {
            const fallbackServices = [
                {
                    imageSrc: require('@/assets/svgs/Car.svg'),
                    imageAlt: 'Service Logo',
                    title: 'Police Car Wash',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus tempor justo, ut pellentesque dolor iaculis at. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque eleifend felis quis dui tempor sodales.',
                    buttonText: 'Start Now',
                    buttonLink: '#'
                },
                {
                    imageSrc: require('@/assets/svgs/Car.svg'),
                    imageAlt: 'Service Logo',
                    title: 'Police Car Wash',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus tempor justo, ut pellentesque dolor iaculis at. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque eleifend felis quis dui tempor sodales.',
                    buttonText: 'Start Now',
                    buttonLink: '#'
                },
                {
                    imageSrc: require('@/assets/svgs/Car.svg'),
                    imageAlt: 'Service Logo',
                    title: 'Police Car Wash',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus tempor justo, ut pellentesque dolor iaculis at. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque eleifend felis quis dui tempor sodales.',
                    buttonText: 'Start Now',
                    buttonLink: '#'
                },
                {
                    imageSrc: require('@/assets/svgs/Car.svg'),
                    imageAlt: 'Service Logo',
                    title: 'Police Car Wash',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus tempor justo, ut pellentesque dolor iaculis at. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque eleifend felis quis dui tempor sodales.',
                    buttonText: 'Start Now',
                    buttonLink: '#'
                },
                {
                    imageSrc: require('@/assets/svgs/Car.svg'),
                    imageAlt: 'Service Logo',
                    title: 'Default Service 2',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus tempor justo, ut pellentesque dolor iaculis at. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque eleifend felis quis dui tempor sodales.',
                    buttonText: 'Start Now',
                    buttonLink: '#'
                },
            ];

            try {
                const response = await fetch('https://api.example.com/services');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                this.services = data.services || fallbackServices;
            } catch (error) {
                console.error('Error fetching services:', error);
                this.services = fallbackServices;
            }
        }
    }
};
</script>
