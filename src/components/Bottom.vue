<template>
    <div class="layout_addition">
        <div class="layout_bottom">
            <a href="#section_news">最新消息</a>
            <a href="#section_tw">台海影響</a>
            <a href="#section_live">新聞直播</a>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style>
.layout_addition {
    height: 100px;
}

.layout_bottom {
    display: flex;
    position: fixed;
    bottom: 0.5rem;
    padding: 1rem 0;
    background-color: white;
    z-index: 999;
    width: 100%;
    border: 1px solid;
    height: 20px;
}
.layout_bottom a {
    width: 33.33%;
    display: block;
}

.layout_bottom a:nth-child(1) {
    border-right: 1px solid;
}

.layout_bottom a:nth-child(2) {
    border-right: 1px solid;
}
</style>
