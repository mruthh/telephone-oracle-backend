(function(e){function t(t){for(var a,i,l=t[0],o=t[1],c=t[2],d=0,p=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,l=1;l<n.length;l++){var o=n[l];0!==r[o]&&(a=!1)}a&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},s=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=o;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("header",{staticClass:"accent pa-2 mb-4 lime--text text--lighten-5 elevation-5"},[n("h1",{},[e._v("Telephone Oracle")]),n("p",{staticClass:"subtitle-1 font-italic"},[e._v("Pandemic edition")])]),n("v-main",{staticClass:"mx-4"},[e.game?e._e():n("Start",{attrs:{hasError:e.hasGameCodeError},on:{start:e.initGame,join:e.joinGame}}),e.gameDataIsLoaded?n("div",["open"===e.game.status?n("Pregame",{attrs:{game:e.game,localPlayer:e.localPlayer}}):e._e(),"active"===e.game.status?n("Game",{attrs:{game:e.game,localPlayer:e.localPlayer,sheet:e.activeSheet}}):e._e(),"complete"===e.game.status?n("Finale",{attrs:{sheets:e.sheets,game:e.game}}):e._e()],1):e._e(),e.gameDataIsLoaded?n("v-container",{attrs:{fluid:""}},[n("v-row",{staticClass:"d-md-flex justify-space-between align-stretch"},[n("Players",{staticClass:"ma-2",attrs:{players:e.players,localPlayer:e.localPlayer,queues:e.queues}}),n("GameInfo",{staticClass:"ma-2",attrs:{game:e.game,progress:e.progress}})],1),n("v-row",{staticClass:"d-flex justify-end"},[n("HostControls",{staticClass:"ma-2",attrs:{isHost:!!e.localPlayer.isHost,status:e.game.status},on:{start:e.startGame}})],1)],1):e._e()],1)],1)},s=[],i=(n("8e6e"),n("456d"),n("ac6a"),n("75fc")),l=(n("20d6"),n("28a5"),n("bd86")),o=(n("96cf"),n("3b8d")),c=(n("7514"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-btn",{staticClass:"my-4",attrs:{color:"primary"},on:{click:function(t){return e.$emit("start")}}},[e._v("Start a new game ")]),n("form",{staticClass:"mt-4",on:{submit:function(t){return t.preventDefault(),e.joinGame(t)}}},[n("v-text-field",{attrs:{clearable:"",label:"Got a game link? Paste it here","aria-describedby":e.hasError?"game-code-invalid":null},model:{value:e.gameLink,callback:function(t){e.gameLink=t},expression:"gameLink"}}),e.hasError?n("p",{attrs:{id:"game-code-invalid"}},[e._v("Please enter a valid game code")]):e._e()],1)],1)}),u=[],d=(n("6762"),n("2fdb"),{props:{hasError:{type:Boolean,default:!1}},data:function(){return{gameLink:null}},methods:{joinGame:function(){var e=this.gameLink;e.includes("/")&&(e=e.split("/").slice(-1)[0]),this.$emit("join",e)}}}),p=d,f=n("2877"),h=Object(f["a"])(p,c,u,!1,null,null,null),m=h.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d-flex flex-column justify-space-between"},[n("ActionPanel",[e.localPlayer.name?n("div",[n("div",{staticClass:"d-flex justify-space-between align-center"},[n("h2",[e._v("Welcome "+e._s(e.localPlayer.name)+"!")]),n("v-btn",{staticClass:"ma-4 black--text",attrs:{small:"",color:"secondary"},on:{click:e.copyGameLink}},[n("span",{staticClass:"mr-2"},[e._v("Copy invite link")]),n("v-icon",{attrs:{small:""}},[e._v(" "+e._s(e.copied?"fas fa-clipboard-check":"fas fa-clipboard")+" ")])],1)],1),n("p",{staticClass:"font-italic"},[e._v("Waiting for players to join... ")])]):n("div",[n("h2",[e._v("Please enter your name")]),n("v-form",{on:{submit:function(t){return t.preventDefault(),e.updatePlayer(t)}}},[n("v-text-field",{staticClass:"mb-8",attrs:{label:"Player name",hint:"Please enter your name","persistent-hint":""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1)],1)])],1)},y=[],g=(n("7f7f"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"pa-8"},[e._t("default")],2)}),b=[],_={},x=_,w=Object(f["a"])(x,g,b,!1,null,null,null),P=w.exports,k=n("bc3a"),j=n.n(k);j.a.defaults.baseURL="api";var O=function(){return j.a.post("/game")},C=function(e){return j.a.post("/game/start",{id:e})},S=function(e){return j()({method:"get",url:"game",params:{id:e}})},I=function(e){return j.a.get("/player",{params:{id:e}})},G=function(e){return j.a.post("player",{gameId:e})},L=function(e,t){return j.a.patch("player",{id:e,params:t})},q=function(e){return j.a.get("/line/last",{params:{sheetId:e}})},E=function(e){return j.a.post("/line",e)},R=function(e){return j.a.get("/sheet/full",{params:{gameId:e}})},A={name:"Pregame",components:{ActionPanel:P},props:{game:{type:Object,required:!0},localPlayer:{type:Object,required:!0}},data:function(){return{copied:!1,name:""}},computed:{gameLink:function(){return"".concat("","/game/").concat(this.game.uuid)}},methods:{copyGameLink:function(){var e=document.createElement("input");e.value=this.gameLink,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),this.copied=!0},updatePlayer:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=L(this.localPlayer.uuid,{name:this.name}),t.data;case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},$=A,D=Object(f["a"])($,v,y,!1,null,null,null),T=D.exports,Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ActionPanel",[e.sheet?e.lastLine.uuid?n("h2",{staticClass:"font-italic mb-4"},[n("span",[e._v(e._s(e.isQuestion?"Answer:":"Question:"))]),e._v(" "+e._s(e.lastLine.text)+" ")]):n("h2",{staticClass:"mb-4"},[e._v("Ask the oracle a question")]):n("h2",[e._v("Waiting for the oracle...")]),e.sheet?n("div",[n("v-form",{staticClass:"d-md-flex align-start",on:{submit:function(t){return t.preventDefault(),e.addLine(t)}}},[n("v-textarea",{staticClass:"mr-8",attrs:{label:e.label,rows:1,"auto-grow":""},model:{value:e.line,callback:function(t){e.line=t},expression:"line"}}),n("v-btn",{attrs:{type:"submit",color:"primary"}},[e._v(" "+e._s(e.isQuestion?"Submit question":"Submit answer")+" ")])],1)],1):e._e()])},H=[],F={components:{ActionPanel:P},name:"Game",props:{game:{type:Object,required:!0},localPlayer:{type:Object,default:null},sheet:{type:Object,default:null}},data:function(){return{line:null,lastLine:null}},computed:{gameIsActive:function(){return"active"===this.game.status},isQuestion:function(){return!this.lastLine||!(this.lastLine.order%2)},label:function(){return this.lastLine?this.isQuestion?"Please enter a question":"Please enter an answer":"Please enter a question for the Oracle"}},methods:{addLine:function(e){var t=this.line;t?(this.line=null,E({text:t,gameId:this.game.uuid,sheetId:this.sheet.uuid,playerId:this.localPlayer.uuid})):console.error("where is the text")},endGame:function(){}},watch:{sheet:{handler:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,q(t.uuid);case 4:n=e.sent,a=n.data,this.lastLine=a;case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}}},U=F,B=Object(f["a"])(U,Q,H,!1,null,null,null),M=B.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ActionPanel",[n("h2",{staticClass:"text-center"},[e._v("The Oracle has spoken!")]),e.fullSheets.length?n("div",{staticClass:"d-flex align-center justify-space-between"},[n("div",[e.canGoBack?n("v-btn",{staticClass:"secondary black--text",attrs:{icon:"","aria-label":"previous sheet"},on:{click:function(t){e.currentIndex--}}},[n("i",{staticClass:"fas fa-chevron-left"})]):e._e()],1),n("div",{staticClass:"flex-grow-1"},[n("Sheet",{staticClass:"mt-4 px-4",attrs:{sheet:e.currentSheet}})],1),n("div",[e.canGoForward?n("v-btn",{staticClass:"secondary black--text",attrs:{icon:"","aria-label":"next sheet"},on:{click:function(t){e.currentIndex++}}},[n("i",{staticClass:"fas fa-chevron-right"})]):e._e()],1)]):e._e()])},W=[],J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"d-flex align-start"},[n("h3",[e._v("Question: ")]),n("p",{staticClass:"ml-4"},[e._v(e._s(e.firstLineText))])]),n("div",{staticClass:"d-flex align-start"},[n("h3",[e._v("Answer:")]),n("div",{staticClass:"ml-4"},[e.showAnswer?e._e():n("v-btn",{attrs:{text:"",color:"accent"},on:{click:function(t){e.showAnswer=!0}}},[n("span",[e._v("See Oracle's answer")]),n("i",{staticClass:"fas fa-chevron-right ml-4"})])],1),e.showAnswer?n("p",[e._v(" "+e._s(e.lastLineText)+" ")]):e._e()]),e.showAnswer?n("v-dialog",{attrs:{scrollable:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-btn",e._g({attrs:{text:"",color:"accent"}},a),[n("span",[e._v("See full sequence")]),n("i",{staticClass:"fas fa-chevron-right ml-4"})])]}}],null,!1,4001529129),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"text-truncate"},[e._v(" "+e._s(e.firstLineText)+" ")]),n("v-card-text",e._l(e.lines,(function(t){return n("p",{key:t.uuid},[e._v(" "+e._s(t.text)+" ")])})),0),n("v-card-actions",[n("v-btn",{on:{click:function(t){e.dialog=!1}}},[e._v("Close")])],1)],1)],1):e._e()],1)},Y=[],z={props:{sheet:{type:Object,required:!0}},data:function(){return{showAnswer:!1,dialog:!1}},computed:{lines:function(){return this.sheet.lines},firstLineText:function(){return this.lines.length?this.lines[0].text:""},lastLineText:function(){var e=this.lines.length;return e?this.lines[e-1].text:""},middleLinesText:function(){return this.lines.length?this.lines.slice(1,-1).map((function(e){return e.text})):[]}}},K=z,V=Object(f["a"])(K,J,Y,!1,null,null,null),X=V.exports,Z={components:{Sheet:X,ActionPanel:P},props:{sheets:{type:Array,required:!0},game:{type:Object,required:!0}},data:function(){return{fullSheets:[],currentIndex:0}},computed:{canGoBack:function(){return this.currentIndex>0},canGoForward:function(){return!!this.fullSheets.length&&this.currentIndex<this.fullSheets.length-1},currentSheet:function(){return this.fullSheets[this.currentIndex]}},created:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,R(this.game.uuid);case 2:t=e.sent,n=t.data,this.fullSheets=n;case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},ee=Z,te=Object(f["a"])(ee,N,W,!1,null,null,null),ne=te.exports,ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-col",{staticClass:"elevation-3"},[e.players.length?n("v-list",{attrs:{"min-width":"250px",height:"100%"}},[n("v-subheader",[e._v("Players")]),e._l(e.players,(function(t,a){return n("Player",e._b({key:t.uuid,attrs:{player:t,isUser:e.localPlayer.uuid===t.uuid,order:a}},"Player",e.$attrs,!1))}))],2):e._e()],1)},re=[],se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-list-item",{staticClass:"d-flex"},[n("div",{staticClass:"mr-2"},[e._v(e._s(e.name))]),e.isUser?n("div",{staticClass:"mr-2"},[e._v("(You)")]):e._e(),e.player.isHost?n("v-chip",{attrs:{color:"accent",small:""}},[n("i",{staticClass:"fas fa-crown mr-2"}),e._v(" Host ")]):e._e(),e._l(e.queue,(function(t){return n("v-icon",{key:t.uuid,staticClass:"mx-2",attrs:{color:"primary"}},[e._v(" far fa-sticky-note ")])}))],2)},ie=[],le=(n("c5f6"),{props:{player:{type:Object,required:!0},isUser:{type:Boolean,default:!1},status:{type:String},order:{type:Number,required:!0},queues:{type:Object,required:!0}},computed:{queue:function(){return this.queues[this.player.uuid]||[]},name:function(){return this.player.name||"Player".concat(this.order+1)}}}),oe=le,ce=Object(f["a"])(oe,se,ie,!1,null,null,null),ue=ce.exports,de={components:{Player:ue},props:{localPlayer:{type:Object,required:!0},players:{type:Array,default:function(){return[]}}},data:function(){return{order:[]}},methods:{updateOrder:function(){this.$emit("updateOrder",[])}}},pe=de,fe=Object(f["a"])(pe,ae,re,!1,null,null,null),he=fe.exports,me=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-col",{staticClass:"elevation-3"},[n("v-subheader",[e._v("Game "+e._s(e.game.uuid))]),n("div",{staticClass:"pa-4 d-flex font-italic justify-space-between align-center"},[n("span",[e._v("Progress:")]),n("v-progress-linear",{staticClass:"ml-4",attrs:{striped:"",value:e.progress,color:"accent",height:24}},[n("div",{staticClass:"lime lighten-4 pa-4 rounded-pill border font-weight-bold"},[e._v(e._s(e.progress+"%")+" ")])])],1)],1)},ve=[],ye={props:{game:{type:Object,required:!0},progress:{type:Number,default:0}}},ge=ye,be=Object(f["a"])(ge,me,ve,!1,null,null,null),_e=be.exports,xe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d-flex justify-end align-center"},[e.isHost||"open"!==e.status?e._e():n("p",{staticClass:"mr-4 mb-0 red--text text--darken-2 font-italic"},[e._v(" Only the host may start the game ")]),"open"===e.status?n("v-btn",{attrs:{disabled:!e.isHost,color:"primary"},on:{click:function(t){return e.$emit("start")}}},[e._v(" Start Game ")]):e._e(),"active"===e.status?n("v-btn",{on:{click:function(t){return e.$emit("end")}}},[e._v("End Game ")]):e._e()],1)},we=[],Pe={props:{isHost:{type:Boolean,default:!1},status:{type:String,required:!0,validator:function(e){return["open","active","complete"].includes(e)}}}},ke=Pe,je=Object(f["a"])(ke,xe,we,!1,null,null,null),Oe=je.exports,Ce=n("8055"),Se=n.n(Ce),Ie=void 0;function Ge(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Le(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ge(Object(n),!0).forEach((function(t){Object(l["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ge(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var qe={name:"app",components:{Start:m,Pregame:T,Game:M,Finale:ne,Players:he,GameInfo:_e,HostControls:Oe},data:function(){return{game:null,localPlayerId:null,players:null,hasGameCodeError:!1,socket:null,queues:{},sheets:[],progress:0}},computed:{localPlayer:function(){var e=this;return this.localPlayerId&&this.players.length?this.players.find((function(t){return t.uuid===e.localPlayerId})):null},ioNamespace:function(){return this.game?"telephone-oracle.herokuapp.com/"+this.game.uuid:null},activeSheet:function(){if(!this.localPlayer)return null;var e=this.queues[this.localPlayer.uuid];return e&&e.length?e.reduce((function(e,t){return e&&new Date(e.updatedAt)<=new Date(t.updatedAt)?e:t}),null):null},gameDataIsLoaded:function(){return this.game&&this.players&&this.localPlayer}},watch:{"window.location":{deep:!0,handler:function(e,t){e.location!==t.location&&Ie.getGameFromRoute()}}},created:function(){this.getGameFromRoute()},beforeDestroy:function(){this.socket&&this.socket.disconnect()},methods:{initGame:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:t=e.sent,n=t.data,this.game=n.game,this.players=n.players,this.localPlayerId=n.players[0].uuid,this.storePlayerId(),this.initSocket();case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),initSocket:function(e){var t=this;this.socket=Se()(this.ioNamespace),this.socket.on("connect",(function(){console.log("connected to socket!")})),this.socket.on("disconnect",(function(){console.log("disconnected!")})),this.socket.on("player:add",(function(e){console.log("player added!"),t.getPlayers()})),this.socket.on("player:update",(function(e){t.handlePlayerUpdate(e)})),this.socket.on("game:start",(function(e){t.players=e.players,t.game=e.game,t.buildQueues(e.sheets)})),this.socket.on("sheet:pass",(function(e){t.buildQueues(e),t.updateProgress(e)})),this.socket.on("game:complete",(function(e){t.buildQueues(e),t.updateProgress(e),t.sheets=e,t.game=Le(Le({},t.game),{},{status:"complete"})}))},getPlayers:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,I(this.game.uuid);case 2:t=e.sent,n=t.data,this.players=n;case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),joinGame:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var n,a,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S(t);case 3:if(n=e.sent,a=n.data,r=a.game,s=a.players,"open"===r.status){e.next=9;break}return console.error("this game code is incorrect, or this game is not accepting new players"),e.abrupt("return");case 9:this.game=r,this.players=s,this.initSocket(r.uuid),this.loadPlayer(),e.next=18;break;case 15:e.prev=15,e.t0=e["catch"](0),console.error(e.t0);case 18:case"end":return e.stop()}}),e,this,[[0,15]])})));function t(t){return e.apply(this,arguments)}return t}(),loadPlayer:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,window.localStorage.getItem("localPlayerId");case 2:if(t=e.sent,!t||!this.players.find((function(e){return e.uuid===t}))){e.next=6;break}return this.localPlayerId=t,e.abrupt("return");case 6:this.createPlayer(),this.getPlayers();case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),createPlayer:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G(this.game.uuid);case 3:t=e.sent,n=t.data,this.localPlayerId=n.uuid,this.storePlayerId(),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));function t(){return e.apply(this,arguments)}return t}(),startGame:function(){C(this.game.uuid)},storePlayerId:function(){window.localStorage.setItem("localPlayerId",this.localPlayerId)},getGameFromRoute:function(){var e=window.location.href.split("/"),t=e.findIndex((function(e){return"game"===e}));if(-1!==t){var n=e[t+1];this.joinGame(n)}},handlePlayerUpdate:function(e){var t=this.players.findIndex((function(t){return t.uuid===e.uuid})),n=Object(i["a"])(this.players);n.splice(t,1,e),this.players=n},buildQueues:function(e){var t={},n=[];this.players.forEach((function(e){t[e.uuid]=[]})),e.forEach((function(e){e.active_player_id?t[e.active_player_id].push(e):n.push(e)})),this.queues=t,this.completedSheets=n},updateProgress:function(e){var t=this.game.length*this.players.length,n=e.reduce((function(e,t){return e+t.lineCount}),0);this.progress=n/t*100}}},Ee=qe,Re=Object(f["a"])(Ee,r,s,!1,null,null,null),Ae=Re.exports,$e=n("ce5b"),De=n.n($e),Te=(n("bf40"),n("fcf4"));n("15f5");a["default"].use(De.a);var Qe={theme:{themes:{light:{primary:Te["a"].blue.darken1,secondary:Te["a"].blue.lighten4,accent:Te["a"].indigo.base}}},icons:{iconfont:"fa"}},He=new De.a(Qe);a["default"].config.productionTip=!1,new a["default"]({render:function(e){return e(Ae)},vuetify:He}).$mount("#app")}});
//# sourceMappingURL=app.271b1b68.js.map