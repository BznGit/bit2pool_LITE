(function(e){function t(t){for(var c,n,s=t[0],i=t[1],l=t[2],d=0,b=[];d<s.length;d++)n=s[d],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&b.push(r[n][0]),r[n]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);p&&p(t);while(b.length)b.shift()();return a.push.apply(a,l||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],c=!0,s=1;s<o.length;s++){var i=o[s];0!==r[i]&&(c=!1)}c&&(a.splice(t--,1),e=n(n.s=o[0]))}return e}var c={},r={app:0},a=[];function n(t){if(c[t])return c[t].exports;var o=c[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=c,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var p=i;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"04b3":function(e,t,o){e.exports=o.p+"img/close.957adf1d.png"},"077a":function(e,t,o){e.exports=o.p+"img/preloader1.7ac4753e.gif"},"0a4d":function(e,t,o){"use strict";o("c74f")},"0f5c":function(e,t,o){e.exports=o.p+"img/right2.b268f3b3.png"},"110f":function(e,t,o){"use strict";o("6a14")},"1e5e":function(e,t,o){e.exports=o.p+"img/search.11f89aae.png"},"1faf":function(e,t,o){e.exports=o.p+"img/back.f1fa03ae.png"},"2e58":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var c=o("7a23"),r=o("1e5e"),a=o.n(r),n=o("04b3"),s=o.n(n),i=o("077a"),l=o.n(i),p={class:"wallet"},d={key:0,class:"wallet-ok-img",src:a.a},b={key:1,class:"wallet-ok-img1",src:s.a},u={key:2,class:"wallet-ok-img2",src:l.a};function m(e,t,o,r,a,n){var s=Object(c["resolveComponent"])("Header"),i=Object(c["resolveComponent"])("Table");return Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],null,[Object(c["createVNode"])(s,{onSearch:n.searchingCoin},null,8,["onSearch"]),Object(c["createVNode"])("div",p,[Object(c["createVNode"])("input",{id:"wltsrc",class:"wallet-search",type:"text",onInput:t[1]||(t[1]=function(){return n.changeWlt&&n.changeWlt.apply(n,arguments)}),placeholder:"Wallet..."},null,32),Object(c["createVNode"])("div",{class:"wallet-ok",onClick:t[2]||(t[2]=function(){return n.searchWallet&&n.searchWallet.apply(n,arguments)})},[a.buttonSrc?(Object(c["openBlock"])(),Object(c["createBlock"])("img",d)):Object(c["createCommentVNode"])("",!0),a.buttonSrc?Object(c["createCommentVNode"])("",!0):(Object(c["openBlock"])(),Object(c["createBlock"])("img",b)),a.preload2?(Object(c["openBlock"])(),Object(c["createBlock"])("img",u)):Object(c["createCommentVNode"])("",!0)])]),Object(c["createVNode"])(i,{sumData:a.sumData,tableVis:a.tableVis,prelod1:a.prelod1,onPoAlfavity:n.poalfavity,onData:e.onData},null,8,["sumData","tableVis","prelod1","onPoAlfavity","onData"])],64)}o("4de4"),o("caad"),o("2532"),o("d3b7"),o("159b"),o("fb6a"),o("820e"),o("3ca3"),o("ddb0"),o("d81d"),o("b64b");var h=o("7cbd"),g=o.n(h),f=Object(c["withScopeId"])("data-v-8703fdee");Object(c["pushScopeId"])("data-v-8703fdee");var v={class:"header"},y={class:"header-logotype"},O=Object(c["createVNode"])("img",{class:"header-logotype-img",src:g.a},null,-1),j=Object(c["createVNode"])("div",{class:"header-href"},[Object(c["createVNode"])("a",{href:"https://forum.bits.media/index.php?/topic/38977-btcdashvtcsibnvc-nody-p2pool-na-p2p-spbxyz/"},[Object(c["createVNode"])("img",{class:"header-href-img",src:"https://forum.bits.media/bitcoin_forum.svg"})]),Object(c["createVNode"])("a",{href:"https://telegram.org/dl?tme=f4f9964d53579b65dc_3989336244067786002"},[Object(c["createVNode"])("svg",{width:"35px",height:"35px",viewBox:"0 0 25 25",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","xml:space":"preserve","xmlns:serif":"http://www.serif.com/",style:{fill:"rgb(49, 112, 143)","fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"1.41421"}},[Object(c["createVNode"])("path",{id:"telegram-5",d:"M12,0c-6.627,0 -12,5.373 -12,12c0,6.627 5.373,12 12,12c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12Zm0,\n            2c5.514,0 10,4.486 10,10c0,5.514 -4.486,10 -10,10c-5.514,0 -10,-4.486 -10,-10c0,-5.514 4.486,-10 10,-10Zm2.692,14.889c0.161,0.115 0.368,\n            0.143 0.553,0.073c0.185,-0.07 0.322,-0.228 0.362,-0.42c0.435,-2.042 1.489,-7.211 1.884,-9.068c0.03,-0.14 -0.019,-0.285 -0.129,-0.379c-0.11,\n            -0.093 -0.263,-0.12 -0.399,-0.07c-2.096,0.776 -8.553,3.198 -11.192,4.175c-0.168,0.062 -0.277,0.223 -0.271,0.4c0.006,0.177 0.125,0.33 0.296,\n            0.381c1.184,0.354 2.738,0.847 2.738,0.847c0,0 0.725,2.193 1.104,3.308c0.047,0.139 0.157,0.25 0.301,0.287c0.145,0.038 0.298,-0.001 0.406,\n            -0.103c0.608,-0.574 1.548,-1.461 1.548,-1.461c0,0 1.786,1.309 2.799,2.03Zm-5.505,-4.338l0.84,2.769l0.186,-1.754c0,0 3.243,-2.925 5.092,\n            -4.593c0.055,-0.048 0.062,-0.13 0.017,-0.188c-0.045,-0.057 -0.126,-0.071 -0.188,-0.032c-2.143,1.368 -5.947,3.798 -5.947,3.798Z"})])])],-1);Object(c["popScopeId"])();var k=f((function(e,t,o,r,a,n){return Object(c["openBlock"])(),Object(c["createBlock"])("div",v,[Object(c["createVNode"])("div",y,[O,Object(c["createVNode"])("h3",{onClick:t[1]||(t[1]=function(){return n.reload&&n.reload.apply(n,arguments)})},"p2p-spb.xyz")]),j])})),N={data:function(){return{greeting:"hello",menuVis:!1}},methods:{reload:function(){location.reload()},searching:function(e){var t=e.target.value;this.$emit("search",t)},searchShow:function(){var e=document.getElementById("srcIcon");e.style.display="none";var t=document.getElementById("srcInput");t.style.display="flex"},searchClose:function(){var e=document.getElementById("srcIcon");e.style.display="flex";var t=document.getElementById("srcInput");t.style.display="none"}}};o("f687");N.render=k,N.__scopeId="data-v-8703fdee";var x=N,V=Object(c["withScopeId"])("data-v-621487ba");Object(c["pushScopeId"])("data-v-621487ba");var w={key:0,class:"table-head"},C={key:1,class:"preloder-img",src:l.a},B={class:"table"},S={class:"table-coin"},_={class:"table-symbol"},z={class:"table-data"},I={class:"table-data"},D={class:"table-data-users"},T={class:"table-data"},H={class:"table-data-price"};Object(c["popScopeId"])();var E=V((function(e,t,o,r,a,n){var s=Object(c["resolveComponent"])("Coin");return Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],null,[o.tableVis?(Object(c["openBlock"])(),Object(c["createBlock"])("div",w,[Object(c["createVNode"])("div",{class:"table-head-item coin",onClick:t[1]||(t[1]=function(){return e.poalfavity&&e.poalfavity.apply(e,arguments)})}," Coin "),Object(c["createVNode"])("div",{class:"table-head-item pool",onClick:t[2]||(t[2]=function(){return e.pononehash&&e.pononehash.apply(e,arguments)})}," Pool hashrate "),Object(c["createVNode"])("div",{class:"table-head-item net",onClick:t[3]||(t[3]=function(){return e.pohashrate&&e.pohashrate.apply(e,arguments)})}," Network hashrate "),Object(c["createVNode"])("div",{class:"table-head-item users",onClick:t[4]||(t[4]=function(){return e.postaleprop&&e.postaleprop.apply(e,arguments)})}," Users "),Object(c["createVNode"])("div",{class:"table-head-item expec",onClick:t[5]||(t[5]=function(){return e.pomindiff&&e.pomindiff.apply(e,arguments)})}," Expected time to block "),Object(c["createVNode"])("div",{class:"table-head-item price",onClick:t[6]||(t[6]=function(){return e.poblock&&e.poblock.apply(e,arguments)})}," Price ")])):Object(c["createCommentVNode"])("",!0),o.prelod1?(Object(c["openBlock"])(),Object(c["createBlock"])("img",C)):Object(c["createCommentVNode"])("",!0),Object(c["createVNode"])("div",B,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(o.sumData,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])("div",{key:e,class:"table-body"},[Object(c["createVNode"])("div",{id:e.port,class:"table-row",onClick:t[7]||(t[7]=function(){return n.chooseCoin&&n.chooseCoin.apply(n,arguments)})},[Object(c["createVNode"])("div",S,[Object(c["createVNode"])("img",{class:"table-row-img",src:e.img},null,8,["src"]),Object(c["createVNode"])("span",_,Object(c["toDisplayString"])(e.symbol),1)]),Object(c["createVNode"])("div",z,Object(c["toDisplayString"])(e.pool_hash_rate),1),Object(c["createVNode"])("div",I,Object(c["toDisplayString"])(e.network_hashrate),1),Object(c["createVNode"])("div",D,Object(c["toDisplayString"])(e.countUsers),1),Object(c["createVNode"])("div",T,Object(c["toDisplayString"])(e.expectedTime),1),Object(c["createVNode"])("div",H,Object(c["toDisplayString"])(e.price),1)],8,["id"])])})),128))]),e.coinVis?(Object(c["openBlock"])(),Object(c["createBlock"])(s,{key:2,onCloseCoin:n.close,coinInf:e.coinInf,stratums:e.stratums,recentBlocks:e.recentBlocks,arrHash:e.arrHash,coinNum:e.coinNum},null,8,["onCloseCoin","coinInf","stratums","recentBlocks","arrHash","coinNum"])):Object(c["createCommentVNode"])("",!0)],64)})),M=(o("7db0"),o("1faf")),P=o.n(M),A=Object(c["withScopeId"])("data-v-5d4d8fb4");Object(c["pushScopeId"])("data-v-5d4d8fb4");var G={class:"coin"},R={class:"header"},F=Object(c["createVNode"])("img",{class:"header-back-img",src:P.a},null,-1),W={class:"coin-name1"},L={class:"cion-close"},U=Object(c["createVNode"])("g",{id:"Cancel"},[Object(c["createVNode"])("path",{"clip-rule":"evenodd",d:"M16,0C7.163,0,0,7.163,0,16c0,8.836,7.163,16,16,16   c8.836,0,16-7.163,16-16C32,7.163,24.836,0,16,0z M16,30C8.268,30,2,23.732,2,16C2,8.268,8.268,2,16,2s14,6.268,14,14   C30,23.732,23.732,30,16,30z",fill:"#31708f","fill-rule":"evenodd"}),Object(c["createVNode"])("path",{"clip-rule":"evenodd",d:"M22.729,21.271l-5.268-5.269l5.238-5.195   c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.39-1.034-0.39-1.428,0l-5.231,5.188l-5.309-5.31c-0.394-0.396-1.034-0.396-1.428,0   c-0.394,0.395-0.394,1.037,0,1.432l5.301,5.302l-5.331,5.287c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.429,0   l5.324-5.28l5.276,5.276c0.394,0.396,1.034,0.396,1.428,0C23.123,22.308,23.123,21.667,22.729,21.271z",fill:"#31708f","fill-rule":"evenodd"})],-1),X={class:"coin-name"},Z={class:"scroll"},$=Object(c["createVNode"])("h3",null,"Status",-1),q={class:"coin-row"},Q={class:"coin-colum1"},J={class:"coin-table"},K=Object(c["createVNode"])("td",null,"Pool hashrate",-1),Y=Object(c["createVNode"])("td",null,"Network hashrate",-1),ee=Object(c["createVNode"])("td",null,"Current block value",-1),te=Object(c["createVNode"])("td",null,"Network block difficulty",-1),oe=Object(c["createVNode"])("td",null,"Share difficulty (pool minimum)",-1),ce=Object(c["createVNode"])("td",null,"Expected time to block (pool)",-1),re={class:"coin-colum2"},ae={class:"coin-row2"};Object(c["popScopeId"])();var ne=A((function(e,t,o,r,a,n){var s=Object(c["resolveComponent"])("Blocks"),i=Object(c["resolveComponent"])("Chart"),l=Object(c["resolveComponent"])("Stratum");return Object(c["openBlock"])(),Object(c["createBlock"])("div",G,[Object(c["createVNode"])("div",R,[Object(c["createVNode"])("div",{class:"header-back",onClick:t[1]||(t[1]=function(){return n.closecoin&&n.closecoin.apply(n,arguments)})},[F]),Object(c["createVNode"])("div",W,[Object(c["createVNode"])("img",{class:"coin-img",src:o.coinInf.img},null,8,["src"]),Object(c["createTextVNode"])(" "+Object(c["toDisplayString"])(o.coinInf.symbol),1)])]),Object(c["createVNode"])("div",L,[(Object(c["openBlock"])(),Object(c["createBlock"])("svg",{class:"cion-close-img",onClick:t[2]||(t[2]=function(){return n.closecoin&&n.closecoin.apply(n,arguments)}),"enable-background":"new 0 0 32 32",height:"32px",id:"Слой_1",version:"1.1",viewBox:"0 0 32 32",width:"32px","xml:space":"preserve",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},[U]))]),Object(c["createVNode"])("div",X,[Object(c["createVNode"])("img",{class:"coin-img",src:o.coinInf.img},null,8,["src"]),Object(c["createTextVNode"])(" "+Object(c["toDisplayString"])(o.coinInf.symbol),1)]),Object(c["createVNode"])("div",Z,[$,Object(c["createVNode"])("div",q,[Object(c["createVNode"])("div",Q,[Object(c["createVNode"])("table",J,[Object(c["createVNode"])("tr",null,[K,Object(c["createVNode"])("td",null,Object(c["toDisplayString"])(o.coinInf.pool_hash_rate),1)]),Object(c["createVNode"])("tr",null,[Y,Object(c["createVNode"])("td",null,Object(c["toDisplayString"])(o.coinInf.network_hashrate),1)]),Object(c["createVNode"])("tr",null,[ee,Object(c["createVNode"])("td",null,Object(c["toDisplayString"])(o.coinInf.block_value),1)]),Object(c["createVNode"])("tr",null,[te,Object(c["createVNode"])("td",null,Object(c["toDisplayString"])(o.coinInf.network_block_difficulty),1)]),Object(c["createVNode"])("tr",null,[oe,Object(c["createVNode"])("td",null,Object(c["toDisplayString"])(o.coinInf.min_difficulty),1)]),Object(c["createVNode"])("tr",null,[ce,Object(c["createVNode"])("td",null,Object(c["toDisplayString"])(o.coinInf.expectedTime),1)]),Object(c["createVNode"])("div",{class:"resent-bloks",onClick:t[3]||(t[3]=function(){return n.openBlocks&&n.openBlocks.apply(n,arguments)})},"Resent blocks... "),e.bloсkVis?(Object(c["openBlock"])(),Object(c["createBlock"])(s,{key:0,recentBlocks:o.recentBlocks,onCloseBlocks:n.closeblocks},null,8,["recentBlocks","onCloseBlocks"])):Object(c["createCommentVNode"])("",!0)])]),Object(c["createVNode"])("div",re,[Object(c["createVNode"])(i,{arrTime:o.arrTime,arrHash:o.arrHash,coinNum:o.coinNum},null,8,["arrTime","arrHash","coinNum"])])]),Object(c["createVNode"])("div",ae,[Object(c["createVNode"])(l,{stratums:o.stratums},null,8,["stratums"])])])])})),se=o("f68c"),ie=o.n(se),le=o("0f5c"),pe=o.n(le),de=Object(c["withScopeId"])("data-v-f4dd8d46");Object(c["pushScopeId"])("data-v-f4dd8d46");var be={class:"select-period"},ue={class:"select-period-box"},me={class:"select-period-text"},he={class:"select-period-box"};Object(c["popScopeId"])();var ge=de((function(e,t,o,r,a,n){var s=Object(c["resolveComponent"])("highcharts");return Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],null,[Object(c["createVNode"])("div",be,[Object(c["createVNode"])("div",ue,[Object(c["createVNode"])("img",{class:"select-period-img-left",src:ie.a,onClick:t[1]||(t[1]=function(){return n.left&&n.left.apply(n,arguments)})})]),Object(c["createVNode"])("div",me,Object(c["toDisplayString"])(a.arrPeriod[a.period]),1),Object(c["createVNode"])("div",he,[Object(c["createVNode"])("img",{class:"select-period-img-right",src:pe.a,onClick:t[2]||(t[2]=function(){return n.right&&n.right.apply(n,arguments)})})])]),a.showChart?(Object(c["openBlock"])(),Object(c["createBlock"])(s,{key:0,class:"stock","constructor-type":e.chart,options:a.stockOptions},null,8,["constructor-type","options"])):Object(c["createCommentVNode"])("",!0)],64)})),fe={data:function(){return{hashData:null,showChart:!0,period:1,arrPeriod:["Hour","Day","Week","Month","Year"],stockOptions:{chart:{renderTo:"graph"},credits:{enabled:!1},exporting:{enabled:!1},title:{text:""},rangeSelector:{selected:5,enabled:!0},xAxis:{type:"datetime",maxZoom:86400,title:{text:null}},yAxis:{title:{text:"Hashrate",style:{color:"#31708f",fontSize:"14px",fontWeight:"bold"}},min:0},tooltip:{shared:!0},legend:{enabled:!0,borderWidth:0},plotOptions:{areaspline:{fillColor:"#ace",marker:{enabled:!1},lineWidth:1,shadow:!1,states:{hover:{lineWidth:1}},threshold:null},spline:{marker:{enabled:!1},lineWidth:1,shadow:!0,states:{hover:{lineWidth:1}},threshold:null}},series:[{type:"areaspline",name:"Hashrate",data:this.hashData,lineWidth:2,marker:{enabled:!1}}]}}},created:function(){this.stockOptions.series[0].data=this.arrHash,console.log(this.coinNum)},methods:{right:function(){4==this.period?this.period=0:this.period++,this.periodQuery(this.period)},left:function(){0==this.period?this.period=4:this.period--,this.periodQuery(this.period)},periodQuery:function(e){var t=this,o="http://p2p-ekb.xyz:"+this.coinNum+"/web/graph_data/pool_rates/last_"+this.arrPeriod[e].toLowerCase();this.showChart=!1,fetch(o).then((function(e){return e.json()})).then((function(e){t.hashData=[],console.log("ishod 0",e[0][0]),console.log("ishod 3",e[e.length-1][0]),e.forEach((function(e){void 0==e[1].doa&&(e[1].doa=0),void 0==e[1].orphan&&(e[1].orphan=0),t.hashData.push([1e3*parseFloat(e[0]),parseFloat(e[1].good)+parseFloat(e[1].doa)+parseFloat(e[1].doa)]),t.stockOptions.series[0].data=t.hashData,t.showChart=!0}))}))}},props:["coinNum","arrHash"]};o("c129");fe.render=ge,fe.__scopeId="data-v-f4dd8d46";var ve=fe,ye=Object(c["withScopeId"])("data-v-550294d0");Object(c["pushScopeId"])("data-v-550294d0");var Oe={class:"resent_blocks"},je={class:"header"},ke=Object(c["createVNode"])("img",{class:"header-back-img",src:P.a},null,-1),Ne=Object(c["createVNode"])("div",{class:"header-name"}," Resent blocks ",-1),xe={class:"cion-close"},Ve=Object(c["createVNode"])("g",{id:"Cancel"},[Object(c["createVNode"])("path",{"clip-rule":"evenodd",d:"M16,0C7.163,0,0,7.163,0,16c0,8.836,7.163,16,16,16   c8.836,0,16-7.163,16-16C32,7.163,24.836,0,16,0z M16,30C8.268,30,2,23.732,2,16C2,8.268,8.268,2,16,2s14,6.268,14,14   C30,23.732,23.732,30,16,30z",fill:"#31708f","fill-rule":"evenodd"}),Object(c["createVNode"])("path",{"clip-rule":"evenodd",d:"M22.729,21.271l-5.268-5.269l5.238-5.195   c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.39-1.034-0.39-1.428,0l-5.231,5.188l-5.309-5.31c-0.394-0.396-1.034-0.396-1.428,0   c-0.394,0.395-0.394,1.037,0,1.432l5.301,5.302l-5.331,5.287c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.429,0   l5.324-5.28l5.276,5.276c0.394,0.396,1.034,0.396,1.428,0C23.123,22.308,23.123,21.667,22.729,21.271z",fill:"#31708f","fill-rule":"evenodd"})],-1),we=Object(c["createVNode"])("h3",null,"Resent bloсks",-1),Ce=Object(c["createVNode"])("table",{class:"coin-table2"},[Object(c["createVNode"])("thead",null,[Object(c["createVNode"])("th",null,"When"),Object(c["createVNode"])("th",null,"Date/Time"),Object(c["createVNode"])("th",null,"Number"),Object(c["createVNode"])("th",null,"Hash")])],-1),Be={id:"blocks",class:"scroll-table-body"},Se={class:"coin-table2"};Object(c["popScopeId"])();var _e=ye((function(e,t,o,r,a,n){return Object(c["openBlock"])(),Object(c["createBlock"])("div",Oe,[Object(c["createVNode"])("div",je,[Object(c["createVNode"])("div",{class:"header-back",onClick:t[1]||(t[1]=function(){return n.closeBlocks&&n.closeBlocks.apply(n,arguments)})},[ke]),Ne]),Object(c["createVNode"])("div",xe,[(Object(c["openBlock"])(),Object(c["createBlock"])("svg",{class:"cion-close-img",onClick:t[2]||(t[2]=function(){return n.closeBlocks&&n.closeBlocks.apply(n,arguments)}),"enable-background":"new 0 0 32 32",height:"32px",id:"Слой_1",version:"1.1",viewBox:"0 0 32 32",width:"32px","xml:space":"preserve",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},[Ve]))]),we,Ce,Object(c["createVNode"])("div",Be,[Object(c["createVNode"])("table",Se,[Object(c["createVNode"])("tbody",null,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(o.recentBlocks,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])("tr",{key:e},[Object(c["createVNode"])("td",null,Object(c["toDisplayString"])(e.when),1),Object(c["createVNode"])("td",null,Object(c["toDisplayString"])(e.ts),1),Object(c["createVNode"])("td",null,Object(c["toDisplayString"])(e.number),1),Object(c["createVNode"])("td",null,Object(c["toDisplayString"])(e.hash),1)])})),128))])])])])})),ze={data:function(){return{}},props:["recentBlocks"],methods:{closeBlocks:function(){this.$emit("close-blocks")}}};o("110f");ze.render=_e,ze.__scopeId="data-v-550294d0";var Ie=ze,De=(o("b0c0"),Object(c["withScopeId"])("data-v-69834817"));Object(c["pushScopeId"])("data-v-69834817");var Te={class:"stratums"},He=Object(c["createVNode"])("h3",null,"Stratums",-1);Object(c["popScopeId"])();var Ee=De((function(e,t,o,r,a,n){return Object(c["openBlock"])(),Object(c["createBlock"])("div",Te,[He,(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(o.stratums,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])("div",{class:"stratums-item",key:e},[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.name)+" ",1),Object(c["createVNode"])("div",{class:"on-offline",style:{"background-color":e.status}},null,4)])})),128))])})),Me={data:function(){return{stratumstat:"red"}},props:["stratums"],methods:{},mounted:function(){console.log(this.stratums)},computed:{}};o("9ee9");Me.render=Ee,Me.__scopeId="data-v-69834817";var Pe=Me,Ae={components:{Chart:ve,Blocks:Ie,Stratum:Pe},data:function(){return{textTableHeads:null,"bloсkVis":!1}},props:["stratums","coinInf","recentBlocks","arrTime","arrHash","coinNum"],methods:{openBlocks:function(){this.bloсkVis=!0,window.scrollTo({top:0,behavior:"smooth"})},closecoin:function(){this.$emit("close-coin")},closeblocks:function(){this.bloсkVis=!1}},created:function(){this.graphLastHour=this.lastHour}};o("0a4d");Ae.render=ne,Ae.__scopeId="data-v-5d4d8fb4";var Ge=Ae,Re={components:{Coin:Ge},data:function(){return{coinVis:!1,coinInf:null,recentBlocks:null,arrTime:null,arrHash:null,coinNum:null,stratums:[]}},props:["sumData","prelod1","tableVis"],methods:{chooseCoin:function(e){var t=e.target.parentNode;console.log(e.target.parentNode),""==t.id&&(t=t.parentNode),console.log(t.id);var o=this.sumData.find((function(e){return e.port==t.id})),c=o.server;console.log(o),this.coinNum=t.id,console.log("=====",this.coinNum),location="http://"+c+t.id+"/static"},close:function(){this.coinVis=!1,this.stratums=[]}},created:function(){}};o("f140");Re.render=E,Re.__scopeId="data-v-621487ba";var Fe=Re,We=[{id:"bitcoin",symbol:"BTC",port:9334,img:"/img/bitcoin.png",server:"sha256.p2p-spb.xyz:"},{id:"binance-peg-litecoin",symbol:"LTC",port:9327,img:"/img/ltc.png",server:"p2p-spb.xyz:"},{id:"dash",symbol:"DASH",port:7903,img:"/img/dash.png",server:"p2p-spb.xyz:"},{id:"bitcoin-cash",symbol:"BCH",port:9338,img:"/img/bch.png",server:"sha256.p2p-spb.xyz:"},{id:"bitcoin-cash-sv",symbol:"BSV",port:6339,img:"/img/bsv.png",server:"sha256.p2p-spb.xyz:"},{id:"ecash",symbol:"XEC",port:9340,img:"/img/ecash.png",server:"sha256.p2p-spb.xyz:"},{id:"bitcoin-atom",symbol:"BCA",port:3027,img:"/img/atom.png",server:"sha256.p2p-spb.xyz:"},{id:"none",symbol:"RUBTC",port:6353,img:"/img/rubtc.png",server:"sha256.p2p-spb.xyz:"},{id:"monacoin",symbol:"MONA",port:2942,img:"/img/monacoin.png",server:"p2p-spb.xyz:"},{id:"dogecoin",symbol:"DOGE",port:4556,img:"/img/doge.png",server:"p2p-spb.xyz:"},{id:"flourmix",symbol:"FLO",port:5210,img:"/img/flo.png",server:"p2p-spb.xyz:"},{id:"einsteinium",symbol:"EMC2",port:3039,img:"/img/emc2.png",server:"p2p-spb.xyz:"},{id:"goldcoin",symbol:"GLC",port:8124,img:"/img/goldcoin.png",server:"p2p-spb.xyz:"},{id:"axe",symbol:"AXE",port:7923,img:"/img/axe.png",server:"p2p-spb.xyz:"},{id:"cannabiscoin",symbol:"CANN",port:28741,img:"/img/cann.png",server:"p2p-spb.xyz:"},{id:"imagecash",symbol:"IMGC",port:7905,img:"/img/imgc.png",server:"p2p-spb.xyz:"},{id:"boringdao-btc",symbol:"OBTC",port:3021,img:"/img/obtc.png",server:"p2p-spb.xyz:"},{id:"pigeoncoin",symbol:"PGN",port:6104,img:"/img/pgn.png",server:"p2p-spb.xyz:"},{id:"bitcore",symbol:"BTX",port:3017,img:"/img/bitcore.png",server:"p2p-spb.xyz:"},{id:"mecro-coin",symbol:"MEC",port:3019,img:"/img/mec.png",server:"p2p-spb.xyz:"},{id:"bitsend",symbol:"BSD",port:7011,img:"/img/bsd.png",server:"p2p-spb.xyz:"},{id:"garlicoin",symbol:"GRLC",port:5213,img:"/img/garli.png",server:"p2p-spb.xyz:"},{id:"vertcoin",symbol:"VTC",port:9171,img:"/img/vtc.png",server:"p2p-spb.xyz:"},{id:"suqa",symbol:"SIN",port:3225,img:"/img/sin.png",server:"p2p-spb.xyz:"},{id:"rito",symbol:"RITO",port:16101,img:"/img/rito.png",server:"p2p-spb.xyz:"},{id:"title-network",symbol:"TNET",port:6108,img:"/img/tnet.png",server:"p2p-spb.xyz:"},{id:"litecoin-cash",symbol:"LCC(sha256)",port:5555,img:"/img/lcc.png",server:"sha256.p2p-spb.xyz:"},{id:"litecoin-cash",symbol:"LCC(minotaurX)",port:5557,img:"/img/lcc.png",server:"p2p-spb.xyz:"},{id:"auroracoin",symbol:"AUR(sha256)",port:12349,img:"/img/aurora.png",server:"sha256.p2p-spb.xyz:"},{id:"auroracoin",symbol:"AUR(qubit)",port:12355,img:"/img/aurora.png",server:"p2p-spb.xyz:"},{id:"auroracoin",symbol:"AUR(scrypt)",port:12347,img:"/img/aurora.png",server:"p2p-spb.xyz:"},{id:"auroracoin",symbol:"AUR(groestl)",port:12351,img:"/img/aurora.png",server:"p2p-spb.xyz:"},{id:"auroracoin",symbol:"AUR(skein)",port:12353,img:"/img/aurora.png",server:"p2p-spb.xyz:"},{id:"digibyte",symbol:"DGB(sha256)",port:5027,img:"/img/dgb.png",server:"sha256.p2p-spb.xyz:"},{id:"digibyte",symbol:"DGB(qubit)",port:5023,img:"/img/dgb.png",server:"p2p-spb.xyz:"},{id:"digibyte",symbol:"DGB(scrypt)",port:5025,img:"/img/dgb.png",server:"p2p-spb.xyz:"},{id:"digibyte",symbol:"DGB(skein)",port:5029,img:"/img/dgb.png",server:"p2p-spb.xyz:"},{id:"digibyte",symbol:"DGB(odo)",port:5031,img:"/img/dgb.png",server:"p2p-spb.xyz:"},{id:"argentum",symbol:"ARG(groestl)",port:9553,img:"/img/arg.png",server:"p2p-spb.xyz:"},{id:"argentum",symbol:"ARG(lyra2re2)",port:9557,img:"/img/arg.png",server:"p2p-spb.xyz:"},{id:"argentum",symbol:"ARG(argon2d)",port:9552,img:"/img/arg.png",server:"p2p-spb.xyz:"},{id:"argentum",symbol:"ARG(yescrypt)",port:9554,img:"/img/arg.png",server:"p2p-spb.xyz:"},{id:"myriadcoin",symbol:"XMY(argon2d)",port:6002,img:"/img/myr.png",server:"p2p-spb.xyz:"},{id:"utopia",symbol:"CRP",port:8112,img:"/img/crp.png",server:"p2p-spb.xyz:"},{id:"cpuchain",symbol:"CPU",port:18114,img:"/img/cpu.png",server:"p2p-spb.xyz:"},{id:"cpuchain",symbol:"RNG",port:18116,img:"/img/ring.png",server:"p2p-spb.xyz:"}],Le=["http://sha256.p2p-spb.xyz:","http://p2p-spb.xyz:","http://p2p-ekb.xyz:","http://p2p-south.xyz:","http://p2p-usa.xyz:","http://asia.p2p-spb.xyz:"],Ue=(o("b680"),function(e){e=parseFloat(e);var t="H/s";return e>=1e3&&(e/=1e3,t="KH/s"),e>=1e3&&(e/=1e3,t="MH/s"),e>=1e3&&(e/=1e3,t="GH/s"),e>=1e3&&(e/=1e3,t="TH/s"),e>=1e3&&(e/=1e3,t="PH/s"),e.toFixed(2)+" "+t}),Xe=function(e){e=parseFloat(e);var t="";return e>=1e3&&(e/=1e3,t=" K"),e>=1e3&&(e/=1e3,t=" M"),e>=1e3&&(e/=1e3,t=" G"),e>=1e3&&(e/=1e3,t=" T"),(""==t?e.toFixed(0):e.toFixed(2))+t},Ze=function(e){e=parseInt(e,10);var t=Math.floor(e/86400),o=Math.floor((e-86400*t)/3600),c=Math.floor((e-(86400*t+3600*o))/60),r=e-86400*t-3600*o-60*c,a="";return t>0&&(a+=t+"d "),a+=o+"h "+c+"m "+r+"s",a},$e=function(e,t){return e+t};console.log("Сумма:",$e(2,4));var qe={name:"App",data:function(){return{tableVis:!0,sumData:null,ishodSumData:null,prelod1:!0,preload2:!1,wallet:null,wltCahanged:!1,buttonSrc:!0,counter1:0,configServers:Le}},components:{Header:x,Table:Fe},methods:{poalfavity:function(){0==this.counter1&&(this.counter1=!0,this.sumData.sort((function(e,t){return e.symbol>t.symbol?1:e.symbol<t.symbol?-1:0})))},searchingCoin:function(e){console.log(e),0==e&&(this.sumData=this.ishodSumData);var t=this.sumData.filter((function(t){var o=t.symbol.toLowerCase(),c=o.includes(e.toLowerCase());if(console.log(c),1==c)return!0}));this.sumData=t},searchWallet:function(){var e=document.getElementById("wltsrc");""!=e.value?null==this.wallet||this.wltCahanged?(this.wallet=e.value,this.buttonSrc=!1,localStorage.setItem("wallet",e.value),this.tableVis=!1,location.reload()):(this.wallet=null,localStorage.removeItem("wallet"),e.value="",this.buttonSrc=!0,this.tableVis=!0,location.reload()):alert("Введите кошелек!")},changeWlt:function(e){var t=e.target.value.length;0!=t?(this.buttonSrc=!0,this.wltCahanged=!0):(this.buttonSrc=!1,location.reload(),localStorage.removeItem("wallet"))}},mounted:function(){var e=this;console.log("new version!");var t=localStorage.getItem("wallet");if(console.log(t),null!==t){var o=document.getElementById("wltsrc");this.wallet=t,o.value=t,this.buttonSrc=!1,this.prelod1=!1,this.tableVis=!1;var c=Le[2]+"9338/web/graph_data/miner_hash_rates/last_year";fetch(c).then((function(e){return e.json()})).then((function(t){var o=0;t.forEach((function(t){var c=t[1];for(var r in c)r==e.wallet&&o++}));var c=[];t.forEach((function(t){var o=t[1];for(var r in o){var a=e.wallet+".";if(r.includes(a)){var n=r.indexOf(".");0==c.includes(r.slice(n+1))&&c.push(r.slice(n+1))}}})),0!=c.length?console.log("Воркеры: "+c):0!=o?console.log("У кошелька "+e.wallet+" нет воркеров"):console.log("Кошелька "+e.wallet+" не существует")}))}else{var r=[],a=[],n=[],s=[],i={pool_hash_rate:"no data",network_hashrate:"no data",pool_nonstale_hash_rate:"no data",pool_stale_prop:"no data",min_difficulty:"no data",network_block_difficulty:"no data"};We.forEach((function(e){r.push("http://"+e.server+e.port+"/global_stats")})),We.forEach((function(e){a.push("http://"+e.server+e.port+"/users")})),We.forEach((function(e){n.push("http://"+e.server+e.port+"/local_stats")})),We.forEach((function(e){s.push(e.id)}));var l=s.toString(),p=[],d=[],b=[],u=[];Promise.allSettled(r.map((function(e){return fetch(e).then((function(e){return e.json()}))}))).then((function(e){var t=0;e.forEach((function(e){if("fulfilled"==e.status){var o=Object.assign(We[t],e.value);p.push(o),t++}else{var c=Object.assign(We[t],i);p.push(c),t++}}))})).then((function(){Promise.allSettled(a.map((function(e){return fetch(e).then((function(e){return e.json()}))}))).then((function(e){var t=0;e.forEach((function(e){if("fulfilled"==e.status){var o={countUsers:Object.keys(e.value).length},c=Object.assign(p[t],o);d.push(c),t++}else o={countUsers:"no data"},c=Object.assign(p[t],o),d.push(c),t++}))}))})).then((function(){return Promise.allSettled(n.map((function(e){return fetch(e).then((function(e){return e.json()}))}))).then((function(t){var o=0;t.forEach((function(e){if("fulfilled"==e.status&&null!=e.value){var t=e.value.attempts_to_block/d[o].pool_hash_rate,c={expectedTime:t},r=Object.assign(d[o],c);b.push(r),o++}else c={expectedTime:"no data"},r=Object.assign(d,c),b.push(r),o++})),e.prelod1=!1}))})).then((function(){fetch("https://api.coingecko.com/api/v3/simple/price?ids="+l+",0x&vs_currencies=usd").then((function(e){return e.json()})).then((function(t){for(var o=0;o<b.length;o++){var c={},r={},a=t[b[o].id];c=void 0==a?{price:"n/a"}:{price:t[b[o].id].usd},r=Object.assign(b[o],c),u.push(r)}u.forEach((function(e){"no data"!=e.pool_nonstale_hash_rate&&(e.pool_hash_rate=Ue(e.pool_hash_rate),e.network_hashrate=Ue(e.network_hashrate),e.expectedTime=Ze(e.expectedTime),"n/a"==e.price?e.price=""+e.price:e.price="$ "+e.price,e.min_difficulty=Xe(e.min_difficulty),e.network_block_difficulty=Xe(e.network_block_difficulty))})),e.sumData=u,e.ishodSumData=u}))}))}}};o("6480");qe.render=m;var Qe=qe,Je=o("4452"),Ke=o.n(Je),Ye=o("ea7f"),et=o.n(Ye),tt=o("37d8"),ot=o.n(tt);ot()(et.a),Object(c["createApp"])(Qe).use(Ke.a).mount("#app")},6480:function(e,t,o){"use strict";o("2e58")},"64fe":function(e,t,o){},"6a14":function(e,t,o){},"7cbd":function(e,t,o){e.exports=o.p+"img/logo3.90df43c1.png"},8750:function(e,t,o){},"9ee9":function(e,t,o){"use strict";o("db6b")},c129:function(e,t,o){"use strict";o("e804")},c74f:function(e,t,o){},db6b:function(e,t,o){},e804:function(e,t,o){},f140:function(e,t,o){"use strict";o("64fe")},f687:function(e,t,o){"use strict";o("8750")},f68c:function(e,t,o){e.exports=o.p+"img/left2.349c1ac4.png"}});
//# sourceMappingURL=app.0b779767.js.map