"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[412],{412:function(n,e,r){r.r(e),r.d(e,{default:function(){return m}});var t,o,i,a=r(439),l=r(791),c=r(168),s=r(444),u=s.ZP.input(t||(t=(0,c.Z)(["\n  margin: 40px 15px 40px 30px;\n  background-color: rgb(232, 220, 220);\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding: 5px;\n  outline: 1px rgb(174, 174, 174) solid;\n  border-radius: 3px;\n\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),d=s.ZP.form(o||(o=(0,c.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),h=s.ZP.button(i||(i=(0,c.Z)(["\n  align-items: center;\n  background-color: rgb(217, 167, 167);\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 0.25rem;\n  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;\n  box-sizing: border-box;\n  color: rgba(0, 0, 0, 0.85);\n  cursor: pointer;\n  display: inline-flex;\n  font-family: system-ui, -apple-system, system-ui, 'Helvetica Neue', Helvetica,\n    Arial, sans-serif;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  line-height: 1.25;\n  margin: 0;\n  padding: calc(0.875rem - 1px) calc(1.5rem - 1px);\n  position: relative;\n  text-decoration: none;\n  transition: all 250ms;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  vertical-align: baseline;\n  width: auto;\n  height: 38px;\n\n  &:hover,\n  &:focus {\n    border-color: rgba(0, 0, 0, 0.15);\n    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;\n    color: rgba(0, 0, 0, 0.65);\n  }\n\n  &:hover {\n    transform: translateY(-1px);\n  }\n\n  &:active {\n    background-color: #f0f0f1;\n    border-color: rgba(0, 0, 0, 0.15);\n    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;\n    color: rgba(0, 0, 0, 0.65);\n    transform: translateY(0);\n  }\n"]))),f=r(184),p=function(n){var e=n.onChange,r=(0,l.useState)(""),t=(0,a.Z)(r,2),o=t[0],i=t[1];return(0,f.jsxs)(d,{onSubmit:function(n){n.preventDefault(),e(o)},children:[(0,f.jsx)(u,{type:"text",value:o,onChange:function(n){i(n.target.value)}}),(0,f.jsx)(h,{type:"submit",children:"Search"})]})},x=r(689),b=r(87),g=function(n){var e=n.movies,r=(0,x.TH)();return(0,f.jsx)("ul",{children:0===(null===e||void 0===e?void 0:e.results.length)?(0,f.jsx)("h2",{children:"Sorry, no films were found"}):null===e||void 0===e?void 0:e.results.map((function(n){var e=n.id,t=n.title;return(0,f.jsx)("li",{children:(0,f.jsx)(b.rU,{to:"".concat(e),state:{from:r},children:t})},e)}))})};var m=function(){var n=(0,l.useState)(null),e=(0,a.Z)(n,2),r=e[0],t=e[1],o=(0,l.useState)(""),i=(0,a.Z)(o,2),c=i[0],s=i[1];return(0,l.useEffect)((function(){var n;c&&(n=c,fetch("https://api.themoviedb.org/3/search/movie?query=".concat(n,"&include_adult=false&language=en-US&page=1"),{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjY5MWY1OTNlYjc0MjU5MmFkMDFlNmZiNjBhMDE5YiIsInN1YiI6IjY0YTY4YTUxNzI0ZGUxMDBjNWU5ODNiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tqT4KdHOxcFDAo6pMr4lLuCDSt37dEUmae-2jFbOSdU"}}).then((function(n){if(n.ok)return n.json()}))).then((function(n){return t(n)})).catch((function(n){return console.error(n)}))}),[c]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(p,{onChange:function(n){s(n)}}),(0,f.jsx)(g,{movies:r})]})}}}]);
//# sourceMappingURL=412.028fa580.chunk.js.map