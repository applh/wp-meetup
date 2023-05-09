<script setup>
// define Props
import { ref } from 'vue'
const props = defineProps({
    keywords: {
        default: 'nature'
    },
})

// will be mounted to the img tag
let img = ref(null)

let rando = Math.floor(Math.random() * 10000)
let src = `https://source.unsplash.com/random/600x800?${props.keywords}=${rando}`

</script>

<template>
    <div>
        <img ref="img" class="w-full" :src="src" alt="random image" />
    </div>
</template>