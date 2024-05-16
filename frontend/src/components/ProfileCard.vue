<template>
    <div class="profileContainer grid grid-cols-1 md:grid-cols-3 items-center flex max-h-full gap-5">
        <div class="col-span-1 h-full">
            <img :src="imageUrl" class="object-contain" alt="Avatar">
        </div>
        <div class="col-span-1 md:col-span-1 flex flex-col gap-2">
            <h1 class="logoFont leading-8 text-2xl">{{ name }}</h1>
            <div class="flex flex-col gap-0 text-xs subTitle">
                <p>{{ country }}</p>
                <p>{{ points }} Points</p>
                <p>{{ achievements }} Achievements</p>
                <p>{{ leaderboard }} Leaderboard</p>
            </div>
        </div>

        <div class="col-span-1 md:col-span-1 flex grow justify-end items-end h-full subTitle">
            <router-link to="/profile">
                <button class="profileBtn">View Profile</button>
            </router-link>
        </div>
    </div>
</template>

<style>
.profileContainer {
    border-radius: 20px;
    background: var(--gold-highlight, #CF9F30);
    padding: 24px;
}

.profileContainer img {
    border-radius: 248px;
}

.profileContainer {
    color: var(--background-color);
}

.profileBtn {
    padding: 8px;
    border-radius: 10px;
    border: 1px solid var(--background-color);
    transition: transform 0.5s ease, background-color 0.5s ease, color 0.5s ease;
}

.profileBtn:hover {
    padding: 8px;
    border-radius: 10px;
    background-color: var(--background-color);
    color: var(--gold-highlight);
    transform: scale(1.1);
}
</style>

<script>
export default {
    data() {
        return {
            imageUrl: require('@/assets/imgs/Avatar.png'),
            name: 'Jhon Doe',
            country: 'Egytian',
            points: 42,
            leaderboard: 6,
            achievements: 6
        }
    },
    created() {
        this.fetchName();
    },
    methods: {
        async fetchName() {
            try {
                const response = await fetch('http://localhost:3000/profile');
                const data = await response.json();
                this.name = data.name || this.name;
                this.imageUrl = require(`@/assets/imgs/${data.imageUrl}`);
                this.country = data.country || this.country;
                this.points = data.points || this.points;
                this.leaderboard = data.leaderboard || this.leaderboard;
                this.achievements = data.achievements || this.achievementsl
            } catch (error) {
                console.error('Error fetching name:', error);
            }
        },
    }
}
</script>
