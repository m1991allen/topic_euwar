<template>
    <div class="layout">
        <h1>{{ title }}</h1>
        <div class="banner"></div>
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
