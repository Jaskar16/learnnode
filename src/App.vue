<script setup>
import RouterTabs from './components/RouterTabs.vue';



</script>
<template>
    <RouterTabs></RouterTabs>
    <div class="container mt-3">
        <div class="content">
            <Suspense>
                <RouterView></RouterView>
            </Suspense>
        </div>
    </div>
</template>