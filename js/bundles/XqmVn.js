var pageComponent=webpackJsonppageComponent([40],{797:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),u=o(l),c=n(1),s=o(c);n(18),n(19),n(20),n(4),n(10),n(13),n(21),n(5),n(22),n(9),n(23),n(7),n(2),n(8),n(3),n(14),n(17),n(24),n(25),n(11),n(16),n(12),n(26),n(6),n(15),n(27),n(28),n(29),n(30),n(31),n(32),n(33),n(34);var p=n(798),d=o(p),f=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),t}(u.default);s.default.register(f,d.default),t.default=f},798:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.XqmVn=void 0;var l,u=n(0),c=o(u),s=n(1),p=o(s);goog.loadModule(function(e){function t(e,t,o){var l=function(){r("h6");var t=e.page.description;"function"==typeof t?t():null!=t&&i(t),a("h6"),r("article",null,null,"id","1"),r("p"),u({columns:[{id:"data1",data:[100,20,30]},{id:"data2",data:[20,70,100]}]},null,o),a("p"),c({code:"{call ClayChart.render}\n    {param columns: [\n        [\n            'id': 'data1',\n            'data': [100, 20, 30]\n        ],\n        [\n            'id': 'data2',\n            'data': [20, 70, 100]\n        ]\n    ] /}\n{/call}",mode:"soy"},null,o),c({code:"<LineChart\n    columns={[\n        {\n            id: 'data1',\n            data: [100, 20, 30]\n        },\n        {\n            id: 'data2',\n            data: [20, 70, 100]\n        }\n    ]}\n/>",mode:"jsx"},null,o),a("article"),r("input",null,null,"type","hidden","value",e.page.title),a("input"),r("input",null,null,"type","hidden","value",e.site.title),a("input")};s(n.$$assignDefaults({content:l},e),null,o)}goog.module("XqmVn.incrementaldom");var n=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var o=goog.require("incrementaldom"),r=o.elementOpen,a=o.elementClose,i=(o.elementVoid,o.elementOpenStart,o.elementOpenEnd,o.text),u=(o.attr,p.default.getTemplate("ClayChart.incrementaldom","render")),c=p.default.getTemplate("ElectricCode.incrementaldom","render"),s=p.default.getTemplate("guide.incrementaldom","render");return e.render=t,goog.DEBUG&&(t.soyTemplateName="XqmVn.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=l=e,e});var d=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),t}(c.default);p.default.register(d,l),t.XqmVn=d,t.templates=l,t.default=l}},[797]);