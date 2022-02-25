<template>
    <div class="layout">
        <h1>{{ title }}</h1>
        <picture>
            <source srcset="../assets/banner_mobile_768.png" media="(max-width: 768px)" />
            <source srcset="../assets/banner_tab_1024.png" media="(max-width: 1024px)" />
            <img src="../assets/banner_web_1920.png" />
        </picture>
    </div>
</template>

<script>
export default {
    name: 'Intro',
    data() {
        return {
            title: `俄烏衝突 火線直擊`,
        }
    },
}
</script>

<style scoped>
img {
    max-width: 100%;
    pointer-events: none;
    margin-top: 4rem;
}

h1 {
    position: absolute;
    opacity: 0;
}
</style>
