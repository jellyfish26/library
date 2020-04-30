(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{294:function(t,e,n){var content=n(298);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("4f4aef1d",content,!0,{sourceMap:!1})},295:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"ja":{"explanation":"説明","dependent_library":"依存ライブラリ","source_code":"ソースコード","reference":"リファレンス","function":"関数","calc_amount":"計算量","constant_multiple":"定数倍","very_light":"とても軽い","light":"軽い","very_heavy":"とても重い","normal":"普通"}}'),delete t.options._Ctor}},296:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"explanation":"Explanation","dependent_library":"Dependent Library","source_code":"Source Code","reference":"Reference","function":"Function","calc_amount":"Calculated Amount","constant_multiple":"Constant Multiple","very_light":"Very Light","light":"Light","very_heavy":"Very Heavy","normal":"Normal"}}'),delete t.options._Ctor}},297:function(t,e,n){"use strict";var o=n(294);n.n(o).a},298:function(t,e,n){(e=n(13)(!1)).push([t.i,".source-copy .v-icon{position:absolute;right:0;z-index:4}.source-github .v-icon{position:absolute}",""]),t.exports=e},299:function(t,e,n){"use strict";n(184),n(120),n(303),n(304);var o=n(305),c=n.n(o);var r={props:["src","link"],components:{Prism:function(){return n.e(21).then(n.t.bind(null,373,7))}},data:function(){return{copied:!1,source_code:""}},methods:{copySource:function(){var element;(element=this.$el.querySelector("pre")).setAttribute("contenteditable","true"),element.focus(),document.execCommand("selectAll",!1),document.execCommand("copy"),element.setAttribute("contenteditable","false")},openSource:function(){open(this.link,"_blank")}},mounted:function(){var t=this;c.a.get(this.src).then((function(e){return t.source_code=e.data}))}},l=(n(297),n(67)),_=n(94),d=n.n(_),h=n(369),f=n(137),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-card",{staticClass:"source-card",attrs:{outlined:"",color:"#2d2d2d"}},[e("div",{staticClass:"source-copy"},[e("v-icon",{attrs:{title:"Copy","aria-label":"Copy",size:"25",color:"white"},on:{click:this.copySource}},[this._v("\n      mdi-content-copy\n    ")])],1),this._v(" "),e("div",{staticClass:"source-github"},[e("v-icon",{attrs:{title:"View on GitHub","aria-label":"View on GitHub",color:"white",size:"25"},on:{click:this.openSource}},[this._v(" \n      mdi-github \n    ")])],1),this._v(" "),e("prism",{attrs:{language:"cpp",code:this.source_code}})],1)}),[],!1,null,null,null);e.a=component.exports;d()(component,{VCard:h.a,VIcon:f.a})},300:function(t,e,n){"use strict";var o=n(295),c=n.n(o);e.default=c.a},301:function(t,e,n){"use strict";var o=n(296),c=n.n(o);e.default=c.a},302:function(t,e,n){"use strict";var o={props:["sourceRaw","sourceGitHubLink","dependentList","japanese","english"],components:{SourceView:n(299).a},data:function(){return{dependent_libraries:"",reference_about:"",func_reference:""}},mounted:function(){this.$i18n.mergeLocaleMessage("ja",this.japanese),this.$i18n.mergeLocaleMessage("en",this.english),this.dependent_libraries=this.dependentList.dependent_libraries,this.reference_about=this.dependentList.reference_about,this.func_reference=this.dependentList.func_reference,window.MathJax&&(window.MathJax.Hub.Config({tex2jax:{inlineMath:[["$","$"]],displayMath:[["$$","$$"]],processEscapes:!0,processEnvironments:!0},displayAlign:"center","HTML-CSS":{fonts:["TeX"]}}),window.MathJax.Hub.Rerender(["Typeset",window.MathJax.Hub]))},head:function(){return{title:this.$t("library_name")}}},c=n(67),r=n(300),l=n(301),_=n(94),d=n.n(_),h=n(136),f=n(372),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-responsive",{staticClass:"mx-auto",attrs:{"max-width":"1024"}},[n("section",{staticClass:"mb-12"},[n("h1",{staticClass:"display-1 font-weight-bold mb-2"},[t._v(" "+t._s(t.$t("library_name"))+" ")]),t._v(" "),n("p",{staticClass:"font-weight-right title"},[t._v(" \n      "+t._s(t.$t("overview"))+"\n    ")])]),t._v(" "),n("section",{staticClass:"mb-12"},[n("h2",[t._v(" "+t._s(t.$t("explanation"))+" ")]),t._v(" "),n("p",[t._v(" "+t._s(t.$t("explanation_content")))])]),t._v(" "),t.dependent_libraries?n("section",{staticClass:"mb-12"},[n("h2",[t._v(" "+t._s(t.$t("dependent_library"))+" ")]),t._v(" "),t._l(t.dependent_libraries,(function(e){return n("ul",[n("li",[n("nuxt-link",{attrs:{to:t.localePath(e.link)}},[t._v(" "+t._s(t.$t(e.name))+" ")])],1)])}))],2):t._e(),t._v(" "),t.func_reference?n("section",{staticClass:"mb-12"},[n("h2",[t._v(" "+t._s(t.$t("reference"))+" ")]),t._v(" "),t.reference_about?n("p",[t._v(" "+t._s(t.$t("reference_about"))+" ")]):t._e(),t._v(" "),n("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("th",[t._v(" "+t._s(t.$t("function"))+" ")]),t._v(" "),n("th",{attrs:{width:"300sp"}},[t._v(" "+t._s(t.$t("explanation"))+" ")]),t._v(" "),n("th",[t._v(" "+t._s(t.$t("calc_amount"))+" ")]),t._v(" "),n("th",[t._v(" "+t._s(t.$t("constant_multiple"))+" ")])]),t._v(" "),n("tbody",t._l(t.func_reference,(function(e){return n("tr",{key:e.function},[n("td",[t._v(" "+t._s(e.function)+" ")]),t._v(" "),n("td",[t._v(" "+t._s(t.$t(e.explanation))+" ")]),t._v(" "),n("td",[t._v(" "+t._s(e.amount)+" ")]),t._v(" "),n("td",[t._v("  "+t._s(t.$t(e.constant_times))+" ")])])})),0)]},proxy:!0}],null,!1,207152778)})],1):t._e(),t._v(" "),n("section",{staticClass:"mb-12"},[n("h2",[t._v(" "+t._s(t.$t("source_code"))+" ")]),t._v(" "),n("SourceView",{attrs:{src:t.sourceRaw,link:t.sourceGitHubLink}})],1)])}),[],!1,null,null,null);"function"==typeof r.default&&Object(r.default)(component),"function"==typeof l.default&&Object(l.default)(component);e.a=component.exports;d()(component,{VResponsive:h.a,VSimpleTable:f.a})},357:function(t){t.exports=JSON.parse('{"ja":{"library_name":"組み合わせ","overview":"組み合わせを前計算で高速に求めるやつ，主に${}_nC_k$","explanation_content":"事前に階乗とその逆元を$O(N)$で求めて，${}_nC_k$, ${}_nP_k$, ${}_nH_k$を$O(1)$で求めることが出来る","constructor_explanation":"コンストラクタ，$N$までの組み合わせ等を求めることが出来るようにする","P_explanation":" ${}_nP_k$を求める，すなわち順列","C_explanation":" ${}_nC_k$を求める，すなわち組み合わせ","H_explanation":" ${}_nH_k$を求める，すなわち重複組み合わせ","modint":"ModInt"}}')},358:function(t){t.exports=JSON.parse('{"en":{"library_name":"Combination","overview":"By calculating in advance, the combination can be calculated quickly.","explanation_content":"We can find the factorial and its inverse in $O(N)$ in advance and find ${}_nC_k$, ${}_nP_k$, and ${}_nH_k$ in $O(1)$","constructor_explanation":"Constructors, combinations up to $N$, etc. can be computed.","P_explanation":"Compute ${}_nP_k$, i.e., the permutation","C_explanation":"Compute ${}_nC_k$, i.e., the combination","H_explanation":"Compute ${}_nH_k$, i.e., the combination with repetition","modint":"ModInt"}}')},381:function(t,e,n){"use strict";n.r(e);var o=n(302),c=function(){return{dependent_libraries:[{name:"modint",link:"mathematics-ModInt"}],func_reference:[{function:"Combination$(N)$",explanation:"constructor_explanation",amount:"$O(N)$",constant_times:"normal"},{function:"P$(n, k)$",explanation:"P_explanation",amount:"$O(1)$",constant_times:"very_light"},{function:"C$(n, k)$",explanation:"C_explanation",amount:"$O(1)$",constant_times:"very_light"},{function:"H$(n, k)$",explanation:"H_explanation",amount:"$O(1)$",constant_times:"very_light"}]}},r=n(357),l=n(358),_={components:{LibraryPage:o.a},data:function(){return{Japanese:r,English:l,dependent_list:c()}}},d=n(67),component=Object(d.a)(_,(function(){var t=this.$createElement;return(this._self._c||t)("LibraryPage",{attrs:{sourceRaw:"https://raw.githubusercontent.com/jellyfish26/competitive-library/master/math/Combination.cpp",sourceGitHubLink:"https://github.com/jellyfish26/competitive-library/blob/master/math/Combination.cpp",dependentList:this.dependent_list,japanese:this.Japanese.ja,english:this.English.en}})}),[],!1,null,null,null);e.default=component.exports}}]);