<template>
    <div class="flex w-full flex-col gap-5">
        <StepCard v-for="(step, index) in steps" :key="index" :step-title="step.title" :description="step.description"
            :points="step.points" :status="step.status" />
    </div>
</template>

<script>
import StepCard from '../components/StepCard.vue';

export default {
    name: 'App',
    components: {
        StepCard
    },
    data() {
        return {
            steps: [],
            fallbackSteps: [
            ]
        };
    },
    methods: {
        async fetchSteps() {
            try {
                const response = await fetch('http://localhost:3000/steps');
                const data = await response.json();
                this.steps = data;
            } catch (error) {
                console.error('Error fetching steps:', error);
                this.steps = this.fallbackSteps;
            }
        }
    },
    created() {
        this.fetchSteps();
    }
};
</script>

<style></style>
