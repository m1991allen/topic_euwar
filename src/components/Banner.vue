<template>
    <div class="layout">
        <h1>{{ title }}</h1>
        <picture>
            <source srcset="../assets/banner_mobile_768.png" media="(max-width: 768px)" />
            <source srcset="../assets/banner_tab_1024.png" media="(max-width: 1024px)" />
            <img src="../assets/banner_web_1920.png" loading="lazy" />
        </picture>
        <!-- <div class="banner"></div> -->
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

.banner {
    background-image: url('../assets/banner.png');
    min-height: 700px;
    width: 100%;
    background-size: cover;
    background-position: center;
}

/* @media screen and (max-width: 1024px) {
    .banner {
        background-image: url('../assets/banner_tab_1024.png');
    }
}

@media screen and (max-width: 768px) {
    .banner {
        background-image: url('../assets/banner_mobile_768.png');
    }
} */

h1 {
    position: absolute;
    opacity: 0;
}
</style>
