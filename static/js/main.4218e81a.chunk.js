(this["webpackJsonpmeal-recipes"]=this["webpackJsonpmeal-recipes"]||[]).push([[0],{11:function(e,t,a){e.exports=a(50)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){},27:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(8),c=a.n(s),l=(a(16),a(2)),m=(a(17),a(18),function(e){var t=e.value,a=e.handleInput;return r.a.createElement("input",{type:"text",value:t,onChange:a,className:"form__input input",placeholder:"write meal name"})}),i=(a(19),function(){return r.a.createElement("button",{className:"form__button button"},"search")}),o=(a(20),function(e){var t=e.submit,a=e.value,n=e.handleInput;return r.a.createElement("form",{action:"submit",onSubmit:t,className:"form"},r.a.createElement(m,{value:a,handleInput:n}),r.a.createElement(i,null))}),u=a(10),_=(a(21),a(22),function(e){var t=e.ingridentsWithMeasure,a=e.item,n=e.closePopup;return r.a.createElement("div",{className:"popup"},r.a.createElement("div",{className:"item list__item list__item--active"},r.a.createElement("button",{className:"close-button popup__close-button ",onClick:n},r.a.createElement("span",{className:"close-button__box"},r.a.createElement("span",{className:"close-button__inner"}))),r.a.createElement("p",{className:"item__meal-name"},a.strMeal),r.a.createElement("div",{className:"item__details "},r.a.createElement("div",{className:"item__photo-wrapper"},r.a.createElement("img",{src:a.strMealThumb,alt:"meal",className:"item__photo"})),r.a.createElement("div",{className:"item__ingridents"},t.map((function(e){return r.a.createElement("div",{key:a.idMeal+e.id,className:"item__ingrident"},r.a.createElement("span",{className:"item__ingrident-name"},e.name),r.a.createElement("span",{className:"item__measure"},e.measure))})))),r.a.createElement("div",{className:"item__buttons-wrapper"},a.strYoutube&&r.a.createElement("a",{href:a.strYoutube,className:"item__button item__button--bigger",target:"_blank",rel:"noopener noreferrer"},"go to video"," ")),r.a.createElement("p",{className:"item__instruction-text"},a.strInstructions)))}),p=function(e){for(var t=e.item,a=Object(n.useState)(!1),s=Object(l.a)(a,2),c=s[0],m=s[1],i=function(){m(!c)},o=[],u=1;u<=20;u++)""!==t["strIngredient".concat(u)]&&null!==t["strIngredient".concat(u)]&&o.push({id:u,name:t["strIngredient".concat(u)],measure:t["strMeasure".concat(u)]});return Object(n.useEffect)((function(){m(!1)}),[t]),r.a.createElement("li",{className:"item list__item"},r.a.createElement("p",{className:"item__meal-name"},t.strMeal),r.a.createElement("div",{className:"item__details"},r.a.createElement("div",{className:"item__photo-wrapper"},r.a.createElement("img",{src:t.strMealThumb,alt:"meal",className:"item__photo"})),r.a.createElement("div",{className:"item__ingridents"},o.map((function(e){return r.a.createElement("div",{key:t.idMeal+e.id,className:"item__ingrident"},r.a.createElement("span",{className:"item__ingrident-name"},e.name),r.a.createElement("span",{className:"item__measure"},e.measure))})))),r.a.createElement("div",{className:"item__buttons-wrapper"},t.strYoutube&&r.a.createElement("a",{href:t.strYoutube,className:"item__button",target:"_blank",rel:"noopener noreferrer"},"go to video"," "),r.a.createElement("button",{className:"item__button",onClick:i},"instruction")),c&&r.a.createElement(_,{ingridentsWithMeasure:o,item:t,closePopup:i}))},f=(a(23),function(e){var t=e.data;return r.a.createElement("ul",{className:"list results__list"},t.map((function(e,t){return r.a.createElement(p,{key:t+1,item:e})})))}),E=a(3),b=(a(27),r.a.memo((function(e){var t=e.search,a=Object(n.useState)([]),s=Object(l.a)(a,2),c=s[0],m=s[1],i=Object(n.useState)(!1),o=Object(l.a)(i,2),_=o[0],p=o[1],b=Object(n.useCallback)((function(){p(!0),Object(E.trackPromise)(fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=".concat(t)).then((function(e){if(e.ok)return e;throw Error("Something gone wrong :(")})).then((function(e){return e.json()})).then((function(e){e.meals?m(Object(u.a)(e.meals)):m(!1),p(!1)}),[]).catch((function(e){console.log(e),p(!1)})))}),[t]);Object(n.useEffect)((function(){b()}),[b]);var d="";return c&&!_?d=r.a.createElement("p",{className:"results__info"},c.length," ",1===c.length?"result":"results",' for "',t,'"'):c||_||(d=r.a.createElement("p",{className:"results__info"},' no results for "',t,'"')),r.a.createElement("div",{className:"results app__results"},d,c&&r.a.createElement(f,{data:c}))})));var d=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(!1),m=Object(l.a)(c,2),i=m[0],u=m[1],_="";return!1!==i&&(_=r.a.createElement("p",{className:"wrapper__results-info"},"please type at least two chars")),i.length>=2&&(_=r.a.createElement(b,{search:i})),r.a.createElement("div",{className:"wrapper"},r.a.createElement(o,{submit:function(e){e.preventDefault(),u(a)},value:a,handleInput:function(e){s(e.target.value)}}),_)},h=a(9),N=a.n(h),v=(a(49),function(){return Object(E.usePromiseTracker)().promiseInProgress&&r.a.createElement("div",{className:"loader"},r.a.createElement(N.a,{type:"ThreeDots",color:"#1e58ff"}))});c.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),r.a.createElement(v,null)),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.4218e81a.chunk.js.map