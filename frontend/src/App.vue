<template>
    <div id="app">
        <topBar />
        <router-view />
    </div>
</template>

<script>
import TopBar from './components/TopBar'

export default {
    name: 'App',
    components: {
        TopBar
    }
}
</script>

<style>
@import '@/assets/css/tailwind.css';
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

:root {
    --background-color: #FFFFFF;
    --dark-white: #F3F2F2;
    --gold-color: #DCBA6A;
    --gold-highlight: #CF9F30;
    --text-color: #000000;

}

.subTitle {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.logoFont {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 900;
}

.topBarFont {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
}

body {
    background-color: var(--background-color);
    color: var(--text-color);
    padding: 24px;
}
</style>
