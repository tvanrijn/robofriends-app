(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{19:function(e,t,n){e.exports=n(32)},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),c=n.n(o),s=n(5),i=n(3),l=n(12),u=n(13),d=(n(28),n(14)),h=n(15),b=n(17),m=n(16),E=n(18),p=function(e){var t=e.name,n=e.email,a=e.id;return r.a.createElement("div",{className:"tc bg-washed-red dib br4 pa3 ma2 grow bw2 shadow-5 avenir"},r.a.createElement("img",{src:"https://robohash.org/".concat(a,"?200x200"),alt:"robot"}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n)))},g=function(e){var t=e.robots;return r.a.createElement("div",null,t.map((function(e,n){return r.a.createElement(p,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})})))},f=(n(29),function(e){var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba bw1 b--navy br-pill bg-washed-blue avenir b",type:"search",placeholder:"Search robots",onChange:t}))}),v=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",height:"800px"}},e.children)},O=(n(30),function(e){function t(){return Object(d.a)(this,t),Object(b.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,a=e.robots,o=e.isPending,c=e.error,s=a.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return o?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"loadingBar"},"Loading")):""!==c?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",null,"Error fetching robots")):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(f,{searchChange:n}),r.a.createElement(v,null,r.a.createElement(g,{robots:s})))}}]),t}(a.Component)),R=Object(s.b)((function(e){return{searchField:e.searchRobots.searchField,isPending:e.requestRobots.isPending,robots:e.requestRobots.robots,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCES",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}}}))(O);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y={searchField:""},S={isPending:!1,robots:[],error:""},w=(n(31),Object(l.createLogger)()),j=Object(i.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCES":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),C=Object(i.d)(j,Object(i.a)(u.a,w));c.a.render(r.a.createElement(s.a,{store:C},r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.747fae5f.chunk.js.map