(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{294:function(t,e,o){var content=o(298);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(14).default)("4f4aef1d",content,!0,{sourceMap:!1})},297:function(t,e,o){"use strict";var n=o(294);o.n(n).a},298:function(t,e,o){(e=o(13)(!1)).push([t.i,".source-copy .v-icon{position:absolute;right:0;z-index:4}.source-github .v-icon{position:absolute}",""]),t.exports=e},299:function(t,e,o){"use strict";o(184),o(120),o(304),o(305);var n=o(306),r=o.n(n);var c={props:["src","link"],components:{Prism:function(){return o.e(16).then(o.t.bind(null,363,7))}},data:function(){return{copied:!1,source_code:""}},methods:{copySource:function(){var element;(element=this.$el.querySelector("pre")).setAttribute("contenteditable","true"),element.focus(),document.execCommand("selectAll",!1),document.execCommand("copy"),element.setAttribute("contenteditable","false")},openSource:function(){open(this.link,"_blank")}},mounted:function(){var t=this;r.a.get(this.src).then((function(e){return t.source_code=e.data}))}},l=(o(297),o(67)),_=o(94),h=o.n(_),d=o(359),m=o(137),component=Object(l.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-card",{staticClass:"source-card",attrs:{outlined:"",color:"#2d2d2d"}},[e("div",{staticClass:"source-copy"},[e("v-icon",{attrs:{title:"Copy","aria-label":"Copy",size:"25",color:"white"},on:{click:this.copySource}},[this._v("\n      mdi-content-copy\n    ")])],1),this._v(" "),e("div",{staticClass:"source-github"},[e("v-icon",{attrs:{title:"View on GitHub","aria-label":"View on GitHub",color:"white",size:"25"},on:{click:this.openSource}},[this._v(" \n      mdi-github \n    ")])],1),this._v(" "),e("prism",{attrs:{language:"cpp",code:this.source_code}})],1)}),[],!1,null,null,null);e.a=component.exports;h()(component,{VCard:d.a,VIcon:m.a})},313:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"ja":{"welcome":"ようこそ〜！","first_description":"このサイトはくらげ〜の競プロ用のライブラリです．僕が出てないコンテストなら自由につかって大丈夫ですw  使うときは下のライセンスを見てください．","use_site":"このサイトの使い方","use_site_description":"このサイトはとてもシンプルです．左側のナビゲーションから見たいデータ構造やアルゴリズムなどを選択すると表示されます！！画期的！右側のナビゲーションは工事中です．予定は右のナビゲーションを見てください．","use_site_description_2":"コードはGitHubのLibraryレポジトリのmasterブランチのコードそのままですが，このページの説明を更新していない可能性があります．（ライブラリページの方が更新が遅いと思う，気まぐれに更新してるから）","information":"情報","my_twitter":"私のTwitter","page_repo":"このページのリポジトリ","lib_repo":"ライブラリのリポジトリ","license":"ライセンス","aboue_page":"ライブラリページに関して","page_license_description":"このページに関しては現時点では何も考えていないです．","about_library":"ライブラリについて","library_license_description":"たくさんVerifyが無いやつはバグってるかもしれないけど，自由に使って構いません〜．僕がコンテストに出ても問題ないです．ただ，使うときは下記の著作権表記をお願いします．","index_classification":"各分類の説明","algorithms":[{"classification_name":"データ構造","description":"そのままですね，標準ライブラリには無い，高速に扱えるデータ構造を分類しています．"},{"classification_name":"グラフ","description":"グラフ問題を扱うものを分類しています．将来的には木に対する問題は別で分類するかもしれません．"},{"classification_name":"数学","description":"えー，数学です．"},{"classification_name":"幾何","description":"うん，幾何ですね．代数も入るかも(代数問題知らない)"},{"classification_name":"カスタム","description":"あまり使わないデータ構造やアルゴリズム等をここに分類しています．"}]}}'),delete t.options._Ctor}},314:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"welcome":"Welcome!","first_description":"This site is a library for competitive programming by jellyfish26. If I\'m not in the contest, feel free to use it. :)　See the license below to use it. (The English translation is likely to be incorrect. If you can read Japanese, you might want to read the Japanese page.)","use_site":"How to use this site","use_site_description":"This site is very simple. Select the data structure or algorithm you want to see from the navigation on the left and it will show up!!! Groundbreaking! The navigation on the right side is under construction. Please see the navigation on the right for the schedule.","use_site_description_2":"The source code is straight from the master branch in my Library repository, but I may not have updated the description on this page. (I think the library page is slower to update, because I update it on a whim.)","information":"Information","my_twitter":"My Twitter","page_repo":"Repository for this page","lib_repo":"Repository for library","license":"License","aboue_page":"About the library page","page_license_description":"I have no idea about this page at the moment.","about_library":"About the Library","library_license_description":"If you don\'t have a lot of Verify, it may be buggy, but you can use it freely. It doesn\'t matter if I\'m in the contest. However, please use the following copyright notice when you use it.","index_classification":"Classification","algorithms":[{"classification_name":"Data Strcture","description":"As it is, it classifies data structures that can be handled at high speed, which are not in the standard library."},{"classification_name":"Graph","description":"It categorizes those that deal with graph problems. In the future, we may categorize the problems with trees separately."},{"classification_name":"Mathematics","description":"Er, mathematics."},{"classification_name":"Geometry","description":"Yes, it\'s geometry. Algebra might be in there too (I don\'t know any algebra problems)"},{"classification_name":"Custom","description":"The data structures and algorithms that are rarely used are categorized here."}]}}'),delete t.options._Ctor}},339:function(t,e,o){"use strict";var n=o(313),r=o.n(n);e.default=r.a},340:function(t,e,o){"use strict";var n=o(314),r=o.n(n);e.default=r.a},372:function(t,e,o){"use strict";o.r(e);var n={components:{SourceView:o(299).a},head:function(){return{title:this.$t("welcome")}}},r=o(67),c=o(339),l=o(340),_=o(94),h=o.n(_),d=o(183),m=o(360),f=o(293),v=o(137),y=o(136),w=o(361),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-responsive",{staticClass:"mx-auto",attrs:{"max-width":"1024"}},[o("section",{staticClass:"mb-12"},[o("h1",{staticClass:"display-1 font-weight-bold"},[t._v(" "+t._s(t.$t("welcome"))+" ")]),t._v(" "),o("p",{staticClass:"font-weight-right title"},[t._v(" "+t._s(t.$t("first_description"))+" ")])]),t._v(" "),o("section",{staticClass:"mb-12"},[o("h2",[t._v(" "+t._s(t.$t("use_site"))+" ")]),t._v(" "),o("p",[t._v(" "+t._s(t.$t("use_site_description"))+" ")]),t._v(" "),o("p",[t._v(" "+t._s(t.$t("use_site_description_2"))+" ")])]),t._v(" "),o("section",{staticClass:"mb-12"},[o("h2",[t._v(" "+t._s(t.$t("index_classification"))+" ")]),t._v(" "),t._l(t.$t("algorithms"),(function(e){return o("div",{staticClass:"mx-auto"},[o("h3",[t._v(" "+t._s(e.classification_name)+" ")]),t._v(" "),o("p",[t._v(" "+t._s(e.description)+" ")])])}))],2),t._v(" "),o("section",{staticClass:"mb-12"},[o("h2",[t._v(" "+t._s(t.$t("information"))+" ")]),t._v(" "),o("v-container",{attrs:{fluid:""}},[o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("v-row",{staticStyle:{height:"auto"},attrs:{align:"center",justify:"space-around"}},[o("v-btn",{staticClass:"ma-3 pa-6",attrs:{href:"https://twitter.com/jellyfish_26",target:"_blank",color:"light-blue lighten-2",rounded:""}},[o("v-icon",[t._v(" mdi-twitter ")]),t._v("\n              "+t._s(t.$t("my_twitter"))+"\n            ")],1),t._v(" "),o("v-btn",{staticClass:"ma-3 pa-6",attrs:{href:"https://github.com/jellyfish26/competitive-library-pages",target:"_blank",color:"amber darken-2",rounded:""}},[o("v-icon",[t._v(" mdi-github ")]),t._v("\n              "+t._s(t.$t("page_repo"))+"\n            ")],1),t._v(" "),o("v-btn",{staticClass:"ma-3 pa-6",attrs:{href:"https://github.com/jellyfish26/competitive-library",target:"_blank",color:"light-green lighten-1",rounded:""}},[o("v-icon",[t._v(" mdi-github ")]),t._v("\n              "+t._s(t.$t("lib_repo"))+"\n            ")],1)],1)],1)],1)],1)],1),t._v(" "),o("section",{staticClass:"mb-12"},[o("h2",[t._v(" "+t._s(t.$t("license"))+" ")]),t._v(" "),o("h3",[t._v(" "+t._s(t.$t("aboue_page"))+" ")]),t._v(" "),o("p",[t._v(" "+t._s(t.$t("page_license_description"))+" ")]),t._v(" "),o("h3",[t._v(" "+t._s(t.$t("about_library"))+" ")]),t._v(" "),o("p",[t._v(" "+t._s(t.$t("library_license_description"))+" ")]),t._v(" "),o("SourceView",{attrs:{src:"https://raw.githubusercontent.com/jellyfish26/competitive-library/master/copyright_notice.cpp",link:"https://github.com/jellyfish26/competitive-library/blob/master/copyright_notice.cpp"}})],1)])}),[],!1,null,null,null);"function"==typeof c.default&&Object(c.default)(component),"function"==typeof l.default&&Object(l.default)(component);e.default=component.exports;h()(component,{VBtn:d.a,VCol:m.a,VContainer:f.a,VIcon:v.a,VResponsive:y.a,VRow:w.a})}}]);