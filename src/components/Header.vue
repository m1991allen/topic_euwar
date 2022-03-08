<template>
    <div class="layout_header">
        <div class="progress"></div>
        <div class="layout_grid">
            <div>
                <h5>
                    <img :src="logo" loading="lazy" />
                    <span>{{ title }}</span>
                </h5>
            </div>
            <div>
                <i
                    @click="showMenu"
                    class="fa-duotone fa-bars fa-2x"
                    :class="{ 'fa-bars': !isShow, 'fa-stream': isShow }"
                ></i>
            </div>
        </div>
        <div class="layout_menu" v-if="isShow">
            <ul>
                <li>
                    <a href="#section_news"> 最新消息</a>
                </li>
                <li>
                    <a href="#section1"> 俄烏情勢</a>
                </li>
                <li>
                    <a href="#section2"> 美國介入</a>
                </li>
                <li>
                    <a href="#section3"> 各國斡旋</a>
                </li>
                <li>
                    <a href="#section_tw"> 台海影響</a>
                </li>
                <li>
                    <a href="#section_live"> 新聞直播</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            title: `民視新聞網`,
            logo: require('../assets/logo_ftv.svg'),
            isShow: false,
        }
    },

    methods: {
        scroll() {
            window.addEventListener('scroll', () => {
                this.moveBar('black')
            })
        },

        moveBar(color = '#0984e3') {
            let bar = document.querySelector('.progress')
            let w = Math.ceil(
                (Math.round(window.pageYOffset) / (document.body.scrollHeight - window.innerHeight)) * 100
            )
            bar.style.width = w + '%'
            bar.style.background = color
        },

        showMenu() {
            this.isShow = !this.isShow
        },
    },
    mounted() {
        this.scroll()
        this.moveBar()
    },
}
</script>

<style scoped>
.layout_header {
    background-color: #fffffff5;
    position: fixed;
    width: 100%;
    min-height: 60px;
    box-shadow: 0px 2px 10px #1a1e30;
    z-index: 9999;
}

.layout_grid {
    grid-template-columns: 9fr 1fr;
    padding: 1rem;
}

.layout_menu ul li {
    padding: 1rem 0;
}

h5 {
    font-size: 1.8rem;
    text-align: left;
    cursor: default;
    user-select: none;
    display: flex;
    align-items: center;
}

h5 span {
    padding: 0 1rem;
}

h5 img {
    width: 32px;
    height: 32px;
}

a:hover {
    background-color: #525a7d;
    padding: 1rem;
    color: white;
}

/* 進度條 */
.progress {
    position: fixed;
    bottom: 1px;
    width: 0.5%;
    height: 10px;
    z-index: 999;
}

/* 漢堡選單 */
.layout_grid div:nth-child(2) {
    text-align: right;
}

.fa-duotone {
    width: 32px;
    height: 32px;
    width: 30px;
}
</style>
