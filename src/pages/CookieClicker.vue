<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import BuildingButton from '../components/BuildingButton.vue';

const cookies = ref(0);
const cps = ref(0);

const isBouncing = ref(false);

const buildings = ref([
  { id: 1, name: 'Cursor',  icon: '👆🏻', cps: 0.1, price: 15,  count: 0 },
  { id: 2, name: 'Grandma', icon: '👵🏻', cps: 1,   price: 100, count: 0 },
]);

const cookiesDisplay = computed(() => Number(cookies.value.toFixed(1)));
const cpsDisplay     = computed(() => Number(cps.value.toFixed(1)));

let intervalId = null;

onMounted(() => {
  intervalId = setInterval(() => {
    cookies.value += cps.value;
  }, 1000);
});

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);
});

function clickCookie() {
  cookies.value++;

  isBouncing.value = true;
  setTimeout(() => {
    isBouncing.value = false;
  }, 200);
}

function buyBuilding(building) {
  if (cookies.value >= building.price) {
    cookies.value -= building.price;
    building.count++;
    cps.value += building.cps;
    building.price = Math.round(building.price * 1.15); // +15% iga ostuga
  }
}
</script>

<template>
  <div class="columns">

    <div class="column has-background-primary has-text-centered">
      <h1 class="title is-3">{{ cookiesDisplay }} cookies!</h1>
      <h3 class="subtitle is-5">per second: {{ cpsDisplay }}</h3>

      <div @click="clickCookie" style="cursor: pointer;">
        <img
          :class="['cookie-img', { bounce: isBouncing }]"
          src="https://png.pngtree.com/png-vector/20250425/ourmid/pngtree-chocolate-chip-cookie-icon-white-background-png-image_16100260.png"
          alt="Cookie"
          style="max-width: 250px;"
        />
        <p>(klikiga küpsise peale!)</p>
      </div>
    </div>

    <div class="column has-background-warning has-text-centered">
      <h2 class="title is-4">Info</h2>
      <p>Iga ostuga läheb hind 15% kallimaks.</p>
    </div>

    <div class="column has-background-info">
      <h2 class="title is-4">Buildings</h2>

      <BuildingButton
        v-for="building in buildings"
        :key="building.id"
        :building="building"
        :disabled="cookies < building.price"
        @click="buyBuilding(building)"
      />
    </div>
  </div>
</template>

<style>

.cookie-img {
  transition: transform 0.2s ease;
}

.cookie-img.bounce {
  transform: translateY(-20px) scale(1.05);
}
</style>
