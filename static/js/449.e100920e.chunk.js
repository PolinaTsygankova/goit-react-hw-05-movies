"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[449],{449:function(e,n,r){r.r(n),r.d(n,{default:function(){return h}});var t,i=r(439),o=r(791),c=r(689),a=r(87),s=r(168),l=(0,r(444).ZP)(a.OL)(t||(t=(0,s.Z)(["\n  margin-left: 10px;\n  text-decoration: none;\n  border-radius: 7px;\n  color: black;\n  padding: 10px;\n  background-color: #ffcccc;\n"])));var d=r(184),h=function(){var e,n,r=(0,o.useState)(null),t=(0,i.Z)(r,2),s=t[0],h=t[1],u=(0,c.UO)(),p=(0,c.TH)();if((0,o.useEffect)((function(){var e;(e=u.movieId,fetch("https://api.themoviedb.org/3/movie/".concat(e,"?language=en-US"),{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjY5MWY1OTNlYjc0MjU5MmFkMDFlNmZiNjBhMDE5YiIsInN1YiI6IjY0YTY4YTUxNzI0ZGUxMDBjNWU5ODNiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tqT4KdHOxcFDAo6pMr4lLuCDSt37dEUmae-2jFbOSdU"}}).then((function(e){return e.ok?e.json():new Error("Something goes wrong")}))).then((function(e){return h(e)})).catch((function(e){return console.error(e)}))}),[u.movieId]),s&&null!==s){var m=s.title,j=s.name,f=s.vote_average,x=s.poster_path,v=s.overview,g=s.genres;return(0,d.jsx)(d.Fragment,{children:s?(0,d.jsxs)("div",{children:[(0,d.jsx)(l,{to:null!==(e=null===(n=p.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/",children:" \u2b05 Go back"}),(0,d.jsxs)("h1",{children:[m||j," "]}),(0,d.jsxs)("p",{children:["User Score: ",f&&Math.round(f)," "]}),(0,d.jsx)("img",{src:x?"https://image.tmdb.org/t/p/w500".concat(x):"https://img.freepik.com/free-vector/cinema-film-production-realistic-transparent-composition-with-isolated-image-clapper-with-empty-fields-vector-illustration_1284-66163.jpg?w=996&t=st=1689375638~exp=1689376238~hmac=627e1995e0ae8a8e9628774d0b83ac2bd965687c8df0c7d601ba84feed25341c",alt:m||j}),(0,d.jsx)("h2",{children:"Overview"}),(0,d.jsx)("p",{children:v}),(0,d.jsx)("h2",{children:"Genres"}),(0,d.jsx)("p",{children:function(){if(g)return Object.values(g).map((function(e){return e.name})).join(", ")}()}),(0,d.jsx)("p",{children:"Additional information"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(a.rU,{to:"cast",children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(a.rU,{to:"reviews",children:"Reviews"})})]}),(0,d.jsx)(c.j3,{})]}):(0,d.jsx)("p",{children:"Sorry, we couldn`t find information"})})}}}}]);
//# sourceMappingURL=449.e100920e.chunk.js.map