"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{247:function(e,t,n){n.r(t);var i=n(439),c=n(791),o=n(689),r=n(184);t.default=function(){var e=(0,c.useState)(null),t=(0,i.Z)(e,2),n=t[0],a=t[1],u=(0,o.UO)();return(0,c.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(u.movieId,"/credits?language=en-US"),{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjY5MWY1OTNlYjc0MjU5MmFkMDFlNmZiNjBhMDE5YiIsInN1YiI6IjY0YTY4YTUxNzI0ZGUxMDBjNWU5ODNiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tqT4KdHOxcFDAo6pMr4lLuCDSt37dEUmae-2jFbOSdU"}}).then((function(e){return e.json()})).then((function(e){return a(e)})).catch((function(e){return console.error(e)}))}),[u.movieId]),!1===(null===n||void 0===n?void 0:n.success)?(0,r.jsx)("p",{children:"Sorry, we don't have information about cast."}):(0,r.jsx)("ul",{children:null===n||void 0===n?void 0:n.cast.map((function(e){var t=e.id,n=e.name,i=e.profile_path;return(0,r.jsxs)("li",{children:[(0,r.jsx)("p",{children:n}),(0,r.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(i),alt:n})]},t)}))})}}}]);
//# sourceMappingURL=247.7d3b19e5.chunk.js.map