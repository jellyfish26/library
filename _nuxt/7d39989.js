(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{307:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"ja":{"explanation":"説明","dependent_library":"依存ライブラリ","header_file":"ヘッダファイル","source_file":"ソースファイル","reference":"リファレンス","function":"関数","calc_amount":"計算量","constant_multiple":"定数倍","very_light":"とても軽い","light":"軽い","very_heavy":"とても重い","normal":"普通","little_heavy":"少し重い"}}'),delete t.options._Ctor}},308:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"explanation":"Explanation","dependent_library":"Dependent Library","header_file":"Header File","source_file":"Source File","reference":"Reference","function":"Function","calc_amount":"Calculated Amount","constant_multiple":"Constant Multiple","very_light":"Very Light","light":"Light","very_heavy":"Very Heavy","normal":"Normal","little_heavy":"Little Heavy"}}'),delete t.options._Ctor}},309:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"ja":{"data_strcture":"データ構造","graph":"グラフ","math":"数学","geometry":"幾何","extension_graph":"拡張グラフ","extension_algorithm":"拡張アルゴリズム","custom":"カスタム","binary_indexed_tree":"Binary-Indexed-Tree","union_find":"素集合データ構造(Union-Find)","graph_base":"グラフのベース","dijkstra":"単一始点最短経路(ダイクストラ)","euler_tour":"オイラーツアー","mod_int":"ModInt","geometry_vertex":"点(テンプレート)","enumerative_euler_tour":"数え上げオイラーツアー","algorithm":"アルゴリズム","cumulative_sum":"累積和","combination":"組み合わせ","rerooting":"全方位木DP","segment_tree":"セグメント木","matrix":"行列","affine":"アフィン変換"}}'),delete t.options._Ctor}},310:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"data_strcture":"Data Strcture","graph":"Graph","math":"Math","geometry":"Geometry","extension_graph":"Extension Graph","extension_algorithm":"Extension Algorithm","custom":"Custom","binary_indexed_tree":"Binary-Indexed-Tree","union_find":"Disjoint-set(Union-Find)","graph_base":"Graph Base","dijkstra":"Single Source Shortest Path(Dijkstra)","euler_tour":"EulerTour","mod_int":"ModInt","geometry_vertex":"Vertex(template)","enumerative_euler_tour":"CountUp EulerTour","algorithm":"Algorithm","cumulative_sum":"Cumulative Sum","combination":"Combination","rerooting":"ReRooting","segment_tree":"Segment Tree","matrix":"Matrix","affine":"Affine Transformation"}}'),delete t.options._Ctor}},311:function(t,e,r){var content=r(315);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("1a34e9b2",content,!0,{sourceMap:!1})},312:function(t,e,r){var content=r(313);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("2e9bbcb6",content,!0,{sourceMap:!1})},313:function(t,e,r){var o=r(16)(!1);o.push([t.i,'code[class*=language-],pre[class*=language-]{color:#ccc;background:none;font-family:Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace;font-size:1em;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-ms-hyphens:none;hyphens:none}pre[class*=language-]{padding:1em;margin:.5em 0;overflow:auto}:not(pre)>code[class*=language-],pre[class*=language-]{background:#2d2d2d}:not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em;white-space:normal}.token.block-comment,.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#999}.token.punctuation{color:#ccc}.token.attr-name,.token.deleted,.token.namespace,.token.tag{color:#e2777a}.token.function-name{color:#6196cc}.token.boolean,.token.function,.token.number{color:#f08d49}.token.class-name,.token.constant,.token.property,.token.symbol{color:#f8c555}.token.atrule,.token.builtin,.token.important,.token.keyword,.token.selector{color:#cc99cd}.token.attr-value,.token.char,.token.regex,.token.string,.token.variable{color:#7ec699}.token.entity,.token.operator,.token.url{color:#67cdcc}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}.token.inserted{color:green}',""]),t.exports=o},314:function(t,e,r){"use strict";r(311)},315:function(t,e,r){var o=r(16)(!1);o.push([t.i,".source-copy .v-icon{position:absolute;right:0;z-index:4}.source-github .v-icon{position:absolute}",""]),t.exports=o},316:function(t,e,r){"use strict";r(200);var o=r(324),n=r.n(o),l=(r(312),r(325),r(326),r(327)),d=r.n(l);var c={props:["src","link"],components:{Prism:n.a},data:function(){return{copied:!1,source_code:""}},methods:{copySource:function(){var element;(element=this.$el.querySelector("pre")).setAttribute("contenteditable","true"),element.focus(),document.execCommand("selectAll",!1),document.execCommand("copy"),element.setAttribute("contenteditable","false")},openSource:function(){open(this.link,"_blank")}},mounted:function(){var t=this;d.a.get(this.src).then((function(e){return t.source_code=e.data}))}},_=(r(314),r(73)),h=r(99),v=r.n(h),f=r(405),m=r(148),component=Object(_.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"source-card",attrs:{outlined:"",color:"#2d2d2d"}},[r("div",{staticClass:"source-copy"},[r("v-icon",{attrs:{title:"Copy","aria-label":"Copy",size:"25",color:"white"},on:{click:t.copySource}},[t._v("\n      mdi-content-copy\n    ")])],1),t._v(" "),r("div",{staticClass:"source-github"},[r("v-icon",{attrs:{title:"View on GitHub","aria-label":"View on GitHub",color:"white",size:"25"},on:{click:t.openSource}},[t._v(" \n      mdi-github \n    ")])],1),t._v(" "),r("prism",{attrs:{language:"cpp",code:t.source_code}})],1)}),[],!1,null,null,null);e.a=component.exports;v()(component,{VCard:f.a,VIcon:m.a})},317:function(t,e,r){"use strict";var o=r(307),n=r.n(o);e.default=n.a},318:function(t,e,r){"use strict";var o=r(308),n=r.n(o);e.default=n.a},319:function(t,e,r){"use strict";var o=r(309),n=r.n(o);e.default=n.a},320:function(t,e,r){"use strict";var o=r(310),n=r.n(o);e.default=n.a},321:function(t,e,r){var content=r(322);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("7c06aa28",content,!0,{sourceMap:!1})},322:function(t,e,r){var o=r(16)(!1);o.push([t.i,".theme--light.v-data-table{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-data-table .v-data-table__divider{border-right:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table.v-data-table--fixed-header thead th{background:#fff;box-shadow:inset 0 -1px 0 rgba(0,0,0,.12)}.theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr>th{color:rgba(0,0,0,.6)}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:last-child,.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:not(.v-data-table__mobile-row),.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:last-child,.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:not(.v-data-table__mobile-row),.theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr:last-child>th{border-bottom:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr.active{background:#f5f5f5}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){background:#eee}.theme--dark.v-data-table{background-color:#1e1e1e;color:#fff}.theme--dark.v-data-table .v-data-table__divider{border-right:thin solid hsla(0,0%,100%,.12)}.theme--dark.v-data-table.v-data-table--fixed-header thead th{background:#1e1e1e;box-shadow:inset 0 -1px 0 hsla(0,0%,100%,.12)}.theme--dark.v-data-table>.v-data-table__wrapper>table>thead>tr>th{color:hsla(0,0%,100%,.7)}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:last-child,.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:not(.v-data-table__mobile-row),.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:last-child,.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:not(.v-data-table__mobile-row),.theme--dark.v-data-table>.v-data-table__wrapper>table>thead>tr:last-child>th{border-bottom:thin solid hsla(0,0%,100%,.12)}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr.active{background:#505050}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){background:#616161}.v-data-table{line-height:1.5;max-width:100%}.v-data-table>.v-data-table__wrapper>table{width:100%;border-spacing:0}.v-data-table>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-data-table>.v-data-table__wrapper>table>thead>tr>td,.v-data-table>.v-data-table__wrapper>table>thead>tr>th{padding:0 16px;transition:height .2s cubic-bezier(.4,0,.6,1)}.v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-data-table>.v-data-table__wrapper>table>thead>tr>th{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:.75rem;height:48px}.v-application--is-ltr .v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-application--is-ltr .v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-application--is-ltr .v-data-table>.v-data-table__wrapper>table>thead>tr>th{text-align:left}.v-application--is-rtl .v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-application--is-rtl .v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-application--is-rtl .v-data-table>.v-data-table__wrapper>table>thead>tr>th{text-align:right}.v-data-table>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td,.v-data-table>.v-data-table__wrapper>table>thead>tr>td{font-size:.875rem;height:48px}.v-data-table__wrapper{overflow-x:auto;overflow-y:hidden}.v-data-table__progress{height:auto!important}.v-data-table__progress th{height:auto!important;border:none!important;padding:0;position:relative}.v-data-table--dense>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table--dense>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table--dense>.v-data-table__wrapper>table>tfoot>tr>td,.v-data-table--dense>.v-data-table__wrapper>table>tfoot>tr>th,.v-data-table--dense>.v-data-table__wrapper>table>thead>tr>td,.v-data-table--dense>.v-data-table__wrapper>table>thead>tr>th{height:32px}.v-data-table--has-top>.v-data-table__wrapper>table>tbody>tr:first-child:hover>td:first-child{border-top-left-radius:0}.v-data-table--has-top>.v-data-table__wrapper>table>tbody>tr:first-child:hover>td:last-child{border-top-right-radius:0}.v-data-table--has-bottom>.v-data-table__wrapper>table>tbody>tr:last-child:hover>td:first-child{border-bottom-left-radius:0}.v-data-table--has-bottom>.v-data-table__wrapper>table>tbody>tr:last-child:hover>td:last-child{border-bottom-right-radius:0}.v-data-table--fixed-header>.v-data-table__wrapper,.v-data-table--fixed-height .v-data-table__wrapper{overflow-y:auto}.v-data-table--fixed-header>.v-data-table__wrapper>table>thead>tr>th{border-bottom:0!important;position:sticky;top:0;z-index:2}.v-data-table--fixed-header>.v-data-table__wrapper>table>thead>tr:nth-child(2)>th{top:48px}.v-application--is-ltr .v-data-table--fixed-header .v-data-footer{margin-right:17px}.v-application--is-rtl .v-data-table--fixed-header .v-data-footer{margin-left:17px}.v-data-table--fixed-header.v-data-table--dense>.v-data-table__wrapper>table>thead>tr:nth-child(2)>th{top:32px}",""]),t.exports=o},323:function(t,e,r){"use strict";var o={props:["headerRaw","headerGitHubLink","sourceRaw","sourceGitHubLink","dependentList","japanese","english"],components:{SourceView:r(316).a},data:function(){return{dependent_libraries:"",reference_about:"",func_reference:""}},created:function(){this.$i18n.mergeLocaleMessage("ja",this.japanese),this.$i18n.mergeLocaleMessage("en",this.english),this.dependent_libraries=this.dependentList.dependent_libraries,this.reference_about=this.dependentList.reference_about,this.func_reference=this.dependentList.func_reference,window.MathJax&&(window.MathJax.Hub.Config({tex2jax:{inlineMath:[["$","$"]],displayMath:[["$$","$$"]],processEscapes:!0,processEnvironments:!0},displayAlign:"center","HTML-CSS":{fonts:["TeX"]}}),window.MathJax.Hub.Rerender(["Typeset",window.MathJax.Hub]))},head:function(){return{title:this.$t("library_name")}}},n=r(73),l=r(317),d=r(318),c=r(319),_=r(320),h=r(99),v=r.n(h),f=r(147),m=(r(12),r(8),r(7),r(5),r(4),r(9),r(2)),w=(r(19),r(321),r(1)),y=r(27),x=r(11);function k(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var $=Object(x.a)(y.a).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(e){Object(m.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(w.f)(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}}),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-responsive",{staticClass:"mx-auto",attrs:{"max-width":"1024"}},[r("section",{staticClass:"mb-12"},[r("h1",{staticClass:"display-1 font-weight-bold mb-2"},[t._v(" "+t._s(t.$t("library_name"))+" ")]),t._v(" "),r("p",{staticClass:"font-weight-right title"},[t._v(" \n      "+t._s(t.$t("overview"))+"\n    ")])]),t._v(" "),r("section",{staticClass:"mb-12"},[r("h2",[t._v(" "+t._s(t.$t("explanation"))+" ")]),t._v(" "),r("p",[t._v(" "+t._s(t.$t("explanation_content")))])]),t._v(" "),t.dependent_libraries?r("section",{staticClass:"mb-12"},[r("h2",[t._v(" "+t._s(t.$t("dependent_library"))+" ")]),t._v(" "),t._l(t.dependent_libraries,(function(e){return r("ul",{key:e},[r("li",[r("nuxt-link",{attrs:{to:t.localePath(e.link)}},[t._v(" "+t._s(t.$t(e.name))+" ")])],1)])}))],2):t._e(),t._v(" "),t.func_reference?r("section",{staticClass:"mb-12"},[r("h2",[t._v(" "+t._s(t.$t("reference"))+" ")]),t._v(" "),t.reference_about?r("p",[t._v(" "+t._s(t.$t("reference_about"))+" ")]):t._e(),t._v(" "),r("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[r("thead",[r("th",{attrs:{width:"350sp"}},[t._v(" "+t._s(t.$t("function"))+" ")]),t._v(" "),r("th",{attrs:{width:"350sp"}},[t._v(" "+t._s(t.$t("explanation"))+" ")]),t._v(" "),r("th",[t._v(" "+t._s(t.$t("calc_amount"))+" ")])]),t._v(" "),r("tbody",t._l(t.func_reference,(function(e){return r("tr",{key:e.function},[r("td",[t._v(" "+t._s(e.function)+" ")]),t._v(" "),r("td",[t._v(" "+t._s(t.$t(e.explanation))+" ")]),t._v(" "),r("td",[t._v(" "+t._s(e.amount)+" ")])])})),0)]},proxy:!0}],null,!1,946098611)})],1):t._e(),t._v(" "),r("section",{staticClass:"mb-12"},[r("h2",[t._v(" "+t._s(t.$t("header_file"))+" ")]),t._v(" "),r("SourceView",{attrs:{src:t.headerRaw,link:t.headerGitHubLink}})],1),t._v(" "),t.sourceRaw?r("section",{staticClass:"mb-12"},[r("h2",[t._v(" "+t._s(t.$t("source_file"))+" ")]),t._v(" "),r("SourceView",{attrs:{src:t.sourceRaw,link:t.sourceGitHubLink}})],1):t._e()])}),[],!1,null,null,null);"function"==typeof l.default&&Object(l.default)(component),"function"==typeof d.default&&Object(d.default)(component),"function"==typeof c.default&&Object(c.default)(component),"function"==typeof _.default&&Object(_.default)(component);e.a=component.exports;v()(component,{VResponsive:f.a,VSimpleTable:$})},375:function(t){t.exports=JSON.parse('{"ja":{"library_name":"行列","overview":"行列の計算を行う。","explanation_content":"演算子オーバーロードをしている。乗算は$O(N^3)$、べき乗は$O(\\\\log N)$","reference_about":"型Tは行列の内部型","constructor_normal_explanation":"$H$行$W$列の行列を生成","constructor_square_explanation":"$N$行$N$列の行列を生成","update_explanation":"$h$行$w$列の値を$v$に変更する"}}')},376:function(t){t.exports=JSON.parse('{"en":{"library_name":"Matrix","overview":"Matrix calculations.","explanation_content":"Matrix operations are possible with operators. Multiply is $O(N^3)$, power is $O(\\\\log N)$","reference_about":"Type T is the internal type of the matrix.","constructor_normal_explanation":"Generate a matrix with $H$ rows and $W$ columns","constructor_square_explanation":"Generate a matrix with $H$ rows and $W$ columns","update_explanation":"Change the value of row $h$, column $w$ to $v$"}}')},397:function(t,e,r){"use strict";r.r(e);var o=r(323),n=function(){return{reference_about:"reference_about",func_reference:[{function:"Matrix$(H, W)$",explanation:"constructor_normal_explanation",amount:"$O(HW)$"},{function:"Matrix$(N)$",explanation:"constructor_square_explanation",amount:"$O(N^2)$"},{function:"update$(h, w, v)$",explanation:"update_explanation",amount:"$O(1)$"}]}},l=r(375),d=r(376),c={components:{LibraryPage:o.a},data:function(){return{Japanese:l,English:d,dependent_list:n()}}},_=r(73),component=Object(_.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("LibraryPage",{attrs:{headerRaw:"https://raw.githubusercontent.com/jellyfish26/competitive-library/master/geometry/Matrix.hpp",headerGitHubLink:"https://github.com/jellyfish26/competitive-library/blob/master/geometry/Matrix.hpp",dependentList:t.dependent_list,japanese:t.Japanese.ja,english:t.English.en}})}),[],!1,null,null,null);e.default=component.exports}}]);