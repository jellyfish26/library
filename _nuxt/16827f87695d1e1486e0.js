(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{294:function(t,e,n){var content=n(299);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("4f4aef1d",content,!0,{sourceMap:!1})},296:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"ja":{"explanation":"説明","dependent_library":"依存ライブラリ","source_code":"ソースコード","reference":"リファレンス","function":"関数","calc_amount":"計算量","constant_multiple":"定数倍","very_light":"とても軽い"}}'),delete t.options._Ctor}},297:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"explanation":"Explanation","dependent_library":"Dependent Library","source_code":"Source Code","reference":"Reference","function":"Function","calc_amount":"Calculated Amount","constant_multiple":"Constant Multiple","very_light":"Very Light"}}'),delete t.options._Ctor}},298:function(t,e,n){"use strict";var o=n(294);n.n(o).a},299:function(t,e,n){(e=n(13)(!1)).push([t.i,".source-copy .v-icon{position:absolute;right:0;z-index:4}.source-github .v-icon{position:absolute}",""]),t.exports=e},300:function(t,e,n){"use strict";n(184),n(120),n(301),n(302);var o=n(306),r=n.n(o);var c={props:["src","link"],components:{Prism:function(){return n.e(11).then(n.t.bind(null,353,7))}},data:function(){return{copied:!1,source_code:""}},methods:{copySource:function(){var element;(element=this.$el.querySelector("pre")).setAttribute("contenteditable","true"),element.focus(),document.execCommand("selectAll",!1),document.execCommand("copy"),element.setAttribute("contenteditable","false")},openSource:function(){open(this.link,"_blank")}},mounted:function(){var t=this;r.a.get(this.src).then((function(e){return t.source_code=e.data}))}},l=(n(298),n(67)),d=n(94),h=n.n(d),_=n(349),f=n(137),component=Object(l.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-card",{staticClass:"source-card",attrs:{outlined:"",color:"#2d2d2d"}},[e("div",{staticClass:"source-copy"},[e("v-icon",{attrs:{title:"Copy","aria-label":"Copy",size:"25",color:"white"},on:{click:this.copySource}},[this._v("\n      mdi-content-copy\n    ")])],1),this._v(" "),e("div",{staticClass:"source-github"},[e("v-icon",{attrs:{title:"View on GitHub","aria-label":"View on GitHub",color:"white",size:"25"},on:{click:this.openSource}},[this._v(" \n      mdi-github \n    ")])],1),this._v(" "),e("prism",{attrs:{language:"cpp",code:this.source_code}})],1)}),[],!1,null,null,null);e.a=component.exports;h()(component,{VCard:_.a,VIcon:f.a})},303:function(t,e,n){"use strict";var o=n(296),r=n.n(o);e.default=r.a},304:function(t,e,n){"use strict";var o=n(297),r=n.n(o);e.default=r.a},305:function(t,e,n){"use strict";var o=n(300),r={props:["formula"],watch:{formula:function(){this.renderMathJax()}},mounted:function(){this.renderMathJax()},methods:{renderMathJax:function(){this.$refs.mathJaxElement.innerHTML=this.formula,window.MathJax&&(window.MathJax.Hub.Config({tex2jax:{inlineMath:[["$","$"]],displayMath:[["$$","$$"]],processEscapes:!0,processEnvironments:!0},displayAlign:"center","HTML-CSS":{fonts:["TeX"]}}),window.MathJax.Hub.Queue(["Typeset",window.MathJax.Hub,this.$refs.mathJaxElement]))}}},c=n(67),l=Object(c.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("span",{ref:"mathJaxElement"},[this._v(this._s(this.formula))])}),[],!1,null,null,null).exports,d={props:["sourceRaw","sourceGitHubLink","dependentList","japanese","english"],components:{SourceView:o.a,MathJax2:l},data:function(){return{dependent_libraries:"",reference_about:"",func_reference:""}},mounted:function(){this.$i18n.mergeLocaleMessage("ja",this.japanese),this.$i18n.mergeLocaleMessage("en",this.english),this.dependent_libraries=this.dependentList.dependent_libraries,this.reference_about=this.dependentList.reference_about,this.func_reference=this.dependentList.func_reference},head:function(){return{title:this.$t("library_name")}}},h=n(303),_=n(304),f=n(94),m=n.n(f),$=n(136),v=n(352),x=Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-responsive",{staticClass:"mx-auto",attrs:{"max-width":"1024"}},[n("section",{staticClass:"mb-12"},[n("h1",{staticClass:"display-1 font-weight-bold mb-2"},[t._v(" "+t._s(t.$t("library_name"))+" ")]),t._v(" "),n("p",{staticClass:"font-weight-right title"},[n("MathJax2",{attrs:{formula:t.$t("overview")}})],1)]),t._v(" "),n("section",{staticClass:"mb-12"},[n("h2",[t._v(" "+t._s(t.$t("explanation"))+" ")]),t._v(" "),n("p",[n("MathJax2",{attrs:{formula:t.$t("explanation_content")}})],1)]),t._v(" "),t.dependent_libraries?n("section",{staticClass:"mb-12"},[n("h2",[t._v(" "+t._s(t.$t("dependent_library"))+" ")]),t._v(" "),t._l(t.dependent_libraries,(function(e){return n("ul",[n("li",[n("a",{attrs:{href:t.localePath(e.link)}},[t._v(" "+t._s(t.$t(e.name))+" ")])])])}))],2):t._e(),t._v(" "),t.func_reference?n("section",{staticClass:"mb-12"},[n("h2",[t._v(" "+t._s(t.$t("reference"))+" ")]),t._v(" "),t.reference_about?n("p",[n("MathJax2",{attrs:{formula:t.$t(t.reference_about)}})],1):t._e(),t._v(" "),n("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("th",{attrs:{width:"250sp"}},[t._v(" "+t._s(t.$t("function"))+" ")]),t._v(" "),n("th",{attrs:{width:"300sp"}},[t._v(" "+t._s(t.$t("explanation"))+" ")]),t._v(" "),n("th",[t._v(" "+t._s(t.$t("calc_amount"))+" ")]),t._v(" "),n("th",[t._v(" "+t._s(t.$t("constant_multiple"))+" ")])]),t._v(" "),n("tbody",t._l(t.func_reference,(function(e){return n("tr",{key:e.function},[n("td",[n("MathJax2",{attrs:{formula:e.function}})],1),t._v(" "),n("td",[n("MathJax2",{attrs:{formula:t.$t(e.explanation)}})],1),t._v(" "),n("td",[n("MathJax2",{attrs:{formula:e.amount}})],1),t._v(" "),n("td",[n("MathJax2",{attrs:{formula:t.$t(e.constant_times)}})],1)])})),0)]},proxy:!0}],null,!1,3476379124)})],1):t._e(),t._v(" "),n("section",{staticClass:"mb-12"},[n("h2",[t._v(" "+t._s(t.$t("source_code"))+" ")]),t._v(" "),n("SourceView",{attrs:{src:t.sourceRaw,link:t.sourceGitHubLink}})],1)])}),[],!1,null,null,null);"function"==typeof h.default&&Object(h.default)(x),"function"==typeof _.default&&Object(_.default)(x);e.a=x.exports;m()(x,{VResponsive:$.a,VSimpleTable:v.a})},347:function(t){t.exports=JSON.parse('{"ja":{"library_name":"グラフのテンプレート","overview":"グラフ問題を扱うときに必要なライブラリ．グラフに関するライブラリのほとんどがこのライブラリに依存しています．","explanation_content":"グラフ問題を扱うときに，必要なライブラリ．edgeは辺，UnWeightedGraphがコストが無いグラフ，WeightedGraphがコストがあるグラフ．","unweight_constructor_explanation":"コンストラクタ，データ保持数$size$で初期化する．iがfalseの場合は無向グラフを作成，iがtrueの場合は有向グラフを作成．","unweight_add_edge_explanation":"$s$から$t$に対して辺を張る．","weight_constructor_explanation":"コンストラクタ，データ保持数$size$で初期化する．iがfalseの場合は無向グラフを作成，iがtrueの場合は有向グラフを作成．","weight_add_edge_explanation":"$s$から$t$に対してコスト$c$の辺を張る．"}}')},348:function(t){t.exports=JSON.parse('{"en":{"library_name":"Graph Template","overview":"Library needed to handle graph problems. Most of the libraries for graphs depend on this library.","explanation_content":"A library needed to deal with graph problems. Where edge is an edge, UnWeightedGraph is a graph with no cost, and WeightedGraph is a graph with a cost.","unweight_constructor_explanation":"Constructor, initialized with the number of data holdings $size$, creating an undirected graph if $i$ is false, or a directed graph if $i$ is true.","unweight_add_edge_explanation":"Put an edge from $s$ to $t$.","weight_constructor_explanation":"Constructor, initialized with the number of data holdings $size$, creating an undirected graph if $i$ is false, or a directed graph if $i$ is true.","weight_add_edge_explanation":"Put an edge of cost $c$ from $s$ to $t$."}}')},356:function(t,e,n){"use strict";n.r(e);var o=n(305),r=function(){return{func_reference:[{function:"UnWeightedGraph$(size, i)$",explanation:"unweight_constructor_explanation",amount:"$O(N)$",constant_times:"very_light"},{function:"add_edge$(s, t)$",explanation:"unweight_add_edge_explanation",amount:"$O(1)$",constant_times:"very_light"},{function:"WeightedGraph$(size, i)$",explanation:"weight_constructor_explanation",amount:"$O(N)$",constant_times:"very_light"},{function:"add_edge$(s, t, c)$",explanation:"weight_add_edge_explanation",amount:"$O(1)$",constant_times:"very_light"}]}},c=n(347),l=n(348),d={components:{LibraryPage:o.a},data:function(){return{Japanese:c,English:l,dependent_list:r()}}},h=n(67),component=Object(h.a)(d,(function(){var t=this.$createElement;return(this._self._c||t)("LibraryPage",{attrs:{sourceRaw:"https://raw.githubusercontent.com/jellyfish26/competitive-library/master/graph/template.cpp",sourceGitHubLink:"https://github.com/jellyfish26/competitive-library/blob/master/graph/template.cpp",dependentList:this.dependent_list,japanese:this.Japanese.ja,english:this.English.en}})}),[],!1,null,null,null);e.default=component.exports}}]);