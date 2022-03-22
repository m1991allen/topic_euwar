<template>
    <div class="layout">
        <h1>{{ title }}</h1>
        <picture>
            <source srcset="../assets/banner_mobile_768.jpg" media="(max-width: 500px)" />
            <source srcset="../assets/banner_tab_768.jpg" media="(max-width: 768px)" />
            <source srcset="../assets/banner_tab_1024.jpg" media="(max-width: 1024px)" />
            <img src="../assets/banner_web_1920.jpg" loading="lazy" />
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
.layout {
    width: 100%;
    min-height: 200px;
}

img {
    pointer-events: none;
    margin-top: 4rem;
}

h1 {
    position: absolute;
    opacity: 0;
}
</style>
