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
            <picture>
                <img src="../assets/negotiation.jpg" alt="烏俄首度談判" loading="lazy" />
            </picture>
            <div></div>
            <p><i class="fa-solid fa-triangle"></i> 烏俄首度談判</p>

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
                `俄羅斯正式動武侵略烏克蘭，普丁繼2月21日簽署法令，承認烏克蘭東部「頓內次克」與「盧甘斯克」2個分離共和國的獨立地位，並下令進軍維和後，24日正式展開「特別軍事行動」形同正式開戰。`,
                `綜合外媒報導，俄羅斯不只從烏東進攻，而是從烏克蘭邊境各點「全面攻擊」，包括烏克蘭首都基輔（Kyiv）、第二大城哈爾基夫（Kharkiv）、重要貿易港口敖德薩（Odesa）等城市都遭到砲擊，烏克蘭總統澤倫斯基（Volodymyr Zelenskiy）宣布，全國進入戒嚴時期，並喊話「會死守首都」。`,
                `對此，全球民主陣營領袖同時發聲譴責俄羅斯，並祭出多項制裁，也提供烏克蘭武器，幫助其加強國防、捍衛自己的國家。`,
            ],

            // 首度談判
            content_twoCountry: [
                `俄羅斯展開軍事行動後，除了對烏克蘭發動大規模空襲，也從「北東南」三方陸路大舉入侵，包括首都基輔（Kyiv）、第二大城哈爾科夫（Kharkiv）、重要貿易港口敖德薩（Odesa）等城市都遭受攻擊。`,
                `面對俄羅斯砲火，烏克蘭堅強抵禦，讓俄軍至今未能攻下基輔，雙方也在2月28日、於白俄羅斯與烏克蘭邊境的普里皮亞季河（Pripyat River）附近，展開首度談判。這場會談總共進行5小時，但會議並沒有重大進展，雙方將擇期於波蘭、白俄邊界舉行第二回合談判。`,
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
