<template>
    <MainNavigation/>
        <router-view/>
    <Footer/>
</template>

<script setup>

import MainNavigation from './MainNavigation.vue';
import Footer from './Footer.vue';
</script>