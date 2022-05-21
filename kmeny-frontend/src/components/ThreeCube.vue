<template>
    <Renderer ref="renderer" antialias :orbit-ctrl="{ enableDamping: true }" :resize="true">
        <Camera :position="cameraPos" />
        <Scene>
            <PointLight :position="{ y: 100, z: 200 }" />
            <Box ref="box" :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }">
                <LambertMaterial />
            </Box>
        </Scene>
    </Renderer>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import {
    Box,
    Camera,
    LambertMaterial,
    MeshPublicInterface,
    PointLight,
    Renderer,
    RendererPublicInterface,
    Scene,
} from 'troisjs';

const cameraPos = reactive({ z: 5 });

const renderer = ref(null as null | RendererPublicInterface);
const box = ref(null as null | MeshPublicInterface);

onMounted(() => {
    if (renderer.value && box.value) {
        renderer.value.onBeforeRender(() => {
            box.value!.mesh!.rotation.x += 0.01;
        });
    }
});
</script>
