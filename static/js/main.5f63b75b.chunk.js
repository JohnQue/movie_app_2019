(this.webpackJsonpmovie_app_2019=this.webpackJsonpmovie_app_2019||[]).push([[0],{20:function(e,t,a){e.exports=a(45)},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(14),i=a.n(s),c=a(2),m=a.n(c),o=a(3),l=a(15),u=a(16),p=a(18),v=a(17),d=a(19),f=a(4),_=a.n(f);a(43);var h=function(e){var t=e.year,a=e.title,n=e.summary,s=e.poster,i=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement("img",{className:"movie__poster",src:s,alt:a,title:a}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},a),r.a.createElement("h5",{className:"movie__year"},t),r.a.createElement("ul",{className:"movie__genres"},i.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres__genre"},e)}))),r.a.createElement("p",{className:"movie__summary"},n.slice(0,180),"...")))};var g=function(e){return r.a.createElement("h4",null,"Tokyo's temp is ",e.temp)},y=(a(44),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!0,movies:[],temp:""},a.getMovies=Object(o.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:t=e.sent,n=t.data.data.movies,a.setState({movies:n});case 5:case"end":return e.stop()}}),e)}))),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.getMovies().then(Object(o.a)(m.a.mark((function t(){var a,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.a.get("https://api.openweathermap.org/data/2.5/weather?q=Tokyo&units=metric&appid=".concat("59f4bd23fcf43a0f883bdebcbbd922f5"));case 2:a=t.sent,n=a.data.main.temp,e.setState({temp:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))))}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"nothing"},r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(h,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))),r.a.createElement(g,{temp:this.state.temp})))}}]),t}(r.a.Component));i.a.render(r.a.createElement(y,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.5f63b75b.chunk.js.map