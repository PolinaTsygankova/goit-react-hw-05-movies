"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[71],{71:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var r=n(439),i=n(791),o=n(689);var c=n(184),u=function(){var e=(0,o.UO)(),t=(0,i.useState)(null),n=(0,r.Z)(t,2),u=n[0],a=n[1];if((0,i.useEffect)((function(){var t;(t=e.movieId,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?language=en-US&page=1"),{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjY5MWY1OTNlYjc0MjU5MmFkMDFlNmZiNjBhMDE5YiIsInN1YiI6IjY0YTY4YTUxNzI0ZGUxMDBjNWU5ODNiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tqT4KdHOxcFDAo6pMr4lLuCDSt37dEUmae-2jFbOSdU"}}).then((function(e){if(e.ok)return e.json()}))).then((function(e){return a(e)})).catch((function(e){return console.error(e)}))}),[e.movieId]),u)return 0===u.results.length?(0,c.jsx)("p",{children:"Sorry, we don't have information about reviews."}):(0,c.jsx)("ul",{children:null===u||void 0===u?void 0:u.results.map((function(e){var t=e.content,n=e.author;return(0,c.jsxs)("li",{children:[(0,c.jsxs)("h2",{children:["Author: ",n]}),(0,c.jsx)("p",{children:t})]},t)}))})}}}]);
//# sourceMappingURL=71.c79bdb34.chunk.js.map