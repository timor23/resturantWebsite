/* Polyfill service v3.105.0
 * Disable minification (remove `.min` from URL path) for more info */

(function(self, undefined) {!function(e){"function"==typeof define&&define.amd?define(e):e()}(function(){"use strict";function e(e,t,n,r){e.get(t)||e.set(t,Object.create(null)),e.get(t)[n]=r}function t(e,t,r){return n(e,t,r)[r]}function n(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var a=e.get(t);if(!a)throw new TypeError(t+" InternalSlot has not been initialized");return n.reduce(function(e,t){return e[t]=a[t],e},Object.create(null))}function r(e){return"literal"===e.type}function a(e,t,n){if(void 0===n&&(n=Error),!e)throw new n(t)}function i(e){return Intl.getCanonicalLocales(e)}function l(e){if("symbol"==typeof e)throw TypeError("Cannot convert a Symbol value to a string");return String(e)}function o(e){if(null==e)throw new TypeError("undefined/null cannot be converted to object");return Object(e)}function u(e){for(var t=[],n=e.indexOf("{"),r=0,i=0,l=e.length;n<e.length&&n>-1;)r=e.indexOf("}",n),a(r>n,"Invalid pattern "+e),n>i&&t.push({type:"literal",value:e.substring(i,n)}),t.push({type:e.substring(n+1,r),value:undefined}),i=r+1,n=e.indexOf("{",i);return i<l&&t.push({type:"literal",value:e.substring(i,l)}),t}function f(e,t,n,r,a){var i=e[t];if(i!==undefined){if("boolean"!==n&&"string"!==n)throw new TypeError("invalid type");if("boolean"===n&&(i=Boolean(i)),"string"===n&&(i=l(i)),r!==undefined&&!r.filter(function(e){return e==i}).length)throw new RangeError(i+" is not within "+r.join(", "));return i}return a}function c(e,t){for(var n=t;;){if(e.has(n))return n;var r=n.lastIndexOf("-");if(!~r)return undefined;r>=2&&"-"===n[r-2]&&(r-=2),n=n.slice(0,r)}}function s(e,t,n){for(var r={locale:""},a=0,i=t;a<i.length;a++){var l=i[a],o=l.replace(O,""),u=c(e,o);if(u)return r.locale=u,l!==o&&(r.extension=l.slice(o.length+1,l.length)),r}return r.locale=n(),r}function _(e,t,n){var r={},a=new Set;e.forEach(function(e){var t=new Intl.Locale(e).minimize().toString();r[t]=e,a.add(t)});for(var i,l=0,o=t;l<o.length;l++){var u=o[l];if(i)break;var f=u.replace(O,"");if(e.has(f)){i=f;break}if(a.has(f)){i=r[f];break}var s=new Intl.Locale(f),_=s.maximize().toString(),d=s.minimize().toString();if(a.has(d)){i=r[d];break}i=c(a,_)}return{locale:i||n()}}function d(e,t){a(2===t.length,"key must have 2 elements");var n=e.length,r="-"+t+"-",i=e.indexOf(r);if(-1!==i){for(var l=i+4,o=l,u=l,f=!1;!f;){var c=e.indexOf("-",u),s=void 0;s=-1===c?n-u:c-u,2===s?f=!0:-1===c?(o=n,f=!0):(o=c,u=c+1)}return e.slice(l,o)}return r="-"+t,i=e.indexOf(r),-1!==i&&i+3===n?"":undefined}function v(e,t,n,r,i,l){var o,u=n.localeMatcher;o="lookup"===u?s(e,t,l):_(e,t,l);for(var f=o.locale,c={locale:"",dataLocale:f},v="-u",p=0,h=r;p<h.length;p++){var y=h[p];a(f in i,"Missing locale data for "+f);var g=i[f];a("object"==typeof g&&null!==g,"locale data "+y+" must be an object");var b=g[y];a(Array.isArray(b),"keyLocaleData for "+y+" must be an array");var L=b[0];a("string"==typeof L||null===L,"value must be string or null but got "+typeof L+" in key "+y);var m="";if(o.extension){var O=d(o.extension,y);O!==undefined&&(""!==O?~b.indexOf(O)&&(L=O,m="-"+y+"-"+L):~O.indexOf("true")&&(L="true",m="-"+y))}if(y in n){var T=n[y];a("string"==typeof T||void 0===T||null===T,"optionsValue must be String, Undefined or Null"),~b.indexOf(T)&&T!==L&&(L=T,m="")}c[y]=L,v+=m}if(v.length>2){var A=f.indexOf("-x-");if(-1===A)f+=v;else{f=f.slice(0,A)+v+f.slice(A,f.length)}f=Intl.getCanonicalLocales(f)[0]}return c.locale=f,c}function p(e,t){for(var n=[],r=0,a=t;r<a.length;r++){var i=a[r],l=i.replace(O,""),o=c(e,l);o&&n.push(o)}return n}function h(e,t,n){return n!==undefined&&(n=o(n),f(n,"localeMatcher","string",["lookup","best fit"],"best fit")),p(e,t)}function y(e,t){if(!(e instanceof T))throw new TypeError("Method Intl.ListFormat.prototype."+t+" called on incompatible receiver "+String(e))}function g(e){if(e===undefined)return[];for(var t=[],n=0,r=e;n<r.length;n++){var a=r[n];if("string"!=typeof a)throw new TypeError("array list["+e.indexOf(a)+"] is not type String");t.push(a)}return t}function b(e,n,r){var a=r.length;if(0===a)return[];if(2===a){var i=t(e,n,"templatePair");return L(i,{0:{type:"element",value:r[0]},1:{type:"element",value:r[1]}})}for(var l={type:"element",value:r[a-1]},o=l,u=a-2;u>=0;){var i=void 0;i=0===u?t(e,n,"templateStart"):u<a-2?t(e,n,"templateMiddle"):t(e,n,"templateEnd");o=L(i,{0:{type:"element",value:r[u]},1:o}),u--}return o}function L(e,t){for(var n=u(e),i=[],l=0,o=n;l<o.length;l++){var f=o[l],c=f.type;if(r(f))i.push({type:"literal",value:f.value});else{a(c in t,c+" is missing from placables");var s=t[c];Array.isArray(s)?i.push.apply(i,s):i.push(s)}}return i}var m=function(){return m=Object.assign||function e(t){for(var n,r=1,a=arguments.length;r<a;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},m.apply(this,arguments)},O=/-u(?:-[0-9a-z]{2,8})+/gi,T=function(){function n(t,r){if(!(this&&this instanceof n?this.constructor:void 0))throw new TypeError("Intl.ListFormat must be called with 'new'");e(n.__INTERNAL_SLOT_MAP__,this,"initializedListFormat",!0);var l=i(t),u=Object.create(null),c=r===undefined?Object.create(null):o(r),s=f(c,"localeMatcher","string",["best fit","lookup"],"best fit");u.localeMatcher=s;var _=n.localeData,d=v(n.availableLocales,l,u,n.relevantExtensionKeys,_,n.getDefaultLocale);e(n.__INTERNAL_SLOT_MAP__,this,"locale",d.locale);var p=f(c,"type","string",["conjunction","disjunction","unit"],"conjunction");e(n.__INTERNAL_SLOT_MAP__,this,"type",p);var h=f(c,"style","string",["long","short","narrow"],"long");e(n.__INTERNAL_SLOT_MAP__,this,"style",h);var y=d.dataLocale,g=_[y];a(!!g,"Missing locale data for "+y);var b=g[p],L=b[h];e(n.__INTERNAL_SLOT_MAP__,this,"templatePair",L.pair),e(n.__INTERNAL_SLOT_MAP__,this,"templateStart",L.start),e(n.__INTERNAL_SLOT_MAP__,this,"templateMiddle",L.middle),e(n.__INTERNAL_SLOT_MAP__,this,"templateEnd",L.end)}return n.prototype.format=function(e){y(this,"format");var t="",r=b(n.__INTERNAL_SLOT_MAP__,this,g(e));if(!Array.isArray(r))return r.value;for(var a=0,i=r;a<i.length;a++){t+=i[a].value}return t},n.prototype.formatToParts=function(e){y(this,"format");var t=b(n.__INTERNAL_SLOT_MAP__,this,g(e));if(!Array.isArray(t))return[t];for(var r=[],a=0,i=t;a<i.length;a++){var l=i[a];r.push(m({},l))}return r},n.prototype.resolvedOptions=function(){return y(this,"resolvedOptions"),{locale:t(n.__INTERNAL_SLOT_MAP__,this,"locale"),type:t(n.__INTERNAL_SLOT_MAP__,this,"type"),style:t(n.__INTERNAL_SLOT_MAP__,this,"style")}},n.supportedLocalesOf=function(e,t){return h(n.availableLocales,i(e),t)},n.__addLocaleData=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var r=0,a=e;r<a.length;r++){var i=a[r],l=i.data,o=i.locale,u=new Intl.Locale(o).minimize().toString();n.localeData[o]=n.localeData[u]=l,n.availableLocales.add(u),n.availableLocales.add(o),n.__defaultLocale||(n.__defaultLocale=u)}},n.getDefaultLocale=function(){return n.__defaultLocale},n.localeData={},n.availableLocales=new Set,n.__defaultLocale="",n.relevantExtensionKeys=[],n.polyfilled=!0,n.__INTERNAL_SLOT_MAP__=new WeakMap,n}();try{"undefined"!=typeof Symbol&&Object.defineProperty(T.prototype,Symbol.toStringTag,{value:"Intl.ListFormat",writable:!1,enumerable:!1,configurable:!0}),Object.defineProperty(T.prototype.constructor,"length",{value:0,writable:!1,enumerable:!1,configurable:!0}),Object.defineProperty(T.supportedLocalesOf,"length",{value:1,writable:!1,enumerable:!1,configurable:!0})}catch(w){}(function A(){return"undefined"==typeof Intl||!("ListFormat"in Intl)})()&&Object.defineProperty(Intl,"ListFormat",{value:T,writable:!0,enumerable:!1,configurable:!0})});Intl.ListFormat&&"function"==typeof Intl.ListFormat.__addLocaleData&&Intl.ListFormat.__addLocaleData({data:{conjunction:{"long":{start:"{0}, {1}",middle:"{0}, {1}",end:"{0} and {1}",pair:"{0} and {1}"},"short":{start:"{0}, {1}",middle:"{0}, {1}",end:"{0} and {1}",pair:"{0} and {1}"},narrow:{start:"{0}, {1}",middle:"{0}, {1}",end:"{0}, {1}",pair:"{0}, {1}"}},disjunction:{"long":{start:"{0}, {1}",middle:"{0}, {1}",end:"{0} or {1}",pair:"{0} or {1}"},"short":{start:"{0}, {1}",middle:"{0}, {1}",end:"{0} or {1}",pair:"{0} or {1}"},narrow:{start:"{0}, {1}",middle:"{0}, {1}",end:"{0} or {1}",pair:"{0} or {1}"}},unit:{"long":{start:"{0}, {1}",middle:"{0}, {1}",end:"{0}, {1}",pair:"{0}, {1}"},"short":{start:"{0}, {1}",middle:"{0}, {1}",end:"{0}, {1}",pair:"{0}, {1}"},narrow:{start:"{0} {1}",middle:"{0} {1}",end:"{0} {1}",pair:"{0} {1}"}}},locale:"en-GB"});Intl.ListFormat&&"function"==typeof Intl.ListFormat.__addLocaleData&&Intl.ListFormat.__addLocaleData({data:{conjunction:{"long":{start:"{0}, {1}",middle:"{0}, {1}",end:"{0} and {1}",pair:"{0} and {1}"},"short":{start:"{0}, {1}",middle:"{0}, {1}",end:"{0} and {1}",pair:"{0} and {1}"},narrow:{start:"{0}, {1}",middle:"{0}, {1}",end:"{0}, and {1}",pair:"{0}, {1}"}},disjunction:{"long":{start:"{0}, {1}",middle:"{0}, {1}",end:"{0} or {1}",pair:"{0} or {1}"},"short":{start:"{0}, {1}",middle:"{0}, {1}",end:"{0} or {1}",pair:"{0} or {1}"},narrow:{start:"{0}, {1}",middle:"{0}, {1}",end:"{0} or {1}",pair:"{0} or {1}"}},unit:{"long":{start:"{0}, {1}",middle:"{0}, {1}",end:"{0}, {1}",pair:"{0}, {1}"},"short":{start:"{0}, {1}",middle:"{0}, {1}",end:"{0}, {1}",pair:"{0}, {1}"},narrow:{start:"{0} {1}",middle:"{0} {1}",end:"{0} {1}",pair:"{0} {1}"}}},locale:"en-IN"});Intl.ListFormat&&"function"==typeof Intl.ListFormat.__addLocaleData&&Intl.ListFormat.__addLocaleData({data:{conjunction:{"long":{start:"{0}, {1}",middle:"{0}, {1}",end:"{0}, and {1}",pair:"{0} and {1}"},"short":{start:"{0}, {1}",middle:"{0}, {1}",end:"{0}, & {1}",pair:"{0} & {1}"},narrow:{start:"{0}, {1}",middle:"{0}, {1}",end:"{0}, {1}",pair:"{0}, {1}"}},disjunction:{"long":{start:"{0}, {1}",middle:"{0}, {1}",end:"{0}, or {1}",pair:"{0} or {1}"},"short":{start:"{0}, {1}",middle:"{0}, {1}",end:"{0}, or {1}",pair:"{0} or {1}"},narrow:{start:"{0}, {1}",middle:"{0}, {1}",end:"{0}, or {1}",pair:"{0} or {1}"}},unit:{"long":{start:"{0}, {1}",middle:"{0}, {1}",end:"{0}, {1}",pair:"{0}, {1}"},"short":{start:"{0}, {1}",middle:"{0}, {1}",end:"{0}, {1}",pair:"{0}, {1}"},narrow:{start:"{0} {1}",middle:"{0} {1}",end:"{0} {1}",pair:"{0} {1}"}}},locale:"en-US"});Intl.ListFormat&&"function"==typeof Intl.ListFormat.__addLocaleData&&Intl.ListFormat.__addLocaleData({data:{conjunction:{"long":{start:"{0}, {1}",middle:"{0}, {1}",end:"{0} et {1}",pair:"{0} et {1}"},"short":{start:"{0}, {1}",middle:"{0}, {1}",end:"{0} et {1}",pair:"{0} et {1}"},narrow:{start:"{0}, {1}",middle:"{0}, {1}",end:"{0}, {1}",pair:"{0}, {1}"}},disjunction:{"long":{start:"{0}, {1}",middle:"{0}, {1}",end:"{0} ou {1}",pair:"{0} ou {1}"},"short":{start:"{0}, {1}",middle:"{0}, {1}",end:"{0} ou {1}",pair:"{0} ou {1}"},narrow:{start:"{0}, {1}",middle:"{0}, {1}",end:"{0} ou {1}",pair:"{0} ou {1}"}},unit:{"long":{start:"{0}, {1}",middle:"{0}, {1}",end:"{0} et {1}",pair:"{0} et {1}"},"short":{start:"{0}, {1}",middle:"{0}, {1}",end:"{0} et {1}",pair:"{0} et {1}"},narrow:{start:"{0} {1}",middle:"{0} {1}",end:"{0} {1}",pair:"{0} {1}"}}},locale:"fr"});})('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});