(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{307:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"ja":{"explanation":"説明","dependent_library":"依存ライブラリ","header_file":"ヘッダファイル","source_file":"ソースファイル","reference":"リファレンス","function":"関数","calc_amount":"計算量","constant_multiple":"定数倍","very_light":"とても軽い","light":"軽い","very_heavy":"とても重い","normal":"普通","little_heavy":"少し重い"}}'),delete t.options._Ctor}},308:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"explanation":"Explanation","dependent_library":"Dependent Library","header_file":"Header File","source_file":"Source File","reference":"Reference","function":"Function","calc_amount":"Calculated Amount","constant_multiple":"Constant Multiple","very_light":"Very Light","light":"Light","very_heavy":"Very Heavy","normal":"Normal","little_heavy":"Little Heavy"}}'),delete t.options._Ctor}},309:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"ja":{"data_strcture":"データ構造","graph":"グラフ","math":"数学","geometry":"幾何","extension_graph":"拡張グラフ","extension_algorithm":"拡張アルゴリズム","custom":"カスタム","binary_indexed_tree":"Binary-Indexed-Tree","union_find":"素集合データ構造(Union-Find)","graph_base":"グラフのベース","dijkstra":"単一始点最短経路(ダイクストラ)","euler_tour":"オイラーツアー","mod_int":"ModInt","geometry_vertex":"点(テンプレート)","enumerative_euler_tour":"数え上げオイラーツアー","algorithm":"アルゴリズム","cumulative_sum":"累積和","combination":"組み合わせ","rerooting":"全方位木DP","segment_tree":"セグメント木","matrix":"行列","affine":"アフィン変換"}}'),delete t.options._Ctor}},310:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"data_strcture":"Data Strcture","graph":"Graph","math":"Math","geometry":"Geometry","extension_graph":"Extension Graph","extension_algorithm":"Extension Algorithm","custom":"Custom","binary_indexed_tree":"Binary-Indexed-Tree","union_find":"Disjoint-set(Union-Find)","graph_base":"Graph Base","dijkstra":"Single Source Shortest Path(Dijkstra)","euler_tour":"EulerTour","mod_int":"ModInt","geometry_vertex":"Vertex(template)","enumerative_euler_tour":"CountUp EulerTour","algorithm":"Algorithm","cumulative_sum":"Cumulative Sum","combination":"Combination","rerooting":"ReRooting","segment_tree":"Segment Tree","matrix":"Matrix","affine":"Affine Transformation"}}'),delete t.options._Ctor}},311:function(t,e,n){var content=n(315);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("1a34e9b2",content,!0,{sourceMap:!1})},312:function(t,e,n){var content=n(313);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("2e9bbcb6",content,!0,{sourceMap:!1})},313:function(t,e,n){var o=n(16)(!1);o.push([t.i,'code[class*=language-],pre[class*=language-]{color:#ccc;background:none;font-family:Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace;font-size:1em;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-ms-hyphens:none;hyphens:none}pre[class*=language-]{padding:1em;margin:.5em 0;overflow:auto}:not(pre)>code[class*=language-],pre[class*=language-]{background:#2d2d2d}:not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em;white-space:normal}.token.block-comment,.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#999}.token.punctuation{color:#ccc}.token.attr-name,.token.deleted,.token.namespace,.token.tag{color:#e2777a}.token.function-name{color:#6196cc}.token.boolean,.token.function,.token.number{color:#f08d49}.token.class-name,.token.constant,.token.property,.token.symbol{color:#f8c555}.token.atrule,.token.builtin,.token.important,.token.keyword,.token.selector{color:#cc99cd}.token.attr-value,.token.char,.token.regex,.token.string,.token.variable{color:#7ec699}.token.entity,.token.operator,.token.url{color:#67cdcc}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}.token.inserted{color:green}',""]),t.exports=o},314:function(t,e,n){"use strict";n(311)},315:function(t,e,n){var o=n(16)(!1);o.push([t.i,".source-copy .v-icon{position:absolute;right:0;z-index:4}.source-github .v-icon{position:absolute}",""]),t.exports=o},316:function(t,e,n){"use strict";n(200);var o=n(324),r=n.n(o),l=(n(312),n(325),n(326),n(327)),d=n.n(l);var c={props:["src","link"],components:{Prism:r.a},data:function(){return{copied:!1,source_code:""}},methods:{copySource:function(){var element;(element=this.$el.querySelector("pre")).setAttribute("contenteditable","true"),element.focus(),document.execCommand("selectAll",!1),document.execCommand("copy"),element.setAttribute("contenteditable","false")},openSource:function(){open(this.link,"_blank")}},mounted:function(){var t=this;d.a.get(this.src).then((function(e){return t.source_code=e.data}))}},_=(n(314),n(73)),h=n(99),v=n.n(h),f=n(405),m=n(148),component=Object(_.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"source-card",attrs:{outlined:"",color:"#2d2d2d"}},[n("div",{staticClass:"source-copy"},[n("v-icon",{attrs:{title:"Copy","aria-label":"Copy",size:"25",color:"white"},on:{click:t.copySource}},[t._v("\n      mdi-content-copy\n    ")])],1),t._v(" "),n("div",{staticClass:"source-github"},[n("v-icon",{attrs:{title:"View on GitHub","aria-label":"View on GitHub",color:"white",size:"25"},on:{click:t.openSource}},[t._v(" \n      mdi-github \n    ")])],1),t._v(" "),n("prism",{attrs:{language:"cpp",code:t.source_code}})],1)}),[],!1,null,null,null);e.a=component.exports;v()(component,{VCard:f.a,VIcon:m.a})},317:function(t,e,n){"use strict";var o=n(307),r=n.n(o);e.default=r.a},318:function(t,e,n){"use strict";var o=n(308),r=n.n(o);e.default=r.a},319:function(t,e,n){"use strict";var o=n(309),r=n.n(o);e.default=r.a},320:function(t,e,n){"use strict";var o=n(310),r=n.n(o);e.default=r.a},321:function(t,e,n){var content=n(322);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("7c06aa28",content,!0,{sourceMap:!1})},322:function(t,e,n){var o=n(16)(!1);o.push([t.i,".theme--light.v-data-table{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-data-table .v-data-table__divider{border-right:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table.v-data-table--fixed-header thead th{background:#fff;box-shadow:inset 0 -1px 0 rgba(0,0,0,.12)}.theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr>th{color:rgba(0,0,0,.6)}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:last-child,.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:not(.v-data-table__mobile-row),.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:last-child,.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:not(.v-data-table__mobile-row),.theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr:last-child>th{border-bottom:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr.active{background:#f5f5f5}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){background:#eee}.theme--dark.v-data-table{background-color:#1e1e1e;color:#fff}.theme--dark.v-data-table .v-data-table__divider{border-right:thin solid hsla(0,0%,100%,.12)}.theme--dark.v-data-table.v-data-table--fixed-header thead th{background:#1e1e1e;box-shadow:inset 0 -1px 0 hsla(0,0%,100%,.12)}.theme--dark.v-data-table>.v-data-table__wrapper>table>thead>tr>th{color:hsla(0,0%,100%,.7)}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:last-child,.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:not(.v-data-table__mobile-row),.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:last-child,.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:not(.v-data-table__mobile-row),.theme--dark.v-data-table>.v-data-table__wrapper>table>thead>tr:last-child>th{border-bottom:thin solid hsla(0,0%,100%,.12)}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr.active{background:#505050}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){background:#616161}.v-data-table{line-height:1.5;max-width:100%}.v-data-table>.v-data-table__wrapper>table{width:100%;border-spacing:0}.v-data-table>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-data-table>.v-data-table__wrapper>table>thead>tr>td,.v-data-table>.v-data-table__wrapper>table>thead>tr>th{padding:0 16px;transition:height .2s cubic-bezier(.4,0,.6,1)}.v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-data-table>.v-data-table__wrapper>table>thead>tr>th{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:.75rem;height:48px}.v-application--is-ltr .v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-application--is-ltr .v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-application--is-ltr .v-data-table>.v-data-table__wrapper>table>thead>tr>th{text-align:left}.v-application--is-rtl .v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-application--is-rtl .v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-application--is-rtl .v-data-table>.v-data-table__wrapper>table>thead>tr>th{text-align:right}.v-data-table>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td,.v-data-table>.v-data-table__wrapper>table>thead>tr>td{font-size:.875rem;height:48px}.v-data-table__wrapper{overflow-x:auto;overflow-y:hidden}.v-data-table__progress{height:auto!important}.v-data-table__progress th{height:auto!important;border:none!important;padding:0;position:relative}.v-data-table--dense>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table--dense>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table--dense>.v-data-table__wrapper>table>tfoot>tr>td,.v-data-table--dense>.v-data-table__wrapper>table>tfoot>tr>th,.v-data-table--dense>.v-data-table__wrapper>table>thead>tr>td,.v-data-table--dense>.v-data-table__wrapper>table>thead>tr>th{height:32px}.v-data-table--has-top>.v-data-table__wrapper>table>tbody>tr:first-child:hover>td:first-child{border-top-left-radius:0}.v-data-table--has-top>.v-data-table__wrapper>table>tbody>tr:first-child:hover>td:last-child{border-top-right-radius:0}.v-data-table--has-bottom>.v-data-table__wrapper>table>tbody>tr:last-child:hover>td:first-child{border-bottom-left-radius:0}.v-data-table--has-bottom>.v-data-table__wrapper>table>tbody>tr:last-child:hover>td:last-child{border-bottom-right-radius:0}.v-data-table--fixed-header>.v-data-table__wrapper,.v-data-table--fixed-height .v-data-table__wrapper{overflow-y:auto}.v-data-table--fixed-header>.v-data-table__wrapper>table>thead>tr>th{border-bottom:0!important;position:sticky;top:0;z-index:2}.v-data-table--fixed-header>.v-data-table__wrapper>table>thead>tr:nth-child(2)>th{top:48px}.v-application--is-ltr .v-data-table--fixed-header .v-data-footer{margin-right:17px}.v-application--is-rtl .v-data-table--fixed-header .v-data-footer{margin-left:17px}.v-data-table--fixed-header.v-data-table--dense>.v-data-table__wrapper>table>thead>tr:nth-child(2)>th{top:32px}",""]),t.exports=o},323:function(t,e,n){"use strict";var o={props:["headerRaw","headerGitHubLink","sourceRaw","sourceGitHubLink","dependentList","japanese","english"],components:{SourceView:n(316).a},data:function(){return{dependent_libraries:"",reference_about:"",func_reference:""}},created:function(){this.$i18n.mergeLocaleMessage("ja",this.japanese),this.$i18n.mergeLocaleMessage("en",this.english),this.dependent_libraries=this.dependentList.dependent_libraries,this.reference_about=this.dependentList.reference_about,this.func_reference=this.dependentList.func_reference,window.MathJax&&(window.MathJax.Hub.Config({tex2jax:{inlineMath:[["$","$"]],displayMath:[["$$","$$"]],processEscapes:!0,processEnvironments:!0},displayAlign:"center","HTML-CSS":{fonts:["TeX"]}}),window.MathJax.Hub.Rerender(["Typeset",window.MathJax.Hub]))},head:function(){return{title:this.$t("library_name")}}},r=n(73),l=n(317),d=n(318),c=n(319),_=n(320),h=n(99),v=n.n(h),f=n(147),m=(n(12),n(8),n(7),n(5),n(4),n(9),n(2)),w=(n(19),n(321),n(1)),y=n(27),x=n(11);function k(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var $=Object(x.a)(y.a).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(e){Object(m.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(w.f)(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}}),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-responsive",{staticClass:"mx-auto",attrs:{"max-width":"1024"}},[n("section",{staticClass:"mb-12"},[n("h1",{staticClass:"display-1 font-weight-bold mb-2"},[t._v(" "+t._s(t.$t("library_name"))+" ")]),t._v(" "),n("p",{staticClass:"font-weight-right title"},[t._v(" \n      "+t._s(t.$t("overview"))+"\n    ")])]),t._v(" "),n("section",{staticClass:"mb-12"},[n("h2",[t._v(" "+t._s(t.$t("explanation"))+" ")]),t._v(" "),n("p",[t._v(" "+t._s(t.$t("explanation_content")))])]),t._v(" "),t.dependent_libraries?n("section",{staticClass:"mb-12"},[n("h2",[t._v(" "+t._s(t.$t("dependent_library"))+" ")]),t._v(" "),t._l(t.dependent_libraries,(function(e){return n("ul",{key:e},[n("li",[n("nuxt-link",{attrs:{to:t.localePath(e.link)}},[t._v(" "+t._s(t.$t(e.name))+" ")])],1)])}))],2):t._e(),t._v(" "),t.func_reference?n("section",{staticClass:"mb-12"},[n("h2",[t._v(" "+t._s(t.$t("reference"))+" ")]),t._v(" "),t.reference_about?n("p",[t._v(" "+t._s(t.$t("reference_about"))+" ")]):t._e(),t._v(" "),n("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("th",{attrs:{width:"350sp"}},[t._v(" "+t._s(t.$t("function"))+" ")]),t._v(" "),n("th",{attrs:{width:"350sp"}},[t._v(" "+t._s(t.$t("explanation"))+" ")]),t._v(" "),n("th",[t._v(" "+t._s(t.$t("calc_amount"))+" ")])]),t._v(" "),n("tbody",t._l(t.func_reference,(function(e){return n("tr",{key:e.function},[n("td",[t._v(" "+t._s(e.function)+" ")]),t._v(" "),n("td",[t._v(" "+t._s(t.$t(e.explanation))+" ")]),t._v(" "),n("td",[t._v(" "+t._s(e.amount)+" ")])])})),0)]},proxy:!0}],null,!1,946098611)})],1):t._e(),t._v(" "),n("section",{staticClass:"mb-12"},[n("h2",[t._v(" "+t._s(t.$t("header_file"))+" ")]),t._v(" "),n("SourceView",{attrs:{src:t.headerRaw,link:t.headerGitHubLink}})],1),t._v(" "),t.sourceRaw?n("section",{staticClass:"mb-12"},[n("h2",[t._v(" "+t._s(t.$t("source_file"))+" ")]),t._v(" "),n("SourceView",{attrs:{src:t.sourceRaw,link:t.sourceGitHubLink}})],1):t._e()])}),[],!1,null,null,null);"function"==typeof l.default&&Object(l.default)(component),"function"==typeof d.default&&Object(d.default)(component),"function"==typeof c.default&&Object(c.default)(component),"function"==typeof _.default&&Object(_.default)(component);e.a=component.exports;v()(component,{VResponsive:f.a,VSimpleTable:$})},387:function(t){t.exports=JSON.parse('{"ja":{"library_name":"組み合わせ","overview":"組み合わせを前計算で高速に求めるやつ，主に${}_nC_k$","explanation_content":"事前に階乗とその逆元を$O(N)$で求めて，${}_nC_k$, ${}_nP_k$, ${}_nH_k$を$O(1)$で求めることが出来る","constructor_explanation":"コンストラクタ，$N$までの組み合わせ等を求めることが出来るようにする","P_explanation":" ${}_nP_k$を求める，すなわち順列","C_explanation":" ${}_nC_k$を求める，すなわち組み合わせ","H_explanation":" ${}_nH_k$を求める，すなわち重複組み合わせ"}}')},388:function(t){t.exports=JSON.parse('{"en":{"library_name":"Combination","overview":"By calculating in advance, the combination can be calculated quickly.","explanation_content":"We can find the factorial and its inverse in $O(N)$ in advance and find ${}_nC_k$, ${}_nP_k$, and ${}_nH_k$ in $O(1)$","constructor_explanation":"Constructors, combinations up to $N$, etc. can be computed.","P_explanation":"Compute ${}_nP_k$, i.e., the permutation","C_explanation":"Compute ${}_nC_k$, i.e., the combination","H_explanation":"Compute ${}_nH_k$, i.e., the combination with repetition"}}')},403:function(t,e,n){"use strict";n.r(e);var o=n(323),r=function(){return{dependent_libraries:[{name:"modint",link:"mathematics-ModInt"}],func_reference:[{function:"Combination$(N)$",explanation:"constructor_explanation",amount:"$O(N)$",constant_times:"normal"},{function:"P$(n, k)$",explanation:"P_explanation",amount:"$O(1)$",constant_times:"very_light"},{function:"C$(n, k)$",explanation:"C_explanation",amount:"$O(1)$",constant_times:"very_light"},{function:"H$(n, k)$",explanation:"H_explanation",amount:"$O(1)$",constant_times:"very_light"}]}},l=n(387),d=n(388),c={components:{LibraryPage:o.a},data:function(){return{Japanese:l,English:d,dependent_list:r()}}},_=n(73),component=Object(_.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("LibraryPage",{attrs:{headerRaw:"https://raw.githubusercontent.com/jellyfish26/competitive-library/master/math/Combination.hpp",headerGitHubLink:"https://github.com/jellyfish26/competitive-library/blob/master/math/Combination.hpp",dependentList:t.dependent_list,japanese:t.Japanese.ja,english:t.English.en}})}),[],!1,null,null,null);e.default=component.exports}}]);