"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[180],{180:function(e,t,n){n.r(t),n.d(t,{default:function(){return a}});var c=n(439),o=n(791),i=n(689);var r=n(184),a=function(){var e=(0,o.useState)(null),t=(0,c.Z)(e,2),n=t[0],a=t[1],s=(0,i.UO)();return(0,o.useEffect)((function(){var e;(e=s.movieId,fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?language=en-US"),{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjY5MWY1OTNlYjc0MjU5MmFkMDFlNmZiNjBhMDE5YiIsInN1YiI6IjY0YTY4YTUxNzI0ZGUxMDBjNWU5ODNiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tqT4KdHOxcFDAo6pMr4lLuCDSt37dEUmae-2jFbOSdU"}}).then((function(e){return e.ok?e.json():new Error("Something goes wrong")}))).then((function(e){return a(e)})).catch((function(e){return console.error(e)}))}),[s.movieId]),!1===(null===n||void 0===n?void 0:n.success)?(0,r.jsx)("p",{children:"Sorry, we don't have information about cast."}):(0,r.jsx)("ul",{children:null===n||void 0===n?void 0:n.cast.map((function(e){var t=e.id,n=e.name,c=e.profile_path;return(0,r.jsxs)("li",{children:[(0,r.jsx)("p",{children:n}),(0,r.jsx)("img",{src:c?"https://image.tmdb.org/t/p/w300".concat(c):"https://cdn-icons-png.flaticon.com/512/1104/1104294.png?w=996&t=st=1689375521~exp=1689376121~hmac=111a2a40318614c960d0c0732c707904c16aec9333e7fbd8db51ab6b33886e29",alt:n})]},t)}))})}}}]);
//# sourceMappingURL=180.6c703638.chunk.js.map