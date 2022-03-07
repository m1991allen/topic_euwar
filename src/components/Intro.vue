<template>
    <div class="layout">
        <div class="layout_grid">
            <p>{{ content_intro[0] }}</p>
            <p>{{ content_intro[1] }}</p>
            <p>{{ content_intro[2] }}</p>
        </div>
        <hr />
        <div class="layout_grid">
            <picture>
                <img src="../assets/map.jpg" alt="頓內次克（Donetsk）、盧甘斯克（Luhansk）" loading="lazy"
            /></picture>
            <p><i class="fa-solid fa-triangle"></i> 頓內次克（Donetsk）、盧甘斯克（Luhansk）</p>
            <p>{{ content_twoCountry[0] }}</p>
            <p>{{ content_twoCountry[1] }}</p>
        </div>
        <hr />

        <div class="layout_grid">
            <picture>
                <img src="../assets/map_gas.jpg" alt="北溪2號天然氣管線" loading="lazy" />
            </picture>
            <p><i class="fa-solid fa-triangle"></i> 北溪2號天然氣管線</p>
            <p>{{ content_issue[0] }}</p>
            <p>{{ content_issue[1] }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Intro',
    data() {
        return {
            // 背景
            content_intro: [
                `俄羅斯正式動武侵略烏克蘭，蒲亭繼2月21日簽署法令，承認烏克蘭東部「頓內次克」與「盧甘斯克」2個分離共和國的獨立地位，並下令進軍維和後，24日正式展開「特別軍事行動」形同正式開戰。`,
                `綜合外媒報導，俄羅斯不只從烏東進攻，而是從烏克蘭邊境各點「全面攻擊」，包括烏克蘭首都基輔（Kyiv）、第二大城哈爾基夫（Kharkiv）、重要貿易港口敖德薩（Odesa）等城市都遭到砲擊，烏克蘭總統澤倫斯基（Volodymyr Zelenskiy）宣布，全國進入戒嚴時期，並喊話「會死守首都」。`,
                `對此，全球民主陣營領袖同時發聲譴責俄羅斯，並祭出多項制裁，也提供烏克蘭武器，幫助其加強國防、捍衛自己的國家。`,
            ],

            // 二國
            content_twoCountry: [
                `頓內次克（Donetsk）、盧甘斯克（Luhansk）位於烏克蘭東部，靠近俄羅斯邊界，又被合稱頓巴斯（Donbass）。該地區劃分為烏克蘭政府控制區，以及分離主義份子控制區，人口約360萬人，其中大多數說俄語，主要產業為煤礦和鋼鐵生產。`,
                `俄羅斯於2014年兼併克里米亞後，這兩個地區的分離主義分子掌握當地政權，並在公投後自行宣布獨立，但未獲國際社會承認。如今俄羅斯不但承認其地位，更宣布建交，被國際社會認定是入侵烏克蘭的開端。`,
            ],

            //天然氣
            content_issue: [
                `俄羅斯承認烏東2地區獨立地位後，歐美各國紛紛祭出制裁，德國方面也已經中止「北溪2號天然氣管線 （Nord Stream 2）」的最終審核程序。`,
                `由於俄羅斯一直想提高對於歐洲天然氣的供應量，因此希望藉由海底天然氣管線，減少依賴需要通過波蘭、烏克蘭的陸上管道。美國、英國、波蘭和烏克蘭則擔憂北溪2號啟用後，會擴大俄羅斯能源控制權，因此一直強力反對修建。`,
            ],
        }
    },
}
</script>

<style scoped>
picture {
    max-width: 1000px;
    max-height: auto;
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
    min-height: 300px;
}

.layout_grid p {
    max-width: 600px;
    padding: 1rem 0;
    margin: auto;
}
.fa-triangle {
    color: white;
}

/* 漢堡選單 */

.layout_grid div:nth-child(2) {
    text-align: right;
}

.fa-bars {
    font-size: 2rem;
}
</style>
