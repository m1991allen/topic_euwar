<template>
    <div class="layout_footer">
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
.layout_footer {
    background-color: rgb(132, 179, 215);
    height: 130px;
}

p {
    font-size: 1rem;
}

.layout_grid {
    grid-template-columns: 1fr;
    padding: 1rem;
    margin-bottom: 4rem;
}
</style>
