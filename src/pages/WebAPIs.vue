<script setup>
import { computed, onMounted, ref } from 'vue';
import Leaflet from '../components/Leaflet.vue';

let text = ref('Hello World');
function vibrate(){
    navigator.vibrate(200);
}
function starwars(){
    navigator.vibrate([500,110,500,110,450,110,200,110,170,40,450,110,200,110,170,40,500]);
}
function speak() {
    const utterThis = new SpeechSynthesisUtterance(text.value);
    console.log(selectedVoiceKey.value);
    utterThis.voice = voices.value[selectedVoiceKey.value];
    window.speechSynthesis.speak(utterThis);
}
speechSynthesis.addEventListener('voiceschanged', setVoices);

let voices = ref([]);
function setVoices(){
    voices.value = window.speechSynthesis.getVoices();
}

let selectedVoiceKey = ref(0);
let coords = ref({latitude: 0, longitude: 0});
function setCoords(){
    navigator.geolocation.getCurrentPosition((position) => {
        coords.value = position.coords;
    });
}

onMounted(() => {
    setCoords();
    setInterval(() => {
        setCoords();
    }, 30_000)
});

</script>
<template>
    <button class="button is-primary" @click="vibrate">Vibrate</button>
    <button class="button is-primary" @click="starwars">Starwars</button>
    <div class="field has-addons mt-3">
        <div class="control">
            <div class="select">
                <select v-model="selectedVoiceKey">
                    <option v-for="(voice,key) in voices" :value="key">{{ voice.name }}</option>
                </select>
            </div>
        </div>
        <div class="control is-expanded">
            <input class="input" v-model="text">
        </div>
        <div class="control">
            <button class="button is-primary" @click="speak">Speak</button>
        </div>
    </div>
    <Leaflet :lat="coords.latitude" :lng="coords.longitude" :zoom="18"></Leaflet>
</template>