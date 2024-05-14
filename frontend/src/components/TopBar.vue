<template>
    <div class="hidden md:flex topBarContainer flex-row justify-between items-center grid grid-cols-12">
        <div class="flex flex-row align-center items-center col-span-8 gap-6">
            <div class="flex items-center logoFont col-span-2">
                <img src="@/assets/imgs/logo.png" alt="Logo" class="object-fill" />
                <h1 id="logoText" class="leading-7 text-3xl">UAE<br>MOI</h1>
            </div>
            <div class="flex gap-4 topBarFont sm:text-xs md:text-base col-span-10">
                <li>About MOI</li>
                <li>E-SERVICES</li>
                <li>NEWS</li>
                <li>Contact-us</li>
            </div>
        </div>

        <div class="flex items-center gap-3 topBarFont text-base col-span-4 justify-end">
            <p>AR</p>
            <button id="primaryBtn">LOGOUT</button>
        </div>
    </div>

    <!-- mobile !-->
    <div @click="toggleMenu" class="flex md:hidden topBarContainer justify-between items-center">
        <img src="@/assets/svgs/burger.svg" class="object-fit" alt="burger menu"/>
        <div class="flex justify-center items-center">
            <h1 id="logoText" class="leading-5 text-2xl font-bold">UAE<br>MOI</h1>
            <img src="@/assets/imgs/logo.png" alt="Logo" class="object-fit" />
        </div>
    </div>

    <div v-if="isMenuOpen" class="mobileContainer mobile-menu md:hidden flex flex-col items-start float-start">
        <ul class="flex flex-col gap-4 topBarFont sm:text-xs md:text-base w-full">
            <li @click="toggleMenu">About MOI</li>
            <li @click="toggleMenu">E-SERVICES</li>
            <li @click="toggleMenu">NEWS</li>
            <li @click="toggleMenu">Contact-us</li>
            <li @click="toggleMenu">AR</li>
            <li @click="toggleMenu"><button id="primaryBtn">LOGOUT</button></li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isMenuOpen: false
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        }
    }
};
</script>

<style scoped>
.mobileContainer {
}

.topBarContainer img {
    width: 75px;
    height: 75px;
}

.topBarContainer li {
    display: inline-block;
    list-style: none;
}

.topBarContainer {
    padding: 8px;
    border: 20px;
    width: 100%;
    text-transform: uppercase;
}

.topBarContainer #primaryBtn {
    border-radius: 20px;
    padding: 12px;
    background-color: var(--gold-highlight, #CF9F30);
    color: var(--background-color);
}

#logoText {
    color: var(--gold-highlight, #CF9F30);
}
</style>
