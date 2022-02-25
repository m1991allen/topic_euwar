<template>
    <div class="layout" id="section_live">
        <div class="layout_grid">
            <h2>{{ title }}</h2>
            <div class="iframe-container">
                <iframe
                    width="1314"
                    height="748"
                    src="https://www.youtube.com/embed/XGEmg3vhrzU"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Intro',
    data() {
        return {
            title: `新聞直播`,
        }
    },
}
</script>

<style scoped>
.layout {
    background-color: rgb(52, 52, 52);
    padding: 3rem 0;
    color: white;
}

.layout p {
    text-align: left;
}

.layout_grid {
    grid-template-columns: 1fr;
    padding: 1rem;
    text-align: left;
}

.layout_grid p {
    max-width: 600px;
    padding: 1rem 0;
    margin: auto;
}

/* 漢堡選單 */

.layout_grid div:nth-child(2) {
    text-align: right;
}

.fa-bars {
    font-size: 2rem;
}
</style>
