"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[422],{126:function(e,n,t){var r=t(689),o=t(87),i=t(184);n.Z=function(e){var n=e.movies,t=e.page,c=(0,r.TH)();return(0,i.jsx)("ul",{children:n&&0===(null===n||void 0===n?void 0:n.results.length)?(0,i.jsx)("h2",{children:"Sorry, no films were found"}):null===n||void 0===n?void 0:n.results.map((function(e){var n=e.id,r=e.title,a=e.name;return(0,i.jsx)("li",{children:(0,i.jsx)(o.rU,{to:"home"===t?"movies/".concat(n):"".concat(n),state:{from:c},children:r||a})},n)}))})}},422:function(e,n,t){t.r(n),t.d(n,{default:function(){return a}});var r=t(439),o=t(791);var i=t(126),c=t(184),a=function(){var e=(0,o.useState)(null),n=(0,r.Z)(e,2),t=n[0],a=n[1];return(0,o.useEffect)((function(){fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US",{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjY5MWY1OTNlYjc0MjU5MmFkMDFlNmZiNjBhMDE5YiIsInN1YiI6IjY0YTY4YTUxNzI0ZGUxMDBjNWU5ODNiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tqT4KdHOxcFDAo6pMr4lLuCDSt37dEUmae-2jFbOSdU"}}).then((function(e){return e.ok?e.json():new Error("Something goes wrong")})).then((function(e){return a(e)})).catch((function(e){return console.error(e)}))}),[]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h1",{children:"Home"}),(0,c.jsx)(i.Z,{movies:t,page:"home"})]})}}}]);
//# sourceMappingURL=422.9c560044.chunk.js.map