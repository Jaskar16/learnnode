<script setup>
import { ref } from 'vue';
import Tabs from './components/tabs.vue';
let tabTitles = ['Pictures', 'Music', 'Videos', 'Documents', 'Games'];
let tabContent = [
    'Some cool Pictures',
    'Some cool Music',
    'Some cool Videos',
    'Some cool Documents',
    'Some cool Games',
];
let tabActive = ref(0);

function setActive(key){
    tabActive.value = key;
}

</script>
<template>
    <Tabs :titles="tabTitles" @change="setActive"></Tabs>
    <div class="content">
        <h1>{{ tabContent[tabActive] }}</h1>
    </div>
</template>