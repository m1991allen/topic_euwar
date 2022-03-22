<template>
    <div class="layout">
        <div class="layout_grid">
            <p>{{ content_intro[0] }}</p>
        </div>
        <div class="layout_grid">
            <img src="../assets/map.jpg" alt="北約成員國" />
            <i class="fa-solid fa-triangle"> <span> 北約成員國</span></i>
        </div>
        <div class="layout_grid">
            <p>{{ content_gas[0] }}</p>
            <p>{{ content_gas[1] }}</p>
        </div>
        <div class="layout_grid">
            <img src="../assets/map-gas.jpg" alt="歐洲各國多依賴俄羅斯天然氣？" />
            <i class="fa-solid fa-triangle"> <span> 歐洲各國多依賴俄羅斯天然氣？</span></i>
        </div>
        <div class="layout_grid">
            <p>{{ content_internal[0] }}</p>
            <p>{{ content_internal[1] }}</p>
            <p>{{ content_internal[2] }}</p>
            <p>{{ content_internal[3] }}</p>
        </div>
        <hr />
    </div>
</template>

<script>
export default {
    name: 'Intro',
    data() {
        return {
            // 背景
            content_intro: [
                `俄羅斯正式動武侵略烏克蘭，普丁繼2月21日簽署法令，承認烏克蘭東部「頓內次克」與「盧甘斯克」2個分離共和國的獨立地位，並下令進軍維和後，2月24日正式展開「特別軍事行動」，形同正式開戰。`,
            ],

            // 天然氣
            content_gas: [
                `外界普遍認為，這場戰事導火線是烏克蘭爭取加入北約（NATO），遭到俄羅斯強烈反對。`,

                `由於北約勢力在1991年、蘇聯解體後迅速擴張，烏克蘭近年政治取向又轉向西方，俄羅斯因此擔憂烏克蘭若加入北約，其戰略緩衝帶將完全消除，西方軍事勢力會直抵家門，對俄羅斯造成直接性威脅，因此選擇不惜一戰。`,
            ],

            // 各國
            content_internal: [
                `然而俄羅斯的行徑受到國際強烈抨擊，除了聯合國大會以壓倒性票數通過決議，譴責俄羅斯侵略烏克蘭，並要求莫斯科當局無條件撤軍，全球民主陣營領袖也提供烏克蘭武器，以及祭出多項經濟制裁。`,

                `其中，美國總統拜登（Joe Biden）針對俄羅斯經濟命脈「天然能源」下手，宣布停止進口俄國石油和其他能源，英國也表示將跟進，計畫在今年底逐步停止進口俄國能源。`,

                `相較於英、美兩大強國，接連對俄羅斯祭出強力制裁，一年有38%天然氣、25%石油自俄國進口的歐盟，現階段不敢貿然跟進，歐盟執委會副主席堤孟思（Frans Timmermans）甚至表示「這麼做對自身的傷害，比對普丁的傷害更大」。`,

                `不過，歐盟已在密切籌畫，今年內將俄羅斯進口天然氣總量減少3分之2，並預計在2030年之前，結束對俄羅斯供應的依賴。`,
            ],
        }
    },
}
</script>

<style scoped>
picture {
    max-width: 1000px;
    max-height: auto;

    min-height: 260px;
    max-width: 1000px;
}
img {
    margin-bottom: 1rem;
    width: 100%;
    min-height: 300px;
    box-shadow: 1px 2px 8px black;
}
.layout {
    background-color: rgb(52, 52, 52);
    padding: 3rem 0;
    color: white;
    width: 100%;
    min-height: 300px;
}

.layout p {
    text-align: left;
}

.layout_grid {
    grid-template-columns: 1fr;
    padding: 1rem;
    margin-bottom: 1.2rem;
    text-align: left;
    min-height: 200px;
}

.layout_grid p {
    max-width: 600px;
    padding: 1rem 0;
    margin: auto;
}

.layout_grid img {
    width: 70%;
    height: auto;
    margin: 1rem auto;
}

@media screen and (max-width: 500px) {
    .layout_grid img {
        width: 100%;
    }
}

.fa-triangle {
    color: white;
    text-align: center;
}

/* 漢堡選單 */

.layout_grid div:nth-child(2) {
    text-align: right;
}

.fa-bars {
    font-size: 2rem;
}
</style>
