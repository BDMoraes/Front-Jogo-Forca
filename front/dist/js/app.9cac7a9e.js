(function(e){function a(a){for(var o,s,i=a[0],l=a[1],c=a[2],d=0,m=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&m.push(r[s][0]),r[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);u&&u(a);while(m.length)m.shift()();return n.push.apply(n,c||[]),t()}function t(){for(var e,a=0;a<n.length;a++){for(var t=n[a],o=!0,i=1;i<t.length;i++){var l=t[i];0!==r[l]&&(o=!1)}o&&(n.splice(a--,1),e=s(s.s=t[0]))}return e}var o={},r={app:0},n=[];function s(a){if(o[a])return o[a].exports;var t=o[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=e,s.c=o,s.d=function(e,a,t){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)s.d(t,o,function(a){return e[a]}.bind(null,o));return t},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=a,i=i.slice();for(var c=0;c<i.length;c++)a(i[c]);var u=l;n.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"034f":function(e,a,t){"use strict";var o=t("9085"),r=t.n(o);r.a},"04ba":function(e,a,t){},"0b3a":function(e,a,t){},"13da":function(e,a,t){"use strict";var o=t("a300"),r=t.n(o);r.a},"1ea6":function(e,a,t){},"46a2":function(e,a,t){},"56d7":function(e,a,t){"use strict";t.r(a);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("2b0e"),r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{class:{"hide-menu":!e.isMenuVisible||!e.user},attrs:{id:"app"}},[t("Header",{attrs:{title:"Jogo da forca do Pitágoras",hideUserDropdown:!e.user}}),t("Content"),t("Footer")],1)},n=[],s=t("2f62"),i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("header",{staticClass:"header"},[t("h1",{staticClass:"title"},[e._v(" "+e._s(e.title)+" ")]),e.hideUserDropdown?e._e():t("UserDropdown")],1)},l=[],c=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"user-dropdown"},[t("div",{staticClass:"user-button"},[t("span",{staticClass:"d-none d-sm-block"},[e._v(e._s(e.user.username))]),t("div",{staticClass:"user-dropdown-img"},[t("Gravatar",{attrs:{username:e.user.username,alt:"User"}})],1),t("i",{staticClass:"fa fa-angle-down"})]),t("div",{staticClass:"user-dropdown-content"},[t("router-link",{attrs:{to:"/admin"}},[t("i",{staticClass:"fa fa-cogs"},[e._v("Administração")])]),t("a",{staticClass:"fa fa-sign-out",attrs:{href:""},on:{click:function(a){return a.preventDefault(),e.logout(a)}}},[t("i",[e._v("Sair")])])],1)])},u=[],d="__admin_user",m="https://jogo-da-forca.herokuapp.com";function f(e){e&&e.response&&e.response.data?o["default"].toasted.global.defaultError({msg:e.response.data}):"string"===typeof e?o["default"].toasted.global.defaultError({msg:e}):o["default"].toasted.global.defaultError()}var p=t("e06a"),v=t.n(p),b={name:"UserDropdown",components:{Gravatar:v.a},computed:Object(s["b"])(["user"]),methods:{logout:function(){localStorage.removeItem(d),this.$store.commit("setUser",null),this.$router.push({name:"auth"})}}},h=b,g=(t("f42f"),t("2877")),_=Object(g["a"])(h,c,u,!1,null,null,null),y=_.exports,C={name:"Header",components:{UserDropdown:y},props:{title:String,hideUserDropdown:Boolean}},q=C,k=(t("9b18"),Object(g["a"])(q,i,l,!1,null,null,null)),x=k.exports,O=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"content"},[t("router-view")],1)},w=[],$={name:"Content"},j=$,P=(t("77d4"),Object(g["a"])(j,O,w,!1,null,null,null)),S=P.exports,A=function(){var e=this,a=e.$createElement;e._self._c;return e._m(0)},E=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("footer",{staticClass:"footer"},[t("span",[e._v("Modelagem de Software - 6N 2020/2")])])}],I={name:"Footer"},N=I,Q=(t("13da"),Object(g["a"])(N,A,E,!1,null,null,null)),M=Q.exports,U={name:"App",components:{Header:x,Content:S,Footer:M},computed:Object(s["b"])(["isMenuVisible","user"])},V=U,D=(t("034f"),Object(g["a"])(V,r,n,!1,null,null,null)),J=D.exports,F=t("bc3a"),T=t.n(F),B=t("a7fe"),G=t.n(B),H=(t("4989"),t("a89b"),t("f9e3"),t("2dd8"),t("5f5b"));o["default"].use(H["a"]);t("7f10");o["default"].use(s["a"]);var L=function(e,a){e.user=a,a?(T.a.defaults.headers.common["Authorization"]="Bearer ".concat(a.access_token),e.isMenuVisible=!0):(delete T.a.defaults.headers.common["Authorization"],e.isMenuVisible=!1)},z=new s["a"].Store({state:{isMenuVisible:!1,user:null},mutations:{toggleMenu:function(e,a){e.user?e.isMenuVisible=void 0==a?!e.isMenuVisible:a:e.isMenuVisible=!1},setUser:function(e,a){e.user=a,L(e,a)},init:function(){var e=JSON.parse(localStorage.getItem(d));L(this.state,e),console.log(e.access_token)}}}),R=t("a65d"),Z=t.n(R);o["default"].use(Z.a,{iconPack:"fontawesome",duration:3e3}),o["default"].toasted.register("defaultSuccess","Operação realidada com sucesso!",{type:"success",icon:"check"}),o["default"].toasted.register("defaultError","Erro na operação!",{type:"error",icon:"times"});var K=t("8c4f"),W=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"admin-pages"},[t("PageTitle",{attrs:{icon:"fa fa-cogs",main:"Administração do Sistema",sub:"Cadastros"}}),t("div",{staticClass:"admin-pages-tabs"},[t("b-card",{attrs:{"no-body":""}},[t("b-tabs",{attrs:{card:""}},[t("b-tab",{attrs:{title:"Categorias",active:""}},[t("AdminCategorias")],1),t("b-tab",{attrs:{title:"Palavras"}},[t("AdminPalavras")],1),t("b-tab",{attrs:{title:"Questões"}},[t("AdminQuestoes")],1)],1)],1)],1)],1)},X=[],Y=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"page-title"},[t("h1",[e.icon?t("i",{class:e.icon}):e._e(),e._v(" "+e._s(e.main)+" ")]),t("h2",[e._v(e._s(e.sub))]),t("hr")])},ee=[],ae={name:"PageTitle",props:["icon","main","sub"]},te=ae,oe=(t("9632"),Object(g["a"])(te,Y,ee,!1,null,null,null)),re=oe.exports,ne=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"categoria-admin"},[t("b-form",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.categoria.id,expression:"categoria.id"}],attrs:{id:"categoria-id",type:"hidden"},domProps:{value:e.categoria.id},on:{input:function(a){a.target.composing||e.$set(e.categoria,"id",a.target.value)}}}),t("b-form-group",{attrs:{label:"Nome:","label-for":"categoria-name"}},[t("b-form-input",{attrs:{id:"categoria-name",type:"text",required:"",readonly:"remove"===e.mode,placeholder:"Informe o Nome da Categoria..."},model:{value:e.categoria.name,callback:function(a){e.$set(e.categoria,"name",a)},expression:"categoria.name"}})],1),"save"===e.mode?t("b-button",{attrs:{variant:"primary"},on:{click:e.save}},[e._v("Salvar")]):e._e(),"remove"===e.mode?t("b-button",{attrs:{variant:"danger"},on:{click:e.remove}},[e._v("Excluir")]):e._e(),t("b-button",{staticClass:"ml-2",on:{click:e.reset}},[e._v("Cancelar")])],1),t("hr"),t("b-table",{attrs:{hover:"",striped:"",items:e.categorias,fields:e.fields},scopedSlots:e._u([{key:"cell(actions)",fn:function(a){return[t("b-button",{staticClass:"espaco_bts",attrs:{variant:"warning"},on:{click:function(t){return e.loadCategoria(a.item)}}},[t("i",{staticClass:"fa fa-pencil",attrs:{color:"red"}})]),t("b-button",{attrs:{variant:"danger"},on:{click:function(t){return e.loadCategoria(a.item,"remove")}}},[t("i",{staticClass:"fa fa-trash"})])]}}])})],1)},se=[],ie=(t("99af"),t("d81d"),t("5530")),le={name:"AdminCategorias",data:function(){return{mode:"save",categoria:{},categorias:[],fields:[{key:"id",label:"Código",sortable:!0},{key:"name",label:"Nome",sortable:!0},{key:"actions",label:"Ações"}]}},methods:{loadCategorias:function(){var e=this,a="".concat(m,"/api/category");T.a.get(a).then((function(a){e.categorias=a.data.data.map((function(e){return Object(ie["a"])(Object(ie["a"])({},e),{},{value:e.id})}))}))},reset:function(){this.mode="save",this.categoria={},this.loadCategorias()},save:function(){var e=this,a=this.categoria.id?"put":"post",t=this.categoria.id?"/".concat(this.categoria.id):"";T.a[a]("".concat(m,"/api/category").concat(t),this.categoria).then((function(){e.$toasted.global.defaultSuccess(),e.reset()})).catch(f)},remove:function(){var e=this,a=this.categoria.id;T.a.delete("".concat(m,"/api/category/").concat(a)).then((function(){e.$toasted.global.defaultSuccess(),e.reset()})).catch(f)},loadCategoria:function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"save";this.mode=a,this.categoria=Object(ie["a"])({},e)}},mounted:function(){this.loadCategorias()}},ce=le,ue=(t("8208"),Object(g["a"])(ce,ne,se,!1,null,null,null)),de=ue.exports,me=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"palavra-admin"},[t("b-form",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.palavra.id,expression:"palavra.id"}],attrs:{id:"palavra-id",type:"hidden"},domProps:{value:e.palavra.id},on:{input:function(a){a.target.composing||e.$set(e.palavra,"id",a.target.value)}}}),t("b-form-group",{attrs:{label:"Nome:","label-for":"palavra-name"}},[t("b-form-input",{attrs:{id:"palavra-name",type:"text",required:"",readonly:"remove"===e.mode,placeholder:"Informe a Palavra..."},model:{value:e.palavra.name,callback:function(a){e.$set(e.palavra,"name",a)},expression:"palavra.name"}})],1),t("b-form-group",{attrs:{label:"Categoria Pai:","label-for":"palavra-parentId"}},["save"===e.mode?t("b-form-select",{attrs:{id:"palavra-parentId",options:e.palavras},model:{value:e.palavra.parentId,callback:function(a){e.$set(e.palavra,"parentId",a)},expression:"palavra.parentId"}}):t("b-form-input",{attrs:{id:"palavra-parentId",type:"text",readonly:""},model:{value:e.palavra.path,callback:function(a){e.$set(e.palavra,"path",a)},expression:"palavra.path"}})],1),"save"===e.mode?t("b-button",{attrs:{variant:"primary"},on:{click:e.save}},[e._v("Salvar")]):e._e(),"remove"===e.mode?t("b-button",{attrs:{variant:"danger"},on:{click:e.remove}},[e._v("Excluir")]):e._e(),t("b-button",{staticClass:"ml-2",on:{click:e.reset}},[e._v("Cancelar")])],1),t("hr"),t("b-table",{attrs:{hover:"",striped:"",items:e.palavras,fields:e.fields},scopedSlots:e._u([{key:"cell(actions)",fn:function(a){return[t("b-button",{staticClass:"espaco_bts",attrs:{variant:"warning"},on:{click:function(t){return e.loadPalavra(a.item)}}},[t("i",{staticClass:"fa fa-pencil"})]),t("b-button",{attrs:{variant:"danger"},on:{click:function(t){return e.loadPalavra(a.item,"remove")}}},[t("i",{staticClass:"fa fa-trash"})])]}}])})],1)},fe=[],pe={name:"Adminpalavras",data:function(){return{mode:"save",palavra:{},palavras:[],categorias:[],fields:[{key:"id",label:"Código",sortable:!0},{key:"name",label:"Nome",sortable:!0},{key:"category",label:"Categoria",sortable:!0},{key:"actions",label:"Ações"}]}},methods:{loadCategorias:function(){var e=this,a="".concat(m,"/api/category");T.a.get(a).then((function(a){e.categorias=a.data.data.map((function(e){return Object(ie["a"])(Object(ie["a"])({},e),{},{value:e.id})}))}))},loadPalavras:function(){var e=this,a="".concat(m,"/palavras");T.a.get(a).then((function(a){e.palavras=a.data.data.map((function(e){return Object(ie["a"])(Object(ie["a"])({},e),{},{value:e.id})}))}))},reset:function(){this.mode="save",this.palavra={},this.loadPalavras()},save:function(){var e=this,a=this.palavra.id?"put":"post",t=this.palavra.id?"/".concat(this.palavra.id):"";T.a[a]("".concat(m,"/palavras").concat(t),this.palavra).then((function(){e.$toasted.global.defaultSuccess(),e.reset()})).catch(f)},remove:function(){var e=this,a=this.palavra.id;T.a.delete("".concat(m,"/palavras/").concat(a)).then((function(){e.$toasted.global.defaultSuccess(),e.reset()})).catch(f)},loadPalavra:function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"save";this.mode=a,this.palavra=Object(ie["a"])({},e)}},mounted:function(){this.loadPalavras()}},ve=pe,be=(t("8096"),Object(g["a"])(ve,me,fe,!1,null,null,null)),he=be.exports,ge=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"questao-admin"},[t("b-form",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.questao.id,expression:"questao.id"}],attrs:{id:"questao-id",type:"hidden"},domProps:{value:e.questao.id},on:{input:function(a){a.target.composing||e.$set(e.questao,"id",a.target.value)}}}),t("b-form-group",{attrs:{label:"Nome:","label-for":"questao-name"}},[t("b-form-input",{attrs:{id:"questao-name",type:"text",required:"",readonly:"remove"===e.mode,placeholder:"Informe o Nome da Questao..."},model:{value:e.questao.name,callback:function(a){e.$set(e.questao,"name",a)},expression:"questao.name"}})],1),t("b-form-group",{attrs:{label:"Descrição:","label-for":"questao-desc"}},[t("b-form-input",{attrs:{id:"questao-desc",type:"text",required:"",readonly:"remove"===e.mode,placeholder:"Informe a Descrição da Questao..."},model:{value:e.questao.desc,callback:function(a){e.$set(e.questao,"desc",a)},expression:"questao.desc"}})],1),t("b-form-group",{attrs:{label:"Resposta:","label-for":"questao-resp"}},[t("b-form-input",{attrs:{id:"questao-resp",type:"text",required:"",readonly:"remove"===e.mode,placeholder:"Informe a Resposta da Questao..."},model:{value:e.questao.resp,callback:function(a){e.$set(e.questao,"resp",a)},expression:"questao.resp"}})],1),t("b-form-group",{attrs:{label:"Alternativa incorreta 1:","label-for":"questao-alt1"}},[t("b-form-input",{attrs:{id:"questao-alt1",type:"text",required:"",readonly:"remove"===e.mode,placeholder:"Informe a Alternativa incorreta 1 da Questao..."},model:{value:e.questao.alt1,callback:function(a){e.$set(e.questao,"alt1",a)},expression:"questao.alt1"}})],1),t("b-form-group",{attrs:{label:"Alternativa incorreta 2:","label-for":"questao-alt2"}},[t("b-form-input",{attrs:{id:"questao-alt2",type:"text",required:"",readonly:"remove"===e.mode,placeholder:"Informe a Alternativa incorreta 2 da Questao..."},model:{value:e.questao.alt2,callback:function(a){e.$set(e.questao,"alt2",a)},expression:"questao.alt2"}})],1),"save"===e.mode?t("b-button",{attrs:{variant:"primary"},on:{click:e.save}},[e._v("Salvar")]):e._e(),"remove"===e.mode?t("b-button",{attrs:{variant:"danger"},on:{click:e.remove}},[e._v("Excluir")]):e._e(),t("b-button",{staticClass:"ml-2",on:{click:e.reset}},[e._v("Cancelar")])],1),t("hr"),t("b-table",{attrs:{hover:"",striped:"",items:e.questaos,fields:e.fields},scopedSlots:e._u([{key:"actions",fn:function(a){return[t("b-button",{staticClass:"mr-2",attrs:{variant:"warning"},on:{click:function(t){return e.loadQuestao(a.item)}}},[t("i",{staticClass:"fa fa-pencil"})]),t("b-button",{attrs:{variant:"danger"},on:{click:function(t){return e.loadQuestao(a.item,"remove")}}},[t("i",{staticClass:"fa fa-trash"})])]}}])})],1)},_e=[],ye={name:"AdminQuestoes",data:function(){return{mode:"save",questao:{},questaos:[],fields:[{key:"id",label:"Código",sortable:!0},{key:"name",label:"Nome",sortable:!0},{key:"actions",label:"Ações"}]}},methods:{loadQuestoes:function(){var e=this,a="".concat(m,"/cquestaos");T.a.get(a).then((function(a){e.questaos=a.data.map((function(e){return Object(ie["a"])(Object(ie["a"])({},e),{},{value:e.id})}))}))},reset:function(){this.mode="save",this.questao={},this.loadQuestoes()},save:function(){var e=this,a=this.questao.id?"put":"post",t=this.questao.id?"/".concat(this.questao.id):"";T.a[a]("".concat(m,"/questaos").concat(t),this.questao).then((function(){e.$toasted.global.defaultSuccess(),e.reset()})).catch(f)},remove:function(){var e=this,a=this.questao.id;T.a.delete("".concat(m,"/questaos/").concat(a)).then((function(){e.$toasted.global.defaultSuccess(),e.reset()})).catch(f)},loadQuestao:function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"save";this.mode=a,this.questao=Object(ie["a"])({},e)}},mounted:function(){this.loadQuestoes()}},Ce=ye,qe=Object(g["a"])(Ce,ge,_e,!1,null,null,null),ke=qe.exports,xe={name:"AdminPages",components:{PageTitle:re,AdminCategorias:de,AdminPalavras:he,AdminQuestoes:ke}},Oe=xe,we=Object(g["a"])(Oe,W,X,!1,null,null,null),$e=we.exports,je=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"auth-content"},[o("div",{staticClass:"auth-modal"},[o("img",{attrs:{src:t("c070"),width:"300",alt:"Logo"}}),o("hr"),o("div",{staticClass:"auth-title"}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],attrs:{name:"username",type:"text",placeholder:"E-mail"},domProps:{value:e.user.username},on:{input:function(a){a.target.composing||e.$set(e.user,"username",a.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],attrs:{name:"password",type:"password",placeholder:"Senha"},domProps:{value:e.user.password},on:{input:function(a){a.target.composing||e.$set(e.user,"password",a.target.value)}}}),o("button",{on:{click:e.signin}},[e._v("Entrar")])])])},Pe=[],Se={name:"Auth",data:function(){return{user:{}}},methods:{signin:function(){var e=this;T.a.post("".concat(m,"/oauth/token"),Object(ie["a"])(Object(ie["a"])({},this.user),{},{grant_type:"password",client_id:1,client_secret:"gyQmIEJllLaFVrhkfNH4h2BGnZUneOBin0VFQ0gj"})).then((function(a){e.$store.commit("setUser",a.data),localStorage.setItem(d,JSON.stringify(a.data)),e.$router.push({path:"/admin"})})).catch(f)}}},Ae=Se,Ee=(t("ee68"),Object(g["a"])(Ae,je,Pe,!1,null,null,null)),Ie=Ee.exports;o["default"].use(K["a"]);var Ne=[{name:"home",path:"/",component:Ie},{name:"adminPages",path:"/admin",component:$e},{name:"auth",path:"/Auth",component:Ie}],Qe=new K["a"]({mode:"history",routes:Ne});o["default"].use(G.a,T.a),new o["default"]({beforeCreate:function(){this.$store.commit("init")},store:z,router:Qe,render:function(e){return e(J)}}).$mount("#app")},5856:function(e,a,t){},"6cdf":function(e,a,t){},"77d4":function(e,a,t){"use strict";var o=t("5856"),r=t.n(o);r.a},8096:function(e,a,t){"use strict";var o=t("1ea6"),r=t.n(o);r.a},8208:function(e,a,t){"use strict";var o=t("0b3a"),r=t.n(o);r.a},9085:function(e,a,t){},9632:function(e,a,t){"use strict";var o=t("a1a7"),r=t.n(o);r.a},"9b18":function(e,a,t){"use strict";var o=t("46a2"),r=t.n(o);r.a},a1a7:function(e,a,t){},a300:function(e,a,t){},a89b:function(e,a,t){},c070:function(e,a,t){e.exports=t.p+"img/LOGO.26bbcb57.png"},ee68:function(e,a,t){"use strict";var o=t("6cdf"),r=t.n(o);r.a},f42f:function(e,a,t){"use strict";var o=t("04ba"),r=t.n(o);r.a}});
//# sourceMappingURL=app.9cac7a9e.js.map