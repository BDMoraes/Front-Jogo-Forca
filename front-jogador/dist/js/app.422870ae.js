(function(t){function a(a){for(var n,s,i=a[0],c=a[1],l=a[2],d=0,f=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(a);while(f.length)f.shift()();return o.push.apply(o,l||[]),e()}function e(){for(var t,a=0;a<o.length;a++){for(var e=o[a],n=!0,i=1;i<e.length;i++){var c=e[i];0!==r[c]&&(n=!1)}n&&(o.splice(a--,1),t=s(s.s=e[0]))}return t}var n={},r={app:0},o=[];function s(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=n,s.d=function(t,a,e){s.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,a){if(1&a&&(t=s(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)s.d(e,n,function(a){return t[a]}.bind(null,n));return e},s.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(a,"a",a),a},s.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=a,i=i.slice();for(var l=0;l<i.length;l++)a(i[l]);var u=c;o.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";var n=e("9085"),r=e.n(n);r.a},"0d25":function(t,a,e){"use strict";var n=e("446d"),r=e.n(n);r.a},"12d8":function(t,a,e){t.exports=e.p+"img/en6.43fcf4a4.png"},1686:function(t,a,e){"use strict";var n=e("5bb5"),r=e.n(n);r.a},"2b0f":function(t,a,e){},4006:function(t,a,e){},"446d":function(t,a,e){},"476b":function(t,a,e){t.exports=e.p+"img/Pitagoras_corda.c8361674.png"},"54da":function(t,a,e){"use strict";var n=e("4006"),r=e.n(n);r.a},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("Header",{attrs:{title:"Jogo da forca do Pitágoras"}}),e("Content"),e("Footer")],1)},o=[],s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",{staticClass:"header"},[e("h1",{staticClass:"title"},[t._v(" "+t._s(t.title)+" ")])])},i=[],c={name:"Header",props:{title:String}},l=c,u=(e("8baf"),e("2877")),d=Object(u["a"])(l,s,i,!1,null,null,null),f=d.exports,p=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("router-view")],1)},b=[],m={name:"Content"},g=m,h=(e("b318"),Object(u["a"])(g,p,b,!1,null,null,null)),v=h.exports,_=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",{staticClass:"footer"},[e("span",[t._v("Modelagem de Software - 6N 2020/2")])])}],w={name:"Footer"},y=w,j=(e("760c"),Object(u["a"])(y,_,C,!1,null,null,null)),x=j.exports,k={name:"App",components:{Header:f,Content:v,Footer:x}},O=k,E=(e("034f"),Object(u["a"])(O,r,o,!1,null,null,null)),$=E.exports,P=e("bc3a"),T=e.n(P),J=e("a7fe"),S=e.n(J),M=(e("4989"),e("a89b"),e("f9e3"),e("2dd8"),e("5f5b"));n["default"].use(M["a"]);e("7f10");var F=e("a65d"),q=e.n(F);n["default"].use(q.a,{iconPack:"fontawesome",duration:3e3}),n["default"].toasted.register("defaultSuccess","Operação realidada com sucesso!",{type:"success",icon:"check"}),n["default"].toasted.register("defaultError","Erro na operação!",{type:"error",icon:"times"});var R=e("8c4f"),A=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-container",{staticClass:"home"},[e("b-row",{staticClass:"title title-div",attrs:{"align-h":"center"}},[e("h1",[t._v("Ranking de Jogadores")])]),e("b-row",{attrs:{"align-h":"center"}},[e("b-col",{attrs:{"align-self":"center"}},[e("b-table",{attrs:{hover:"",striped:"",fields:t.fields}})],1)],1),e("b-col",{staticClass:"ran"},t._l(t.jogadores,(function(a,n){return e("b-row",{key:a.name,staticClass:"ranking"},[e("span",[t._v(t._s(n+1))]),e("span",{staticClass:"name"},[t._v(t._s(a.name))]),e("span",[t._v(t._s(a.score))])])})),1),e("b-row",{attrs:{"align-h":"center"}},[e("b-button",{staticClass:"btn-lg botao",on:{click:t.categoria}},[t._v("Jogar")])],1)],1)},H=[],z=(e("d81d"),e("b0c0"),e("5530")),N="https://jogo-da-forca.herokuapp.com";var B={name:"Home",data:function(){return{jogadores:[],fields:[{key:"posicao",label:"Posição"},{key:"name",label:"Nome"},{key:"pontos",label:"Pontuação"}]}},methods:{loadJogadores:function(){var t=this,a="".concat(N,"/api/ranking");T.a.get(a).then((function(a){t.jogadores=a.data.data.map((function(t){return Object(z["a"])(Object(z["a"])({},t),{},{value:t.name})}))}))},categoria:function(){this.$router.push({path:"/categoria"})}},mounted:function(){this.loadJogadores()}},G=B,I=(e("8b71"),Object(u["a"])(G,A,H,!1,null,null,null)),Q=I.exports,V=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-container",{staticClass:"back"},[e("b-row",{staticClass:"title title-div",attrs:{"align-h":"center"}},[e("b-col",{attrs:{"align-self":"center"}},[e("h1",[t._v("Selecione a categoria")])])],1),e("b-row",{attrs:{"align-h":"center"}},[e("b-col",{attrs:{"align-self":"center"}},[e("b-form-group",{staticClass:"select-categoria",attrs:{"label-for":"categoria.name"}},[e("b-form-select",{staticClass:"font",attrs:{id:"palavra-categoria",options:t.categorias},model:{value:t.selected,callback:function(a){t.selected=a},expression:"selected"}})],1)],1)],1),e("b-row",{staticClass:"title",attrs:{"align-h":"center"}},[e("b-col",{attrs:{"align-self":"center"}},[e("b-button",{staticClass:"btn-lg botao",on:{click:t.categoria}},[t._v("Vamos lá!")])],1)],1)],1)},D=[],K=(e("99af"),e("2909")),L={name:"Categoria",data:function(){return{selected:0,categorias:[{value:0,text:"Todas"}]}},methods:{loadCategorias:function(){var t=this,a="".concat(N,"/api/category");T.a.get(a).then((function(a){t.categorias=[].concat(Object(K["a"])(t.categorias),Object(K["a"])(a.data.data.map((function(t){return{value:t.id,text:t.name}}))))}))},categoria:function(){this.$router.push({path:"/Jogo/"+this.selected})}},mounted:function(){this.loadCategorias()}},U=L,W=(e("0d25"),Object(u["a"])(U,V,D,!1,null,null,null)),X=W.exports,Y=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("b-container",{staticClass:"back-jogo"},[n("b-col",{staticClass:"topo"},[n("b-row",{attrs:{"align-h":"between"}},[n("b-col",[n("img",{attrs:{src:e("476b"),width:"260",height:"300"}})]),n("b-col",{staticClass:"box-timer timer"},[n("b-row",{attrs:{"align-h":"center"}},[t._v(" 00 : "+t._s(t.displayTime)+" ")])],1)],1)],1),n("b-col",[n("b-row",{attrs:{"align-h":"start"}},[6==t.numErros?n("img",{staticClass:"corpo",attrs:{src:e("12d8"),width:"200"}}):t._e(),5==t.numErros?n("img",{staticClass:"corpo",attrs:{src:e("e227"),width:"200"}}):t._e(),4==t.numErros?n("img",{staticClass:"corpo",attrs:{src:e("d172"),width:"200"}}):t._e(),3==t.numErros?n("img",{staticClass:"corpo",attrs:{src:e("5be7"),width:"200"}}):t._e(),2==t.numErros?n("img",{staticClass:"corpo",attrs:{src:e("fa78"),width:"200"}}):t._e(),1==t.numErros?n("img",{staticClass:"corpo",attrs:{src:e("c9ee"),width:"200"}}):t._e()])],1),n("b-col",[n("b-row",{staticClass:"palavra",attrs:{"align-h":"center"}},t._l(t.letras,(function(a){return n("div",{key:a,staticClass:"letras"},[a?n("span",[t._v(t._s(a))]):t._e(),a?t._e():n("span")])})),0)],1),n("b-col",[n("b-row",{staticClass:"opcoes"},[n("div",{staticClass:"alfabeto"},t._l(t.alfabeto,(function(a){return n("span",{key:a},[a?n("b-button",{staticClass:"btn-lg botao",attrs:{disabled:t.carregando},on:{click:function(e){return t.validar(a)}}},[t._v(" "+t._s(a)+" ")]):t._e()],1)})),0)])],1),n("b-col",[n("b-row",{staticClass:"fundo",attrs:{"align-h":"center"}},t._l(t.erros,(function(a){return n("div",{key:a,staticClass:"letras-erradas"},[t._v(" "+t._s(a)+" ")])})),0)],1),n("b-modal",{ref:"desafio-modal",staticClass:"desafio-modal",attrs:{"hide-footer":"",title:"Qual a alternativa correta?"}},[n("b-row",{staticClass:"linha-modal",attrs:{"align-h":"center"}},[n("div",{staticClass:"d-block text-center"},[n("h2",[t._v(t._s(this.desafio)+" =")])])]),n("b-row",{staticClass:"linha-modal",attrs:{"align-h":"center"}},[n("div",{staticClass:"text-center"},[n("b-form-group",{staticClass:"form"},t._l(t.respostas,(function(a,e){return n("b-form-radio",{key:a.id,staticClass:"radios",attrs:{value:a.id},model:{value:t.selected,callback:function(a){t.selected=a},expression:"selected"}},[t._v(t._s(e+1)+") "+t._s(a.answer))])})),1)],1)]),n("b-row",{staticClass:"bt-modal linha-modal",attrs:{"align-h":"center"}},[n("b-button",{staticClass:"d-block text-center botao",attrs:{pill:"",variant:"success"},on:{click:t.hideModal}},[t._v("Responder")])],1)],1)],1)},Z=[],tt=(e("4de4"),e("4160"),e("c975"),e("159b"),e("96cf"),e("1da1")),at={name:"Jogo",data:function(){return{carregando:!1,desafiou:!1,categorias:[],letras:[],alfabeto:Object(K["a"])(Array(26)).map((function(t,a){return String.fromCharCode(a+65)})),erros:[],numErros:0,palavra:null,selected:"",desafio:"",respostas:[],displayTime:60,pontuacao:0}},methods:{contadorTempo:function(){var t=this;this.displayTime>0?setTimeout((function(){t.displayTime-=1,t.contadorTempo()}),1e3):console.log("teste")},loadPalavra:function(){var t=this;this.carregando=!0;var a=this.$route.params.categoria,e="".concat(N,"/api/game/word/")+a;T.a.get(e).then((function(a){t.alfabeto=Object(K["a"])(Array(26)).map((function(t,a){return String.fromCharCode(a+65)})),t.numErros=0,t.erros=[],t.displayTime=60,t.letras=new Array(a.data.data.size),t.palavra=a.data.data.id})),this.carregando=!1},validar:function(t){var a=this;return Object(tt["a"])(regeneratorRuntime.mark((function e(){var n,r,o,s,i,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a.carregando=!0,n="".concat(N,"/api/game/letter"),e.next=4,T.a.post(n,{id:a.palavra,letter:t});case 4:r=e.sent,o=r.data,o.length>0?(s=Object(K["a"])(a.letras),o.forEach((function(a){s[a]=t})),a.letras=s,a.letras.filter(Boolean).length===a.letras.length&&(a.pontuacao+=100,a.loadPalavra())):(a.erros=[].concat(Object(K["a"])(a.erros),[t]),a.numErros=a.numErros+1,6==a.numErros&&(a.desafiou?a.$router.push({path:"/Final/"+a.pontuacao}):(a.showModal(),a.desafiou=!0))),i=a.alfabeto.indexOf(t),c=Object(K["a"])(a.alfabeto),delete c[i],a.alfabeto=c,a.carregando=!1;case 12:case"end":return e.stop()}}),e)})))()},showModal:function(){var t=this;this.displayTime=0;var a="".concat(N,"/api/game/question");T.a.get(a).then((function(a){t.desafio=a.data.question.question,t.respostas=a.data.answers})),this.$refs["desafio-modal"].show()},hideModal:function(){var t=this,a="".concat(N,"/api/game/question/answer");T.a.post(a,{id:this.selected}).then((function(a){a.data?(t.numErros=t.numErros-1,t.displayTime=60,t.contadorTempo()):t.$router.push({path:"/Final/"+t.pontuacao}),t.$refs["desafio-modal"].hide()}))}},mounted:function(){this.loadPalavra(),this.contadorTempo()}},et=at,nt=(e("54da"),Object(u["a"])(et,Y,Z,!1,null,null,null)),rt=nt.exports,ot=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-container",{staticClass:"home"},[e("b-row",{staticClass:"title title-div",attrs:{"align-h":"center"}},[e("h1",[t._v("Ranking de Jogadores")])]),e("b-row",{attrs:{"align-h":"center"}},[e("b-form-group",{attrs:{"label-for":"player-name"}},[e("b-form-input",{attrs:{id:"player-name",type:"text",required:"",placeholder:"Informe seu nickname"},model:{value:t.jogador,callback:function(a){t.jogador=a},expression:"jogador"}})],1)],1),e("b-row",{attrs:{"align-h":"center"}},[e("b-button",{staticClass:"btn-lg botao",on:{click:t.finalizar}},[t._v("Gravar")])],1)],1)},st=[],it={name:"Final",data:function(){return{jogador:""}},methods:{finalizar:function(){var t=this.$route.params.pontos,a="".concat(N,"/api/ranking");T.a.post(a,{name:this.jogador,score:t}),this.$router.push({path:"/"})}},mounted:function(){}},ct=it,lt=(e("1686"),Object(u["a"])(ct,ot,st,!1,null,null,null)),ut=lt.exports;n["default"].use(R["a"]);var dt=[{name:"home",path:"/",component:Q},{name:"categoria",path:"/Categoria",component:X},{name:"jogo",path:"/Jogo/:categoria",component:rt},{name:"final",path:"/Final/:pontos",component:ut}],ft=new R["a"]({mode:"history",routes:dt});n["default"].use(S.a,T.a),new n["default"]({router:ft,render:function(t){return t($)}}).$mount("#app")},"5bb5":function(t,a,e){},"5be7":function(t,a,e){t.exports=e.p+"img/en3.169c383a.png"},"6a58":function(t,a,e){},"760c":function(t,a,e){"use strict";var n=e("7b7d"),r=e.n(n);r.a},"7b7d":function(t,a,e){},"8b71":function(t,a,e){"use strict";var n=e("6a58"),r=e.n(n);r.a},"8baf":function(t,a,e){"use strict";var n=e("bef0"),r=e.n(n);r.a},9085:function(t,a,e){},a89b:function(t,a,e){},b318:function(t,a,e){"use strict";var n=e("2b0f"),r=e.n(n);r.a},bef0:function(t,a,e){},c9ee:function(t,a,e){t.exports=e.p+"img/en1.0a0058ea.png"},d172:function(t,a,e){t.exports=e.p+"img/en4.5f7dc55b.png"},e227:function(t,a,e){t.exports=e.p+"img/en5.99c8d4d1.png"},fa78:function(t,a,e){t.exports=e.p+"img/en2.29280048.png"}});
//# sourceMappingURL=app.422870ae.js.map