"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[748],{854:function(e,n,r){var t=r(691),s=r(184);n.Z=function(){return(0,s.jsx)(t.VL,{visible:!0,height:"80",width:"80",ariaLabel:"vortex-loading",wrapperStyle:{},wrapperClass:"vortex-wrapper",colors:["red","green","blue","yellow","orange","purple"]})}},604:function(e,n,r){r.d(n,{px:function(){return i},Hn:function(){return a},Xy:function(){return u}});var t={noResultsMessage_div:"messages_noResultsMessage_div__C1xZe",noResultsMessage_h3:"messages_noResultsMessage_h3__A-E9j",noResultsMessage_p:"messages_noResultsMessage_p__pAUD2"},s=r(184);function a(){return(0,s.jsxs)("div",{className:t.noResultsMessage_div,children:[(0,s.jsx)("h3",{className:t.noResultsMessage_h3,children:"There are no results :("}),(0,s.jsx)("p",{className:t.noResultsMessage_p,children:"Try the other one :)"})]})}function u(){return(0,s.jsx)("div",{className:t.noReviewsMessage_div,children:(0,s.jsx)("h3",{className:t.noReviewsMessage_h3,children:"There are no reviews :("})})}function i(){return(0,s.jsx)("div",{className:t.noReviewsMessage_div,children:(0,s.jsx)("h3",{className:t.noReviewsMessage_h3,children:"There is no info about cast :"})})}},748:function(e,n,r){r.r(n);var t=r(861),s=r(439),a=r(757),u=r.n(a),i=r(791),c=r(689),o=r(788),p=r(854),l=r(604),h=r(184);n.default=function(){var e=(0,i.useState)([]),n=(0,s.Z)(e,2),r=n[0],a=n[1],f=(0,i.useState)(!1),v=(0,s.Z)(f,2),d=v[0],g=v[1],x=(0,i.useState)(null),m=(0,s.Z)(x,2),_=m[0],w=m[1],y=(0,c.UO)().movieId;(0,i.useEffect)((function(){var e=function(){var e=(0,t.Z)(u().mark((function e(){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,g(!0),e.next=4,(0,o.tx)(y);case 4:n=e.sent,r=n.data.results,a(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),w(e.t0.messsage);case 12:return e.prev=12,g(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[y]);var b=r.map((function(e){var n=e.id,r=e.author,t=e.content;return(0,h.jsxs)("li",{children:[(0,h.jsxs)("p",{children:["Author: ",r]}),(0,h.jsxs)("p",{children:["Review: ",t]})]},n)}));return(0,h.jsxs)(h.Fragment,{children:[_&&(0,h.jsx)("h1",{children:"Something went wrong..."}),d&&(0,h.jsx)(p.Z,{}),Boolean(r.length)?(0,h.jsx)("ul",{children:b}):(0,l.Xy)()]})}},788:function(e,n,r){r.d(n,{Df:function(){return i},FL:function(){return o},M1:function(){return f},tx:function(){return d},zi:function(){return l}});var t=r(861),s=r(757),a=r.n(s),u=r(912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"8b3b87955e63e3e9950b3cf9b384a483"}});function i(){return c.apply(this,arguments)}function c(){return(c=(0,t.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/trending/movie/day?",e.next=3,u.get("/trending/movie/day?");case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(e){return p.apply(this,arguments)}function p(){return(p=(0,t.Z)(a().mark((function e(n){var r,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/movie/".concat(n,"?"),e.next=3,u.get(r);case 3:return t=e.sent,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return h.apply(this,arguments)}function h(){return(h=(0,t.Z)(a().mark((function e(n){var r,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/search/movie?query=".concat(n),e.next=3,u.get(r);case 3:return t=e.sent,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return v.apply(this,arguments)}function v(){return(v=(0,t.Z)(a().mark((function e(n){var r,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/movie/".concat(n,"/credits?"),e.next=3,u.get(r);case 3:return t=e.sent,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return g.apply(this,arguments)}function g(){return(g=(0,t.Z)(a().mark((function e(n){var r,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/movie/".concat(n,"/reviews?"),e.next=3,u.get(r);case 3:return t=e.sent,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=748.25157144.chunk.js.map