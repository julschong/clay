var pageComponent=webpackJsonppageComponent([46],{785:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=n(0),i=o(u),p=n(1),c=o(p);n(18),n(19),n(20),n(4),n(10),n(13),n(21),n(5),n(22),n(9),n(23),n(7),n(2),n(8),n(3),n(14),n(17),n(24),n(25),n(11),n(16),n(12),n(26),n(6),n(15),n(27),n(28),n(29),n(30),n(31),n(32),n(33),n(34);var s=n(786),d=o(s),f=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),t}(i.default);c.default.register(f,d.default),t.default=f},786:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.lYuBu=void 0;var u,i=n(0),p=o(i),c=n(1),s=o(c);goog.loadModule(function(e){function t(e,t,o){var u=function(){r("h6");var t=e.page.description;"function"==typeof t?t():null!=t&&l(t),a("h6"),r("article",null,null,"id","1"),r("p"),i({columns:[{id:"data1",data:[100,20,30]},{id:"data2",data:[20,70,100]}],type:"bubble"},null,o),a("p"),p({code:"{call ClayChart.render}\n    {param columns: [\n        [\n            'id': 'data1',\n            'data': [100, 20, 30]\n        ],\n        [\n            'id': 'data2',\n            'data': [20, 70, 100]\n        ]\n    ] /}\n    {param type: 'bubble' /}\n{/call}",mode:"soy"},null,o),p({code:"<BubbleChart\n    columns={[\n        {\n            id: 'data1',\n            data: [100, 20, 30]\n        },\n        {\n            id: 'data2',\n            data: [20, 70, 100]\n        }\n    ]}\n/>",mode:"jsx"},null,o),a("article"),r("input",null,null,"type","hidden","value",e.page.title),a("input"),r("input",null,null,"type","hidden","value",e.site.title),a("input")};c(n.$$assignDefaults({content:u},e),null,o)}goog.module("lYuBu.incrementaldom");var n=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var o=goog.require("incrementaldom"),r=o.elementOpen,a=o.elementClose,l=(o.elementVoid,o.elementOpenStart,o.elementOpenEnd,o.text),i=(o.attr,s.default.getTemplate("ClayChart.incrementaldom","render")),p=s.default.getTemplate("ElectricCode.incrementaldom","render"),c=s.default.getTemplate("guide.incrementaldom","render");return e.render=t,goog.DEBUG&&(t.soyTemplateName="lYuBu.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=u=e,e});var d=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),t}(p.default);s.default.register(d,u),t.lYuBu=d,t.templates=u,t.default=u}},[785]);