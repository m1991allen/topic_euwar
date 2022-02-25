<template>
    <div class="layout" id="section_news">
        <div class="layout_grid">
            <h2>{{ title }}</h2>
            <div>
                <div class="layout_content">
                    <a :href="'https://www.ftvnews.com.tw/news/detail/' + newsInfo[1].ID" target="blank">
                        <div class="layout_grid_inner_content">
                            <div class="layout_img_inner">
                                <img :src="newsInfo[1].Image" />
                            </div>
                            <h4>{{ newsInfo[1].Title }}</h4>
                        </div>
                    </a>
                    <a :href="'https://www.ftvnews.com.tw/news/detail/' + newsInfo[2].ID" target="blank">
                        <div class="layout_grid_inner_content">
                            <div class="layout_img_inner">
                                <img :src="newsInfo[2].Image" />
                            </div>
                            <h4>{{ newsInfo[2].Title }}</h4>
                        </div>
                    </a>
                    <a :href="'https://www.ftvnews.com.tw/news/detail/' + newsInfo[3].ID" target="blank">
                        <div class="layout_grid_inner_content">
                            <div class="layout_img_inner">
                                <img :src="newsInfo[3].Image" />
                            </div>
                            <h4>{{ newsInfo[3].Title }}</h4>
                        </div>
                    </a>
                    <a :href="'https://www.ftvnews.com.tw/news/detail/' + newsInfo[4].ID" target="blank">
                        <div class="layout_grid_inner_content">
                            <div class="layout_img_inner">
                                <img :src="newsInfo[4].Image" />
                            </div>
                            <h4>{{ newsInfo[4].Title }}</h4>
                        </div>
                    </a>
                    <a :href="'https://www.ftvnews.com.tw/news/detail/' + newsInfo[5].ID" target="blank">
                        <div class="layout_grid_inner_content">
                            <div class="layout_img_inner">
                                <img :src="newsInfo[5].Image" />
                            </div>
                            <h4>{{ newsInfo[5].Title }}</h4>
                        </div>
                    </a>
                    <a :href="'https://www.ftvnews.com.tw/news/detail/' + newsInfo[6].ID" target="blank">
                        <div class="layout_grid_inner_content">
                            <div class="layout_img_inner">
                                <img :src="newsInfo[6].Image" />
                            </div>
                            <h4>{{ newsInfo[6].Title }}</h4>
                        </div>
                    </a>
                </div>

                <div class="btn_more">
                    <a href="https://www.ftvnews.com.tw/tag/俄烏衝突/" target="_blank">更多新聞</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '最新消息',
            newsInfo: [],
        }
    },

    mounted() {
        setTimeout(() => {
            // eslint-disable-next-line no-undef
            axios
                .get('https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=俄烏衝突&Page=1&sp=10')
                .then((response) => {
                    // console.log(response)
                    let data = response.data.ITEM
                    data.forEach((item) => {
                        this.newsInfo.push(item)
                    })
                })
                .catch((error) => {
                    console.log('error' + error)
                })
        }, 1000)
    },
}
</script>

<style scoped>
h4 {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 30px;
    max-height: 70px;
    padding: 0 0.3rem;
}

.layout_grid div div:nth-last-child(1) a {
    display: inline;
    padding: 0.3rem;
    border: 1px solid;
}

.layout_grid p {
    max-width: 600px;
    margin: 1rem auto;
}

.layout_grid {
    margin: 1rem auto;
}

.layout_content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
    margin: 1rem 0;
}

@media screen and (max-width: 1024px) {
    .layout_content {
        grid-template-columns: 1fr 1fr;
    }
}

@media screen and (max-width: 768px) {
    .layout_content {
        grid-template-columns: 1fr;
    }
}

.layout_content .layout_img_inner {
    height: 170px;
    overflow-y: hidden;
}

img {
    width: 100%;
}
</style>
