(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{177:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(180),s=t(185),c=t.n(s),i=t(194),m=t(183),o=t(181),u=t.n(o),E=function(e){return l.a.createElement("header",{id:"header",className:"alt"},l.a.createElement("span",{className:"logo"},l.a.createElement("img",{src:u.a,alt:""})),l.a.createElement("h1",null,"Stellar"),l.a.createElement("p",null,"Just another free, fully responsive site template",l.a.createElement("br",null),"design by ",l.a.createElement("a",{href:"https://html5up.net"},"HTML5 UP"),"."))},d=t(198),p=t.n(d),M=t(212),N=t.n(M),L=t(11),w=t.n(L);var f=function(e){return e.children},g=function(e){var a,t;function n(){var a;return(a=e.call(this)||this).handleClick=a.handleClick.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a}t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t;var r=n.prototype;return r.componentDidMount=function(){N.a.polyfill()},r.handleClick=function(e){e.preventDefault();var a=0,t=!0,n=this.props,l=n.type,r=n.element,s=n.offset,c=n.timeout;if(l&&r)switch(l){case"class":t=!!(a=document.getElementsByClassName(r)[0]);break;case"id":t=!!(a=document.getElementById(r))}t?this.scrollTo(a,s,c):console.log("Element not found: "+r)},r.scrollTo=function(e,a,t){void 0===a&&(a=0),void 0===t&&(t=null);var n=e?e.getBoundingClientRect().top+window.pageYOffset:0;t?setTimeout(function(){window.scroll({top:n+a,left:0,behavior:"smooth"})},t):window.scroll({top:n+a,left:0,behavior:"smooth"})},r.render=function(){return l.a.createElement(f,null,"object"==typeof this.props.children?l.a.cloneElement(this.props.children,{onClick:this.handleClick}):l.a.createElement("span",{onClick:this.handleClick},this.props.children))},n}(l.a.Component);g.propTypes={type:w.a.string,element:w.a.string,offset:w.a.number,timeout:w.a.number,children:w.a.node.isRequired};var y=g,h=function(e){return l.a.createElement("nav",{id:"nav",className:e.sticky?"alt":""},l.a.createElement(p.a,{items:["intro","first","second","cta"],currentClassName:"is-active",offset:-300},l.a.createElement("li",null,l.a.createElement(y,{type:"id",element:"intro"},l.a.createElement("a",{href:"#"},"Introduction"))),l.a.createElement("li",null,l.a.createElement(y,{type:"id",element:"first"},l.a.createElement("a",{href:"#"},"First Section"))),l.a.createElement("li",null,l.a.createElement(y,{type:"id",element:"second"},l.a.createElement("a",{href:"#"},"Second Section"))),l.a.createElement("li",null,l.a.createElement(y,{type:"id",element:"cta"},l.a.createElement("a",{href:"#"},"Get Started")))))},j=t(213),D=t.n(j);var b=function(e){var a,t;function n(a){var t;return(t=e.call(this,a)||this)._handleWaypointEnter=function(){t.setState(function(){return{stickyNav:!1}})},t._handleWaypointLeave=function(){t.setState(function(){return{stickyNav:!0}})},t.state={stickyNav:!1},t}return t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t,n.prototype.render=function(){return l.a.createElement(m.a,null,l.a.createElement(c.a,{title:"Gatsby Starter - Stellar"}),l.a.createElement(E,null),l.a.createElement(i.a,{onEnter:this._handleWaypointEnter,onLeave:this._handleWaypointLeave}),l.a.createElement(h,{sticky:this.state.stickyNav}),l.a.createElement("div",{id:"main"},l.a.createElement("section",{id:"intro",className:"main"},l.a.createElement("div",{className:"spotlight"},l.a.createElement("div",{className:"content"},l.a.createElement("header",{className:"major"},l.a.createElement("h2",null,"Ipsum sed adipiscing")),l.a.createElement("p",null,"Sed lorem ipsum dolor sit amet nullam consequat feugiat consequat magna adipiscing magna etiam amet veroeros. Lorem ipsum dolor tempus sit cursus. Tempus nisl et nullam lorem ipsum dolor sit amet aliquam."),l.a.createElement("ul",{className:"actions"},l.a.createElement("li",null,l.a.createElement(r.a,{to:"/generic",className:"button"},"Learn More")))),l.a.createElement("span",{className:"image"},l.a.createElement("img",{src:D.a,alt:""})))),l.a.createElement("section",{id:"first",className:"main special"},l.a.createElement("header",{className:"major"},l.a.createElement("h2",null,"Magna veroeros")),l.a.createElement("ul",{className:"features"},l.a.createElement("li",null,l.a.createElement("span",{className:"icon major style1 fa-code"}),l.a.createElement("h3",null,"Ipsum consequat"),l.a.createElement("p",null,"Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.")),l.a.createElement("li",null,l.a.createElement("span",{className:"icon major style3 fa-copy"}),l.a.createElement("h3",null,"Amed sed feugiat"),l.a.createElement("p",null,"Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.")),l.a.createElement("li",null,l.a.createElement("span",{className:"icon major style5 fa-diamond"}),l.a.createElement("h3",null,"Dolor nullam"),l.a.createElement("p",null,"Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat."))),l.a.createElement("footer",{className:"major"},l.a.createElement("ul",{className:"actions"},l.a.createElement("li",null,l.a.createElement(r.a,{to:"/generic",className:"button"},"Learn More"))))),l.a.createElement("section",{id:"second",className:"main special"},l.a.createElement("header",{className:"major"},l.a.createElement("h2",null,"Ipsum consequat"),l.a.createElement("p",null,"Donec imperdiet consequat consequat. Suspendisse feugiat congue",l.a.createElement("br",null),"posuere. Nulla massa urna, fermentum eget quam aliquet.")),l.a.createElement("ul",{className:"statistics"},l.a.createElement("li",{className:"style1"},l.a.createElement("span",{className:"icon fa-code-fork"}),l.a.createElement("strong",null,"5,120")," Etiam"),l.a.createElement("li",{className:"style2"},l.a.createElement("span",{className:"icon fa-folder-open-o"}),l.a.createElement("strong",null,"8,192")," Magna"),l.a.createElement("li",{className:"style3"},l.a.createElement("span",{className:"icon fa-signal"}),l.a.createElement("strong",null,"2,048")," Tempus"),l.a.createElement("li",{className:"style4"},l.a.createElement("span",{className:"icon fa-laptop"}),l.a.createElement("strong",null,"4,096")," Aliquam"),l.a.createElement("li",{className:"style5"},l.a.createElement("span",{className:"icon fa-diamond"}),l.a.createElement("strong",null,"1,024")," Nullam")),l.a.createElement("p",{className:"content"},"Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum ac arcu sit amet, fermentum pellentesque et purus. Integer maximus varius lorem, sed convallis diam accumsan sed. Etiam porttitor placerat sapien, sed eleifend a enim pulvinar faucibus semper quis ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget purus nec nulla mattis et accumsan ut magna libero. Morbi auctor iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui curabitur lacinia."),l.a.createElement("footer",{className:"major"},l.a.createElement("ul",{className:"actions"},l.a.createElement("li",null,l.a.createElement(r.a,{to:"/generic",className:"button"},"Learn More"))))),l.a.createElement("section",{id:"cta",className:"main special"},l.a.createElement("header",{className:"major"},l.a.createElement("h2",null,"Congue imperdiet"),l.a.createElement("p",null,"Donec imperdiet consequat consequat. Suspendisse feugiat congue",l.a.createElement("br",null),"posuere. Nulla massa urna, fermentum eget quam aliquet.")),l.a.createElement("footer",{className:"major"},l.a.createElement("ul",{className:"actions"},l.a.createElement("li",null,l.a.createElement(r.a,{to:"/generic",className:"button special"},"Get Started")),l.a.createElement("li",null,l.a.createElement(r.a,{to:"/generic",className:"button"},"Learn More")))))))},n}(l.a.Component);a.default=b},179:function(e,a,t){var n;e.exports=(n=t(182))&&n.default||n},180:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(11),s=t.n(r),c=t(59),i=t.n(c);t.d(a,"a",function(){return i.a});t(179),l.a.createContext({});s.a.object,s.a.string.isRequired,s.a.func,s.a.func},181:function(e,a){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iODVweCIgaGVpZ2h0PSI4NXB4IiB2aWV3Qm94PSIwIDAgODAgODAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDgwIDgwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQwLDBjMjIuMDkxLDAsNDAsMTcuOTA5LDQwLDQwUzYyLjA5MSw4MCw0MCw4MFMwLDYyLjA5MSwwLDQwUzE3LjkwOSwwLDQwLDB6Ii8+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjOGNjOWYwIiBkPSJNNTAuMzc4LDMyLjU3NmMwLDEuMDA1LTAuODE1LDEuODIxLTEuODIxLDEuODIxYy0xLjAwNSwwLTEuODItMC44MTYtMS44Mi0xLjgyMQ0KCQkJYzAtMS4wMDUsMC44MTUtMS44MjEsMS44Mi0xLjgyMUM0OS41NjMsMzAuNzU1LDUwLjM3OCwzMS41NzEsNTAuMzc4LDMyLjU3NnogTTU0LjYyNywyNy4xMTNjMC0wLjM0MS0wLjMwNC0wLjYwNy0wLjY0Ni0wLjYwNw0KCQkJYy02LjYwMSwwLTEwLjIyMywxLjUxOC0xNC45NjQsNi4yNDFjLTEuMDgxLDEuMS0yLjIsMi4zNTItMy4zMzgsMy42OTlsLTcuMTg4LDAuMzc5Yy0wLjE5LDAuMDE5LTAuMzc5LDAuMTMzLTAuNDkzLDAuMzA0DQoJCQlsLTQuMjQ5LDcuMjg0Yy0wLjEzMywwLjIyOC0wLjA5NSwwLjUzLDAuMDk1LDAuNzM5bDEuMjE0LDEuMjE1YzAuMTE0LDAuMTEzLDAuMjg1LDAuMTcsMC40MzcsMC4xN2MwLjA1NywwLDAuMTE0LDAsMC4xNy0wLjAyDQoJCQlsNS4yMzUtMS42MTFsNS4zMyw1LjMzbC0xLjYxMiw1LjIzNmMtMC4wNTcsMC4yMDksMCwwLjQzNywwLjE1MiwwLjYwNmwxLjIxNCwxLjIxNGMwLjEzMywwLjExNCwwLjI4NCwwLjE3MSwwLjQzNiwwLjE3MQ0KCQkJYzAuMTE0LDAsMC4yMDgtMC4wMjEsMC4zMDQtMC4wNzVsNy4yODMtNC4yNWMwLjE3MS0wLjExMywwLjI4NC0wLjMwNCwwLjMwNS0wLjQ5MmwwLjM3OS03LjE5YzEuMzQ3LTEuMTM4LDIuNTk5LTIuMjU3LDMuNjk5LTMuMzM5DQoJCQlDNTIuODgyLDM3LjYwMyw1NC42MjcsMzMuNDExLDU0LjYyNywyNy4xMTN6Ii8+DQoJPC9nPg0KPC9zdmc+"},182:function(e,a,t){"use strict";t.r(a);t(24);var n=t(0),l=t.n(n),r=t(11),s=t.n(r),c=t(84),i=function(e){var a=e.location,t=e.pageResources;return t?l.a.createElement(c.a,Object.assign({location:a,pageResources:t},t.json)):null};i.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},a.default=i},183:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=(t(184),t(180)),s=(t(181),function(e){return l.a.createElement("footer",{id:"footer"},l.a.createElement("section",null,l.a.createElement("h2",null,"Aliquam sed mauris"),l.a.createElement("p",null,"Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae tincidunt odio."),l.a.createElement("ul",{className:"actions"},l.a.createElement("li",null,l.a.createElement(r.a,{to:"/generic",className:"button"},"Learn More")))),l.a.createElement("section",null,l.a.createElement("h2",null,"Etiam feugiat"),l.a.createElement("dl",{className:"alt"},l.a.createElement("dt",null,"Address"),l.a.createElement("dd",null,"1234 Somewhere Road • Nashville, TN 00000 • USA"),l.a.createElement("dt",null,"Phone"),l.a.createElement("dd",null,"(000) 000-0000 x 0000"),l.a.createElement("dt",null,"Email"),l.a.createElement("dd",null,l.a.createElement("a",{href:"#"},"information@untitled.tld"))),l.a.createElement("ul",{className:"icons"},l.a.createElement("li",null,l.a.createElement("a",{href:"#",className:"icon fa-twitter alt"},l.a.createElement("span",{className:"label"},"Twitter"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#",className:"icon fa-facebook alt"},l.a.createElement("span",{className:"label"},"Facebook"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#",className:"icon fa-instagram alt"},l.a.createElement("span",{className:"label"},"Instagram"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#",className:"icon fa-github alt"},l.a.createElement("span",{className:"label"},"GitHub"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#",className:"icon fa-dribbble alt"},l.a.createElement("span",{className:"label"},"Dribbble"))))),l.a.createElement("p",{className:"copyright"},"© Untitled. Design: ",l.a.createElement("a",{href:"https://html5up.net"},"HTML5 UP"),"."))});var c=function(e){var a,t;function n(a){var t;return(t=e.call(this,a)||this).state={loading:"is-loading"},t}t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t;var r=n.prototype;return r.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100)},r.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},r.render=function(){var e=this.props.children;return l.a.createElement("div",{className:"body "+this.state.loading},l.a.createElement("div",{id:"wrapper"},e,l.a.createElement(s,null)))},n}(l.a.Component);a.a=c},213:function(e,a,t){e.exports=t.p+"static/pic01-b9959e167f94349be29be7284e7b9112.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-a6fcc2a9fcd820bc10f9.js.map