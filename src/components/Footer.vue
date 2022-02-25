<template>
    <div class="layout">
        <div class="layout_grid">
            <p>{{ title }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            title: `Copyright © 2022 民視新聞網路部 社群中心`,
        }
    },
}
</script>

<style scoped>
p {
    font-size: 1rem;
}

.layout {
    background-color: rgb(132, 179, 215);
}
.layout_grid {
    grid-template-columns: 1fr;
    padding: 1rem;
    margin-bottom: 4rem;
}
</style>
