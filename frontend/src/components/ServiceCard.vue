<template>
    <div class="container flex flex-col gap-4">
        <div class="gap-2">
            <img :src="imageSrc" :alt="imageAlt">
            <h3>{{ title }}</h3>
        </div>

        <div>
            <p>{{ description }}</p>
        </div>

        <div class="flex justify-end w-full">
            <button class="btn" @click="navigate">{{ buttonText }}</button>
        </div>
    </div>
</template>

<style scoped>
h3 {
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
}

p {
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

button {
    font-family: "SF Pro Text";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.container {
    background-color: var(--dark-white);
    padding: 24px;
    border-radius: 20px;
}

.btn {
    padding: 8px;
    border-radius: 10px;
    border: 1px solid var(--gold-highlight);
    transition: transform 0.5s ease, background-color 0.5s ease, color 0.5s ease;
}

.btn:hover {
    padding: 8px;
    border-radius: 10px;
    background-color: var(--gold-highlight);
    color: var(--dark-white);
    transform: scale(1.1);
}
</style>

<script>
export default {
    props: {
        imageSrc: {
            type: String,
            required: true,
            default: require('@/assets/svgs/Car.svg')
        },
        imageAlt: {
            type: String,
            required: true,
            default: 'Service Logo'
        },
        title: {
            type: String,
            required: true,
            default: 'title'
        },
        description: {
            type: String,
            required: true,
            default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus tempor justo, ut pellentesque dolor iaculis at. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque eleifend felis quis dui tempor sodales.'
        },
        buttonText: {
            type: String,
            required: true,
            default: 'Start Now'
        },
        buttonLink: {
            type: String,
            required: true,
            default: '#'
        }
    },
    methods: {
        navigate() {
            window.location.href = this.buttonLink;
        }
    }
}
</script>
