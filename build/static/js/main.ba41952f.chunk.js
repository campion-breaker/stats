(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{173:function(e,t,s){"use strict";s.r(t);var c,n,a=s(0),r=s(1),i=s.n(r),l=s(29),d=s.n(l),o=(s(68),s(16)),x=s.n(o),m=s(6),j=s(10),u=s.n(j),b=s(17),p=function(){return fetch("http://localhost:7777/events")},h=function(){return fetch("http://localhost:7777/traffic")},f=function(){return fetch("http://localhost:7777/endpoints")},O=function(){return fetch("http://localhost:7777/subdomain")},g=s(5),v=Object(g.c)({selectId:function(e){return e.TIME},sortComparer:function(e,t){return t.TIME-e.TIME}}),y=Object(g.b)("traffic/fetchAllTrafficStatus",function(){var e=Object(b.a)(u.a.mark((function e(t,s){var c,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:return c=e.sent,e.next=5,c.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t,s){return e.apply(this,arguments)}}()),N=Object(g.d)({name:"traffic",initialState:v.getInitialState({status:"idle",error:null,endpoints:{}}),reducers:{},extraReducers:(c={},Object(m.a)(c,y.fulfilled,(function(e,t){v.addMany(e,t.payload),function(e,t){for(var s={},c=0;c<t.payload.length;c++){var n=t.payload[c],a=s[n.ID];a?a.push(n):(s[n.ID]=[],s[n.ID].push(n))}Object.keys(s).forEach((function(e){return s[e].sort((function(e,t){return t.TIME-e.TIME}))})),e.endpoints=s}(e,t),e.status="done"})),Object(m.a)(c,y.pending,(function(e,t){e.status="pending"})),Object(m.a)(c,y.rejected,(function(e,t){e.status="failed",e.error=t.error.message})),c)}).reducer,w=v.getSelectors((function(e){return e.traffic})).selectAll,T=s(2);function E(){return Object(a.jsx)("div",{className:"flex justify-around mt-4",children:Object(a.jsx)("span",{className:"relative inline-flex rounded-xl shadow-lg",children:Object(a.jsxs)("span",{className:"flex absolute h-5 w-5 top-0 right-0 -mt-1 -mr-1",children:[Object(a.jsx)("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"}),Object(a.jsx)("span",{className:"relative inline-flex rounded-full h-5 w-5 bg-purple-500"})]})})})}function I(e){var t=e.endpointId,s=Object(T.b)(),c=Object(T.c)((function(e){return e.traffic.status})),n=t?Object(T.c)((function(e){return e.traffic.endpoints[t]})):Object(T.c)(w);if(Object(r.useEffect)((function(){"idle"===c&&s(y())}),[c,s]),"done"===c){var i=(n=n||[]).filter((function(e){return x()().diff(x()(e.TIME),"hours")<24})),l=i.filter((function(e){return e.STATUS>=200&&e.STATUS<=299})).length,d=Math.round(l/i.length*100);"NaN"===String(d)&&(d=0);var o=Math.round(n.reduce((function(e,t){return t.LATENCY?e+t.LATENCY:e}),0)/l)||0;return o!==1/0&&o!==-1/0||(o=0),Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{className:"text-lg leading-6 font-medium text-gray-900",children:"Last 24 hours"}),Object(a.jsxs)("dl",{className:"mt-5 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow divide-y divide-gray-200 md:grid-cols-3 md:divide-y-0 md:divide-x",children:[Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"px-4 py-5 sm:p-6",children:[Object(a.jsx)("dt",{className:"text-base font-normal text-gray-900",children:"Total Successful Requests"}),Object(a.jsxs)("dd",{className:"mt-1 flex justify-between items-baseline md:block lg:flex",children:[Object(a.jsxs)("div",{className:"flex items-baseline text-2xl font-semibold text-indigo-600",children:[l,Object(a.jsxs)("span",{className:"ml-2 text-sm font-medium text-gray-500",children:["out of ",i.length]})]}),Object(a.jsxs)("div",{className:"inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 md:mt-2 lg:mt-0",children:[Object(a.jsx)("svg",{className:"-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500",fill:"currentColor",viewBox:"0 0 20 20","aria-hidden":"true",children:Object(a.jsx)("path",{"fill-rule":"evenodd",d:"M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z","clip-rule":"evenodd"})}),Object(a.jsx)("span",{className:"sr-only",children:"Increased by"}),d,"%"]})]})]})}),Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"px-4 py-5 sm:p-6",children:[Object(a.jsx)("dt",{className:"text-base font-normal text-gray-900",children:"Average Request Time"}),Object(a.jsx)("dd",{className:"mt-1 flex justify-between items-baseline md:block lg:flex",children:Object(a.jsxs)("div",{className:"flex items-baseline text-2xl font-semibold text-indigo-600",children:[o," ms"]})})]})}),Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"px-4 py-5 sm:p-6",children:[Object(a.jsx)("dt",{className:"text-base font-normal text-gray-900",children:"Total Failures"}),Object(a.jsx)("dd",{className:"mt-1 flex justify-between items-baseline md:block lg:flex",children:Object(a.jsx)("div",{className:"flex items-baseline text-2xl font-semibold text-indigo-600",children:i.length-l})})]})})]})]})}return Object(a.jsx)(E,{})}var S,C=Object(g.c)({selectId:function(e){return e.ID},sortComparer:function(e,t){return t.TIME-e.TIME}}),A=Object(g.b)("configurations/fetchAllConfigurationStatus",function(){var e=Object(b.a)(u.a.mark((function e(t,s){var c,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:return c=e.sent,e.next=5,c.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t,s){return e.apply(this,arguments)}}()),k=Object(g.d)({name:"configurations",initialState:C.getInitialState({status:"idle",error:null,subdomain:""}),reducers:{},extraReducers:(n={},Object(m.a)(n,A.fulfilled,(function(e,t){C.addMany(e,t.payload),e.status="done"})),Object(m.a)(n,A.pending,(function(e,t){e.status="pending"})),Object(m.a)(n,A.rejected,(function(e,t){e.status="failed",e.error=t.error.message})),n)}).reducer,M=(C.getSelectors((function(e){return e.configurations})).selectAll,s(15));function D(e){var t=e.items,s=t.map((function(e,s){t.length;var c,n,r=e.NAME.split(" ").slice(0,2).map((function(e){return e[0]})).join("").toUpperCase();return"CLOSED"===e.CIRCUIT_STATE?c="green-500":"OPEN"===e.CIRCUIT_STATE||"FORCED-OPEN"===e.CIRCUIT_STATE?c="red-500":"HALF-OPEN"===e.CIRCUIT_STATE&&(c="yellow-500"),Object(a.jsx)(M.b,{to:"/endpoints/?id=".concat(e.ID),children:Object(a.jsxs)("li",{className:"col-span-1 flex shadow-sm rounded-md",children:[Object(a.jsx)("div",{className:"flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md bg-"+c,children:r}),Object(a.jsxs)("div",{className:"flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate",children:[Object(a.jsxs)("div",{className:"flex-1 px-4 py-2 text-sm truncate",children:[Object(a.jsx)("a",{href:"#",className:"text-gray-900 font-medium hover:text-gray-600",children:e.NAME}),Object(a.jsx)("p",{className:"text-"+c,children:(n=e.CIRCUIT_STATE,n[0]+n.slice(1).toLowerCase())})]}),Object(a.jsx)("div",{className:"flex-shrink-0 pr-2",children:Object(a.jsxs)("button",{className:"w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:[Object(a.jsx)("span",{className:"sr-only",children:"Open options"}),Object(a.jsx)("svg",{className:"w-5 h-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:Object(a.jsx)("path",{d:"M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"})})]})})]})]})})}));return Object(a.jsx)("ul",{className:"mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4",children:s})}function R(){var e=Object(T.b)(),t=Object(T.c)((function(e){return e.configurations.status})),s=Object(T.c)((function(e){return e.configurations.ids.map((function(t){return e.configurations.entities[t]}))}));return Object(r.useEffect)((function(){"idle"===t&&e(A())}),[t,e]),"done"===t?Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{className:"text-gray-500 text-xs font-medium uppercase tracking-wide",children:"Services Protected by Campion"}),Object(a.jsx)(D,{items:s})]}):Object(a.jsx)(E,{})}function L(e){var t,s=e.events;return"done"===e.status&&(t=s.map((function(e){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:Object(a.jsx)("div",{className:"text-sm font-medium text-gray-900",children:x()(e.TIME).fromNow()})}),Object(a.jsxs)("td",{className:"px-6 py-4 whitespace-nowrap",children:[Object(a.jsx)("div",{className:"text-sm text-gray-900",children:e.NAME}),Object(a.jsx)("div",{className:"text-sm text-gray-500",children:e.ID})]}),Object(a.jsx)("td",{className:"px-6 py-4",children:Object(a.jsx)("div",{className:"text-sm text-gray-500",children:"STATE_CHANGE"===e.EVENT?"Circuit-Breaker Status Change":"Configuration Change"})}),Object(a.jsx)("td",{className:"px-6 py-4 text-sm text-gray-500",children:"STATE_CHANGE"===e.EVENT?"Circuit-breaker flipped from ".concat(e.OLD_STATE," to ").concat(e.CIRCUIT_STATE,". This was ").concat("AUTO"===e.MODE?"an automatic":"a manual"," change."):"Circuit-breaker configuration settings were ".concat("ADD"===e.METHOD?"added":"changed",".")})]},e.TIME)}))),Object(a.jsx)("tbody",{className:"bg-white divide-y divide-gray-200",children:t})}var U=Object(g.c)({selectId:function(e){return e.TIME},sortComparer:function(e,t){return t.TIME-e.TIME}}),_=Object(g.b)("events/fetchAllEventsStatus",function(){var e=Object(b.a)(u.a.mark((function e(t,s){var c,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:return c=e.sent,e.next=5,c.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t,s){return e.apply(this,arguments)}}()),P=Object(g.d)({name:"events",initialState:U.getInitialState({status:"idle",error:null,endpoints:{}}),reducers:{},extraReducers:(S={},Object(m.a)(S,_.fulfilled,(function(e,t){U.addMany(e,t.payload),function(e,t){for(var s={},c=0;c<t.payload.length;c++){var n=t.payload[c],a=s[n.ID];a?a.push(n):(s[n.ID]=[],s[n.ID].push(n))}Object.keys(s).forEach((function(e){return s[e].sort((function(e,t){return t.TIME-e.TIME}))})),e.endpoints=s}(e,t),e.status="done"})),Object(m.a)(S,_.pending,(function(e,t){e.status="pending"})),Object(m.a)(S,_.rejected,(function(e,t){e.status="failed",e.error=t.error.message})),S)}).reducer,F=U.getSelectors((function(e){return e.events})).selectAll;function H(e){var t=e.endpointId,s=Object(T.b)(),c=Object(T.c)((function(e){return e.events.status})),n=t?Object(T.c)((function(e){return e.events.endpoints[t]})):Object(T.c)(F);return Object(r.useEffect)((function(){"idle"===c&&s(_())}),[c,s]),Object(a.jsx)("div",{className:"flex flex-col",children:Object(a.jsx)("div",{className:"-my-2 sm:-mx-6 lg:-mx-8",children:Object(a.jsx)("div",{className:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8",children:Object(a.jsx)("div",{className:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg",children:Object(a.jsxs)("table",{className:"min-w-full divide-y divide-gray-200",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{scope:"col",className:"px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Time"}),Object(a.jsx)("th",{scope:"col",className:"px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Name"}),Object(a.jsx)("th",{scope:"col",className:"px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Event"}),Object(a.jsx)("th",{scope:"col",className:"px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Description"})]})}),Object(a.jsx)(L,{events:n,status:c})]})})})})})}function B(){return Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsxs)("div",{className:"py-6",children:[Object(a.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:Object(a.jsx)("h1",{className:"text-2xl font-semibold text-gray-900",children:"Performance Snapshot"})}),Object(a.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 md:px-8",children:Object(a.jsx)("div",{className:"py-4",children:Object(a.jsx)(I,{})})})]}),Object(a.jsxs)("div",{className:"py-6",children:[Object(a.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:Object(a.jsx)("h1",{className:"text-2xl font-semibold text-gray-900",children:"Protected Endpoints"})}),Object(a.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 md:px-8",children:Object(a.jsx)("div",{className:"py-4",children:Object(a.jsx)(R,{})})})]}),Object(a.jsxs)("div",{className:"py-6",children:[Object(a.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:Object(a.jsx)("h1",{className:"text-2xl font-semibold text-gray-900",children:"Activity Log"})}),Object(a.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 md:px-8",children:Object(a.jsx)("div",{className:"py-4",children:Object(a.jsx)(H,{})})})]})]})}var z=s(4),V=s.p+"static/media/logo-campion.378189a0.png";function q(e){var t=e.endpointId,s=e.name,c=e.search,n=e.active,r=e.inactive;return Object(a.jsxs)(M.b,{to:"/endpoints/?id=".concat(t),className:c==="?id=".concat(t)?n:r,children:[Object(a.jsx)("svg",{class:"mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-300",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(a.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),s]})}function W(){var e=Object(T.b)(),t=Object(T.c)((function(e){return e.configurations.status})),s=Object(T.c)((function(e){return e.configurations.ids.map((function(t){return e.configurations.entities[t]}))})),c=Object(z.f)().pathname,n=Object(z.f)().search,l="group flex items-center px-2 py-2 text-base font-medium rounded-md text-white bg-gray-900",d="group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-300 hover:text-white hover:bg-gray-700";return Object(r.useEffect)((function(){"idle"===t&&e(A())}),[t,e]),Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsx)("div",{className:"hidden md:flex md:flex-shrink-0",children:Object(a.jsx)("div",{className:"flex flex-col w-64",children:Object(a.jsx)("div",{className:"flex flex-col h-0 flex-1 bg-gray-800",children:Object(a.jsxs)("div",{className:"flex-1 flex flex-col pt-5 pb-4 overflow-y-auto",children:[Object(a.jsx)("div",{className:"flex items-center flex-shrink-0 px-4",children:Object(a.jsx)("img",{class:"h-8 w-auto",src:V,alt:"Campion"})}),Object(a.jsxs)("nav",{className:"mt-5 flex-1 px-2 bg-gray-800 space-y-1",children:[Object(a.jsxs)(M.b,{to:"/",className:"/"===c?l:d,children:[Object(a.jsx)("svg",{className:"mr-3 h-6 w-6 text-gray-300",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:Object(a.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})}),"Dashboard"]}),"done"!==t?Object(a.jsx)("div",{class:"mt-10",children:Object(a.jsx)(E,{})}):s.map((function(e){return Object(a.jsx)(q,{endpointId:e.ID,name:e.NAME,search:n,active:l,inactive:d,state:e.CIRCUIT_STATE})}))]})]})})})}),Object(a.jsx)("div",{className:"md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3",children:Object(a.jsxs)("button",{className:"-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",children:[Object(a.jsx)("span",{className:"sr-only",children:"Open sidebar"}),Object(a.jsx)("svg",{className:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:Object(a.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})})]})})]})}function Y(){return Object(a.jsxs)("div",{className:"py-6",children:[Object(a.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:Object(a.jsx)("h1",{className:"text-2xl font-semibold text-gray-900",children:"All Configurations"})}),Object(a.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 md:px-8",children:Object(a.jsx)("div",{className:"py-4",children:Object(a.jsx)(R,{})})})]})}function G(){return Object(a.jsxs)("div",{className:"py-6",children:[Object(a.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:Object(a.jsx)("h1",{className:"text-2xl font-semibold text-gray-900",children:"All Events"})}),Object(a.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 md:px-8",children:Object(a.jsx)("div",{className:"py-4",children:Object(a.jsx)(H,{})})})]})}function J(){return Object(a.jsxs)("div",{className:"py-6",children:[Object(a.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:Object(a.jsx)("h1",{className:"text-2xl font-semibold text-gray-900",children:"Performance Snapshot"})}),Object(a.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 md:px-8",children:Object(a.jsx)("div",{className:"py-4",children:Object(a.jsx)(I,{})})})]})}var K,Q=s(62),X=function(e,t){return e>=t?e-t:e+7-t};function Z(e){var t=e.endpointId,s=new Date(Date.now()).getDay(),c=Object(T.b)(),n=Object(T.c)((function(e){return e.traffic.status})),i=Object(T.c)((function(e){return e.traffic.endpoints[t]}));if(Object(r.useEffect)((function(){"idle"===n&&c(y())}),[n,c]),"done"===n){var l=[0,0,0,0,0,0,0],d=[0,0,0,0,0,0,0],o=(i=i||[]).filter((function(e){return e.STATUS>=200&&e.STATUS<=299})).map((function(e){return X(s,new Date(e.TIME).getDay())})),x=i.filter((function(e){return e.STATUS>299||""===e.STATUS})).map((function(e){return X(s,new Date(e.TIME).getDay())}));o.forEach((function(e){return l[6-e]+=1})),x.forEach((function(e){return d[6-e]+=1}));var m={labels:["6","5","4","3","2","1","Today"],datasets:[{label:"Successes",fill:!1,lineTension:.25,backgroundColor:"rgba(49, 196, 141)",borderColor:"rgba(49, 196, 141)",borderWidth:2,data:l},{label:"Failures",fill:!1,lineTension:.25,backgroundColor:"rgba(239,68,68)",borderColor:"rgba(239,68,68)",borderWidth:2,data:d}]};return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{className:"text-lg leading-6 font-medium text-gray-900",children:"Last 7 Days"}),Object(a.jsx)(Q.Line,{data:m,options:{title:{display:!0,text:"Requests per Day",fontSize:20,fontStyle:"normal",fontColor:"rgba(17, 24, 39)"},legend:{display:!0,position:"right"},scales:{yAxes:[{scaleLabel:{display:!0,labelString:"# of Requsts"}}],xAxes:[{scaleLabel:{display:!0,labelString:"Days Ago"}}]}}})]})}return Object(a.jsx)(E,{})}var $=Object(g.b)("configurations/fetchSubdomainStatus",function(){var e=Object(b.a)(u.a.mark((function e(t,s){var c,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:return c=e.sent,e.next=5,c.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t,s){return e.apply(this,arguments)}}()),ee=Object(g.d)({name:"subdomain",initialState:{status:"idle",error:null,subdomain:""},reducers:{},extraReducers:(K={},Object(m.a)(K,$.fulfilled,(function(e,t){e.status="done",e.subdomain=t.payload})),Object(m.a)(K,$.pending,(function(e,t){e.status="pending"})),Object(m.a)(K,$.rejected,(function(e,t){e.status="failed",e.error=t.error.message})),K)}).reducer;function te(e){var t=e.endpointId,s=Object(T.b)(),c=Object(T.c)((function(e){return e.subdomain.status})),n=Object(T.c)((function(e){return e.subdomain.subdomain}));return Object(r.useEffect)((function(){"idle"===c&&s($())}),[c,s]),"done"===c?Object(a.jsx)("div",{className:"py-6",children:Object(a.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:Object(a.jsx)("div",{className:"bg-white shadow sm:rounded-lg",children:Object(a.jsxs)("div",{className:"px-4 py-5 sm:p-6",children:[Object(a.jsx)("h3",{className:"text-lg leading-6 font-medium text-gray-900",children:"Campion Endpoint"}),Object(a.jsx)("div",{className:"mt-5",children:Object(a.jsxs)("div",{className:"rounded-md bg-gray-50 px-6 py-5 sm:flex sm:items-start sm:justify-between",children:[Object(a.jsx)("h4",{className:"sr-only",children:"Protected"}),Object(a.jsxs)("div",{className:"sm:flex sm:items-start",children:[Object(a.jsx)("svg",{class:"h-6 w-6 text-gray-500",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(a.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})}),Object(a.jsxs)("div",{className:"mt-3 sm:mt-0 sm:ml-4",children:[Object(a.jsx)("div",{className:"text-sm font-medium text-gray-900",children:"Protected"}),Object(a.jsx)("div",{className:"mt-1 text-sm text-gray-600 sm:flex sm:items-center",children:Object(a.jsxs)("a",{class:"text-indigo-600 hover:text-indigo-500",href:n+t,children:[n+t," ",Object(a.jsx)("span",{"aria-hidden":"true",children:"\u2192"})]})})]})]})]})})]})})})}):Object(a.jsx)(E,{})}function se(e){var t,s=e.endpointId,c=Object(T.b)(),n=Object(T.c)((function(e){return e.configurations.status})),i=Object(T.c)((function(e){return e.configurations.entities[s]}));if(Object(r.useEffect)((function(){"idle"===n&&c(A())}),[n,c]),"done"===n){var l,d=i.CIRCUIT_STATE;return"CLOSED"===d?l="bg-green-500":"OPEN"===d||"FORCED-OPEN"===d?l="bg-red-500":"HALF-OPEN"===d&&(l="bg-yellow-500"),Object(a.jsxs)("div",{class:"bg-white shadow overflow-hidden sm:rounded-lg",children:[Object(a.jsxs)("div",{class:"px-4 py-5 sm:px-6",children:[Object(a.jsx)("h3",{class:"text-lg leading-6 font-medium text-gray-900",children:i.NAME}),Object(a.jsx)("p",{class:"mt-1 max-w-2xl text-sm text-gray-500",children:s})]}),Object(a.jsx)("div",{class:"border-t border-gray-200 px-4 py-5 sm:p-0",children:Object(a.jsxs)("dl",{class:"grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2",children:[Object(a.jsx)("div",{class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",children:Object(a.jsxs)("div",{class:"sm:col-span-2",children:[Object(a.jsx)("dt",{class:"text-sm font-medium text-gray-500",children:"Current State"}),Object(a.jsx)("dd",{class:"mt-1 text-m text-gray-900 sm:mt-0 sm:col-span-2",children:Object(a.jsx)("div",{class:"rounded-full h-6 w-1/3 mt-2 py-1 text-center font-semibold text-xs text-white "+l,children:(t=d,t[0]+t.slice(1).toLowerCase())})})]})}),Object(a.jsx)("div",{class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",children:Object(a.jsxs)("div",{class:"sm:col-span-2",children:[Object(a.jsx)("dt",{class:"text-sm font-medium text-gray-500",children:"Breaker State Last Updated"}),Object(a.jsx)("dd",{class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2",children:x()(i.UPDATED_TIME).fromNow()})]})}),Object(a.jsx)("div",{class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",children:Object(a.jsxs)("div",{class:"sm:col-span-2",children:[Object(a.jsx)("dt",{class:"text-sm font-medium text-gray-500",children:"Error Timeout"}),Object(a.jsxs)("dd",{class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2",children:[i.ERROR_TIMEOUT," sec"]})]})}),Object(a.jsx)("div",{class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",children:Object(a.jsxs)("div",{class:"sm:col-span-2",children:[Object(a.jsx)("dt",{class:"text-sm font-medium text-gray-500",children:"Max Latency"}),Object(a.jsxs)("dd",{class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2",children:[i.MAX_LATENCY," ms"]})]})}),Object(a.jsx)("div",{class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",children:Object(a.jsxs)("div",{class:"sm:col-span-2",children:[Object(a.jsx)("dt",{class:"text-sm font-medium text-gray-500",children:"Network Failure Threshold"}),Object(a.jsx)("dd",{class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2",children:i.NETWORK_FAILURE_THRESHOLD})]})}),Object(a.jsx)("div",{class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",children:Object(a.jsxs)("div",{class:"sm:col-span-2",children:[Object(a.jsx)("dt",{class:"text-sm font-medium text-gray-500",children:"Service Failure Threshold"}),Object(a.jsx)("dd",{class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2",children:i.SERVICE_FAILURE_THRESHOLD})]})}),Object(a.jsx)("div",{class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",children:Object(a.jsxs)("div",{class:"sm:col-span-2",children:[Object(a.jsx)("dt",{class:"text-sm font-medium text-gray-500",children:"Half-Open Request Percentage"}),Object(a.jsxs)("dd",{class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2",children:[i.PERCENT_OF_REQUESTS,"%"]})]})}),Object(a.jsx)("div",{class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",children:Object(a.jsxs)("div",{class:"sm:col-span-2",children:[Object(a.jsx)("dt",{class:"text-sm font-medium text-gray-500",children:"# of Successes to Re-Close Circuit"}),Object(a.jsx)("dd",{class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2",children:i.SUCCESS_THRESHOLD})]})}),Object(a.jsx)("div",{class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",children:Object(a.jsxs)("div",{class:"sm:col-span-2",children:[Object(a.jsx)("dt",{class:"text-sm font-medium text-gray-500",children:"Request Tracking Timespan"}),Object(a.jsxs)("dd",{class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2",children:[i.TIMESPAN," sec"]})]})})]})})]})}return Object(a.jsx)(E,{})}function ce(){var e=Object(z.f)().search.slice(4);return Object(a.jsxs)("div",{children:[Object(a.jsx)(te,{endpointId:e}),Object(a.jsxs)("div",{className:"py-6",children:[Object(a.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:Object(a.jsx)("h1",{className:"text-2xl font-semibold text-gray-900",children:"Service Configuration"})}),Object(a.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 md:px-8",children:Object(a.jsx)("div",{className:"py-4",children:Object(a.jsx)(se,{endpointId:e})})})]}),Object(a.jsxs)("div",{className:"py-6",children:[Object(a.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:Object(a.jsx)("h1",{className:"text-2xl font-semibold text-gray-900",children:"Performance Snapshot"})}),Object(a.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 md:px-8",children:Object(a.jsx)("div",{className:"py-4",children:Object(a.jsx)(I,{endpointId:e})})})]}),Object(a.jsxs)("div",{className:"py-6",children:[Object(a.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:Object(a.jsx)("h1",{className:"text-2xl font-semibold text-gray-900",children:"Traffic"})}),Object(a.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 md:px-8",children:Object(a.jsx)("div",{className:"py-4",children:Object(a.jsx)(Z,{endpointId:e})})})]}),Object(a.jsxs)("div",{className:"py-6",children:[Object(a.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:Object(a.jsx)("h1",{className:"text-2xl font-semibold text-gray-900",children:"Activity Log"})}),Object(a.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 md:px-8",children:Object(a.jsx)("div",{className:"py-4",children:Object(a.jsx)(H,{endpointId:e})})})]})]})}var ne=function(){return Object(a.jsx)(M.a,{children:Object(a.jsxs)("div",{className:"App h-screen flex overflow-hidden bg-gray-100",children:[Object(a.jsx)(W,{}),Object(a.jsx)("main",{className:"flex-1 relative z-0 overflow-y-auto focus:outline-none",tabindex:"0",children:Object(a.jsxs)(z.c,{children:[Object(a.jsx)(z.a,{exact:!0,path:"/",component:B}),Object(a.jsx)(z.a,{exact:!0,path:"/configurations",component:Y}),Object(a.jsx)(z.a,{exact:!0,path:"/events",component:G}),Object(a.jsx)(z.a,{exact:!0,path:"/statistics",component:J}),Object(a.jsx)(z.a,{exact:!0,path:"/endpoints",component:ce})]})})]})})},ae=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,174)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;s(e),c(e),n(e),a(e),r(e)}))},re=Object(g.a)({reducer:{events:P,traffic:N,configurations:k,subdomain:ee}});re.dispatch(_()),re.dispatch(y()),re.dispatch(A()),re.dispatch($()),d.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(T.a,{store:re,children:Object(a.jsx)(ne,{})})}),document.getElementById("root")),ae()},68:function(e,t,s){}},[[173,1,2]]]);
//# sourceMappingURL=main.ba41952f.chunk.js.map