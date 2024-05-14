<template>
    <div class="flex w-full grid sm:grid-cols-1 md:grid-cols-2 gap-2">
        <div class="col-span-1 h-full">
            <ProfileCard />
        </div>
        <div class="col-span-1 h-full">
            <FinesCard />
        </div>
    </div>
</template>

<script>
import ProfileCard from './ProfileCard.vue'
import FinesCard from './FinesCard.vue'

export default {
    name: 'App',
    components: {
        ProfileCard,
        FinesCard
    }
}
</script>
