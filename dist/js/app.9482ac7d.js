(function(e){function t(t){for(var c,r,l=t[0],i=t[1],s=t[2],p=0,u=[];p<l.length;p++)r=l[p],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&u.push(n[r][0]),n[r]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);d&&d(t);while(u.length)u.shift()();return a.push.apply(a,s||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],c=!0,l=1;l<o.length;l++){var i=o[l];0!==n[i]&&(c=!1)}c&&(a.splice(t--,1),e=r(r.s=o[0]))}return e}var c={},n={app:0},a=[];function r(t){if(c[t])return c[t].exports;var o=c[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=c,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)r.d(o,c,function(t){return e[t]}.bind(null,c));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var d=i;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"04b3":function(e,t,o){e.exports=o.p+"img/close.957adf1d.png"},"077a":function(e,t,o){e.exports=o.p+"img/preloader1.7ac4753e.gif"},"0a4d":function(e,t,o){"use strict";o("c74f")},"0f5c":function(e,t,o){e.exports=o.p+"img/right2.b268f3b3.png"},"110f":function(e,t,o){"use strict";o("6a14")},"1e5e":function(e,t,o){e.exports=o.p+"img/search.11f89aae.png"},"1faf":function(e,t,o){e.exports=o.p+"img/back.f1fa03ae.png"},"2fc0":function(e,t,o){},"440d":function(e,t,o){e.exports=o.p+"img/logo2.3fd9326a.png"},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var c=o("7a23"),n=o("1e5e"),a=o.n(n),r=o("04b3"),l=o.n(r),i=o("077a"),s=o.n(i),d={class:"wallet"},p={key:0,class:"wallet-ok-img",src:a.a},u={key:1,class:"wallet-ok-img1",src:l.a},b={key:2,class:"wallet-ok-img2",src:s.a};function m(e,t,o,n,a,r){var l=Object(c["resolveComponent"])("Header"),i=Object(c["resolveComponent"])("Table");return Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],null,[Object(c["createVNode"])(l,{onSearch:r.searchingCoin},null,8,["onSearch"]),Object(c["createVNode"])("div",d,[Object(c["createVNode"])("input",{id:"wltsrc",class:"wallet-search",type:"text",onInput:t[1]||(t[1]=function(){return r.changeWlt&&r.changeWlt.apply(r,arguments)}),placeholder:"Wallet..."},null,32),Object(c["createVNode"])("div",{class:"wallet-ok",onClick:t[2]||(t[2]=function(){return r.searchWallet&&r.searchWallet.apply(r,arguments)})},[a.buttonSrc?(Object(c["openBlock"])(),Object(c["createBlock"])("img",p)):Object(c["createCommentVNode"])("",!0),a.buttonSrc?Object(c["createCommentVNode"])("",!0):(Object(c["openBlock"])(),Object(c["createBlock"])("img",u)),a.preload2?(Object(c["openBlock"])(),Object(c["createBlock"])("img",b)):Object(c["createCommentVNode"])("",!0)])]),Object(c["createVNode"])(i,{sumData:a.sumData,tableVis:a.tableVis,prelod1:a.prelod1,onPoAlfavity:r.poalfavity,onData:e.onData},null,8,["sumData","tableVis","prelod1","onPoAlfavity","onData"])],64)}o("4de4"),o("caad"),o("2532"),o("d3b7"),o("159b"),o("fb6a"),o("820e"),o("3ca3"),o("ddb0"),o("d81d"),o("b64b");var h=o("440d"),g=o.n(h),f=o("f68c"),O=o.n(f),j=o("0f5c"),v=o.n(j),y=o("c6e1"),k=o.n(y),V=Object(c["withScopeId"])("data-v-3f2b3eff");Object(c["pushScopeId"])("data-v-3f2b3eff");var N={class:"header"},w={class:"header-logotype"},C=Object(c["createVNode"])("img",{class:"header-logotype-img",src:g.a},null,-1),B=Object(c["createVNode"])("img",{class:"header-search-img",src:O.a},null,-1),S={id:"srcInput",class:"src"},x=Object(c["createVNode"])("h3",{style:{"margin-right":"5px"}},"Coin:",-1),_=Object(c["createVNode"])("img",{class:"header-search-img",src:v.a},null,-1),I=Object(c["createVNode"])("img",{class:"head-menu-img",src:k.a},null,-1);Object(c["popScopeId"])();var D=V((function(e,t,o,n,a,r){var l=Object(c["resolveComponent"])("Menu");return Object(c["openBlock"])(),Object(c["createBlock"])("div",N,[Object(c["createVNode"])("div",w,[C,Object(c["createVNode"])("h3",{onClick:t[1]||(t[1]=function(){return r.reload&&r.reload.apply(r,arguments)})},"p2p-spb.xyz")]),Object(c["createVNode"])("div",{id:"srcIcon",onClick:t[2]||(t[2]=function(){return r.searchShow&&r.searchShow.apply(r,arguments)}),class:"search"},[B]),Object(c["createVNode"])("div",S,[x,Object(c["createVNode"])("input",{class:"coinsearch",type:"text",placeholder:"Search...",onInput:t[3]||(t[3]=function(){return r.searching&&r.searching.apply(r,arguments)})},null,32),Object(c["createVNode"])("div",{onClick:t[4]||(t[4]=function(){return r.searchClose&&r.searchClose.apply(r,arguments)}),class:"search"},[_])]),Object(c["createVNode"])("div",{class:"head-menu",onClick:t[5]||(t[5]=function(t){return e.menuVis=!e.menuVis})},[I]),e.menuVis?(Object(c["openBlock"])(),Object(c["createBlock"])(l,{key:0,onCloseMenu:t[6]||(t[6]=function(t){return e.menuVis=!e.menuVis})})):Object(c["createCommentVNode"])("",!0)])})),T=Object(c["withScopeId"])("data-v-29a29345");Object(c["pushScopeId"])("data-v-29a29345");var H=Object(c["createVNode"])("div",{class:"menu"},[Object(c["createVNode"])("h3",null,"Add"),Object(c["createVNode"])("h3",null,"About")],-1);Object(c["popScopeId"])();var M=T((function(e,t,o,n,a,r){return Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],null,[Object(c["createVNode"])("div",{onClick:t[1]||(t[1]=function(){return r.closeMunu&&r.closeMunu.apply(r,arguments)}),class:"fon"}),H],64)})),E={data:function(){return{greeting:"goodbye"}},methods:{closeMunu:function(){this.$emit("closeMenu")}}};o("eb61");E.render=M,E.__scopeId="data-v-29a29345";var A=E,P={components:{Menu:A},data:function(){return{greeting:"hello",menuVis:!1}},methods:{reload:function(){location.reload()},searching:function(e){var t=e.target.value;this.$emit("search",t)},searchShow:function(){var e=document.getElementById("srcIcon");e.style.display="none";var t=document.getElementById("srcInput");t.style.display="flex"},searchClose:function(){var e=document.getElementById("srcIcon");e.style.display="flex";var t=document.getElementById("srcInput");t.style.display="none"}}};o("a364");P.render=D,P.__scopeId="data-v-3f2b3eff";var z=P,F=Object(c["withScopeId"])("data-v-653d52ae");Object(c["pushScopeId"])("data-v-653d52ae");var L={key:0,class:"table-head"},R={key:1,class:"preloder-img",src:s.a},W={class:"table"},G={class:"table-coin"},U={class:"table-symbol"},$={class:"table-data"},q={class:"table-data"},K={class:"table-data"},Q={class:"table-data"},X={class:"table-data"};Object(c["popScopeId"])();var Y=F((function(e,t,o,n,a,r){var l=Object(c["resolveComponent"])("Coin");return Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],null,[o.tableVis?(Object(c["openBlock"])(),Object(c["createBlock"])("div",L,[Object(c["createVNode"])("div",{class:"table-head-item",onClick:t[1]||(t[1]=function(){return e.poalfavity&&e.poalfavity.apply(e,arguments)})}," Coin "),Object(c["createVNode"])("div",{class:"table-head-item",onClick:t[2]||(t[2]=function(){return e.pononehash&&e.pononehash.apply(e,arguments)})}," Pool hashrate "),Object(c["createVNode"])("div",{class:"table-head-item",onClick:t[3]||(t[3]=function(){return e.pohashrate&&e.pohashrate.apply(e,arguments)})}," Network hashrate "),Object(c["createVNode"])("div",{class:"table-head-item",onClick:t[4]||(t[4]=function(){return e.postaleprop&&e.postaleprop.apply(e,arguments)})}," Users "),Object(c["createVNode"])("div",{class:"table-head-item",onClick:t[5]||(t[5]=function(){return e.pomindiff&&e.pomindiff.apply(e,arguments)})}," Expected time to block "),Object(c["createVNode"])("div",{class:"table-head-item",onClick:t[6]||(t[6]=function(){return e.poblock&&e.poblock.apply(e,arguments)})}," Price ")])):Object(c["createCommentVNode"])("",!0),o.prelod1?(Object(c["openBlock"])(),Object(c["createBlock"])("img",R)):Object(c["createCommentVNode"])("",!0),Object(c["createVNode"])("div",W,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(o.sumData,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])("div",{key:e,class:"table-body"},[Object(c["createVNode"])("div",{id:e.port,class:"table-row",onClick:t[7]||(t[7]=function(){return r.chooseCoin&&r.chooseCoin.apply(r,arguments)})},[Object(c["createVNode"])("div",G,[Object(c["createVNode"])("img",{class:"table-row-img",src:e.img},null,8,["src"]),Object(c["createVNode"])("span",U,Object(c["toDisplayString"])(e.symbol),1)]),Object(c["createVNode"])("div",$,Object(c["toDisplayString"])(e.pool_hash_rate),1),Object(c["createVNode"])("div",q,Object(c["toDisplayString"])(e.network_hashrate),1),Object(c["createVNode"])("div",K,Object(c["toDisplayString"])(e.countUsers),1),Object(c["createVNode"])("div",Q,Object(c["toDisplayString"])(e.expectedTime),1),Object(c["createVNode"])("div",X,Object(c["toDisplayString"])(e.price),1)],8,["id"])])})),128))]),e.coinVis?(Object(c["openBlock"])(),Object(c["createBlock"])(l,{key:2,onCloseCoin:r.close,coinInf:e.coinInf,stratums:e.stratums,recentBlocks:e.recentBlocks,arrHash:e.arrHash,coinNum:e.coinNum},null,8,["onCloseCoin","coinInf","stratums","recentBlocks","arrHash","coinNum"])):Object(c["createCommentVNode"])("",!0)],64)})),J=(o("7db0"),o("1faf")),Z=o.n(J),ee=Object(c["withScopeId"])("data-v-5d4d8fb4");Object(c["pushScopeId"])("data-v-5d4d8fb4");var te={class:"coin"},oe={class:"header"},ce=Object(c["createVNode"])("img",{class:"header-back-img",src:Z.a},null,-1),ne={class:"coin-name1"},ae={class:"cion-close"},re=Object(c["createVNode"])("g",{id:"Cancel"},[Object(c["createVNode"])("path",{"clip-rule":"evenodd",d:"M16,0C7.163,0,0,7.163,0,16c0,8.836,7.163,16,16,16   c8.836,0,16-7.163,16-16C32,7.163,24.836,0,16,0z M16,30C8.268,30,2,23.732,2,16C2,8.268,8.268,2,16,2s14,6.268,14,14   C30,23.732,23.732,30,16,30z",fill:"#31708f","fill-rule":"evenodd"}),Object(c["createVNode"])("path",{"clip-rule":"evenodd",d:"M22.729,21.271l-5.268-5.269l5.238-5.195   c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.39-1.034-0.39-1.428,0l-5.231,5.188l-5.309-5.31c-0.394-0.396-1.034-0.396-1.428,0   c-0.394,0.395-0.394,1.037,0,1.432l5.301,5.302l-5.331,5.287c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.429,0   l5.324-5.28l5.276,5.276c0.394,0.396,1.034,0.396,1.428,0C23.123,22.308,23.123,21.667,22.729,21.271z",fill:"#31708f","fill-rule":"evenodd"})],-1),le={class:"coin-name"},ie={class:"scroll"},se=Object(c["createVNode"])("h3",null,"Status",-1),de={class:"coin-row"},pe={class:"coin-colum1"},ue={class:"coin-table"},be=Object(c["createVNode"])("td",null,"Pool hashrate",-1),me=Object(c["createVNode"])("td",null,"Network hashrate",-1),he=Object(c["createVNode"])("td",null,"Current block value",-1),ge=Object(c["createVNode"])("td",null,"Network block difficulty",-1),fe=Object(c["createVNode"])("td",null,"Share difficulty (pool minimum)",-1),Oe=Object(c["createVNode"])("td",null,"Expected time to block (pool)",-1),je={class:"coin-colum2"},ve={class:"coin-row2"};Object(c["popScopeId"])();var ye=ee((function(e,t,o,n,a,r){var l=Object(c["resolveComponent"])("Blocks"),i=Object(c["resolveComponent"])("Chart"),s=Object(c["resolveComponent"])("Stratum");return Object(c["openBlock"])(),Object(c["createBlock"])("div",te,[Object(c["createVNode"])("div",oe,[Object(c["createVNode"])("div",{class:"header-back",onClick:t[1]||(t[1]=function(){return r.closecoin&&r.closecoin.apply(r,arguments)})},[ce]),Object(c["createVNode"])("div",ne,[Object(c["createVNode"])("img",{class:"coin-img",src:o.coinInf.img},null,8,["src"]),Object(c["createTextVNode"])(" "+Object(c["toDisplayString"])(o.coinInf.symbol),1)])]),Object(c["createVNode"])("div",ae,[(Object(c["openBlock"])(),Object(c["createBlock"])("svg",{class:"cion-close-img",onClick:t[2]||(t[2]=function(){return r.closecoin&&r.closecoin.apply(r,arguments)}),"enable-background":"new 0 0 32 32",height:"32px",id:"Слой_1",version:"1.1",viewBox:"0 0 32 32",width:"32px","xml:space":"preserve",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},[re]))]),Object(c["createVNode"])("div",le,[Object(c["createVNode"])("img",{class:"coin-img",src:o.coinInf.img},null,8,["src"]),Object(c["createTextVNode"])(" "+Object(c["toDisplayString"])(o.coinInf.symbol),1)]),Object(c["createVNode"])("div",ie,[se,Object(c["createVNode"])("div",de,[Object(c["createVNode"])("div",pe,[Object(c["createVNode"])("table",ue,[Object(c["createVNode"])("tr",null,[be,Object(c["createVNode"])("td",null,Object(c["toDisplayString"])(o.coinInf.pool_hash_rate),1)]),Object(c["createVNode"])("tr",null,[me,Object(c["createVNode"])("td",null,Object(c["toDisplayString"])(o.coinInf.network_hashrate),1)]),Object(c["createVNode"])("tr",null,[he,Object(c["createVNode"])("td",null,Object(c["toDisplayString"])(o.coinInf.block_value),1)]),Object(c["createVNode"])("tr",null,[ge,Object(c["createVNode"])("td",null,Object(c["toDisplayString"])(o.coinInf.network_block_difficulty),1)]),Object(c["createVNode"])("tr",null,[fe,Object(c["createVNode"])("td",null,Object(c["toDisplayString"])(o.coinInf.min_difficulty),1)]),Object(c["createVNode"])("tr",null,[Oe,Object(c["createVNode"])("td",null,Object(c["toDisplayString"])(o.coinInf.expectedTime),1)]),Object(c["createVNode"])("div",{class:"resent-bloks",onClick:t[3]||(t[3]=function(){return r.openBlocks&&r.openBlocks.apply(r,arguments)})},"Resent blocks... "),e.bloсkVis?(Object(c["openBlock"])(),Object(c["createBlock"])(l,{key:0,recentBlocks:o.recentBlocks,onCloseBlocks:r.closeblocks},null,8,["recentBlocks","onCloseBlocks"])):Object(c["createCommentVNode"])("",!0)])]),Object(c["createVNode"])("div",je,[Object(c["createVNode"])(i,{arrTime:o.arrTime,arrHash:o.arrHash,coinNum:o.coinNum},null,8,["arrTime","arrHash","coinNum"])])]),Object(c["createVNode"])("div",ve,[Object(c["createVNode"])(s,{stratums:o.stratums},null,8,["stratums"])])])])})),ke=Object(c["withScopeId"])("data-v-f4dd8d46");Object(c["pushScopeId"])("data-v-f4dd8d46");var Ve={class:"select-period"},Ne={class:"select-period-box"},we={class:"select-period-text"},Ce={class:"select-period-box"};Object(c["popScopeId"])();var Be=ke((function(e,t,o,n,a,r){var l=Object(c["resolveComponent"])("highcharts");return Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],null,[Object(c["createVNode"])("div",Ve,[Object(c["createVNode"])("div",Ne,[Object(c["createVNode"])("img",{class:"select-period-img-left",src:O.a,onClick:t[1]||(t[1]=function(){return r.left&&r.left.apply(r,arguments)})})]),Object(c["createVNode"])("div",we,Object(c["toDisplayString"])(a.arrPeriod[a.period]),1),Object(c["createVNode"])("div",Ce,[Object(c["createVNode"])("img",{class:"select-period-img-right",src:v.a,onClick:t[2]||(t[2]=function(){return r.right&&r.right.apply(r,arguments)})})])]),a.showChart?(Object(c["openBlock"])(),Object(c["createBlock"])(l,{key:0,class:"stock","constructor-type":e.chart,options:a.stockOptions},null,8,["constructor-type","options"])):Object(c["createCommentVNode"])("",!0)],64)})),Se={data:function(){return{hashData:null,showChart:!0,period:1,arrPeriod:["Hour","Day","Week","Month","Year"],stockOptions:{chart:{renderTo:"graph"},credits:{enabled:!1},exporting:{enabled:!1},title:{text:""},rangeSelector:{selected:5,enabled:!0},xAxis:{type:"datetime",maxZoom:86400,title:{text:null}},yAxis:{title:{text:"Hashrate",style:{color:"#31708f",fontSize:"14px",fontWeight:"bold"}},min:0},tooltip:{shared:!0},legend:{enabled:!0,borderWidth:0},plotOptions:{areaspline:{fillColor:"#ace",marker:{enabled:!1},lineWidth:1,shadow:!1,states:{hover:{lineWidth:1}},threshold:null},spline:{marker:{enabled:!1},lineWidth:1,shadow:!0,states:{hover:{lineWidth:1}},threshold:null}},series:[{type:"areaspline",name:"Hashrate",data:this.hashData,lineWidth:2,marker:{enabled:!1}}]}}},created:function(){this.stockOptions.series[0].data=this.arrHash,console.log(this.coinNum)},methods:{right:function(){4==this.period?this.period=0:this.period++,this.periodQuery(this.period)},left:function(){0==this.period?this.period=4:this.period--,this.periodQuery(this.period)},periodQuery:function(e){var t=this,o="http://p2p-ekb.xyz:"+this.coinNum+"/web/graph_data/pool_rates/last_"+this.arrPeriod[e].toLowerCase();this.showChart=!1,fetch(o).then((function(e){return e.json()})).then((function(e){t.hashData=[],console.log("ishod 0",e[0][0]),console.log("ishod 3",e[e.length-1][0]),e.forEach((function(e){void 0==e[1].doa&&(e[1].doa=0),void 0==e[1].orphan&&(e[1].orphan=0),t.hashData.push([1e3*parseFloat(e[0]),parseFloat(e[1].good)+parseFloat(e[1].doa)+parseFloat(e[1].doa)]),t.stockOptions.series[0].data=t.hashData,t.showChart=!0}))}))}},props:["coinNum","arrHash"]};o("c129");Se.render=Be,Se.__scopeId="data-v-f4dd8d46";var xe=Se,_e=Object(c["withScopeId"])("data-v-550294d0");Object(c["pushScopeId"])("data-v-550294d0");var Ie={class:"resent_blocks"},De={class:"header"},Te=Object(c["createVNode"])("img",{class:"header-back-img",src:Z.a},null,-1),He=Object(c["createVNode"])("div",{class:"header-name"}," Resent blocks ",-1),Me={class:"cion-close"},Ee=Object(c["createVNode"])("g",{id:"Cancel"},[Object(c["createVNode"])("path",{"clip-rule":"evenodd",d:"M16,0C7.163,0,0,7.163,0,16c0,8.836,7.163,16,16,16   c8.836,0,16-7.163,16-16C32,7.163,24.836,0,16,0z M16,30C8.268,30,2,23.732,2,16C2,8.268,8.268,2,16,2s14,6.268,14,14   C30,23.732,23.732,30,16,30z",fill:"#31708f","fill-rule":"evenodd"}),Object(c["createVNode"])("path",{"clip-rule":"evenodd",d:"M22.729,21.271l-5.268-5.269l5.238-5.195   c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.39-1.034-0.39-1.428,0l-5.231,5.188l-5.309-5.31c-0.394-0.396-1.034-0.396-1.428,0   c-0.394,0.395-0.394,1.037,0,1.432l5.301,5.302l-5.331,5.287c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.429,0   l5.324-5.28l5.276,5.276c0.394,0.396,1.034,0.396,1.428,0C23.123,22.308,23.123,21.667,22.729,21.271z",fill:"#31708f","fill-rule":"evenodd"})],-1),Ae=Object(c["createVNode"])("h3",null,"Resent bloсks",-1),Pe=Object(c["createVNode"])("table",{class:"coin-table2"},[Object(c["createVNode"])("thead",null,[Object(c["createVNode"])("th",null,"When"),Object(c["createVNode"])("th",null,"Date/Time"),Object(c["createVNode"])("th",null,"Number"),Object(c["createVNode"])("th",null,"Hash")])],-1),ze={id:"blocks",class:"scroll-table-body"},Fe={class:"coin-table2"};Object(c["popScopeId"])();var Le=_e((function(e,t,o,n,a,r){return Object(c["openBlock"])(),Object(c["createBlock"])("div",Ie,[Object(c["createVNode"])("div",De,[Object(c["createVNode"])("div",{class:"header-back",onClick:t[1]||(t[1]=function(){return r.closeBlocks&&r.closeBlocks.apply(r,arguments)})},[Te]),He]),Object(c["createVNode"])("div",Me,[(Object(c["openBlock"])(),Object(c["createBlock"])("svg",{class:"cion-close-img",onClick:t[2]||(t[2]=function(){return r.closeBlocks&&r.closeBlocks.apply(r,arguments)}),"enable-background":"new 0 0 32 32",height:"32px",id:"Слой_1",version:"1.1",viewBox:"0 0 32 32",width:"32px","xml:space":"preserve",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},[Ee]))]),Ae,Pe,Object(c["createVNode"])("div",ze,[Object(c["createVNode"])("table",Fe,[Object(c["createVNode"])("tbody",null,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(o.recentBlocks,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])("tr",{key:e},[Object(c["createVNode"])("td",null,Object(c["toDisplayString"])(e.when),1),Object(c["createVNode"])("td",null,Object(c["toDisplayString"])(e.ts),1),Object(c["createVNode"])("td",null,Object(c["toDisplayString"])(e.number),1),Object(c["createVNode"])("td",null,Object(c["toDisplayString"])(e.hash),1)])})),128))])])])])})),Re={data:function(){return{}},props:["recentBlocks"],methods:{closeBlocks:function(){this.$emit("close-blocks")}}};o("110f");Re.render=Le,Re.__scopeId="data-v-550294d0";var We=Re,Ge=(o("b0c0"),Object(c["withScopeId"])("data-v-69834817"));Object(c["pushScopeId"])("data-v-69834817");var Ue={class:"stratums"},$e=Object(c["createVNode"])("h3",null,"Stratums",-1);Object(c["popScopeId"])();var qe=Ge((function(e,t,o,n,a,r){return Object(c["openBlock"])(),Object(c["createBlock"])("div",Ue,[$e,(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(o.stratums,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])("div",{class:"stratums-item",key:e},[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.name)+" ",1),Object(c["createVNode"])("div",{class:"on-offline",style:{"background-color":e.status}},null,4)])})),128))])})),Ke={data:function(){return{stratumstat:"red"}},props:["stratums"],methods:{},mounted:function(){console.log(this.stratums)},computed:{}};o("9ee9");Ke.render=qe,Ke.__scopeId="data-v-69834817";var Qe=Ke,Xe={components:{Chart:xe,Blocks:We,Stratum:Qe},data:function(){return{textTableHeads:null,"bloсkVis":!1}},props:["stratums","coinInf","recentBlocks","arrTime","arrHash","coinNum"],methods:{openBlocks:function(){this.bloсkVis=!0,window.scrollTo({top:0,behavior:"smooth"})},closecoin:function(){this.$emit("close-coin")},closeblocks:function(){this.bloсkVis=!1}},created:function(){this.graphLastHour=this.lastHour}};o("0a4d");Xe.render=ye,Xe.__scopeId="data-v-5d4d8fb4";var Ye=Xe,Je={components:{Coin:Ye},data:function(){return{coinVis:!1,coinInf:null,recentBlocks:null,arrTime:null,arrHash:null,coinNum:null,stratums:[]}},props:["sumData","prelod1","tableVis"],methods:{chooseCoin:function(e){var t=e.target.parentNode;""==t.id&&(t=t.parentNode),console.log(t.id);var o=this.sumData.find((function(e){return e.port==t.id}));console.log(o),this.coinNum=t.id,console.log("=====",this.coinNum),location="http://p2p-ekb.xyz:"+t.id+"/static"},close:function(){this.coinVis=!1,this.stratums=[]}},created:function(){}};o("ee75");Je.render=Y,Je.__scopeId="data-v-653d52ae";var Ze=Je,et=[{id:"bitcoin",symbol:"BTC",port:9334,img:"/img/bitcoin.png"},{id:"binance-peg-litecoin",symbol:"LTC",port:9327,img:"/img/ltc.png"},{id:"dash",symbol:"DASH",port:7903,img:"/img/dash.png"},{id:"bitcoin-cash",symbol:"BCH",port:9338,img:"/img/bch.png"},{id:"bitcoin-cash-sv",symbol:"BSV",port:6339,img:"/img/bsv.png"},{id:"bitcoin-cash-abc-2",symbol:"BCHA",port:9340,img:"/img/abc.png"},{id:"litecoin-cash",symbol:"LCC",port:5555,img:"/img/lcc.png"},{id:"bitcoin-atom",symbol:"BCA",port:3027,img:"/img/atom.png"},{id:"monacoin",symbol:"MONA",port:2942,img:"/img/monacoin.png"},{id:"dogecoin",symbol:"DOGE",port:4556,img:"/img/doge.png"},{id:"flourmix",symbol:"FLO",port:5210,img:"/img/flo.png"},{id:"einsteinium",symbol:"EMC2",port:3039,img:"/img/emc2.png"},{id:"axe",symbol:"AXE",port:7923,img:"/img/axe.png"},{id:"cannabiscoin",symbol:"CANN",port:28741,img:"/img/cann.png"},{id:"imagecash",symbol:"IMGC",port:7905,img:"/img/imgc.png"},{id:"bitcore",symbol:"BTX",port:3017,img:"/img/bitcore.png"},{id:"mecro-coin",symbol:"MEC",port:3019,img:"/img/mec.png"},{id:"bitsend",symbol:"BSD",port:7011,img:"/img/bsd.png"},{id:"garlicoin",symbol:"GRLC",port:5213,img:"/img/garli.png"},{id:"vertcoin",symbol:"VTC",port:9171,img:"/img/vtc.png"},{id:"suqa",symbol:"SIN",port:3225,img:"/img/sin.png"},{id:"rito",symbol:"RITO",port:16101,img:"/img/rito.png"},{id:"titan-coin",symbol:"TTN",port:16113,img:"/img/ttn.png"},{id:"chunghoptoken",symbol:"CHC",port:16103,img:"/img/chc.png"},{id:"title-network",symbol:"TNET",port:6108,img:"/img/tnet.png"},{id:"pyrk",symbol:"PYRK(yespower)",port:6353,img:"/img/pyrk.png"},{id:"auroracoin",symbol:"AUR(sha256)",port:12349,img:"/img/aurora.png"},{id:"auroracoin",symbol:"AUR(qubit)",port:12355,img:"/img/aurora.png"},{id:"auroracoin",symbol:"AUR(scrypt)",port:12347,img:"/img/aurora.png"},{id:"auroracoin",symbol:"AUR(groestl)",port:12351,img:"/img/aurora.png"},{id:"auroracoin",symbol:"AUR(skein)",port:12353,img:"/img/aurora.png"},{id:"digibyte",symbol:"DGB(sha256)",port:5027,img:"/img/dgb.png"},{id:"digibyte",symbol:"DGB(qubit)",port:5023,img:"/img/dgb.png"},{id:"digibyte",symbol:"DGB(scrypt)",port:5025,img:"/img/dgb.png"},{id:"digibyte",symbol:"DGB(skein)",port:5029,img:"/img/dgb.png"},{id:"digibyte",symbol:"DGB(odo)",port:5031,img:"/img/dgb.png"},{id:"veles",symbol:"VLS(scrypt)",port:6012,img:"/img/veles.png"},{id:"veles",symbol:"VLS(x11)",port:6014,img:"/img/veles.png"},{id:"veles",symbol:"VLS(sha256)",port:6016,img:"/img/veles.png"},{id:"veles",symbol:"VLS(lyra2z)",port:6018,img:"/img/veles.png"},{id:"veles",symbol:"VLS(nist5)",port:6020,img:"/img/veles.png"},{id:"veles",symbol:"VLS(x16r)",port:6022,img:"/img/veles.png"},{id:"argentum",symbol:"ARG(groestl)",port:9553,img:"/img/arg.png"},{id:"argentum",symbol:"ARG(lyra2re2)",port:9557,img:"/img/arg.png"},{id:"argentum",symbol:"ARG(argon2d)",port:9552,img:"/img/arg.png"},{id:"argentum",symbol:"ARG(yescrypt)",port:9554,img:"/img/arg.png"},{id:"myriadcoin",symbol:"XMY(argon2d)",port:6002,img:"/img/myr.png"},{id:"utopia",symbol:"CRP",port:8112,img:"/img/crp.png"}],tt=["http://sha256.p2p-spb.xyz:","http://p2p-spb.xyz:","http://p2p-ekb.xyz:","http://p2p-south.xyz:","http://p2p-usa.xyz:","http://asia.p2p-spb.xyz:"],ot=(o("b680"),function(e){e=parseFloat(e);var t="H/s";return e>=1e3&&(e/=1e3,t="KH/s"),e>=1e3&&(e/=1e3,t="MH/s"),e>=1e3&&(e/=1e3,t="GH/s"),e>=1e3&&(e/=1e3,t="TH/s"),e>=1e3&&(e/=1e3,t="PH/s"),e.toFixed(2)+" "+t}),ct=function(e){e=parseFloat(e);var t="";return e>=1e3&&(e/=1e3,t=" K"),e>=1e3&&(e/=1e3,t=" M"),e>=1e3&&(e/=1e3,t=" G"),e>=1e3&&(e/=1e3,t=" T"),(""==t?e.toFixed(0):e.toFixed(2))+t},nt=function(e){e=parseInt(e,10);var t=Math.floor(e/86400),o=Math.floor((e-86400*t)/3600),c=Math.floor((e-(86400*t+3600*o))/60),n=e-86400*t-3600*o-60*c,a="";return t>0&&(a+=t+"d "),a+=o+"h "+c+"m "+n+"s",a},at=function(e,t){return e+t};console.log("Сумма:",at(2,4));var rt={name:"App",data:function(){return{tableVis:!0,sumData:null,ishodSumData:null,prelod1:!0,preload2:!1,wallet:null,wltCahanged:!1,buttonSrc:!0,counter1:0,configServers:tt}},components:{Header:z,Table:Ze},methods:{poalfavity:function(){0==this.counter1&&(this.counter1=!0,this.sumData.sort((function(e,t){return e.symbol>t.symbol?1:e.symbol<t.symbol?-1:0})))},searchingCoin:function(e){console.log(e),0==e&&(this.sumData=this.ishodSumData);var t=this.sumData.filter((function(t){var o=t.symbol.toLowerCase(),c=o.includes(e.toLowerCase());if(console.log(c),1==c)return!0}));this.sumData=t},searchWallet:function(){var e=document.getElementById("wltsrc");""!=e.value?null==this.wallet||this.wltCahanged?(this.wallet=e.value,this.buttonSrc=!1,localStorage.setItem("wallet",e.value),this.tableVis=!1,location.reload()):(this.wallet=null,localStorage.removeItem("wallet"),e.value="",this.buttonSrc=!0,this.tableVis=!0,location.reload()):alert("Введите кошелек!")},changeWlt:function(e){var t=e.target.value.length;0!=t?(this.buttonSrc=!0,this.wltCahanged=!0):(this.buttonSrc=!1,location.reload(),localStorage.removeItem("wallet"))}},mounted:function(){var e=this;console.log("new version!");var t=localStorage.getItem("wallet");if(console.log(t),null!==t){var o=document.getElementById("wltsrc");this.wallet=t,o.value=t,this.buttonSrc=!1,this.prelod1=!1,this.tableVis=!1;var c=tt[2]+"9338/web/graph_data/miner_hash_rates/last_year";fetch(c).then((function(e){return e.json()})).then((function(t){var o=0;t.forEach((function(t){var c=t[1];for(var n in c)n==e.wallet&&o++}));var c=[];t.forEach((function(t){var o=t[1];for(var n in o){var a=e.wallet+".";if(n.includes(a)){var r=n.indexOf(".");0==c.includes(n.slice(r+1))&&c.push(n.slice(r+1))}}})),0!=c.length?console.log("Воркеры: "+c):0!=o?console.log("У кошелька "+e.wallet+" нет воркеров"):console.log("Кошелька "+e.wallet+" не существует")}))}else{var n=[],a=[],r=[],l=[],i={pool_hash_rate:"no data",network_hashrate:"no data",pool_nonstale_hash_rate:"no data",pool_stale_prop:"no data",min_difficulty:"no data",network_block_difficulty:"no data"};et.forEach((function(e){n.push("http://p2p-ekb.xyz:"+e.port+"/global_stats")})),et.forEach((function(e){a.push("http://p2p-ekb.xyz:"+e.port+"/users")})),et.forEach((function(e){r.push("http://p2p-ekb.xyz:"+e.port+"/local_stats")})),et.forEach((function(e){l.push(e.id)}));var s=l.toString(),d=[],p=[],u=[],b=[];Promise.allSettled(n.map((function(e){return fetch(e).then((function(e){return e.json()}))}))).then((function(e){var t=0;e.forEach((function(e){if("fulfilled"==e.status){var o=Object.assign(et[t],e.value);d.push(o),t++}else{var c=Object.assign(et[t],i);d.push(c),t++}}))})).then((function(){Promise.allSettled(a.map((function(e){return fetch(e).then((function(e){return e.json()}))}))).then((function(e){var t=0;e.forEach((function(e){if("fulfilled"==e.status){var o={countUsers:Object.keys(e.value).length},c=Object.assign(d[t],o);p.push(c),t++}else o={countUsers:"no data"},c=Object.assign(d[t],o),p.push(c),t++}))}))})).then((function(){return Promise.allSettled(r.map((function(e){return fetch(e).then((function(e){return e.json()}))}))).then((function(t){var o=0;console.log(t),t.forEach((function(e){if("fulfilled"==e.status&&null!=e.value){var t=e.value.attempts_to_block/p[o].pool_hash_rate,c={expectedTime:t},n=Object.assign(p[o],c);u.push(n),o++}else c={expectedTime:"no data"},n=Object.assign(p,c),u.push(n),o++})),e.prelod1=!1}))})).then((function(){fetch("https://api.coingecko.com/api/v3/simple/price?ids="+s+",0x&vs_currencies=usd").then((function(e){return e.json()})).then((function(t){for(var o=0;o<u.length;o++)for(var c in t){var n={},a={};c==u[o].id&&(n={price:t[c].usd},a=Object.assign(u[o],n),b.push(a))}b.forEach((function(e){"no data"!=e.pool_nonstale_hash_rate&&(e.pool_hash_rate=ot(e.pool_hash_rate),e.network_hashrate=ot(e.network_hashrate),e.expectedTime=nt(e.expectedTime),e.price="$ "+e.price,e.min_difficulty=ct(e.min_difficulty),e.network_block_difficulty=ct(e.network_block_difficulty))})),e.sumData=b,e.ishodSumData=b}))}))}}};o("f33d");rt.render=m;var lt=rt,it=o("4452"),st=o.n(it),dt=o("ea7f"),pt=o.n(dt),ut=o("37d8"),bt=o.n(ut);bt()(pt.a),Object(c["createApp"])(lt).use(st.a).mount("#app")},"61be":function(e,t,o){},"6a14":function(e,t,o){},"96d2":function(e,t,o){},"9ee9":function(e,t,o){"use strict";o("db6b")},a364:function(e,t,o){"use strict";o("61be")},c129:function(e,t,o){"use strict";o("e804")},c6e1:function(e,t,o){e.exports=o.p+"img/menu2.e89608f1.png"},c74f:function(e,t,o){},ce2b:function(e,t,o){},db6b:function(e,t,o){},e804:function(e,t,o){},eb61:function(e,t,o){"use strict";o("2fc0")},ee75:function(e,t,o){"use strict";o("ce2b")},f33d:function(e,t,o){"use strict";o("96d2")},f68c:function(e,t,o){e.exports=o.p+"img/left2.349c1ac4.png"}});
//# sourceMappingURL=app.9482ac7d.js.map