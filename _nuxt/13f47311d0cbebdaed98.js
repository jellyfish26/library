(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{294:function(e,t,n){var content=n(298);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(14).default)("4f4aef1d",content,!0,{sourceMap:!1})},295:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"ja":{"explanation":"説明","dependent_library":"依存ライブラリ","source_code":"ソースコード","reference":"リファレンス","function":"関数","calc_amount":"計算量","constant_multiple":"定数倍","very_light":"とても軽い","light":"軽い"}}'),delete e.options._Ctor}},296:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"en":{"explanation":"Explanation","dependent_library":"Dependent Library","source_code":"Source Code","reference":"Reference","function":"Function","calc_amount":"Calculated Amount","constant_multiple":"Constant Multiple","very_light":"Very Light","light":"Light"}}'),delete e.options._Ctor}},297:function(e,t,n){"use strict";var o=n(294);n.n(o).a},298:function(e,t,n){(t=n(13)(!1)).push([e.i,".source-copy .v-icon{position:absolute;right:0;z-index:4}.source-github .v-icon{position:absolute}",""]),e.exports=t},299:function(e,t,n){"use strict";n(184),n(120),n(304),n(305);var o=n(306),r=n.n(o);var c={props:["src","link"],components:{Prism:function(){return n.e(18).then(n.t.bind(null,367,7))}},data:function(){return{copied:!1,source_code:""}},methods:{copySource:function(){var element;(element=this.$el.querySelector("pre")).setAttribute("contenteditable","true"),element.focus(),document.execCommand("selectAll",!1),document.execCommand("copy"),element.setAttribute("contenteditable","false")},openSource:function(){open(this.link,"_blank")}},mounted:function(){var e=this;r.a.get(this.src).then((function(t){return e.source_code=t.data}))}},l=(n(297),n(67)),_=n(94),h=n.n(_),d=n(363),f=n(137),component=Object(l.a)(c,(function(){var e=this.$createElement,t=this._self._c||e;return t("v-card",{staticClass:"source-card",attrs:{outlined:"",color:"#2d2d2d"}},[t("div",{staticClass:"source-copy"},[t("v-icon",{attrs:{title:"Copy","aria-label":"Copy",size:"25",color:"white"},on:{click:this.copySource}},[this._v("\n      mdi-content-copy\n    ")])],1),this._v(" "),t("div",{staticClass:"source-github"},[t("v-icon",{attrs:{title:"View on GitHub","aria-label":"View on GitHub",color:"white",size:"25"},on:{click:this.openSource}},[this._v(" \n      mdi-github \n    ")])],1),this._v(" "),t("prism",{attrs:{language:"cpp",code:this.source_code}})],1)}),[],!1,null,null,null);t.a=component.exports;h()(component,{VCard:d.a,VIcon:f.a})},300:function(e,t,n){"use strict";var o=n(295),r=n.n(o);t.default=r.a},301:function(e,t,n){"use strict";var o=n(296),r=n.n(o);t.default=r.a},302:function(e,t,n){"use strict";var o={props:["sourceRaw","sourceGitHubLink","dependentList","japanese","english"],components:{SourceView:n(299).a},data:function(){return{dependent_libraries:"",reference_about:"",func_reference:""}},mounted:function(){this.$i18n.mergeLocaleMessage("ja",this.japanese),this.$i18n.mergeLocaleMessage("en",this.english),this.dependent_libraries=this.dependentList.dependent_libraries,this.reference_about=this.dependentList.reference_about,this.func_reference=this.dependentList.func_reference,window.MathJax&&(window.MathJax.Hub.Config({tex2jax:{inlineMath:[["$","$"]],displayMath:[["$$","$$"]],processEscapes:!0,processEnvironments:!0},displayAlign:"center","HTML-CSS":{fonts:["TeX"]}}),window.MathJax.Hub.Rerender(["Typeset",window.MathJax.Hub]))},head:function(){return{title:this.$t("library_name")}}},r=n(67),c=n(300),l=n(301),_=n(94),h=n.n(_),d=n(136),f=n(366),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-responsive",{staticClass:"mx-auto",attrs:{"max-width":"1024"}},[n("section",{staticClass:"mb-12"},[n("h1",{staticClass:"display-1 font-weight-bold mb-2"},[e._v(" "+e._s(e.$t("library_name"))+" ")]),e._v(" "),n("p",{staticClass:"font-weight-right title"},[e._v(" \n      "+e._s(e.$t("overview"))+"\n    ")])]),e._v(" "),n("section",{staticClass:"mb-12"},[n("h2",[e._v(" "+e._s(e.$t("explanation"))+" ")]),e._v(" "),n("p",[e._v(" "+e._s(e.$t("explanation_content")))])]),e._v(" "),e.dependent_libraries?n("section",{staticClass:"mb-12"},[n("h2",[e._v(" "+e._s(e.$t("dependent_library"))+" ")]),e._v(" "),e._l(e.dependent_libraries,(function(t){return n("ul",[n("li",[n("nuxt-link",{attrs:{to:e.localePath(t.link)}},[e._v(" "+e._s(e.$t(t.name))+" ")])],1)])}))],2):e._e(),e._v(" "),e.func_reference?n("section",{staticClass:"mb-12"},[n("h2",[e._v(" "+e._s(e.$t("reference"))+" ")]),e._v(" "),e.reference_about?n("p",[e._v(" "+e._s(e.$t("reference_about"))+" ")]):e._e(),e._v(" "),n("v-simple-table",{scopedSlots:e._u([{key:"default",fn:function(){return[n("thead",[n("th",{attrs:{width:"250sp"}},[e._v(" "+e._s(e.$t("function"))+" ")]),e._v(" "),n("th",{attrs:{width:"300sp"}},[e._v(" "+e._s(e.$t("explanation"))+" ")]),e._v(" "),n("th",[e._v(" "+e._s(e.$t("calc_amount"))+" ")]),e._v(" "),n("th",[e._v(" "+e._s(e.$t("constant_multiple"))+" ")])]),e._v(" "),n("tbody",e._l(e.func_reference,(function(t){return n("tr",{key:t.function},[n("td",[e._v(" "+e._s(t.function)+" ")]),e._v(" "),n("td",[e._v(" "+e._s(e.$t(t.explanation))+" ")]),e._v(" "),n("td",[e._v(" "+e._s(t.amount)+" ")]),e._v(" "),n("td",[e._v("  "+e._s(e.$t(t.constant_times))+" ")])])})),0)]},proxy:!0}],null,!1,707723444)})],1):e._e(),e._v(" "),n("section",{staticClass:"mb-12"},[n("h2",[e._v(" "+e._s(e.$t("source_code"))+" ")]),e._v(" "),n("SourceView",{attrs:{src:e.sourceRaw,link:e.sourceGitHubLink}})],1)])}),[],!1,null,null,null);"function"==typeof c.default&&Object(c.default)(component),"function"==typeof l.default&&Object(l.default)(component);t.a=component.exports;h()(component,{VResponsive:d.a,VSimpleTable:f.a})},355:function(e){e.exports=JSON.parse('{"ja":{"library_name":"単一始点最短経路(ダイクストラ)","overview":"負辺の無いグラフにおいて，1つの頂点からの最短距離を求めるアルゴリズム．","explanation_content":"負辺の無いグラフにおいて，単一始点最短経路を求めるアルゴリズム．値の挿入と最小値の取り出しにヒープ(PriorityQueue)を用いると，高速化でき，単一始点最短経路を$O(ElogV)$で求めることが出来る．","reference_about":"新たに最短経路を求める場合vectorの初期化が行われるため$O(V)$かかることに注意する必要がある．","constructor_explanation":"コンストラクタ，重み付きグラフで初期化を行なう.","query_overwrite_explanation":"最短距離がすでに求まっているかどうかにかかわらず，強制的に新たに$s$から$e$への最短距離を求める．到達出来ない場合はINFが返る．","query_explanation":"$s$から$e$への最短距離を求める．到達出来ない場合はINFが返る．始点からの最短距離がすでに求まっている場合は$O(1)$で求めることが可能．","query_noreturn_explanation":"$s$から全点の最短経路を求めて，データを保存する．別のquery関数かoperator[ ]で参照してください．","operator_reference_explanation":"$s$から全点の最短経路が保存されているvectorを参照","graph_template":"テンプレート"}}')},356:function(e){e.exports=JSON.parse('{"en":{"library_name":"Single Source Shortest Path(Dijkstra)","overview":"Algorithm to find the shortest distance from a single vertex in a graph without negative edges.","explanation_content":"Algorithm to find the single source shortest path for a graph with no negative edges. Using heap (PriorityQueue) for value insertion and minimum value extraction, we can speed up the process and obtain the single source shortest path with $O(ElogV)$.","reference_about":"Note that finding a new shortest path takes $O(V)$ because the initialization of the vector is done.","constructor_explanation":"Constructor, initializing with a weighted graph.","query_overwrite_explanation":"Forcibly find a new shortest distance from $s$ to $e$, regardless of whether the shortest distance has already been obtained. The INF is returned if it cannot be reached.","query_explanation":"Find the shortest distance from $s$ to $e$. The INF is returned if it cannot be reached. If the shortest distance from the starting point is already known, it can be calculated by $O(1)$.","query_noreturn_explanation":"Find the shortest path of all points from $s$ and save the data. Refer to another query function or to the operator[ ].","operator_reference_explanation":"Refer to the vector where the shortest path of all points from $s$ is stored","graph_template":"Template"}}')},374:function(e,t,n){"use strict";n.r(t);var o=n(302),r=function(){return{reference_about:"reference_about",dependent_libraries:[{name:"graph_template",link:"graph-template"}],func_reference:[{function:"Dijkstra$(graph)$",explanation:"constructor_explanation",amount:"$O(V)$",constant_times:"very_light"},{function:"query_overwrite$(s, e, INF)$",explanation:"query_overwrite_explanation",amount:"$O(ElogV)$",constant_times:"light"},{function:"query$(s, e, INF)$",explanation:"query_explanation",amount:"$O(ElogV)$ or $O(1)$",constant_times:"light"},{function:"query$(s, INF)$",explanation:"query_noreturn_explanation",amount:"$O(ElogV)$ or $O(1)$",constant_times:"light"},{function:"operator[$s$]",explanation:"operator_reference_explanation",amount:"$O(1)$",constant_times:"very_light"}]}},c=n(355),l=n(356),_={components:{LibraryPage:o.a},data:function(){return{Japanese:c,English:l,dependent_list:r()}}},h=n(67),component=Object(h.a)(_,(function(){var e=this.$createElement;return(this._self._c||e)("LibraryPage",{attrs:{sourceRaw:"https://raw.githubusercontent.com/jellyfish26/competitive-library/master/graph/Dijkstra.cpp",sourceGitHubLink:"https://github.com/jellyfish26/competitive-library/blob/master/graph/Dijkstra.cpp",dependentList:this.dependent_list,japanese:this.Japanese.ja,english:this.English.en}})}),[],!1,null,null,null);t.default=component.exports}}]);