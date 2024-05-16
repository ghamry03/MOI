<template>
    <div :class="['container', statusClass]"
        class="sm:hide md:flex grow min-w-full justify-center items-center grid wrap md:grid-cols-3">
        <div class="column flex grow col-span-1">
            <img :src="imageSrc" class="object-contain" />
        </div>

        <div class="column flex flex-col grow gap-2 col-span-1">
            <h2>{{ stepTitle }}</h2>
            <p>{{ description }}</p>
        </div>

        <div class="column flex justify-end items-center grow col-span-1">
            <img src="@/assets/svgs/achievement.svg" />
            <p>Points {{ points }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StepCard',
    props: {
        stepTitle: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        points: {
            type: Number,
            required: true
        },
        status: {
            type: String,
            required: true
        }
    },
    computed: {
        statusClass() {
            return {
                'in-progress': this.status === 'in-progress',
                'done': this.status === 'done',
                'not-there-yet': this.status === 'not-there-yet',
            };
        },
        imageSrc() {
            switch (this.status) {
                case 'in-progress':
                    return require('@/assets/imgs/platform-avatar.png');
                default:
                    return require('@/assets/imgs/platform.png');
            }
        }
    }
};
</script>

<style scoped>
.container {
    border-radius: 20px;
    padding: 24px;
    height: 200px;
    color: var(--background-color);
    transition: height 0.3s ease;
}

.container:hover {
    height: 300px;
}

.in-progress {
    background: var(--gold-color, #DCBA6A);
    height: 400px !important;
}

.done {
    background: #31A836;
}

.not-there-yet {
    background: #7F7F7F;
}
</style>
