(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{294:function(t,e,n){var content=n(298);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("4f4aef1d",content,!0,{sourceMap:!1})},295:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"ja":{"explanation":"説明","dependent_library":"依存ライブラリ","source_code":"ソースコード","reference":"リファレンス","function":"関数","calc_amount":"計算量","constant_multiple":"定数倍","very_light":"とても軽い","light":"軽い"}}'),delete t.options._Ctor}},296:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"explanation":"Explanation","dependent_library":"Dependent Library","source_code":"Source Code","reference":"Reference","function":"Function","calc_amount":"Calculated Amount","constant_multiple":"Constant Multiple","very_light":"Very Light","light":"Light"}}'),delete t.options._Ctor}},297:function(t,e,n){"use strict";var o=n(294);n.n(o).a},298:function(t,e,n){(e=n(13)(!1)).push([t.i,".source-copy .v-icon{position:absolute;right:0;z-index:4}.source-github .v-icon{position:absolute}",""]),t.exports=e},299:function(t,e,n){"use strict";n(184),n(120),n(304),n(305);var o=n(306),r=n.n(o);var c={props:["src","link"],components:{Prism:function(){return n.e(16).then(n.t.bind(null,363,7))}},data:function(){return{copied:!1,source_code:""}},methods:{copySource:function(){var element;(element=this.$el.querySelector("pre")).setAttribute("contenteditable","true"),element.focus(),document.execCommand("selectAll",!1),document.execCommand("copy"),element.setAttribute("contenteditable","false")},openSource:function(){open(this.link,"_blank")}},mounted:function(){var t=this;r.a.get(this.src).then((function(e){return t.source_code=e.data}))}},l=(n(297),n(67)),h=n(94),_=n.n(h),f=n(359),d=n(137),component=Object(l.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-card",{staticClass:"source-card",attrs:{outlined:"",color:"#2d2d2d"}},[e("div",{staticClass:"source-copy"},[e("v-icon",{attrs:{title:"Copy","aria-label":"Copy",size:"25",color:"white"},on:{click:this.copySource}},[this._v("\n      mdi-content-copy\n    ")])],1),this._v(" "),e("div",{staticClass:"source-github"},[e("v-icon",{attrs:{title:"View on GitHub","aria-label":"View on GitHub",color:"white",size:"25"},on:{click:this.openSource}},[this._v(" \n      mdi-github \n    ")])],1),this._v(" "),e("prism",{attrs:{language:"cpp",code:this.source_code}})],1)}),[],!1,null,null,null);e.a=component.exports;_()(component,{VCard:f.a,VIcon:d.a})},300:function(t,e,n){"use strict";var o=n(295),r=n.n(o);e.default=r.a},301:function(t,e,n){"use strict";var o=n(296),r=n.n(o);e.default=r.a},302:function(t,e,n){"use strict";var o=n(299),r={props:["formula"],watch:{formula:function(){this.renderMathJax()}},mounted:function(){this.renderMathJax()},methods:{renderMathJax:function(){this.$refs.mathJaxElement.innerHTML=this.formula,window.MathJax&&(window.MathJax.Hub.Config({tex2jax:{inlineMath:[["$","$"]],displayMath:[["$$","$$"]],processEscapes:!0,processEnvironments:!0},displayAlign:"center","HTML-CSS":{fonts:["TeX"]}}),window.MathJax.Hub.Queue(["Typeset",window.MathJax.Hub,this.$refs.mathJaxElement]))}}},c=n(67),l=Object(c.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("span",{ref:"mathJaxElement"},[this._v(this._s(this.formula))])}),[],!1,null,null,null).exports,h={props:["sourceRaw","sourceGitHubLink","dependentList","japanese","english"],components:{SourceView:o.a,MathJax2:l},data:function(){return{dependent_libraries:"",reference_about:"",func_reference:""}},mounted:function(){this.$i18n.mergeLocaleMessage("ja",this.japanese),this.$i18n.mergeLocaleMessage("en",this.english),this.dependent_libraries=this.dependentList.dependent_libraries,this.reference_about=this.dependentList.reference_about,this.func_reference=this.dependentList.func_reference},head:function(){return{title:this.$t("library_name")}}},_=n(300),f=n(301),d=n(94),m=n.n(d),$=n(136),v=n(362),x=Object(c.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-responsive",{staticClass:"mx-auto",attrs:{"max-width":"1024"}},[n("section",{staticClass:"mb-12"},[n("h1",{staticClass:"display-1 font-weight-bold mb-2"},[t._v(" "+t._s(t.$t("library_name"))+" ")]),t._v(" "),n("p",{staticClass:"font-weight-right title"},[n("MathJax2",{attrs:{formula:t.$t("overview")}})],1)]),t._v(" "),n("section",{staticClass:"mb-12"},[n("h2",[t._v(" "+t._s(t.$t("explanation"))+" ")]),t._v(" "),n("p",[n("MathJax2",{attrs:{formula:t.$t("explanation_content")}})],1)]),t._v(" "),t.dependent_libraries?n("section",{staticClass:"mb-12"},[n("h2",[t._v(" "+t._s(t.$t("dependent_library"))+" ")]),t._v(" "),t._l(t.dependent_libraries,(function(e){return n("ul",[n("li",[n("nuxt-link",{attrs:{to:t.localePath(e.link)}},[t._v(" "+t._s(t.$t(e.name))+" ")])],1)])}))],2):t._e(),t._v(" "),t.func_reference?n("section",{staticClass:"mb-12"},[n("h2",[t._v(" "+t._s(t.$t("reference"))+" ")]),t._v(" "),t.reference_about?n("p",[n("MathJax2",{attrs:{formula:t.$t(t.reference_about)}})],1):t._e(),t._v(" "),n("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("th",{attrs:{width:"250sp"}},[t._v(" "+t._s(t.$t("function"))+" ")]),t._v(" "),n("th",{attrs:{width:"300sp"}},[t._v(" "+t._s(t.$t("explanation"))+" ")]),t._v(" "),n("th",[t._v(" "+t._s(t.$t("calc_amount"))+" ")]),t._v(" "),n("th",[t._v(" "+t._s(t.$t("constant_multiple"))+" ")])]),t._v(" "),n("tbody",t._l(t.func_reference,(function(e){return n("tr",{key:e.function},[n("td",[n("MathJax2",{attrs:{formula:e.function}})],1),t._v(" "),n("td",[n("MathJax2",{attrs:{formula:t.$t(e.explanation)}})],1),t._v(" "),n("td",[n("MathJax2",{attrs:{formula:e.amount}})],1),t._v(" "),n("td",[n("MathJax2",{attrs:{formula:t.$t(e.constant_times)}})],1)])})),0)]},proxy:!0}],null,!1,3476379124)})],1):t._e(),t._v(" "),n("section",{staticClass:"mb-12"},[n("h2",[t._v(" "+t._s(t.$t("source_code"))+" ")]),t._v(" "),n("SourceView",{attrs:{src:t.sourceRaw,link:t.sourceGitHubLink}})],1)])}),[],!1,null,null,null);"function"==typeof _.default&&Object(_.default)(x),"function"==typeof f.default&&Object(f.default)(x);e.a=x.exports;m()(x,{VResponsive:$.a,VSimpleTable:v.a})},351:function(t){t.exports=JSON.parse('{"ja":{"library_name":"単一始点最短経路(ダイクストラ)","overview":"負辺の無いグラフにおいて，1つの頂点からの最短距離を求めるアルゴリズム．","explanation_content":"負辺の無いグラフにおいて，単一始点最短経路を求めるアルゴリズム．値の挿入と最小値の取り出しにヒープ(PriorityQueue)を用いると，高速化でき，単一始点最短経路を$O(ElogV)$で求めることが出来る．","reference_about":"新たに最短経路を求める場合vectorの初期化が行われるため$O(V)$かかることに注意する必要がある．","constructor_explanation":"コンストラクタ，重み付きグラフで初期化を行なう.","query_overwrite_explanation":"最短距離がすでに求まっているかどうかにかかわらず，強制的に新たに$s$から$e$への最短距離を求める．到達出来ない場合はINFが返る．","query_explanation":"$s$から$e$への最短距離を求める．到達出来ない場合はINFが返る．始点からの最短距離がすでに求まっている場合は$O(1)$で求めることが可能．","query_noreturn_explanation":"$s$から全点の最短経路を求めて，データを保存する．別のquery関数かoperator[ ]で参照してください．","operator_reference_explanation":"$s$から全点の最短経路が保存されているvectorを参照","graph_template":"テンプレート"}}')},352:function(t){t.exports=JSON.parse('{"en":{"library_name":"Single Source Shortest Path(Dijkstra)","overview":"Algorithm to find the shortest distance from a single vertex in a graph without negative edges.","explanation_content":"Algorithm to find the single source shortest path for a graph with no negative edges. Using heap (PriorityQueue) for value insertion and minimum value extraction, we can speed up the process and obtain the single source shortest path with $O(ElogV)$.","reference_about":"Note that finding a new shortest path takes $O(V)$ because the initialization of the vector is done.","constructor_explanation":"Constructor, initializing with a weighted graph.","query_overwrite_explanation":"Forcibly find a new shortest distance from $s$ to $e$, regardless of whether the shortest distance has already been obtained. The INF is returned if it cannot be reached.","query_explanation":"Find the shortest distance from $s$ to $e$. The INF is returned if it cannot be reached. If the shortest distance from the starting point is already known, it can be calculated by $O(1)$.","query_noreturn_explanation":"Find the shortest path of all points from $s$ and save the data. Refer to another query function or to the operator[ ].","operator_reference_explanation":"Refer to the vector where the shortest path of all points from $s$ is stored","graph_template":"Template"}}')},368:function(t,e,n){"use strict";n.r(e);var o=n(302),r=function(){return{reference_about:"reference_about",dependent_libraries:[{name:"graph_template",link:"graph-template"}],func_reference:[{function:"Dijkstra$(graph)$",explanation:"constructor_explanation",amount:"$O(V)$",constant_times:"very_light"},{function:"query_overwrite$(s, e, INF)$",explanation:"query_overwrite_explanation",amount:"$O(ElogV)$",constant_times:"light"},{function:"query$(s, e, INF)$",explanation:"query_explanation",amount:"$O(ElogV)$ or $O(1)$",constant_times:"light"},{function:"query$(s, INF)$",explanation:"query_noreturn_explanation",amount:"$O(ElogV)$ or $O(1)$",constant_times:"light"},{function:"operator[$s$]",explanation:"operator_reference_explanation",amount:"$O(1)$",constant_times:"very_light"}]}},c=n(351),l=n(352),h={components:{LibraryPage:o.a},data:function(){return{Japanese:c,English:l,dependent_list:r()}}},_=n(67),component=Object(_.a)(h,(function(){var t=this.$createElement;return(this._self._c||t)("LibraryPage",{attrs:{sourceRaw:"https://raw.githubusercontent.com/jellyfish26/competitive-library/master/graph/Dijkstra.cpp",sourceGitHubLink:"https://github.com/jellyfish26/competitive-library/blob/master/graph/Dijkstra.cpp",dependentList:this.dependent_list,japanese:this.Japanese.ja,english:this.English.en}})}),[],!1,null,null,null);e.default=component.exports}}]);