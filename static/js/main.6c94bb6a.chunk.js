(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,o){},16:function(e,t,o){"use strict";o.r(t);var s=o(3),c=o.n(s),n=o(7),a=o(4),d=o(5),l=o(9),r=o(8),i=o(1),u=o.n(i),b=o(6),j=o.n(b),p=(o(14),o(0)),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],m=function(e){Object(l.a)(o,e);var t=Object(r.a)(o);function o(){var e;Object(a.a)(this,o);for(var s=arguments.length,c=new Array(s),d=0;d<s;d++)c[d]=arguments[d];return(e=t.call.apply(t,[this].concat(c))).state={selectedGoods:["Jam"]},e.remove=function(t){e.setState((function(e){return{selectedGoods:e.selectedGoods.filter((function(e){return e!==t}))}}))},e.add=function(t){e.setState((function(e){return{selectedGoods:[].concat(Object(n.a)(e.selectedGoods),[t])}}))},e.addOrDelGood=function(t,o){t?e.remove(o):e.add(o)},e.amountGoods=function(t){return t?t>1?"".concat(e.state.selectedGoods.slice(0,-1).join(", ")," ")+"and ".concat(e.state.selectedGoods.slice(-1)," are selected"):"".concat(e.state.selectedGoods[0]," is selected"):"No goods selected"},e}return Object(d.a)(o,[{key:"render",value:function(){var e=this,t=this.state.selectedGoods;return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{className:"App__title",children:this.amountGoods(t.length)}),!!t.length&&Object(p.jsx)("button",{type:"button",className:"App__button",onClick:function(){e.setState({selectedGoods:[]})},children:"X"}),Object(p.jsx)("ul",{className:"list",children:h.map((function(o){var s=t.includes(o);return Object(p.jsxs)("li",{className:j()("list__good",{list__active:s}),children:[o,Object(p.jsx)("button",{type:"button",className:"list__button",onClick:function(){e.addOrDelGood(s,o)},children:s?"-":"+"})]},o)}))})]})}}]),o}(u.a.Component);c.a.render(Object(p.jsx)(m,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.6c94bb6a.chunk.js.map