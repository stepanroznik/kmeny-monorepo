<template>
	<div>
		<h1>
			THE CUBE
		</h1>
		<three-cube />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import ThreeCube from "./components/ThreeCube.vue"

export default defineComponent({
	components: { ThreeCube },
	name: 'App',
    data: () => ({}),
})
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
