(function(t){function e(e){for(var n,s,c=e[0],i=e[1],l=e[2],f=0,d=[];f<c.length;f++)s=c[f],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,c=1;c<a.length;c++){var i=a[c];0!==r[i]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},o=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=i;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("9085"),r=a.n(n);r.a},"0d25":function(t,e,a){"use strict";var n=a("446d"),r=a.n(n);r.a},"2b0f":function(t,e,a){},4006:function(t,e,a){},"446d":function(t,e,a){},"476b":function(t,e,a){t.exports=a.p+"img/Pitagoras_corda.c8361674.png"},"54da":function(t,e,a){"use strict";var n=a("4006"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header",{attrs:{title:"Jogo da forca do Pitágoras"}}),a("Content"),a("Footer")],1)},o=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"header"},[a("h1",{staticClass:"title"},[t._v(" "+t._s(t.title)+" ")])])},c=[],i={name:"Header",props:{title:String}},l=i,u=(a("8baf"),a("2877")),f=Object(u["a"])(l,s,c,!1,null,null,null),d=f.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("router-view")],1)},p=[],g={name:"Content"},h=g,v=(a("b318"),Object(u["a"])(h,b,p,!1,null,null,null)),m=v.exports,_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("span",[t._v("Modelagem de Software - 6N 2020/2")])])}],w={name:"Footer"},j=w,y=(a("760c"),Object(u["a"])(j,_,C,!1,null,null,null)),O=y.exports,k={name:"App",components:{Header:d,Content:m,Footer:O}},x=k,P=(a("034f"),Object(u["a"])(x,r,o,!1,null,null,null)),$=P.exports,E=a("bc3a"),J=a.n(E),S=a("a7fe"),M=a.n(S),H=(a("4989"),a("a89b"),a("f9e3"),a("2dd8"),a("5f5b"));n["default"].use(H["a"]);a("7f10");var A=a("a65d"),F=a.n(A);n["default"].use(F.a,{iconPack:"fontawesome",duration:3e3}),n["default"].toasted.register("defaultSuccess","Operação realidada com sucesso!",{type:"success",icon:"check"}),n["default"].toasted.register("defaultError","Erro na operação!",{type:"error",icon:"times"});var R=a("8c4f"),T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticClass:"home"},[a("b-row",{staticClass:"title title-div",attrs:{"align-h":"center"}},[a("h1",[t._v("Ranking de Jogadores")])]),a("b-row",{attrs:{"align-h":"center"}},[a("b-col",{attrs:{"align-self":"center"}},[a("b-table",{attrs:{hover:"",striped:"",fields:t.fields}})],1)],1),a("b-col",{staticClass:"ran"},t._l(t.jogadores,(function(e,n){return a("b-row",{key:e.name,staticClass:"ranking"},[a("span",[t._v(t._s(n+1))]),a("span",{staticClass:"name"},[t._v(t._s(e.name))]),a("span",[t._v(t._s(e.score))])])})),1),a("b-row",{attrs:{"align-h":"center"}},[a("b-button",{staticClass:"btn-lg botao",on:{click:t.categoria}},[t._v("Jogar")])],1)],1)},N=[],q=(a("d81d"),a("b0c0"),a("5530")),V="https://jogo-da-forca.herokuapp.com";var z={name:"Home",data:function(){return{jogadores:[],fields:[{key:"posicao",label:"Posição"},{key:"name",label:"Nome"},{key:"pontos",label:"Pontuação"}]}},methods:{loadJogadores:function(){var t=this,e="".concat(V,"/api/ranking");J.a.get(e).then((function(e){t.jogadores=e.data.data.map((function(t){return Object(q["a"])(Object(q["a"])({},t),{},{value:t.name})}))}))},categoria:function(){this.$router.push({path:"/categoria"})}},mounted:function(){console.log("aqui"),this.loadJogadores()}},B=z,D=(a("8b71"),Object(u["a"])(B,T,N,!1,null,null,null)),G=D.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticClass:"back"},[a("b-row",{staticClass:"title title-div",attrs:{"align-h":"center"}},[a("b-col",{attrs:{"align-self":"center"}},[a("h1",[t._v("Selecione a categoria")])])],1),a("b-row",{attrs:{"align-h":"center"}},[a("b-col",{attrs:{"align-self":"center"}},[a("b-form-group",{staticClass:"select-categoria",attrs:{"label-for":"categoria.name"}},[a("b-form-select",{staticClass:"font",attrs:{id:"palavra-categoria",options:t.categorias},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)],1)],1),a("b-row",{staticClass:"title",attrs:{"align-h":"center"}},[a("b-col",{attrs:{"align-self":"center"}},[a("b-button",{staticClass:"btn-lg botao",on:{click:t.categoria}},[t._v("Vamos lá!")])],1)],1)],1)},K=[],L=(a("99af"),a("2909")),Q={name:"Categoria",data:function(){return{selected:0,categorias:[{value:0,text:"Todas"}]}},methods:{loadCategorias:function(){var t=this,e="".concat(V,"/api/category");J.a.get(e).then((function(e){t.categorias=[].concat(Object(L["a"])(t.categorias),Object(L["a"])(e.data.data.map((function(t){return{value:t.id,text:t.name}}))))}))},categoria:function(){this.$router.push({path:"/Jogo"})}},mounted:function(){this.loadCategorias()}},U=Q,W=(a("0d25"),Object(u["a"])(U,I,K,!1,null,null,null)),X=W.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{staticClass:"back-jogo"},[n("b-col",{staticClass:"topo"},[n("b-row",{attrs:{"align-h":"between"}},[n("img",{attrs:{src:a("476b"),width:"260",height:"300"}}),n("img",{attrs:{src:a("9f49"),width:"300"}})]),n("b-row",{staticClass:"palavra",attrs:{"align-h":"center"}},t._l(t.letras,(function(e){return n("div",{key:e,staticClass:"letras"},[e?n("span",[t._v(t._s(e))]):t._e(),e?t._e():n("span")])})),0)],1),n("b-col",[n("b-row",{staticClass:"opcoes"},[n("b-div",{staticClass:"alfabeto"},t._l(t.alfabeto,(function(e){return n("span",{key:e},[e?n("b-button",{staticClass:"btn-lg botao",attrs:{disabled:t.carregando},on:{click:function(a){return t.validar(e)}}},[t._v(t._s(e))]):t._e()],1)})),0)],1)],1),n("b-col",[n("b-row",{staticClass:"fundo",attrs:{"align-h":"start"}},t._l(t.erros,(function(e){return n("b-div",{key:e,staticClass:"letras-erradas"},[t._v(t._s(e))])})),1)],1)],1)},Z=[],tt=(a("4160"),a("c975"),a("159b"),a("96cf"),a("1da1")),et={name:"Jogo",data:function(){return{carregando:!1,categorias:[],letras:[],alfabeto:Object(L["a"])(Array(26)).map((function(t,e){return String.fromCharCode(e+65)})),erros:[]}},methods:{loadPalavra:function(){this.carregando=!0,this.letras=new Array(7),this.carregando=!1},validar:function(t){var e=this;return Object(tt["a"])(regeneratorRuntime.mark((function a(){var n,r,o,s,c,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.carregando=!0,n="".concat(V,"/api/game/letter"),a.next=4,J.a.post(n,{id:7,letter:t});case 4:r=a.sent,o=r.data,o.length>0?(s=Object(L["a"])(e.letras),o.forEach((function(e){s[e]=t})),e.letras=s):e.erros=[].concat(Object(L["a"])(e.erros),[t]),c=e.alfabeto.indexOf(t),i=Object(L["a"])(e.alfabeto),delete i[c],e.alfabeto=i,e.carregando=!1;case 12:case"end":return a.stop()}}),a)})))()},categoria:function(){this.$router.push({path:"/Jogo"})}},mounted:function(){this.loadPalavra()}},at=et,nt=(a("54da"),Object(u["a"])(at,Y,Z,!1,null,null,null)),rt=nt.exports;n["default"].use(R["a"]);var ot=[{name:"home",path:"/",component:G},{name:"categoria",path:"/Categoria",component:X},{name:"jogo",path:"/Jogo",component:rt}],st=new R["a"]({mode:"history",routes:ot});n["default"].use(M.a,J.a),new n["default"]({router:st,render:function(t){return t($)}}).$mount("#app")},"6a58":function(t,e,a){},"760c":function(t,e,a){"use strict";var n=a("7b7d"),r=a.n(n);r.a},"7b7d":function(t,e,a){},"8b71":function(t,e,a){"use strict";var n=a("6a58"),r=a.n(n);r.a},"8baf":function(t,e,a){"use strict";var n=a("bef0"),r=a.n(n);r.a},9085:function(t,e,a){},"9f49":function(t,e,a){t.exports=a.p+"img/temp.ce84e909.gif"},a89b:function(t,e,a){},b318:function(t,e,a){"use strict";var n=a("2b0f"),r=a.n(n);r.a},bef0:function(t,e,a){}});
//# sourceMappingURL=app.d80d4b78.js.map