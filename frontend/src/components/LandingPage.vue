<template>
    <div class="flex flex-col gap-9 md:gap-6">
        <TopBar />
        <TopSection />
        <Services />
    </div>
</template>

<script>
import TopBar from './components/TopBar'
import TopSection from './components/TopSection.vue'
import Services from './components/ServicesSection.vue'

export default {
    name: 'App',
    components: {
        TopBar,
        TopSection,
        Services
    }
}
</script>

<style>
@import '@/assets/css/tailwind.css';
@import '@/assets/css/global.css';

:root {
    --background-color: #FFFFFF;
    --dark-white: #F3F2F2;
    --gold-color: #DCBA6A;
    --gold-highlight: #CF9F30;
    --text-color: #000000;

}

body {
    background-color: var(--background-color);
    color: var(--text-color);
    padding: 24px;
}

.logoFont {
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 900;
}

.topBarFont {
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 600;
}

.navBar {}

.navBarSelected {}

.subTitle {
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.text {}
</style>
