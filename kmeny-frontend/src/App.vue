<template>
    <div class="flex flex-col min-h-0">
        <h1 class="bg-black flex-0 text-white">
            PLS SHOW CUBE
        </h1>
        <three-cube class="flex flex-1" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ThreeCube from './components/ThreeCube.vue';

export default defineComponent({
    components: { ThreeCube },
    name: 'App',
    data: () => ({}),
});
</script>

<style>
body,
html {
    margin: 0;
}
canvas {
    display: block;
}
</style>
