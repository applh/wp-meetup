<template>
    <footer  class="text-right absolute bottom-0 right-2 p-2">
        <div v-if="$slidev.nav.currentLayout !== 'cover'">
            {{ $slidev.nav.currentPage }} / {{ $slidev.nav.total }}
        </div>
    </footer>

</template>