<template>
	<Renderer ref="renderer" antialias :orbit-ctrl="{ enableDamping: true }" resize="window">
		<Camera :position="cameraPos" />
		<Scene>
			<PointLight :position="{ y: 100, z: 200 }" />
			<Box ref="box" :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }">
				<LambertMaterial />
			</Box>
		</Scene>
	</Renderer>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import {
	Box,
	Camera,
	LambertMaterial,
	MeshPublicInterface,
	PointLight,
	Renderer,
	RendererPublicInterface,
	Scene,
} from "troisjs"

export default defineComponent({
    name: 'ThreeCube',
	components: { Box, Camera, LambertMaterial, PointLight, Renderer, Scene },
    data: () => ({
        cameraPos: { z: 5 }
    }),
	mounted() {
		const renderer = this.$refs.renderer as RendererPublicInterface;
		const box = this.$refs.box as MeshPublicInterface;
		if (renderer && box) {
			renderer.onBeforeRender(() => {
				box.mesh.rotation.x += 0.01
			})
		}
	},
})
</script>
