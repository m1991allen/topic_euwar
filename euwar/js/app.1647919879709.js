(function(t){function e(e){for(var s,o,r=e[0],l=e[1],c=e[2],u=0,d=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,r=1;r<n.length;r++){var l=n[r];0!==a[l]&&(s=!1)}s&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var s={},a={app:0},i=[];function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=s,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"08e1":function(t,e,n){},"195a":function(t,e,n){"use strict";n("dc2c")},"1ede":function(t,e,n){t.exports=n.p+"img/logo_ftv.6439aed0.svg"},"208f":function(t,e,n){"use strict";n("08e1")},"266c":function(t,e,n){t.exports=n.p+"img/烏克蘭11歲男童.ad5494f8.jpg"},"2d4d":function(t,e,n){t.exports=n.p+"img/banner_mobile_768.3454b2fa.jpg"},3483:function(t,e,n){"use strict";n("d465")},"35f6":function(t,e,n){"use strict";n("cdd6")},"452c":function(t,e,n){},4634:function(t,e,n){},"522b":function(t,e,n){"use strict";n("c29b")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),a=n("ecee"),i=n("c074"),o=n("ad3d");a["c"].add(i["a"]),s["a"].component("font-awesome-icon",o["a"]);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("Banner"),n("Intro"),n("News"),n("SectionPhoto"),n("Section1"),n("Section2"),n("Section3"),n("SectionTw"),n("Video"),n("Addition"),n("Bottom"),n("Footer")],1)},l=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout_header"},[n("div",{staticClass:"progress"}),n("div",{staticClass:"layout_grid"},[n("div",[n("h5",[n("img",{attrs:{src:t.logo,loading:"lazy"}}),n("a",{attrs:{href:"https://www.ftvnews.com.tw/",target:"_blank"}},[n("span",[t._v(t._s(t.title))])])])]),n("div",[n("i",{staticClass:"fa-duotone fa-bars fa-2x",class:{"fa-bars":!t.isShow,"fa-stream":t.isShow},on:{click:t.showMenu}})])]),t.isShow?n("div",{staticClass:"layout_menu"},[n("ul",t._l(t.anchor,(function(e,s){return n("li",{key:s},[n("a",{attrs:{href:e.href}},[t._v(t._s(e.title))])])})),0)]):t._e()])},f=[],u={name:"Header",data:function(){return{title:"民視新聞網",logo:n("1ede"),isShow:!1,anchor:[{title:"最新消息",href:"#section_news"},{title:"戰地故事",href:"#section_photo"},{title:"俄烏情勢",href:"#section1"},{title:"美國介入",href:"#section2"},{title:"各國斡旋",href:"#section3"},{title:"台海影響",href:"#section_tw"},{title:"新聞直播",href:"#section_live"}]}},methods:{scroll:function(){var t=this;window.addEventListener("scroll",(function(){t.moveBar("black")}))},moveBar:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#0984e3",e=document.querySelector(".progress"),n=Math.ceil(Math.round(window.pageYOffset)/(document.body.scrollHeight-window.innerHeight)*100);e.style.width=n+"%",e.style.background=t},showMenu:function(){this.isShow=!this.isShow}},mounted:function(){this.scroll(),this.moveBar()}},d=u,w=(n("3483"),n("2877")),_=Object(w["a"])(d,c,f,!1,null,"11efd499",null),h=_.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout"},[n("h1",[t._v(t._s(t.title))]),t._m(0)])},v=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("picture",[s("source",{attrs:{srcset:n("2d4d"),media:"(max-width: 500px)"}}),s("source",{attrs:{srcset:n("8e77"),media:"(max-width: 768px)"}}),s("source",{attrs:{srcset:n("aaa5"),media:"(max-width: 1024px)"}}),s("img",{attrs:{src:n("fafd"),loading:"lazy"}})])}],g={name:"Intro",data:function(){return{title:"俄烏衝突 火線直擊"}}},m=g,b=(n("6dfe"),Object(w["a"])(m,p,v,!1,null,"0cdabde8",null)),y=b.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout"},[n("div",{staticClass:"layout_grid"},[n("p",[t._v(t._s(t.content_intro[0]))])]),t._m(0),n("div",{staticClass:"layout_grid"},[n("p",[t._v(t._s(t.content_gas[0]))]),n("p",[t._v(t._s(t.content_gas[1]))])]),t._m(1),n("div",{staticClass:"layout_grid"},[n("p",[t._v(t._s(t.content_internal[0]))]),n("p",[t._v(t._s(t.content_internal[1]))]),n("p",[t._v(t._s(t.content_internal[2]))]),n("p",[t._v(t._s(t.content_internal[3]))])]),n("hr")])},C=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"layout_grid"},[s("img",{attrs:{src:n("7b91"),alt:"北約成員國"}}),s("i",{staticClass:"fa-solid fa-triangle"},[s("span",[t._v(" 北約成員國")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"layout_grid"},[s("img",{attrs:{src:n("8e3f"),alt:"歐洲各國多依賴俄羅斯天然氣？"}}),s("i",{staticClass:"fa-solid fa-triangle"},[s("span",[t._v(" 歐洲各國多依賴俄羅斯天然氣？")])])])}],k={name:"Intro",data:function(){return{content_intro:["俄羅斯正式動武侵略烏克蘭，普丁繼2月21日簽署法令，承認烏克蘭東部「頓內次克」與「盧甘斯克」2個分離共和國的獨立地位，並下令進軍維和後，2月24日正式展開「特別軍事行動」，形同正式開戰。"],content_gas:["外界普遍認為，這場戰事導火線是烏克蘭爭取加入北約（NATO），遭到俄羅斯強烈反對。","由於北約勢力在1991年、蘇聯解體後迅速擴張，烏克蘭近年政治取向又轉向西方，俄羅斯因此擔憂烏克蘭若加入北約，其戰略緩衝帶將完全消除，西方軍事勢力會直抵家門，對俄羅斯造成直接性威脅，因此選擇不惜一戰。"],content_internal:["然而俄羅斯的行徑受到國際強烈抨擊，除了聯合國大會以壓倒性票數通過決議，譴責俄羅斯侵略烏克蘭，並要求莫斯科當局無條件撤軍，全球民主陣營領袖也提供烏克蘭武器，以及祭出多項經濟制裁。","其中，美國總統拜登（Joe Biden）針對俄羅斯經濟命脈「天然能源」下手，宣布停止進口俄國石油和其他能源，英國也表示將跟進，計畫在今年底逐步停止進口俄國能源。","相較於英、美兩大強國，接連對俄羅斯祭出強力制裁，一年有38%天然氣、25%石油自俄國進口的歐盟，現階段不敢貿然跟進，歐盟執委會副主席堤孟思（Frans Timmermans）甚至表示「這麼做對自身的傷害，比對普丁的傷害更大」。","不過，歐盟已在密切籌畫，今年內將俄羅斯進口天然氣總量減少3分之2，並預計在2030年之前，結束對俄羅斯供應的依賴。"]}}},x=k,T=(n("a6e1"),Object(w["a"])(x,I,C,!1,null,"c32878b6",null)),E=T.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout",attrs:{id:"section1"}},[n("div",{staticClass:"layout_grid"},[n("h2",[n("i",{staticClass:"fa-solid fa-swords"}),t._v(" "+t._s(t.title))]),t.newsInfo.length>0?n("div",{staticClass:"layout_grid_inner"},[n("div",[n("a",{attrs:{href:"https://www.ftvnews.com.tw/news/detail/"+t.newsInfo[0].ID,target:"blank"}},[n("div",{staticClass:"layout_img"},[n("img",{attrs:{src:t.newsInfo[0].Image,loading:"lazy"}})]),n("h3",[t._v(" "+t._s(t.newsInfo[0].Title)+" ")])])]),n("div",[n("a",{attrs:{href:"https://www.ftvnews.com.tw/news/detail/"+t.newsInfo[1].ID,target:"blank"}},[n("div",{staticClass:"layout_grid_inner_content"},[n("div",{staticClass:"layout_img_inner"},[n("img",{attrs:{src:t.newsInfo[1].Image,loading:"lazy"}})]),n("h4",[t._v(t._s(t.newsInfo[1].Title))])])]),n("a",{attrs:{href:"https://www.ftvnews.com.tw/news/detail/"+t.newsInfo[2].ID,target:"blank"}},[n("div",{staticClass:"layout_grid_inner_content"},[n("div",{staticClass:"layout_img_inner"},[n("img",{attrs:{src:t.newsInfo[2].Image,loading:"lazy"}})]),n("h4",[t._v(t._s(t.newsInfo[2].Title))])])]),n("a",{attrs:{href:"https://www.ftvnews.com.tw/news/detail/"+t.newsInfo[3].ID,target:"blank"}},[n("div",{staticClass:"layout_grid_inner_content"},[n("div",{staticClass:"layout_img_inner"},[n("img",{attrs:{src:t.newsInfo[3].Image,loading:"lazy"}})]),n("h4",[t._v(t._s(t.newsInfo[3].Title))])])]),t._m(0)])]):t._e(),t._m(1)])])},O=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"btn_more"},[n("a",{attrs:{href:"https://www.ftvnews.com.tw/tag/俄烏情勢/",target:"_blank"}},[t._v("更多新聞")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"iframe-container"},[n("iframe",{attrs:{width:"2032",height:"847",src:"https://www.youtube.com/embed/p6xeGTCACb0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])}],z=(n("d3b7"),n("159b"),{data:function(){return{title:"俄烏情勢",newsInfo:[]}},mounted:function(){var t=this;axios.get("https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=俄烏情勢&Page=1&sp=4").then((function(e){var n=e.data.ITEM;n.forEach((function(e){t.newsInfo.push(e)}))})).catch((function(t){console.log("error"+t)}))}}),S=z,$=(n("c07f"),Object(w["a"])(S,j,O,!1,null,"6051537a",null)),P=$.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout",attrs:{id:"section2"}},[n("div",{staticClass:"layout_grid"},[n("h2",[n("i",{staticClass:"fa-solid fa-swords"}),t._v(" "+t._s(t.title))]),t.newsInfo.length>0?n("div",{staticClass:"layout_grid_inner"},[n("div",{staticClass:"layout_sort"},[n("a",{attrs:{href:"https://www.ftvnews.com.tw/news/detail/"+t.newsInfo[1].ID,target:"blank"}},[n("div",{staticClass:"layout_grid_inner_content"},[n("div",{staticClass:"layout_img_inner"},[n("img",{attrs:{src:t.newsInfo[0].Image,loading:"lazy"}})]),n("h4",[t._v(t._s(t.newsInfo[0].Title))])])]),n("a",{attrs:{href:"https://www.ftvnews.com.tw/news/detail/"+t.newsInfo[2].ID,target:"blank"}},[n("div",{staticClass:"layout_grid_inner_content"},[n("div",{staticClass:"layout_img_inner"},[n("img",{attrs:{src:t.newsInfo[1].Image,loading:"lazy"}})]),n("h4",[t._v(t._s(t.newsInfo[1].Title))])])]),n("a",{attrs:{href:"https://www.ftvnews.com.tw/news/detail/"+t.newsInfo[3].ID,target:"blank"}},[n("div",{staticClass:"layout_grid_inner_content"},[n("div",{staticClass:"layout_img_inner"},[n("img",{attrs:{src:t.newsInfo[2].Image,loading:"lazy"}})]),n("h4",[t._v(t._s(t.newsInfo[2].Title))])])]),t._m(0)]),n("div",{staticClass:"layout_sort"},[n("a",{attrs:{href:"https://www.ftvnews.com.tw/news/detail/"+t.newsInfo[0].ID,target:"blank"}},[n("div",{staticClass:"layout_img"},[n("img",{attrs:{src:t.newsInfo[0].Image,loading:"lazy"}})]),n("h3",[t._v(" "+t._s(t.newsInfo[0].Title)+" ")])])])]):t._e()])])},D=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"btn_more"},[n("a",{attrs:{href:"https://www.ftvnews.com.tw/tag/俄烏/",target:"_blank"}},[t._v("更多新聞")])])}],F={data:function(){return{title:"美國介入",newsInfo:[]}},methods:{},mounted:function(){var t=this;axios.get("https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=美國介入&Page=1&sp=4").then((function(e){var n=e.data.ITEM;n.forEach((function(e){t.newsInfo.push(e)}))})).catch((function(t){console.log("error"+t)}))}},H=F,A=(n("60cc"),Object(w["a"])(H,M,D,!1,null,"85db0548",null)),N=A.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout",attrs:{id:"section3"}},[n("div",{staticClass:"layout_grid"},[n("h2",[n("i",{staticClass:"fa-solid fa-swords"}),t._v(" "+t._s(t.title))]),t.newsInfo.length>0?n("div",{staticClass:"layout_grid_inner"},[n("div",[n("a",{attrs:{href:"https://www.ftvnews.com.tw/news/detail/"+t.newsInfo[0].ID,target:"blank"}},[n("div",{staticClass:"layout_img"},[n("img",{attrs:{src:t.newsInfo[0].Image,loading:"lazy"}})]),n("h3",[t._v(" "+t._s(t.newsInfo[0].Title)+" ")])])]),n("div",[n("a",{attrs:{href:"https://www.ftvnews.com.tw/news/detail/"+t.newsInfo[1].ID,target:"blank"}},[n("div",{staticClass:"layout_grid_inner_content"},[n("div",{staticClass:"layout_img_inner"},[n("img",{attrs:{src:t.newsInfo[1].Image,loading:"lazy"}})]),n("h4",[t._v(t._s(t.newsInfo[1].Title))])])]),n("a",{attrs:{href:"https://www.ftvnews.com.tw/news/detail/"+t.newsInfo[2].ID,target:"blank"}},[n("div",{staticClass:"layout_grid_inner_content"},[n("div",{staticClass:"layout_img_inner"},[n("img",{attrs:{src:t.newsInfo[2].Image,loading:"lazy"}})]),n("h4",[t._v(t._s(t.newsInfo[2].Title))])])]),n("a",{attrs:{href:"https://www.ftvnews.com.tw/news/detail/"+t.newsInfo[3].ID,target:"blank"}},[n("div",{staticClass:"layout_grid_inner_content"},[n("div",{staticClass:"layout_img_inner"},[n("img",{attrs:{src:t.newsInfo[3].Image,loading:"lazy"}})]),n("h4",[t._v(t._s(t.newsInfo[3].Title))])])]),t._m(0)])]):t._e()])])},W=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"btn_more"},[n("a",{attrs:{href:"https://www.ftvnews.com.tw/tag/各國斡旋/",target:"_blank"}},[t._v("更多新聞")])])}],Y={data:function(){return{title:"各國斡旋",newsInfo:[]}},methods:{},mounted:function(){var t=this;axios.get("https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=各國斡旋&Page=1&sp=4").then((function(e){var n=e.data.ITEM;n.forEach((function(e){t.newsInfo.push(e)}))})).catch((function(t){console.log("error"+t)}))}},G=Y,L=(n("f361"),Object(w["a"])(G,B,W,!1,null,"3b2fd712",null)),q=L.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout",attrs:{id:"section_tw"}},[n("div",{staticClass:"layout_grid"},[n("h2",[n("i",{staticClass:"fa-solid fa-swords"}),t._v(" "+t._s(t.title))]),n("p",[t._v(t._s(t.content))]),n("div",[t.newsInfo.length>0?n("div",{staticClass:"layout_content"},[n("a",{attrs:{href:"https://www.ftvnews.com.tw/news/detail/"+t.newsInfo[0].ID,target:"blank"}},[n("div",{staticClass:"layout_grid_inner_content"},[n("div",{staticClass:"layout_img_inner"},[n("img",{attrs:{src:t.newsInfo[0].Image,loading:"lazy"}})]),n("h4",[t._v(t._s(t.newsInfo[0].Title))])])]),n("a",{attrs:{href:"https://www.ftvnews.com.tw/news/detail/"+t.newsInfo[1].ID,target:"blank"}},[n("div",{staticClass:"layout_grid_inner_content"},[n("div",{staticClass:"layout_img_inner"},[n("img",{attrs:{src:t.newsInfo[1].Image,loading:"lazy"}})]),n("h4",[t._v(t._s(t.newsInfo[1].Title))])])]),n("a",{attrs:{href:"https://www.ftvnews.com.tw/news/detail/"+t.newsInfo[2].ID,target:"blank"}},[n("div",{staticClass:"layout_grid_inner_content"},[n("div",{staticClass:"layout_img_inner"},[n("img",{attrs:{src:t.newsInfo[2].Image,loading:"lazy"}})]),n("h4",[t._v(t._s(t.newsInfo[2].Title))])])])]):t._e(),t._m(0)]),t._m(1)]),n("hr")])},U=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"btn_more"},[n("a",{attrs:{href:"https://www.ftvnews.com.tw/tag/台海影響/",target:"_blank"}},[t._v("更多新聞")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"iframe-container"},[n("iframe",{attrs:{width:"2032",height:"831",src:"https://www.youtube.com/embed/rIq-ENslsck",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])}],V={data:function(){return{title:"台海影響",content:"俄羅斯、烏克蘭開戰，儘管相隔遙遠，我國仍舊緊盯俄烏局勢發展，因為根據外媒報導，北京當局正觀察拜登政府會如何處理衝突，以作為其對台灣採取更具侵略性行動的指標。",newsInfo:[]}},mounted:function(){var t=this;axios.get("https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=台海影響&Page=1&sp=4").then((function(e){var n=e.data.ITEM;n.forEach((function(e){t.newsInfo.push(e)}))})).catch((function(t){console.log("error"+t)}))}},Q=V,R=(n("edd5"),Object(w["a"])(Q,J,U,!1,null,"4ef9fd64",null)),K=R.exports,X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout",attrs:{id:"section_photo"}},[n("div",{staticClass:"layout_grid"},[n("h2",[n("i",{staticClass:"fa-solid fa-swords"}),t._v(" "+t._s(t.title))]),n("div",{staticClass:"layout_inner"},t._l(t.photos,(function(e,s){return n("div",{key:s,staticClass:"layout_photo"},[n("img",{attrs:{src:e.img,alt:e.title}}),n("h3",[t._v(" "+t._s(e.title)+" "),n("i",{staticClass:"fa-solid fa-link",on:{click:function(n){return t.linkHandler(e.href)}}})]),n("div",{staticClass:"layout_content",domProps:{innerHTML:t._s(e.intro)}}),s===t.toggleModal?[n("div",{staticClass:"layout_content",domProps:{innerHTML:t._s(e.content)}})]:t._e(),n("button",{staticClass:"btn_more",on:{click:function(e){return t.moreHandler(s)}}},[t._v("看更多")])],2)})),0)]),n("hr")])},Z=[],tt={data:function(){return{title:"戰地故事",photos:[{title:"烏克蘭國民女兵戰死",img:n("d2f7"),href:"https://www.facebook.com/ftvnews53/photos/10159633188770901",intro:"\n                    <p>\n                        有「國民女兵」之稱的烏克蘭士兵Iryna Tsvila，在戰爭中不幸於基輔近郊陣亡殉國。直到生命的最後一刻，Tsvila都還心繫家鄉，在社群平台上向世界喊話，「誰願意來幫忙捍衛基輔」，成了她的遺言。\n                    </p>\n                    ",content:"\n                    <p>\n                        據了解，Tsvila育有5個小孩，過去的職業是老師，曾志願參與烏東頓巴斯的戰事，並將經歷寫成文章，為書籍《戰爭之聲》的作者之一。\n                    </p>\n                    <p>\n                        當俄烏戰事爆發，她主動回歸軍隊，想不到開戰第一天，卻在擊退俄軍裝甲部隊時，命喪炮火之下，讓當地人民感到相當不捨，尊稱Tsvila為「烏克蘭女英雄」。\n                    </p>\n                    ",isShow:!1},{title:"俄羅斯的良心",img:n("701d"),href:"https://www.ftvnews.com.tw/news/detail/2022315W0029",intro:"\n                    <p>\n                        俄羅斯入侵烏克蘭，俄國內部反戰聲浪不斷，一名女子在當地時間週一晚上，闖入俄羅斯官媒「第一頻道」電視台新聞直播現場，高舉反戰標語「俄國人反對戰爭」，更要俄羅斯人民別相信政府，「他們正在欺騙你們」。\n                    </p>\n                    ",content:"\n                    <p>\n                        官方火速將畫面切回俄羅斯遭到制裁的悲憤新聞，只留下女子持續抗議的背景音。事實上，這名抗議的反戰女子正是任職於「第一頻道」的編輯，奧賽亞尼柯娃（Marina Ovsyannikova）。\n                    </p>\n                    <p>\n                        奧賽亞尼柯娃行動前公布一段預錄的「自白影片」，她提到自己的父親是烏克蘭人，母親是俄羅斯人，他們從來就不是敵人，「過去幾年我任職於『第一頻道』，為克里姆林宮宣傳，對此我感到羞恥，我允許自己透過電視螢幕說謊，我曾默許讓俄國人被愚弄，對此我感到羞恥，終結這起瘋狂行徑，決定權掌握在你我手上」。\n                    </p>\n                    <p>\n                        奧賽亞尼柯娃呼籲俄羅斯民眾勇敢站出來、加入抗爭，她堅定表示「不必害怕！他們不能關押我們每一個人！」\n                    </p>\n                    ",isShow:!1},{title:"溫馨接送烏克蘭難民",img:n("59ba"),href:"https://www.facebook.com/ftvnews53/photos/10159649543535901",intro:"\n                    <p>\n                        俄羅斯對烏克蘭開戰，身為一個外國平民，你覺得自己可以怎麼幫上忙？來自西班牙的Héctor Pérez和他的朋友Paulo Ribeiro，一起做出了很好的示範──「自掏腰包開車載送難民」。\n                    </p>\n                    ",content:"\n                    <p>\n                        Pérez表示：「看到他們（俄軍）在小鎮上展開屠殺嚇到我了，然後我就決定要採取行動」。於是兩人開著兩台車，從西班牙的加利西亞一路開到了位於波蘭東南方，與烏克蘭相鄰的城鎮梅狄卡（Medyka），尋找想要前往西班牙的烏克蘭人。\n                    </p>\n                    <p>\n                        在這項援助行動中，對他們來說遇到最複雜的事情，就是與烏克蘭人的溝通，因為他們不會說烏克蘭語、俄語，而當地許多人甚至不會說英語。幸好後來透過會講西語的當地人幫助下，他們找到了9位需要搭車順路離開的烏克蘭人。\n                    </p>\n                    <p>\n                        兩人用4天的時間，開車來回跑了超過6400公里，大概是繞行台灣7圈的距離，也希望這麼做能夠引起其他人仿效。整趟路程花費約900歐元，Pérez受訪時認為，花大概200歐元就能救一條人命很值得，對於自己和朋友的善舉，他則表示：「你不用很有錢也能支持他們，你只需要有想幫忙的心」。\n                    </p>\n                    ",isShow:!1},{title:"令人敬佩的灰狼上校",img:n("fdd0"),href:"https://www.facebook.com/ftvnews53/photos/a.10150159841020901/10159653305820901/",intro:"\n                    <p>\n                        代號「灰狼」的烏克蘭空軍上校Oleksandr Oksanchenko，是當地最優秀的戰鬥機飛行員之一。面對俄羅斯入侵，Oksanchenko義無反顧加入保家衛國行列，卻不幸於2月25日戰死殉國。總統澤倫斯基日前追授「烏克蘭英雄」稱號，紀念勇敢的灰狼上校。\n                    </p>\n                    ",content:"\n                    <p>\n                        Oksanchenko飛行時數逾2000個小時，2013年到2018年間，擔任烏克蘭空軍「側衛」飛行表演隊成員，為國家的重要門面。歷年來也經常出席多項國際航空活動，是航空界十分有名的戰機特技飛行員。\n                    </p>\n                    <p>\n                        2018年Oksanchenko退役，但他仍自願留營培訓後輩；如今國家有難，Oksanchenko義無反顧申請重返現役，多次為國起飛，奮力在劣勢中與俄羅斯空軍交戰。其中在一場保衛首都的戰役中，Oksanchenko不幸於基輔上空被俄軍防空飛彈擊墜，在生命的最後仍堅守保護國家，傳奇一生就此劃下句點。\n                    </p>\n                    ",isShow:!1},{title:"11歲男孩獨自跨越烏克蘭",img:n("266c"),href:" https://www.ftvnews.com.tw/news/detail/2022306W0166",intro:"\n                    <p>\n                        俄烏戰亂，不少烏克蘭民眾紛紛收拾行囊逃離家園。而一名11歲的烏克蘭男童，僅帶著護照、背包，手上寫著電話號碼，就獨自跨過半個烏克蘭入境鄰國斯洛伐克，也被當地政府稱為「當晚最大的英雄」。\n                    </p>\n                    ",content:"\n                    <p>\n                        斯洛伐克內政部表示「志工發現後帶他到溫暖的地方，提供食物和飲料給他。孩子用他的笑容、無畏與值得成為真正英雄的決心，感動了所有人。感謝他手上號碼和護照中的一張紙，讓他能順利聯絡到親人，讓整個故事圓滿結束」。\n                    </p>\n                    ",isShow:!1},{title:"心痛撫屍的烏克蘭父親",img:n("cea6"),href:"https://www.ftvnews.com.tw/news/detail/2022304W0009",intro:"\n                    <p>\n                        俄羅斯入侵烏克蘭，戰事期間也不斷有平民傷亡。除了烏克蘭首都基輔遭受攻擊，位於烏克蘭南部的鎮港市馬里烏波爾（Mariupol）也遭俄軍不斷攻擊，現面臨斷水、斷電、沒糧食的慘況。\n                    </p>\n                    ",content:"\n                    <p>\n                        戰火逢寒冬，連暖氣也停工，當地婦女、孩童都安置到地下室，但還有許多來不及逃生的市民被轟炸身亡，許多身亡民眾也僅能用白布遮蓋，暫停放在地下室。\n                    </p>\n                    <p>\n                        一名烏克蘭駐地記者Ｍstyslav Chernov透過Instagram上傳一張讓人心碎的影片，畫面中擔架上覆蓋著白布，而1名中年男子坐在擔架旁痛哭，該記者表示，又一個馬里烏波爾的青少年在無情戰火下失去生命，而這名少年的父親只能對著少年屍體痛哭。\n                    </p>\n                    ",isShow:!1}],toggleModal:!1}},methods:{linkHandler:function(t){window.open(t)},moreHandler:function(t){t==this.toggleModal?this.toggleModal=!1:this.toggleModal=t}}},et=tt,nt=(n("522b"),Object(w["a"])(et,X,Z,!1,null,"a0b23340",null)),st=nt.exports,at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout",attrs:{id:"section_news"}},[n("div",{staticClass:"layout_grid"},[n("h2",[t._v(t._s(t.title))]),n("div",[t.newsInfo.length>0?n("div",{staticClass:"layout_content"},[n("a",{attrs:{href:"https://www.ftvnews.com.tw/news/detail/"+this.newsInfo[0].ID,target:"blank"}},[n("div",{staticClass:"layout_grid_inner_content"},[n("div",{staticClass:"layout_img_inner"},[n("img",{attrs:{src:t.newsInfo[0].Image,loading:"lazy"}})]),n("h4",[t._v(t._s(t.newsInfo[0].Title))])])]),n("a",{attrs:{href:"https://www.ftvnews.com.tw/news/detail/"+t.newsInfo[1].ID,target:"blank"}},[n("div",{staticClass:"layout_grid_inner_content"},[n("div",{staticClass:"layout_img_inner"},[n("img",{attrs:{src:t.newsInfo[1].Image,loading:"lazy"}})]),n("h4",[t._v(t._s(t.newsInfo[1].Title))])])]),n("a",{attrs:{href:"https://www.ftvnews.com.tw/news/detail/"+t.newsInfo[2].ID,target:"blank"}},[n("div",{staticClass:"layout_grid_inner_content"},[n("div",{staticClass:"layout_img_inner"},[n("img",{attrs:{src:t.newsInfo[2].Image,loading:"lazy"}})]),n("h4",[t._v(t._s(t.newsInfo[2].Title))])])]),n("a",{attrs:{href:"https://www.ftvnews.com.tw/news/detail/"+t.newsInfo[3].ID,target:"blank"}},[n("div",{staticClass:"layout_grid_inner_content"},[n("div",{staticClass:"layout_img_inner"},[n("img",{attrs:{src:t.newsInfo[3].Image,loading:"lazy"}})]),n("h4",[t._v(t._s(t.newsInfo[3].Title))])])]),n("a",{attrs:{href:"https://www.ftvnews.com.tw/news/detail/"+t.newsInfo[4].ID,target:"blank"}},[n("div",{staticClass:"layout_grid_inner_content"},[n("div",{staticClass:"layout_img_inner"},[n("img",{attrs:{src:t.newsInfo[4].Image,loading:"lazy"}})]),n("h4",[t._v(t._s(t.newsInfo[4].Title))])])]),n("a",{attrs:{href:"https://www.ftvnews.com.tw/news/detail/"+t.newsInfo[5].ID,target:"blank"}},[n("div",{staticClass:"layout_grid_inner_content"},[n("div",{staticClass:"layout_img_inner"},[n("img",{attrs:{src:t.newsInfo[5].Image,loading:"lazy"}})]),n("h4",[t._v(t._s(t.newsInfo[5].Title))])])])]):t._e(),t._m(0)])])])},it=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"btn_more"},[n("a",{attrs:{href:"https://www.ftvnews.com.tw/tag/俄烏衝突/",target:"_blank"}},[t._v("更多新聞")])])}],ot={data:function(){return{title:"最新消息",newsInfo:[]}},mounted:function(){var t=this;axios.get("https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=俄烏衝突&Page=1&sp=10").then((function(e){var n=e.data.ITEM;n.forEach((function(e){t.newsInfo.push(e)}))})).catch((function(t){console.log("error"+t)}))}},rt=ot,lt=(n("195a"),Object(w["a"])(rt,at,it,!1,null,"5305ce5f",null)),ct=lt.exports,ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout_addition",on:{scroll:t.scroll}},[n("div",{staticClass:"layout_grid"},[t._m(0),t._m(1),n("span",{attrs:{id:"social_link"},on:{click:t.getLocalUrl}})]),t.scrollY>100?n("div",[n("i",{staticClass:"fa-solid fa-square-arrow-up fa-3x",attrs:{id:"toTop"},on:{click:t.scrollTop}})]):t._e()])},ut=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:"https://social-plugins.line.me/lineit/share?url=https://www.ftvnews.com.tw/topics/euwar/",target:"_blank"}},[n("span",{attrs:{id:"social_line","data-href":"https://www.ftvnews.com.tw/topics/euwar/"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"fb-xfbml-parse-ignore",attrs:{target:"_blank",href:"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.ftvnews.com.tw%2Ftopics%2Feuwar%2F&src=sdkpreparse"}},[n("span",{attrs:{id:"social_facebook"}})])}],dt={data:function(){return{scrollY:""}},methods:{getLocalUrl:function(){var t=document.createElement("input"),e=window.location.href+"?utm_source=euwar&utm_medium=copybutton";document.body.appendChild(t),t.value=e,t.select(),document.execCommand("copy"),document.body.removeChild(t),alert("網址複製成功!")},scrollTop:function(){window.scrollTo({top:0,behavior:"smooth"})},scroll:function(){this.scrollY=window.scrollY}},created:function(){window.addEventListener("scroll",this.scroll)}},wt=dt,_t=(n("ddad"),Object(w["a"])(wt,ft,ut,!1,null,"27c4ef4c",null)),ht=_t.exports,pt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},vt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout_addition"},[n("div",{staticClass:"layout_bottom"},[n("a",{attrs:{href:"#section_news"}},[t._v("最新消息")]),n("a",{attrs:{href:"#section_tw"}},[t._v("台海影響")]),n("a",{attrs:{href:"#section_live"}},[t._v("新聞直播")])])])}],gt={},mt=gt,bt=(n("35f6"),Object(w["a"])(mt,pt,vt,!1,null,null,null)),yt=bt.exports,It=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout_footer"},[n("div",{staticClass:"layout_grid"},[n("p",[t._v(t._s(t.title))])])])},Ct=[],kt={name:"Header",data:function(){return{title:"Copyright © 2022 民視新聞網路部 社群中心"}}},xt=kt,Tt=(n("208f"),Object(w["a"])(xt,It,Ct,!1,null,"718c25d6",null)),Et=Tt.exports,jt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout",attrs:{id:"section_live"}},[n("div",{staticClass:"layout_grid"},[n("h2",[t._v(t._s(t.title))]),t._m(0)])])},Ot=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"iframe-container"},[n("iframe",{attrs:{width:"1677",height:"847",src:"https://www.youtube.com/embed/yguQ1SzPM5U",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])}],zt={name:"Intro",data:function(){return{title:"新聞直播"}}},St=zt,$t=(n("ddde"),Object(w["a"])(St,jt,Ot,!1,null,"6772493c",null)),Pt=$t.exports,Mt={name:"App",components:{Header:h,Banner:y,Intro:E,Section1:P,Section2:N,Section3:q,SectionTw:K,SectionPhoto:st,Video:Pt,News:ct,Addition:ht,Bottom:yt,Footer:Et}},Dt=Mt,Ft=(n("034f"),n("b0a0"),Object(w["a"])(Dt,r,l,!1,null,null,null)),Ht=Ft.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(Ht)}}).$mount("#app")},5943:function(t,e,n){},"59ba":function(t,e,n){t.exports=n.p+"img/溫馨接送烏克蘭難民.6e26a9e4.jpg"},"5e3b":function(t,e,n){},"60cc":function(t,e,n){"use strict";n("5e3b")},"6dfe":function(t,e,n){"use strict";n("94cb")},"701d":function(t,e,n){t.exports=n.p+"img/媒體良心.e487c4f7.jpg"},"7b91":function(t,e,n){t.exports=n.p+"img/map.824d3c2e.jpg"},"85ec":function(t,e,n){},"8e3f":function(t,e,n){t.exports=n.p+"img/map-gas.07555167.jpg"},"8e77":function(t,e,n){t.exports=n.p+"img/banner_tab_768.77ab0142.jpg"},"94cb":function(t,e,n){},a6e1:function(t,e,n){"use strict";n("4634")},aaa5:function(t,e,n){t.exports=n.p+"img/banner_tab_1024.4bdea8df.jpg"},ab1b:function(t,e,n){},b0a0:function(t,e,n){"use strict";n("452c")},c07f:function(t,e,n){"use strict";n("5943")},c29b:function(t,e,n){},cdd6:function(t,e,n){},cea6:function(t,e,n){t.exports=n.p+"img/烏克蘭父親.ba8185d6.jpg"},d2f7:function(t,e,n){t.exports=n.p+"img/國民女兵.ebbbf667.jpg"},d465:function(t,e,n){},d99e:function(t,e,n){},dc2c:function(t,e,n){},ddad:function(t,e,n){"use strict";n("d99e")},ddde:function(t,e,n){"use strict";n("feef")},edd5:function(t,e,n){"use strict";n("f9a0")},f361:function(t,e,n){"use strict";n("ab1b")},f9a0:function(t,e,n){},fafd:function(t,e,n){t.exports=n.p+"img/banner_web_1920.180c30e5.jpg"},fdd0:function(t,e,n){t.exports=n.p+"img/灰狼上校.8c37733e.jpg"},feef:function(t,e,n){}});
//# sourceMappingURL=app.1647919879709.js.map