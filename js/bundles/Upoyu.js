var pageComponent=webpackJsonppageComponent([42],{793:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=n(0),i=o(u),s=n(1),p=o(s);n(18),n(19),n(20),n(4),n(10),n(13),n(21),n(5),n(22),n(9),n(23),n(7),n(2),n(8),n(3),n(14),n(17),n(24),n(25),n(11),n(16),n(12),n(26),n(6),n(15),n(27),n(28),n(29),n(30),n(31),n(32),n(33),n(34);var c=n(794),f=o(c),d=function(e){function t(){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),t}(i.default);p.default.register(d,f.default),t.default=d},794:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.Upoyu=void 0;var u,i=n(0),s=o(i),p=n(1),c=o(p);goog.loadModule(function(e){function t(e,t,o){var u=function(){r("h6");var t=e.page.description;"function"==typeof t?t():null!=t&&a(t),l("h6"),r("article",null,null,"id","1"),r("div",null,null,"style","width:100%;height:380px;"),i({color:{range:{min:"#b1d4ff",max:"#0065e4"},selected:"#4b9bff",value:"gdp_md_est"},data:"/assets/world-low-res.geo.json"},null,o),l("div"),s({code:"{call ClayGeomap.render}\n    {param color: [\n            'range': [\n                'min': '#b1d4ff',\n                'max': '#0065e4'\n            ],\n            'selected': '#4b9bff',\n            'value': 'gdp_md_est'\n    ] /}\n    {param data: '/assets/world-low-res.geo.json' /}\n{/call}",mode:"soy"},null,o),s({code:"<ClayGeomap\n    color={\n            range {\n                min: '#b1d4ff',\n                max: '#0065e4'\n            },\n            selected: '#4b9bff'\n            value: 'gdp_md_est'\n    }\n    data='/assets/world-low-res.geo.json'\n/>",mode:"jsx"},null,o),l("article"),r("input",null,null,"type","hidden","value",e.page.title),l("input"),r("input",null,null,"type","hidden","value",e.site.title),l("input")};p(n.$$assignDefaults({content:u},e),null,o)}goog.module("Upoyu.incrementaldom");var n=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var o=goog.require("incrementaldom"),r=o.elementOpen,l=o.elementClose,a=(o.elementVoid,o.elementOpenStart,o.elementOpenEnd,o.text),i=(o.attr,c.default.getTemplate("ClayGeomap.incrementaldom","render")),s=c.default.getTemplate("ElectricCode.incrementaldom","render"),p=c.default.getTemplate("guide.incrementaldom","render");return e.render=t,goog.DEBUG&&(t.soyTemplateName="Upoyu.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=u=e,e});var f=function(e){function t(){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),t}(s.default);c.default.register(f,u),t.Upoyu=f,t.templates=u,t.default=u}},[793]);