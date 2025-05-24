/*! jQuery v3.7.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(ie,e){"use strict";var oe=[],r=Object.getPrototypeOf,ae=oe.slice,g=oe.flat?function(e){return oe.flat.call(e)}:function(e){return oe.concat.apply([],e)},s=oe.push,se=oe.indexOf,n={},i=n.toString,ue=n.hasOwnProperty,o=ue.toString,a=o.call(Object),le={},v=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},y=function(e){return null!=e&&e===e.window},C=ie.document,u={type:!0,src:!0,nonce:!0,noModule:!0};function m(e,t,n){var r,i,o=(n=n||C).createElement("script");if(o.text=e,t)for(r in u)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[i.call(e)]||"object":typeof e}var t="3.7.1",l=/HTML$/i,ce=function(e,t){return new ce.fn.init(e,t)};function c(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!v(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}function fe(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}ce.fn=ce.prototype={jquery:t,constructor:ce,length:0,toArray:function(){return ae.call(this)},get:function(e){return null==e?ae.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=ce.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return ce.each(this,e)},map:function(n){return this.pushStack(ce.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(ae.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(ce.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(ce.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:oe.sort,splice:oe.splice},ce.extend=ce.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||v(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(ce.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||ce.isPlainObject(n)?n:{},i=!1,a[t]=ce.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},ce.extend({expando:"jQuery"+(t+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==i.call(e))&&(!(t=r(e))||"function"==typeof(n=ue.call(t,"constructor")&&t.constructor)&&o.call(n)===a)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){m(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(c(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},text:function(e){var t,n="",r=0,i=e.nodeType;if(!i)while(t=e[r++])n+=ce.text(t);return 1===i||11===i?e.textContent:9===i?e.documentElement.textContent:3===i||4===i?e.nodeValue:n},makeArray:function(e,t){var n=t||[];return null!=e&&(c(Object(e))?ce.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:se.call(t,e,n)},isXMLDoc:function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!l.test(t||n&&n.nodeName||"HTML")},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(c(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:le}),"function"==typeof Symbol&&(ce.fn[Symbol.iterator]=oe[Symbol.iterator]),ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var pe=oe.pop,de=oe.sort,he=oe.splice,ge="[\\x20\\t\\r\\n\\f]",ve=new RegExp("^"+ge+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ge+"+$","g");ce.contains=function(e,t){var n=t&&t.parentNode;return e===n||!(!n||1!==n.nodeType||!(e.contains?e.contains(n):e.compareDocumentPosition&&16&e.compareDocumentPosition(n)))};var f=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function p(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e}ce.escapeSelector=function(e){return(e+"").replace(f,p)};var ye=C,me=s;!function(){var e,b,w,o,a,T,r,C,d,i,k=me,S=ce.expando,E=0,n=0,s=W(),c=W(),u=W(),h=W(),l=function(e,t){return e===t&&(a=!0),0},f="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",t="(?:\\\\[\\da-fA-F]{1,6}"+ge+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",p="\\["+ge+"*("+t+")(?:"+ge+"*([*^$|!~]?=)"+ge+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+t+"))|)"+ge+"*\\]",g=":("+t+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+p+")*)|.*)\\)|)",v=new RegExp(ge+"+","g"),y=new RegExp("^"+ge+"*,"+ge+"*"),m=new RegExp("^"+ge+"*([>+~]|"+ge+")"+ge+"*"),x=new RegExp(ge+"|>"),j=new RegExp(g),A=new RegExp("^"+t+"$"),D={ID:new RegExp("^#("+t+")"),CLASS:new RegExp("^\\.("+t+")"),TAG:new RegExp("^("+t+"|[*])"),ATTR:new RegExp("^"+p),PSEUDO:new RegExp("^"+g),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ge+"*(even|odd|(([+-]|)(\\d*)n|)"+ge+"*(?:([+-]|)"+ge+"*(\\d+)|))"+ge+"*\\)|)","i"),bool:new RegExp("^(?:"+f+")$","i"),needsContext:new RegExp("^"+ge+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ge+"*((?:-\\d)?\\d*)"+ge+"*\\)|)(?=[^-]|$)","i")},N=/^(?:input|select|textarea|button)$/i,q=/^h\d$/i,L=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,H=/[+~]/,O=new RegExp("\\\\[\\da-fA-F]{1,6}"+ge+"?|\\\\([^\\r\\n\\f])","g"),P=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},M=function(){V()},R=J(function(e){return!0===e.disabled&&fe(e,"fieldset")},{dir:"parentNode",next:"legend"});try{k.apply(oe=ae.call(ye.childNodes),ye.childNodes),oe[ye.childNodes.length].nodeType}catch(e){k={apply:function(e,t){me.apply(e,ae.call(t))},call:function(e){me.apply(e,ae.call(arguments,1))}}}function I(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(V(e),e=e||T,C)){if(11!==p&&(u=L.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return k.call(n,a),n}else if(f&&(a=f.getElementById(i))&&I.contains(e,a)&&a.id===i)return k.call(n,a),n}else{if(u[2])return k.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&e.getElementsByClassName)return k.apply(n,e.getElementsByClassName(i)),n}if(!(h[t+" "]||d&&d.test(t))){if(c=t,f=e,1===p&&(x.test(t)||m.test(t))){(f=H.test(t)&&U(e.parentNode)||e)==e&&le.scope||((s=e.getAttribute("id"))?s=ce.escapeSelector(s):e.setAttribute("id",s=S)),o=(l=Y(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+Q(l[o]);c=l.join(",")}try{return k.apply(n,f.querySelectorAll(c)),n}catch(e){h(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return re(t.replace(ve,"$1"),e,n,r)}function W(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function F(e){return e[S]=!0,e}function $(e){var t=T.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function B(t){return function(e){return fe(e,"input")&&e.type===t}}function _(t){return function(e){return(fe(e,"input")||fe(e,"button"))&&e.type===t}}function z(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&R(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function X(a){return F(function(o){return o=+o,F(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function U(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function V(e){var t,n=e?e.ownerDocument||e:ye;return n!=T&&9===n.nodeType&&n.documentElement&&(r=(T=n).documentElement,C=!ce.isXMLDoc(T),i=r.matches||r.webkitMatchesSelector||r.msMatchesSelector,r.msMatchesSelector&&ye!=T&&(t=T.defaultView)&&t.top!==t&&t.addEventListener("unload",M),le.getById=$(function(e){return r.appendChild(e).id=ce.expando,!T.getElementsByName||!T.getElementsByName(ce.expando).length}),le.disconnectedMatch=$(function(e){return i.call(e,"*")}),le.scope=$(function(){return T.querySelectorAll(":scope")}),le.cssHas=$(function(){try{return T.querySelector(":has(*,:jqfake)"),!1}catch(e){return!0}}),le.getById?(b.filter.ID=function(e){var t=e.replace(O,P);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&C){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(O,P);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&C){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):t.querySelectorAll(e)},b.find.CLASS=function(e,t){if("undefined"!=typeof t.getElementsByClassName&&C)return t.getElementsByClassName(e)},d=[],$(function(e){var t;r.appendChild(e).innerHTML="<a id='"+S+"' href='' disabled='disabled'></a><select id='"+S+"-\r\\' disabled='disabled'><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+ge+"*(?:value|"+f+")"),e.querySelectorAll("[id~="+S+"-]").length||d.push("~="),e.querySelectorAll("a#"+S+"+*").length||d.push(".#.+[+~]"),e.querySelectorAll(":checked").length||d.push(":checked"),(t=T.createElement("input")).setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),r.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&d.push(":enabled",":disabled"),(t=T.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||d.push("\\["+ge+"*name"+ge+"*="+ge+"*(?:''|\"\")")}),le.cssHas||d.push(":has"),d=d.length&&new RegExp(d.join("|")),l=function(e,t){if(e===t)return a=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!le.sortDetached&&t.compareDocumentPosition(e)===n?e===T||e.ownerDocument==ye&&I.contains(ye,e)?-1:t===T||t.ownerDocument==ye&&I.contains(ye,t)?1:o?se.call(o,e)-se.call(o,t):0:4&n?-1:1)}),T}for(e in I.matches=function(e,t){return I(e,null,null,t)},I.matchesSelector=function(e,t){if(V(e),C&&!h[t+" "]&&(!d||!d.test(t)))try{var n=i.call(e,t);if(n||le.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){h(t,!0)}return 0<I(t,T,null,[e]).length},I.contains=function(e,t){return(e.ownerDocument||e)!=T&&V(e),ce.contains(e,t)},I.attr=function(e,t){(e.ownerDocument||e)!=T&&V(e);var n=b.attrHandle[t.toLowerCase()],r=n&&ue.call(b.attrHandle,t.toLowerCase())?n(e,t,!C):void 0;return void 0!==r?r:e.getAttribute(t)},I.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},ce.uniqueSort=function(e){var t,n=[],r=0,i=0;if(a=!le.sortStable,o=!le.sortStable&&ae.call(e,0),de.call(e,l),a){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)he.call(e,n[r],1)}return o=null,e},ce.fn.uniqueSort=function(){return this.pushStack(ce.uniqueSort(ae.apply(this)))},(b=ce.expr={cacheLength:50,createPseudo:F,match:D,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(O,P),e[3]=(e[3]||e[4]||e[5]||"").replace(O,P),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||I.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&I.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return D.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&j.test(n)&&(t=Y(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(O,P).toLowerCase();return"*"===e?function(){return!0}:function(e){return fe(e,t)}},CLASS:function(e){var t=s[e+" "];return t||(t=new RegExp("(^|"+ge+")"+e+"("+ge+"|$)"))&&s(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=I.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(v," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(d,e,t,h,g){var v="nth"!==d.slice(0,3),y="last"!==d.slice(-4),m="of-type"===e;return 1===h&&0===g?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u=v!==y?"nextSibling":"previousSibling",l=e.parentNode,c=m&&e.nodeName.toLowerCase(),f=!n&&!m,p=!1;if(l){if(v){while(u){o=e;while(o=o[u])if(m?fe(o,c):1===o.nodeType)return!1;s=u="only"===d&&!s&&"nextSibling"}return!0}if(s=[y?l.firstChild:l.lastChild],y&&f){p=(a=(r=(i=l[S]||(l[S]={}))[d]||[])[0]===E&&r[1])&&r[2],o=a&&l.childNodes[a];while(o=++a&&o&&o[u]||(p=a=0)||s.pop())if(1===o.nodeType&&++p&&o===e){i[d]=[E,a,p];break}}else if(f&&(p=a=(r=(i=e[S]||(e[S]={}))[d]||[])[0]===E&&r[1]),!1===p)while(o=++a&&o&&o[u]||(p=a=0)||s.pop())if((m?fe(o,c):1===o.nodeType)&&++p&&(f&&((i=o[S]||(o[S]={}))[d]=[E,p]),o===e))break;return(p-=g)===h||p%h==0&&0<=p/h}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||I.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?F(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=se.call(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:F(function(e){var r=[],i=[],s=ne(e.replace(ve,"$1"));return s[S]?F(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:F(function(t){return function(e){return 0<I(t,e).length}}),contains:F(function(t){return t=t.replace(O,P),function(e){return-1<(e.textContent||ce.text(e)).indexOf(t)}}),lang:F(function(n){return A.test(n||"")||I.error("unsupported lang: "+n),n=n.replace(O,P).toLowerCase(),function(e){var t;do{if(t=C?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=ie.location&&ie.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===r},focus:function(e){return e===function(){try{return T.activeElement}catch(e){}}()&&T.hasFocus()&&!!(e.type||e.href||~e.tabIndex)},enabled:z(!1),disabled:z(!0),checked:function(e){return fe(e,"input")&&!!e.checked||fe(e,"option")&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return q.test(e.nodeName)},input:function(e){return N.test(e.nodeName)},button:function(e){return fe(e,"input")&&"button"===e.type||fe(e,"button")},text:function(e){var t;return fe(e,"input")&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:X(function(){return[0]}),last:X(function(e,t){return[t-1]}),eq:X(function(e,t,n){return[n<0?n+t:n]}),even:X(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:X(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:X(function(e,t,n){var r;for(r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:X(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=B(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=_(e);function G(){}function Y(e,t){var n,r,i,o,a,s,u,l=c[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=y.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=m.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(ve," ")}),a=a.slice(n.length)),b.filter)!(r=D[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?I.error(e):c(e,s).slice(0)}function Q(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function J(a,e,t){var s=e.dir,u=e.next,l=u||s,c=t&&"parentNode"===l,f=n++;return e.first?function(e,t,n){while(e=e[s])if(1===e.nodeType||c)return a(e,t,n);return!1}:function(e,t,n){var r,i,o=[E,f];if(n){while(e=e[s])if((1===e.nodeType||c)&&a(e,t,n))return!0}else while(e=e[s])if(1===e.nodeType||c)if(i=e[S]||(e[S]={}),u&&fe(e,u))e=e[s]||e;else{if((r=i[l])&&r[0]===E&&r[1]===f)return o[2]=r[2];if((i[l]=o)[2]=a(e,t,n))return!0}return!1}}function K(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Z(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function ee(d,h,g,v,y,e){return v&&!v[S]&&(v=ee(v)),y&&!y[S]&&(y=ee(y,e)),F(function(e,t,n,r){var i,o,a,s,u=[],l=[],c=t.length,f=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)I(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),p=!d||!e&&h?f:Z(f,u,d,n,r);if(g?g(p,s=y||(e?d:c||v)?[]:t,n,r):s=p,v){i=Z(s,l),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(s[l[o]]=!(p[l[o]]=a))}if(e){if(y||d){if(y){i=[],o=s.length;while(o--)(a=s[o])&&i.push(p[o]=a);y(null,s=[],i,r)}o=s.length;while(o--)(a=s[o])&&-1<(i=y?se.call(e,a):u[o])&&(e[i]=!(t[i]=a))}}else s=Z(s===t?s.splice(c,s.length):s),y?y(null,t,s,r):k.apply(t,s)})}function te(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=J(function(e){return e===i},a,!0),l=J(function(e){return-1<se.call(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!=w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[J(K(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return ee(1<s&&K(c),1<s&&Q(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(ve,"$1"),t,s<n&&te(e.slice(s,n)),n<r&&te(e=e.slice(n)),n<r&&Q(e))}c.push(t)}return K(c)}function ne(e,t){var n,v,y,m,x,r,i=[],o=[],a=u[e+" "];if(!a){t||(t=Y(e)),n=t.length;while(n--)(a=te(t[n]))[S]?i.push(a):o.push(a);(a=u(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=E+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==T||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==T||(V(o),n=!C);while(s=v[a++])if(s(o,t||T,n)){k.call(r,o);break}i&&(E=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=pe.call(r));f=Z(f)}k.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&ce.uniqueSort(r)}return i&&(E=h,w=p),c},m?F(r):r))).selector=e}return a}function re(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&Y(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&C&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(O,P),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=D.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(O,P),H.test(o[0].type)&&U(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&Q(o)))return k.apply(n,r),n;break}}}return(l||ne(e,c))(r,t,!C,n,!t||H.test(e)&&U(t.parentNode)||t),n}G.prototype=b.filters=b.pseudos,b.setFilters=new G,le.sortStable=S.split("").sort(l).join("")===S,V(),le.sortDetached=$(function(e){return 1&e.compareDocumentPosition(T.createElement("fieldset"))}),ce.find=I,ce.expr[":"]=ce.expr.pseudos,ce.unique=ce.uniqueSort,I.compile=ne,I.select=re,I.setDocument=V,I.tokenize=Y,I.escape=ce.escapeSelector,I.getText=ce.text,I.isXML=ce.isXMLDoc,I.selectors=ce.expr,I.support=ce.support,I.uniqueSort=ce.uniqueSort}();var d=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&ce(e).is(n))break;r.push(e)}return r},h=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},b=ce.expr.match.needsContext,w=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function T(e,n,r){return v(n)?ce.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?ce.grep(e,function(e){return e===n!==r}):"string"!=typeof n?ce.grep(e,function(e){return-1<se.call(n,e)!==r}):ce.filter(n,e,r)}ce.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?ce.find.matchesSelector(r,e)?[r]:[]:ce.find.matches(e,ce.grep(t,function(e){return 1===e.nodeType}))},ce.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(ce(e).filter(function(){for(t=0;t<r;t++)if(ce.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)ce.find(e,i[t],n);return 1<r?ce.uniqueSort(n):n},filter:function(e){return this.pushStack(T(this,e||[],!1))},not:function(e){return this.pushStack(T(this,e||[],!0))},is:function(e){return!!T(this,"string"==typeof e&&b.test(e)?ce(e):e||[],!1).length}});var k,S=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(ce.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||k,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:S.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof ce?t[0]:t,ce.merge(this,ce.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:C,!0)),w.test(r[1])&&ce.isPlainObject(t))for(r in t)v(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=C.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):v(e)?void 0!==n.ready?n.ready(e):e(ce):ce.makeArray(e,this)}).prototype=ce.fn,k=ce(C);var E=/^(?:parents|prev(?:Until|All))/,j={children:!0,contents:!0,next:!0,prev:!0};function A(e,t){while((e=e[t])&&1!==e.nodeType);return e}ce.fn.extend({has:function(e){var t=ce(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(ce.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&ce(e);if(!b.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&ce.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?ce.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?se.call(ce(e),this[0]):se.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(ce.uniqueSort(ce.merge(this.get(),ce(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),ce.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return d(e,"parentNode")},parentsUntil:function(e,t,n){return d(e,"parentNode",n)},next:function(e){return A(e,"nextSibling")},prev:function(e){return A(e,"previousSibling")},nextAll:function(e){return d(e,"nextSibling")},prevAll:function(e){return d(e,"previousSibling")},nextUntil:function(e,t,n){return d(e,"nextSibling",n)},prevUntil:function(e,t,n){return d(e,"previousSibling",n)},siblings:function(e){return h((e.parentNode||{}).firstChild,e)},children:function(e){return h(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(fe(e,"template")&&(e=e.content||e),ce.merge([],e.childNodes))}},function(r,i){ce.fn[r]=function(e,t){var n=ce.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=ce.filter(t,n)),1<this.length&&(j[r]||ce.uniqueSort(n),E.test(r)&&n.reverse()),this.pushStack(n)}});var D=/[^\x20\t\r\n\f]+/g;function N(e){return e}function q(e){throw e}function L(e,t,n,r){var i;try{e&&v(i=e.promise)?i.call(e).done(t).fail(n):e&&v(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}ce.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},ce.each(e.match(D)||[],function(e,t){n[t]=!0}),n):ce.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){ce.each(e,function(e,t){v(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==x(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return ce.each(arguments,function(e,t){var n;while(-1<(n=ce.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<ce.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},ce.extend({Deferred:function(e){var o=[["notify","progress",ce.Callbacks("memory"),ce.Callbacks("memory"),2],["resolve","done",ce.Callbacks("once memory"),ce.Callbacks("once memory"),0,"resolved"],["reject","fail",ce.Callbacks("once memory"),ce.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return ce.Deferred(function(r){ce.each(o,function(e,t){var n=v(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&v(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,v(t)?s?t.call(e,l(u,o,N,s),l(u,o,q,s)):(u++,t.call(e,l(u,o,N,s),l(u,o,q,s),l(u,o,N,o.notifyWith))):(a!==N&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){ce.Deferred.exceptionHook&&ce.Deferred.exceptionHook(e,t.error),u<=i+1&&(a!==q&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(ce.Deferred.getErrorHook?t.error=ce.Deferred.getErrorHook():ce.Deferred.getStackHook&&(t.error=ce.Deferred.getStackHook()),ie.setTimeout(t))}}return ce.Deferred(function(e){o[0][3].add(l(0,e,v(r)?r:N,e.notifyWith)),o[1][3].add(l(0,e,v(t)?t:N)),o[2][3].add(l(0,e,v(n)?n:q))}).promise()},promise:function(e){return null!=e?ce.extend(e,a):a}},s={};return ce.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=ae.call(arguments),o=ce.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?ae.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(L(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||v(i[t]&&i[t].then)))return o.then();while(t--)L(i[t],a(t),o.reject);return o.promise()}});var H=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;ce.Deferred.exceptionHook=function(e,t){ie.console&&ie.console.warn&&e&&H.test(e.name)&&ie.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},ce.readyException=function(e){ie.setTimeout(function(){throw e})};var O=ce.Deferred();function P(){C.removeEventListener("DOMContentLoaded",P),ie.removeEventListener("load",P),ce.ready()}ce.fn.ready=function(e){return O.then(e)["catch"](function(e){ce.readyException(e)}),this},ce.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--ce.readyWait:ce.isReady)||(ce.isReady=!0)!==e&&0<--ce.readyWait||O.resolveWith(C,[ce])}}),ce.ready.then=O.then,"complete"===C.readyState||"loading"!==C.readyState&&!C.documentElement.doScroll?ie.setTimeout(ce.ready):(C.addEventListener("DOMContentLoaded",P),ie.addEventListener("load",P));var M=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n))for(s in i=!0,n)M(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,v(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(ce(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},R=/^-ms-/,I=/-([a-z])/g;function W(e,t){return t.toUpperCase()}function F(e){return e.replace(R,"ms-").replace(I,W)}var $=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function B(){this.expando=ce.expando+B.uid++}B.uid=1,B.prototype={cache:function(e){var t=e[this.expando];return t||(t={},$(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[F(t)]=n;else for(r in t)i[F(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][F(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(F):(t=F(t))in r?[t]:t.match(D)||[]).length;while(n--)delete r[t[n]]}(void 0===t||ce.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!ce.isEmptyObject(t)}};var _=new B,z=new B,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,U=/[A-Z]/g;function V(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(U,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:X.test(i)?JSON.parse(i):i)}catch(e){}z.set(e,t,n)}else n=void 0;return n}ce.extend({hasData:function(e){return z.hasData(e)||_.hasData(e)},data:function(e,t,n){return z.access(e,t,n)},removeData:function(e,t){z.remove(e,t)},_data:function(e,t,n){return _.access(e,t,n)},_removeData:function(e,t){_.remove(e,t)}}),ce.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=z.get(o),1===o.nodeType&&!_.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=F(r.slice(5)),V(o,r,i[r]));_.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){z.set(this,n)}):M(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=z.get(o,n))?t:void 0!==(t=V(o,n))?t:void 0;this.each(function(){z.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){z.remove(this,e)})}}),ce.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=_.get(e,t),n&&(!r||Array.isArray(n)?r=_.access(e,t,ce.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=ce.queue(e,t),r=n.length,i=n.shift(),o=ce._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){ce.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return _.get(e,n)||_.access(e,n,{empty:ce.Callbacks("once memory").add(function(){_.remove(e,[t+"queue",n])})})}}),ce.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?ce.queue(this[0],t):void 0===n?this:this.each(function(){var e=ce.queue(this,t,n);ce._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&ce.dequeue(this,t)})},dequeue:function(e){return this.each(function(){ce.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=ce.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=_.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var G=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Y=new RegExp("^(?:([+-])=|)("+G+")([a-z%]*)$","i"),Q=["Top","Right","Bottom","Left"],J=C.documentElement,K=function(e){return ce.contains(e.ownerDocument,e)},Z={composed:!0};J.getRootNode&&(K=function(e){return ce.contains(e.ownerDocument,e)||e.getRootNode(Z)===e.ownerDocument});var ee=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&K(e)&&"none"===ce.css(e,"display")};function te(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return ce.css(e,t,"")},u=s(),l=n&&n[3]||(ce.cssNumber[t]?"":"px"),c=e.nodeType&&(ce.cssNumber[t]||"px"!==l&&+u)&&Y.exec(ce.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)ce.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,ce.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ne={};function re(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=_.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ee(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ne[s])||(o=a.body.appendChild(a.createElement(s)),u=ce.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ne[s]=u)))):"none"!==n&&(l[c]="none",_.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}ce.fn.extend({show:function(){return re(this,!0)},hide:function(){return re(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ee(this)?ce(this).show():ce(this).hide()})}});var xe,be,we=/^(?:checkbox|radio)$/i,Te=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Ce=/^$|^module$|\/(?:java|ecma)script/i;xe=C.createDocumentFragment().appendChild(C.createElement("div")),(be=C.createElement("input")).setAttribute("type","radio"),be.setAttribute("checked","checked"),be.setAttribute("name","t"),xe.appendChild(be),le.checkClone=xe.cloneNode(!0).cloneNode(!0).lastChild.checked,xe.innerHTML="<textarea>x</textarea>",le.noCloneChecked=!!xe.cloneNode(!0).lastChild.defaultValue,xe.innerHTML="<option></option>",le.option=!!xe.lastChild;var ke={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function Se(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&fe(e,t)?ce.merge([e],n):n}function Ee(e,t){for(var n=0,r=e.length;n<r;n++)_.set(e[n],"globalEval",!t||_.get(t[n],"globalEval"))}ke.tbody=ke.tfoot=ke.colgroup=ke.caption=ke.thead,ke.th=ke.td,le.option||(ke.optgroup=ke.option=[1,"<select multiple='multiple'>","</select>"]);var je=/<|&#?\w+;/;function Ae(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))ce.merge(p,o.nodeType?[o]:o);else if(je.test(o)){a=a||f.appendChild(t.createElement("div")),s=(Te.exec(o)||["",""])[1].toLowerCase(),u=ke[s]||ke._default,a.innerHTML=u[1]+ce.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;ce.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<ce.inArray(o,r))i&&i.push(o);else if(l=K(o),a=Se(f.appendChild(o),"script"),l&&Ee(a),n){c=0;while(o=a[c++])Ce.test(o.type||"")&&n.push(o)}return f}var De=/^([^.]*)(?:\.(.+)|)/;function Ne(){return!0}function qe(){return!1}function Le(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Le(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=qe;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return ce().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=ce.guid++)),e.each(function(){ce.event.add(this,t,i,r,n)})}function He(e,r,t){t?(_.set(e,r,!1),ce.event.add(e,r,{namespace:!1,handler:function(e){var t,n=_.get(this,r);if(1&e.isTrigger&&this[r]){if(n)(ce.event.special[r]||{}).delegateType&&e.stopPropagation();else if(n=ae.call(arguments),_.set(this,r,n),this[r](),t=_.get(this,r),_.set(this,r,!1),n!==t)return e.stopImmediatePropagation(),e.preventDefault(),t}else n&&(_.set(this,r,ce.event.trigger(n[0],n.slice(1),this)),e.stopPropagation(),e.isImmediatePropagationStopped=Ne)}})):void 0===_.get(e,r)&&ce.event.add(e,r,Ne)}ce.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=_.get(t);if($(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&ce.find.matchesSelector(J,i),n.guid||(n.guid=ce.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof ce&&ce.event.triggered!==e.type?ce.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(D)||[""]).length;while(l--)d=g=(s=De.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=ce.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=ce.event.special[d]||{},c=ce.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&ce.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),ce.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=_.hasData(e)&&_.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(D)||[""]).length;while(l--)if(d=g=(s=De.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=ce.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||ce.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)ce.event.remove(e,d+t[l],n,r,!0);ce.isEmptyObject(u)&&_.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=ce.event.fix(e),l=(_.get(this,"events")||Object.create(null))[u.type]||[],c=ce.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=ce.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((ce.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<ce(i,this).index(l):ce.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(ce.Event.prototype,t,{enumerable:!0,configurable:!0,get:v(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[ce.expando]?e:new ce.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return we.test(t.type)&&t.click&&fe(t,"input")&&He(t,"click",!0),!1},trigger:function(e){var t=this||e;return we.test(t.type)&&t.click&&fe(t,"input")&&He(t,"click"),!0},_default:function(e){var t=e.target;return we.test(t.type)&&t.click&&fe(t,"input")&&_.get(t,"click")||fe(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},ce.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},ce.Event=function(e,t){if(!(this instanceof ce.Event))return new ce.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ne:qe,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&ce.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[ce.expando]=!0},ce.Event.prototype={constructor:ce.Event,isDefaultPrevented:qe,isPropagationStopped:qe,isImmediatePropagationStopped:qe,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ne,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ne,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ne,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},ce.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},ce.event.addProp),ce.each({focus:"focusin",blur:"focusout"},function(r,i){function o(e){if(C.documentMode){var t=_.get(this,"handle"),n=ce.event.fix(e);n.type="focusin"===e.type?"focus":"blur",n.isSimulated=!0,t(e),n.target===n.currentTarget&&t(n)}else ce.event.simulate(i,e.target,ce.event.fix(e))}ce.event.special[r]={setup:function(){var e;if(He(this,r,!0),!C.documentMode)return!1;(e=_.get(this,i))||this.addEventListener(i,o),_.set(this,i,(e||0)+1)},trigger:function(){return He(this,r),!0},teardown:function(){var e;if(!C.documentMode)return!1;(e=_.get(this,i)-1)?_.set(this,i,e):(this.removeEventListener(i,o),_.remove(this,i))},_default:function(e){return _.get(e.target,r)},delegateType:i},ce.event.special[i]={setup:function(){var e=this.ownerDocument||this.document||this,t=C.documentMode?this:e,n=_.get(t,i);n||(C.documentMode?this.addEventListener(i,o):e.addEventListener(r,o,!0)),_.set(t,i,(n||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=C.documentMode?this:e,n=_.get(t,i)-1;n?_.set(t,i,n):(C.documentMode?this.removeEventListener(i,o):e.removeEventListener(r,o,!0),_.remove(t,i))}}}),ce.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){ce.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||ce.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),ce.fn.extend({on:function(e,t,n,r){return Le(this,e,t,n,r)},one:function(e,t,n,r){return Le(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,ce(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=qe),this.each(function(){ce.event.remove(this,e,n,t)})}});var Oe=/<script|<style|<link/i,Pe=/checked\s*(?:[^=]|=\s*.checked.)/i,Me=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Re(e,t){return fe(e,"table")&&fe(11!==t.nodeType?t:t.firstChild,"tr")&&ce(e).children("tbody")[0]||e}function Ie(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function We(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Fe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(_.hasData(e)&&(s=_.get(e).events))for(i in _.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)ce.event.add(t,i,s[i][n]);z.hasData(e)&&(o=z.access(e),a=ce.extend({},o),z.set(t,a))}}function $e(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=v(d);if(h||1<f&&"string"==typeof d&&!le.checkClone&&Pe.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),$e(t,r,i,o)});if(f&&(t=(e=Ae(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=ce.map(Se(e,"script"),Ie)).length;c<f;c++)u=e,c!==p&&(u=ce.clone(u,!0,!0),s&&ce.merge(a,Se(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,ce.map(a,We),c=0;c<s;c++)u=a[c],Ce.test(u.type||"")&&!_.access(u,"globalEval")&&ce.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?ce._evalUrl&&!u.noModule&&ce._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):m(u.textContent.replace(Me,""),u,l))}return n}function Be(e,t,n){for(var r,i=t?ce.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||ce.cleanData(Se(r)),r.parentNode&&(n&&K(r)&&Ee(Se(r,"script")),r.parentNode.removeChild(r));return e}ce.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=K(e);if(!(le.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||ce.isXMLDoc(e)))for(a=Se(c),r=0,i=(o=Se(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&we.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||Se(e),a=a||Se(c),r=0,i=o.length;r<i;r++)Fe(o[r],a[r]);else Fe(e,c);return 0<(a=Se(c,"script")).length&&Ee(a,!f&&Se(e,"script")),c},cleanData:function(e){for(var t,n,r,i=ce.event.special,o=0;void 0!==(n=e[o]);o++)if($(n)){if(t=n[_.expando]){if(t.events)for(r in t.events)i[r]?ce.event.remove(n,r):ce.removeEvent(n,r,t.handle);n[_.expando]=void 0}n[z.expando]&&(n[z.expando]=void 0)}}}),ce.fn.extend({detach:function(e){return Be(this,e,!0)},remove:function(e){return Be(this,e)},text:function(e){return M(this,function(e){return void 0===e?ce.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return $e(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Re(this,e).appendChild(e)})},prepend:function(){return $e(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Re(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return $e(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return $e(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(ce.cleanData(Se(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return ce.clone(this,e,t)})},html:function(e){return M(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Oe.test(e)&&!ke[(Te.exec(e)||["",""])[1].toLowerCase()]){e=ce.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(ce.cleanData(Se(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return $e(this,arguments,function(e){var t=this.parentNode;ce.inArray(this,n)<0&&(ce.cleanData(Se(this)),t&&t.replaceChild(e,this))},n)}}),ce.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){ce.fn[e]=function(e){for(var t,n=[],r=ce(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),ce(r[o])[a](t),s.apply(n,t.get());return this.pushStack(n)}});var _e=new RegExp("^("+G+")(?!px)[a-z%]+$","i"),ze=/^--/,Xe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=ie),t.getComputedStyle(e)},Ue=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ve=new RegExp(Q.join("|"),"i");function Ge(e,t,n){var r,i,o,a,s=ze.test(t),u=e.style;return(n=n||Xe(e))&&(a=n.getPropertyValue(t)||n[t],s&&a&&(a=a.replace(ve,"$1")||void 0),""!==a||K(e)||(a=ce.style(e,t)),!le.pixelBoxStyles()&&_e.test(a)&&Ve.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function Ye(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",J.appendChild(u).appendChild(l);var e=ie.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),J.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=C.createElement("div"),l=C.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",le.clearCloneStyle="content-box"===l.style.backgroundClip,ce.extend(le,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=C.createElement("table"),t=C.createElement("tr"),n=C.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="box-sizing:content-box;border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",J.appendChild(e).appendChild(t).appendChild(n),r=ie.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,J.removeChild(e)),a}}))}();var Qe=["Webkit","Moz","ms"],Je=C.createElement("div").style,Ke={};function Ze(e){var t=ce.cssProps[e]||Ke[e];return t||(e in Je?e:Ke[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Qe.length;while(n--)if((e=Qe[n]+t)in Je)return e}(e)||e)}var et=/^(none|table(?!-c[ea]).+)/,tt={position:"absolute",visibility:"hidden",display:"block"},nt={letterSpacing:"0",fontWeight:"400"};function rt(e,t,n){var r=Y.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function it(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0,l=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(l+=ce.css(e,n+Q[a],!0,i)),r?("content"===n&&(u-=ce.css(e,"padding"+Q[a],!0,i)),"margin"!==n&&(u-=ce.css(e,"border"+Q[a]+"Width",!0,i))):(u+=ce.css(e,"padding"+Q[a],!0,i),"padding"!==n?u+=ce.css(e,"border"+Q[a]+"Width",!0,i):s+=ce.css(e,"border"+Q[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u+l}function ot(e,t,n){var r=Xe(e),i=(!le.boxSizingReliable()||n)&&"border-box"===ce.css(e,"boxSizing",!1,r),o=i,a=Ge(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(_e.test(a)){if(!n)return a;a="auto"}return(!le.boxSizingReliable()&&i||!le.reliableTrDimensions()&&fe(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===ce.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===ce.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+it(e,t,n||(i?"border":"content"),o,r,a)+"px"}function at(e,t,n,r,i){return new at.prototype.init(e,t,n,r,i)}ce.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Ge(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=F(t),u=ze.test(t),l=e.style;if(u||(t=Ze(s)),a=ce.cssHooks[t]||ce.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=Y.exec(n))&&i[1]&&(n=te(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(ce.cssNumber[s]?"":"px")),le.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=F(t);return ze.test(t)||(t=Ze(s)),(a=ce.cssHooks[t]||ce.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Ge(e,t,r)),"normal"===i&&t in nt&&(i=nt[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),ce.each(["height","width"],function(e,u){ce.cssHooks[u]={get:function(e,t,n){if(t)return!et.test(ce.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?ot(e,u,n):Ue(e,tt,function(){return ot(e,u,n)})},set:function(e,t,n){var r,i=Xe(e),o=!le.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===ce.css(e,"boxSizing",!1,i),s=n?it(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-it(e,u,"border",!1,i)-.5)),s&&(r=Y.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=ce.css(e,u)),rt(0,t,s)}}}),ce.cssHooks.marginLeft=Ye(le.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Ge(e,"marginLeft"))||e.getBoundingClientRect().left-Ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),ce.each({margin:"",padding:"",border:"Width"},function(i,o){ce.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+Q[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(ce.cssHooks[i+o].set=rt)}),ce.fn.extend({css:function(e,t){return M(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Xe(e),i=t.length;a<i;a++)o[t[a]]=ce.css(e,t[a],!1,r);return o}return void 0!==n?ce.style(e,t,n):ce.css(e,t)},e,t,1<arguments.length)}}),((ce.Tween=at).prototype={constructor:at,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||ce.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(ce.cssNumber[n]?"":"px")},cur:function(){var e=at.propHooks[this.prop];return e&&e.get?e.get(this):at.propHooks._default.get(this)},run:function(e){var t,n=at.propHooks[this.prop];return this.options.duration?this.pos=t=ce.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):at.propHooks._default.set(this),this}}).init.prototype=at.prototype,(at.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=ce.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){ce.fx.step[e.prop]?ce.fx.step[e.prop](e):1!==e.elem.nodeType||!ce.cssHooks[e.prop]&&null==e.elem.style[Ze(e.prop)]?e.elem[e.prop]=e.now:ce.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=at.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},ce.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},ce.fx=at.prototype.init,ce.fx.step={};var st,ut,lt,ct,ft=/^(?:toggle|show|hide)$/,pt=/queueHooks$/;function dt(){ut&&(!1===C.hidden&&ie.requestAnimationFrame?ie.requestAnimationFrame(dt):ie.setTimeout(dt,ce.fx.interval),ce.fx.tick())}function ht(){return ie.setTimeout(function(){st=void 0}),st=Date.now()}function gt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=Q[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function vt(e,t,n){for(var r,i=(yt.tweeners[t]||[]).concat(yt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function yt(o,e,t){var n,a,r=0,i=yt.prefilters.length,s=ce.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=st||ht(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:ce.extend({},e),opts:ce.extend(!0,{specialEasing:{},easing:ce.easing._default},t),originalProperties:e,originalOptions:t,startTime:st||ht(),duration:t.duration,tweens:[],createTween:function(e,t){var n=ce.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=F(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=ce.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=yt.prefilters[r].call(l,o,c,l.opts))return v(n.stop)&&(ce._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return ce.map(c,vt,l),v(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),ce.fx.timer(ce.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}ce.Animation=ce.extend(yt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return te(n.elem,e,Y.exec(t),n),n}]},tweener:function(e,t){v(e)?(t=e,e=["*"]):e=e.match(D);for(var n,r=0,i=e.length;r<i;r++)n=e[r],yt.tweeners[n]=yt.tweeners[n]||[],yt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ee(e),v=_.get(e,"fxshow");for(r in n.queue||(null==(a=ce._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,ce.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ft.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||ce.style(e,r)}if((u=!ce.isEmptyObject(t))||!ce.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=_.get(e,"display")),"none"===(c=ce.css(e,"display"))&&(l?c=l:(re([e],!0),l=e.style.display||l,c=ce.css(e,"display"),re([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===ce.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=_.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&re([e],!0),p.done(function(){for(r in g||re([e]),_.remove(e,"fxshow"),d)ce.style(e,r,d[r])})),u=vt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?yt.prefilters.unshift(e):yt.prefilters.push(e)}}),ce.speed=function(e,t,n){var r=e&&"object"==typeof e?ce.extend({},e):{complete:n||!n&&t||v(e)&&e,duration:e,easing:n&&t||t&&!v(t)&&t};return ce.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in ce.fx.speeds?r.duration=ce.fx.speeds[r.duration]:r.duration=ce.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){v(r.old)&&r.old.call(this),r.queue&&ce.dequeue(this,r.queue)},r},ce.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ee).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=ce.isEmptyObject(t),o=ce.speed(e,n,r),a=function(){var e=yt(this,ce.extend({},t),o);(i||_.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=ce.timers,r=_.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&pt.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||ce.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=_.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=ce.timers,o=n?n.length:0;for(t.finish=!0,ce.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),ce.each(["toggle","show","hide"],function(e,r){var i=ce.fn[r];ce.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(gt(r,!0),e,t,n)}}),ce.each({slideDown:gt("show"),slideUp:gt("hide"),slideToggle:gt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){ce.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),ce.timers=[],ce.fx.tick=function(){var e,t=0,n=ce.timers;for(st=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||ce.fx.stop(),st=void 0},ce.fx.timer=function(e){ce.timers.push(e),ce.fx.start()},ce.fx.interval=13,ce.fx.start=function(){ut||(ut=!0,dt())},ce.fx.stop=function(){ut=null},ce.fx.speeds={slow:600,fast:200,_default:400},ce.fn.delay=function(r,e){return r=ce.fx&&ce.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=ie.setTimeout(e,r);t.stop=function(){ie.clearTimeout(n)}})},lt=C.createElement("input"),ct=C.createElement("select").appendChild(C.createElement("option")),lt.type="checkbox",le.checkOn=""!==lt.value,le.optSelected=ct.selected,(lt=C.createElement("input")).value="t",lt.type="radio",le.radioValue="t"===lt.value;var mt,xt=ce.expr.attrHandle;ce.fn.extend({attr:function(e,t){return M(this,ce.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){ce.removeAttr(this,e)})}}),ce.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?ce.prop(e,t,n):(1===o&&ce.isXMLDoc(e)||(i=ce.attrHooks[t.toLowerCase()]||(ce.expr.match.bool.test(t)?mt:void 0)),void 0!==n?null===n?void ce.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=ce.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!le.radioValue&&"radio"===t&&fe(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(D);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),mt={set:function(e,t,n){return!1===t?ce.removeAttr(e,n):e.setAttribute(n,n),n}},ce.each(ce.expr.match.bool.source.match(/\w+/g),function(e,t){var a=xt[t]||ce.find.attr;xt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=xt[o],xt[o]=r,r=null!=a(e,t,n)?o:null,xt[o]=i),r}});var bt=/^(?:input|select|textarea|button)$/i,wt=/^(?:a|area)$/i;function Tt(e){return(e.match(D)||[]).join(" ")}function Ct(e){return e.getAttribute&&e.getAttribute("class")||""}function kt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(D)||[]}ce.fn.extend({prop:function(e,t){return M(this,ce.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[ce.propFix[e]||e]})}}),ce.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&ce.isXMLDoc(e)||(t=ce.propFix[t]||t,i=ce.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=ce.find.attr(e,"tabindex");return t?parseInt(t,10):bt.test(e.nodeName)||wt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),le.optSelected||(ce.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),ce.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){ce.propFix[this.toLowerCase()]=this}),ce.fn.extend({addClass:function(t){var e,n,r,i,o,a;return v(t)?this.each(function(e){ce(this).addClass(t.call(this,e,Ct(this)))}):(e=kt(t)).length?this.each(function(){if(r=Ct(this),n=1===this.nodeType&&" "+Tt(r)+" "){for(o=0;o<e.length;o++)i=e[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ");a=Tt(n),r!==a&&this.setAttribute("class",a)}}):this},removeClass:function(t){var e,n,r,i,o,a;return v(t)?this.each(function(e){ce(this).removeClass(t.call(this,e,Ct(this)))}):arguments.length?(e=kt(t)).length?this.each(function(){if(r=Ct(this),n=1===this.nodeType&&" "+Tt(r)+" "){for(o=0;o<e.length;o++){i=e[o];while(-1<n.indexOf(" "+i+" "))n=n.replace(" "+i+" "," ")}a=Tt(n),r!==a&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(t,n){var e,r,i,o,a=typeof t,s="string"===a||Array.isArray(t);return v(t)?this.each(function(e){ce(this).toggleClass(t.call(this,e,Ct(this),n),n)}):"boolean"==typeof n&&s?n?this.addClass(t):this.removeClass(t):(e=kt(t),this.each(function(){if(s)for(o=ce(this),i=0;i<e.length;i++)r=e[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else void 0!==t&&"boolean"!==a||((r=Ct(this))&&_.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":_.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+Tt(Ct(n))+" ").indexOf(t))return!0;return!1}});var St=/\r/g;ce.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=v(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,ce(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=ce.map(t,function(e){return null==e?"":e+""})),(r=ce.valHooks[this.type]||ce.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=ce.valHooks[t.type]||ce.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(St,""):null==e?"":e:void 0}}),ce.extend({valHooks:{option:{get:function(e){var t=ce.find.attr(e,"value");return null!=t?t:Tt(ce.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!fe(n.parentNode,"optgroup"))){if(t=ce(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=ce.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<ce.inArray(ce.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),ce.each(["radio","checkbox"],function(){ce.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<ce.inArray(ce(e).val(),t)}},le.checkOn||(ce.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Et=ie.location,jt={guid:Date.now()},At=/\?/;ce.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new ie.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||ce.error("Invalid XML: "+(n?ce.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Dt=/^(?:focusinfocus|focusoutblur)$/,Nt=function(e){e.stopPropagation()};ce.extend(ce.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||C],d=ue.call(e,"type")?e.type:e,h=ue.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||C,3!==n.nodeType&&8!==n.nodeType&&!Dt.test(d+ce.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[ce.expando]?e:new ce.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:ce.makeArray(t,[e]),c=ce.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!y(n)){for(s=c.delegateType||d,Dt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||C)&&p.push(a.defaultView||a.parentWindow||ie)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(_.get(o,"events")||Object.create(null))[e.type]&&_.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&$(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!$(n)||u&&v(n[d])&&!y(n)&&((a=n[u])&&(n[u]=null),ce.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Nt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Nt),ce.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=ce.extend(new ce.Event,n,{type:e,isSimulated:!0});ce.event.trigger(r,null,t)}}),ce.fn.extend({trigger:function(e,t){return this.each(function(){ce.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return ce.event.trigger(e,t,n,!0)}});var qt=/\[\]$/,Lt=/\r?\n/g,Ht=/^(?:submit|button|image|reset|file)$/i,Ot=/^(?:input|select|textarea|keygen)/i;function Pt(n,e,r,i){var t;if(Array.isArray(e))ce.each(e,function(e,t){r||qt.test(n)?i(n,t):Pt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==x(e))i(n,e);else for(t in e)Pt(n+"["+t+"]",e[t],r,i)}ce.param=function(e,t){var n,r=[],i=function(e,t){var n=v(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!ce.isPlainObject(e))ce.each(e,function(){i(this.name,this.value)});else for(n in e)Pt(n,e[n],t,i);return r.join("&")},ce.fn.extend({serialize:function(){return ce.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=ce.prop(this,"elements");return e?ce.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!ce(this).is(":disabled")&&Ot.test(this.nodeName)&&!Ht.test(e)&&(this.checked||!we.test(e))}).map(function(e,t){var n=ce(this).val();return null==n?null:Array.isArray(n)?ce.map(n,function(e){return{name:t.name,value:e.replace(Lt,"\r\n")}}):{name:t.name,value:n.replace(Lt,"\r\n")}}).get()}});var Mt=/%20/g,Rt=/#.*$/,It=/([?&])_=[^&]*/,Wt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ft=/^(?:GET|HEAD)$/,$t=/^\/\//,Bt={},_t={},zt="*/".concat("*"),Xt=C.createElement("a");function Ut(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(D)||[];if(v(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Vt(t,i,o,a){var s={},u=t===_t;function l(e){var r;return s[e]=!0,ce.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Gt(e,t){var n,r,i=ce.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&ce.extend(!0,e,r),e}Xt.href=Et.href,ce.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":zt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":ce.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Gt(Gt(e,ce.ajaxSettings),t):Gt(ce.ajaxSettings,e)},ajaxPrefilter:Ut(Bt),ajaxTransport:Ut(_t),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=ce.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?ce(y):ce.event,x=ce.Deferred(),b=ce.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Wt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace($t,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(D)||[""],null==v.crossDomain){r=C.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Xt.protocol+"//"+Xt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=ce.param(v.data,v.traditional)),Vt(Bt,v,t,T),h)return T;for(i in(g=ce.event&&v.global)&&0==ce.active++&&ce.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ft.test(v.type),f=v.url.replace(Rt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Mt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(At.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(It,"$1"),o=(At.test(f)?"&":"?")+"_="+jt.guid+++o),v.url=f+o),v.ifModified&&(ce.lastModified[f]&&T.setRequestHeader("If-Modified-Since",ce.lastModified[f]),ce.etag[f]&&T.setRequestHeader("If-None-Match",ce.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+zt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Vt(_t,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=ie.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&ie.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<ce.inArray("script",v.dataTypes)&&ce.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(ce.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(ce.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--ce.active||ce.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return ce.get(e,t,n,"json")},getScript:function(e,t){return ce.get(e,void 0,t,"script")}}),ce.each(["get","post"],function(e,i){ce[i]=function(e,t,n,r){return v(t)&&(r=r||n,n=t,t=void 0),ce.ajax(ce.extend({url:e,type:i,dataType:r,data:t,success:n},ce.isPlainObject(e)&&e))}}),ce.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),ce._evalUrl=function(e,t,n){return ce.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){ce.globalEval(e,t,n)}})},ce.fn.extend({wrapAll:function(e){var t;return this[0]&&(v(e)&&(e=e.call(this[0])),t=ce(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return v(n)?this.each(function(e){ce(this).wrapInner(n.call(this,e))}):this.each(function(){var e=ce(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=v(t);return this.each(function(e){ce(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){ce(this).replaceWith(this.childNodes)}),this}}),ce.expr.pseudos.hidden=function(e){return!ce.expr.pseudos.visible(e)},ce.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},ce.ajaxSettings.xhr=function(){try{return new ie.XMLHttpRequest}catch(e){}};var Yt={0:200,1223:204},Qt=ce.ajaxSettings.xhr();le.cors=!!Qt&&"withCredentials"in Qt,le.ajax=Qt=!!Qt,ce.ajaxTransport(function(i){var o,a;if(le.cors||Qt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Yt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&ie.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),ce.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),ce.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return ce.globalEval(e),e}}}),ce.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),ce.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=ce("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),C.head.appendChild(r[0])},abort:function(){i&&i()}}});var Jt,Kt=[],Zt=/(=)\?(?=&|$)|\?\?/;ce.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Kt.pop()||ce.expando+"_"+jt.guid++;return this[e]=!0,e}}),ce.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Zt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Zt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=v(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Zt,"$1"+r):!1!==e.jsonp&&(e.url+=(At.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||ce.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=ie[r],ie[r]=function(){o=arguments},n.always(function(){void 0===i?ce(ie).removeProp(r):ie[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Kt.push(r)),o&&v(i)&&i(o[0]),o=i=void 0}),"script"}),le.createHTMLDocument=((Jt=C.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Jt.childNodes.length),ce.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(le.createHTMLDocument?((r=(t=C.implementation.createHTMLDocument("")).createElement("base")).href=C.location.href,t.head.appendChild(r)):t=C),o=!n&&[],(i=w.exec(e))?[t.createElement(i[1])]:(i=Ae([e],t,o),o&&o.length&&ce(o).remove(),ce.merge([],i.childNodes)));var r,i,o},ce.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=Tt(e.slice(s)),e=e.slice(0,s)),v(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&ce.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?ce("<div>").append(ce.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},ce.expr.pseudos.animated=function(t){return ce.grep(ce.timers,function(e){return t===e.elem}).length},ce.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=ce.css(e,"position"),c=ce(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=ce.css(e,"top"),u=ce.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),v(t)&&(t=t.call(e,n,ce.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},ce.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){ce.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===ce.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===ce.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=ce(e).offset()).top+=ce.css(e,"borderTopWidth",!0),i.left+=ce.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-ce.css(r,"marginTop",!0),left:t.left-i.left-ce.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===ce.css(e,"position"))e=e.offsetParent;return e||J})}}),ce.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;ce.fn[t]=function(e){return M(this,function(e,t,n){var r;if(y(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),ce.each(["top","left"],function(e,n){ce.cssHooks[n]=Ye(le.pixelPosition,function(e,t){if(t)return t=Ge(e,n),_e.test(t)?ce(e).position()[n]+"px":t})}),ce.each({Height:"height",Width:"width"},function(a,s){ce.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){ce.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return M(this,function(e,t,n){var r;return y(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?ce.css(e,t,i):ce.style(e,t,n,i)},s,n?e:void 0,n)}})}),ce.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){ce.fn[t]=function(e){return this.on(t,e)}}),ce.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)}}),ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){ce.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var en=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;ce.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),v(e))return r=ae.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(ae.call(arguments)))}).guid=e.guid=e.guid||ce.guid++,i},ce.holdReady=function(e){e?ce.readyWait++:ce.ready(!0)},ce.isArray=Array.isArray,ce.parseJSON=JSON.parse,ce.nodeName=fe,ce.isFunction=v,ce.isWindow=y,ce.camelCase=F,ce.type=x,ce.now=Date.now,ce.isNumeric=function(e){var t=ce.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},ce.trim=function(e){return null==e?"":(e+"").replace(en,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return ce});var tn=ie.jQuery,nn=ie.$;return ce.noConflict=function(e){return ie.$===ce&&(ie.$=nn),e&&ie.jQuery===ce&&(ie.jQuery=tn),ce},"undefined"==typeof e&&(ie.jQuery=ie.$=ce),ce});

/*!
 * dist/inputmask.min
 * https://github.com/RobinHerbots/Inputmask
 * Copyright (c) 2010 - 2025 Robin Herbots
 * Licensed under the MIT license
 * Version: 5.0.10-beta.43
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function() {



function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
if (typeof Object.getPrototypeOf !== "function") {
  Object.getPrototypeOf = _typeof("test".__proto__) === "object" ? function (object) {
    return object.__proto__;
  } : function (object) {
    return object.constructor.prototype;
  };
}

/***/ }),
/* 2 */
/***/ (function() {



// https://tc39.github.io/ecma262/#sec-array.prototype.includes
if (!Array.prototype.includes) {
  // eslint-disable-next-line no-extend-native
  Object.defineProperty(Array.prototype, "includes", {
    value: function value(searchElement, fromIndex) {
      // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }
      var o = Object(this),
        // 2. Let len be ? ToLength(? Get(O, "length")).
        len = o.length >>> 0;

      // 3. If len is 0, return false.
      if (len === 0) {
        return false;
      }

      // 4. Let n be ? ToInteger(fromIndex).
      //    (If fromIndex is undefined, this step produces the value 0.)
      var n = fromIndex | 0,
        // 5. If n ≥ 0, then
        //  a. Let k be n.
        // 6. Else n < 0,
        //  a. Let k be len + n.
        //  b. If k < 0, let k be 0.
        k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

      // 7. Repeat, while k < len
      while (k < len) {
        // a. Let elementK be the result of ? Get(O, ! ToString(k)).
        // b. If SameValueZero(searchElement, elementK) is true, return true.
        // c. Increase k by 1.
        // NOTE: === provides the correct "SameValueZero" comparison needed here.
        if (o[k] === searchElement) {
          return true;
        }
        k++;
      }

      // 8. Return false
      return false;
    }
  });
}

/***/ }),
/* 3 */
/***/ (function() {



var reduce = Function.bind.call(Function.call, Array.prototype.reduce),
  isEnumerable = Function.bind.call(Function.call, Object.prototype.propertyIsEnumerable),
  concat = Function.bind.call(Function.call, Array.prototype.concat),
  keys = Object.keys;
if (!Object.entries) {
  Object.entries = function entries(O) {
    return reduce(keys(O), function (e, k) {
      return concat(e, typeof k === "string" && isEnumerable(O, k) ? [[k, O[k]]] : []);
    }, []);
  };
}

/***/ }),
/* 4 */
/***/ (function() {



if (!String.prototype.includes) {
  // eslint-disable-next-line no-extend-native
  String.prototype.includes = function (search, start) {
    if (typeof start !== "number") {
      start = 0;
    }
    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}

/***/ }),
/* 5 */
/***/ (function() {



function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
if (FormData.Inputmask === undefined) {
  var FormDataPatch = /*#__PURE__*/function (_FormData) {
    function FormDataPatch(form, submitter) {
      var _this;
      _classCallCheck(this, FormDataPatch);
      _this = _callSuper(this, FormDataPatch, [form, submitter]);
      var entries = _this.entries();
      var entry;
      while ((entry = entries.next()).done === false) {
        var fieldName = entry.value[0],
          originalValue = entry.value[1],
          // Get the original value from FormData
          element = document.getElementById(fieldName);
        if (element && element.inputmask !== undefined && !(originalValue instanceof File)) {
          // Apply masking only if it's not a File and the element has inputmask
          _this.set(fieldName, element.value);
        }
      }
      return _possibleConstructorReturn(_this, _this);
    }
    _inherits(FormDataPatch, _FormData);
    return _createClass(FormDataPatch);
  }(/*#__PURE__*/_wrapNativeSuper(FormData));
  FormDataPatch.Inputmask = true;
  // eslint-disable-next-line no-global-assign
  FormData = FormDataPatch;
}

/***/ }),
/* 6 */
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {



var _inputmask = _interopRequireDefault(__webpack_require__(7));
var _positioning = __webpack_require__(20);
var _validationTests = __webpack_require__(22);
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/*
 Input Mask plugin extensions
 http://github.com/RobinHerbots/inputmask
 Copyright (c) Robin Herbots
 Licensed under the MIT license
 */

// extra definitions
_inputmask["default"].extendDefinitions({
  A: {
    validator: "[A-Za-z\u0410-\u044F\u0401\u0451\xC0-\xFF\xB5]",
    casing: "upper" // auto uppercasing
  },
  "&": {
    // alfanumeric uppercasing
    validator: "[0-9A-Za-z\u0410-\u044F\u0401\u0451\xC0-\xFF\xB5]",
    casing: "upper"
  },
  "#": {
    // hexadecimal
    validator: "[0-9A-Fa-f]",
    casing: "upper"
  }
});
var ipValidatorRegex = /25[0-5]|2[0-4][0-9]|[01][0-9][0-9]/;
function ipValidator(chrs, maskset, pos, strict, opts) {
  if (pos - 1 > -1 && maskset.buffer[pos - 1] !== ".") {
    chrs = maskset.buffer[pos - 1] + chrs;
    if (pos - 2 > -1 && maskset.buffer[pos - 2] !== ".") {
      chrs = maskset.buffer[pos - 2] + chrs;
    } else chrs = "0" + chrs;
  } else chrs = "00" + chrs;
  if (opts.greedy && parseInt(chrs) > 255 && ipValidatorRegex.test("00" + chrs.charAt(2))) {
    var buffer = [].concat(_toConsumableArray(maskset.buffer.slice(0, pos)), [".", chrs.charAt(2)]);
    if (buffer.join("").match(/\./g).length < 4) {
      return {
        refreshFromBuffer: true,
        buffer: buffer,
        caret: pos + 2
      };
    }
  }
  return ipValidatorRegex.test(chrs);
}
_inputmask["default"].extendAliases({
  cssunit: {
    regex: "[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"
  },
  url: {
    // needs update => https://en.wikipedia.org/wiki/URL
    regex: "(https?|ftp)://.*",
    autoUnmask: false,
    keepStatic: false,
    tabThrough: true
  },
  ip: {
    // ip-address mask
    mask: "i{1,3}.j{1,3}.k{1,3}.l{1,3}",
    definitions: {
      i: {
        validator: ipValidator
      },
      j: {
        validator: ipValidator
      },
      k: {
        validator: ipValidator
      },
      l: {
        validator: ipValidator
      }
    },
    onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
      return maskedValue;
    },
    inputmode: "decimal",
    substitutes: {
      ",": "."
    }
  },
  email: {
    // https://en.wikipedia.org/wiki/Domain_name#Domain_name_space
    // https://en.wikipedia.org/wiki/Hostname#Restrictions_on_valid_host_names
    // should be extended with the toplevel domains at the end
    mask: function mask(_ref) {
      var separator = _ref.separator,
        quantifier = _ref.quantifier;
      var emailMask = "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
        mask = emailMask;
      if (separator) {
        for (var i = 0; i < quantifier; i++) {
          mask += "[".concat(separator).concat(emailMask, "]");
        }
      }
      return mask;
    },
    greedy: false,
    casing: "lower",
    separator: null,
    quantifier: 5,
    skipOptionalPartCharacter: "",
    onBeforePaste: function onBeforePaste(pastedValue, opts) {
      pastedValue = pastedValue.toLowerCase();
      return pastedValue.replace("mailto:", "");
    },
    definitions: {
      "*": {
        validator: "[0-9\uFF11-\uFF19A-Za-z\u0410-\u044F\u0401\u0451\xC0-\xFF\xB5!#$%&'*+/=?^_`{|}~-]"
      },
      "-": {
        validator: "[0-9A-Za-z-]"
      }
    },
    onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
      return maskedValue;
    },
    inputmode: "email"
  },
  mac: {
    mask: "##:##:##:##:##:##"
  },
  // https://en.wikipedia.org/wiki/Vehicle_identification_number
  // see issue #1199
  vin: {
    mask: "V{13}9{4}",
    definitions: {
      V: {
        validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
        casing: "upper"
      }
    },
    clearIncomplete: true,
    autoUnmask: true
  },
  // http://rion.io/2013/09/10/validating-social-security-numbers-through-regular-expressions-2/
  // https://en.wikipedia.org/wiki/Social_Security_number
  ssn: {
    mask: "999-99-9999",
    postValidation: function postValidation(buffer, pos, c, currentResult, opts, maskset, strict) {
      var bffr = _validationTests.getMaskTemplate.call(this, true, _positioning.getLastValidPosition.call(this), true, true);
      return /^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(bffr.join(""));
    }
  }
});

/***/ }),
/* 7 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _defaults = _interopRequireDefault(__webpack_require__(8));
var _definitions = _interopRequireDefault(__webpack_require__(9));
var _inputmask = _interopRequireDefault(__webpack_require__(10));
var _eventruler = __webpack_require__(15);
var _window = _interopRequireDefault(__webpack_require__(11));
var _inputHandling = __webpack_require__(16);
var _mask = __webpack_require__(23);
var _maskLexer = __webpack_require__(24);
var _positioning = __webpack_require__(20);
var _validation = __webpack_require__(21);
var _validationTests = __webpack_require__(22);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/*
 * Input Mask Core
 * http://github.com/RobinHerbots/jquery.inputmask
 * Copyright (c) Robin Herbots
 * Licensed under the MIT license
 */

var document = _window["default"].document,
  dataKey = "_inputmask_opts";
function Inputmask(alias, options, internal) {
  // allow instanciating without new
  if (!(this instanceof Inputmask)) {
    return new Inputmask(alias, options, internal);
  }
  this.dependencyLib = _inputmask["default"];
  this.el = undefined;
  this.events = {};
  this.maskset = undefined;
  if (internal !== true) {
    // init options
    if (Object.prototype.toString.call(alias) === "[object Object]") {
      options = alias;
    } else {
      options = options || {};
      if (alias) options.alias = alias;
    }
    this.opts = _inputmask["default"].extend(true, {}, this.defaults, options);
    this.noMasksCache = options && options.definitions !== undefined;
    this.userOptions = options || {}; // user passed options
    resolveAlias(this.opts.alias, options, this.opts);
  }

  // maskscope properties
  this.refreshValue = false; // indicate a refresh from the inputvalue is needed (form.reset)
  this.undoValue = undefined;
  this.$el = undefined;
  this.skipInputEvent = false; // skip when triggered from within inputmask
  this.validationEvent = false;
  this.ignorable = false;
  // eslint-disable-next-line no-unused-expressions
  this.maxLength;
  this.mouseEnter = false;
  this.clicked = 0;
  this.originalPlaceholder = undefined; // needed for FF
  this.isComposing = false; // keydowncode == 229  compositionevent fallback
  this.hasAlternator = false;
}
Inputmask.prototype = {
  dataAttribute: "data-inputmask",
  // data attribute prefix used for attribute binding
  // options default
  defaults: _defaults["default"],
  definitions: _definitions["default"],
  aliases: {},
  // aliases definitions
  masksCache: {},
  i18n: {},
  get isRTL() {
    return this.opts.isRTL || this.opts.numericInput;
  },
  mask: function mask(elems) {
    var that = this;
    if (typeof elems === "string") {
      elems = document.getElementById(elems) || document.querySelectorAll(elems);
    }
    elems = elems.nodeName ? [elems] : Array.isArray(elems) ? elems : [].slice.call(elems); // [].slice as alternate for Array.from (Yandex browser)
    elems.forEach(function (el, ndx) {
      var scopedOpts = _inputmask["default"].extend(true, {}, that.opts);
      if (importAttributeOptions(el, scopedOpts, _inputmask["default"].extend(true, {}, that.userOptions), that.dataAttribute)) {
        var maskset = (0, _maskLexer.generateMaskSet)(scopedOpts, that.noMasksCache);
        if (maskset !== undefined) {
          if (el.inputmask !== undefined) {
            el.inputmask.opts.autoUnmask = true; // force autounmasking when remasking
            el.inputmask.remove();
          }
          // store inputmask instance on the input with element reference
          el.inputmask = new Inputmask(undefined, undefined, true);
          el.inputmask.opts = scopedOpts;
          el.inputmask.noMasksCache = that.noMasksCache;
          el.inputmask.userOptions = _inputmask["default"].extend(true, {}, that.userOptions);
          // el.inputmask.isRTL = scopedOpts.isRTL || scopedOpts.numericInput;
          el.inputmask.el = el;
          el.inputmask.$el = (0, _inputmask["default"])(el);
          el.inputmask.maskset = maskset;
          _inputmask["default"].data(el, dataKey, that.userOptions);
          _mask.mask.call(el.inputmask);
        }
      }
    });
    return elems && elems[0] ? elems[0].inputmask || this : this;
  },
  option: function option(options, noremask) {
    // set extra options || retrieve value of a current option
    if (typeof options === "string") {
      return this.opts[options];
    } else if (_typeof(options) === "object") {
      _inputmask["default"].extend(this.userOptions, options); // user passed options
      // remask
      if (this.el && noremask !== true) {
        this.mask(this.el);
      }
      return this;
    }
  },
  unmaskedvalue: function unmaskedvalue(value) {
    this.maskset = this.maskset || (0, _maskLexer.generateMaskSet)(this.opts, this.noMasksCache);
    if (this.el === undefined || value !== undefined) {
      var valueBuffer = (typeof this.opts.onBeforeMask === "function" ? this.opts.onBeforeMask.call(this, value, this.opts) || value : value).split("");
      _inputHandling.checkVal.call(this, undefined, false, false, valueBuffer);
      if (typeof this.opts.onBeforeWrite === "function") this.opts.onBeforeWrite.call(this, undefined, _positioning.getBuffer.call(this), 0, this.opts);
    }
    return _inputHandling.unmaskedvalue.call(this, this.el);
  },
  remove: function remove() {
    if (this.el) {
      _inputmask["default"].data(this.el, dataKey, null); // invalidate
      // writeout the value
      var cv = this.opts.autoUnmask ? (0, _inputHandling.unmaskedvalue)(this.el) : this._valueGet(this.opts.autoUnmask);
      if (cv !== _positioning.getBufferTemplate.call(this).join("")) this._valueSet(cv, this.opts.autoUnmask);else this._valueSet("");
      // unbind all events
      _eventruler.EventRuler.off(this.el);

      // restore the value property
      var valueProperty;
      if (Object.getOwnPropertyDescriptor && Object.getPrototypeOf) {
        valueProperty = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.el), "value");
        if (valueProperty) {
          if (this.__valueGet) {
            Object.defineProperty(this.el, "value", {
              get: this.__valueGet,
              set: this.__valueSet,
              configurable: true
            });
          }
        }
      } else if (document.__lookupGetter__ && this.el.__lookupGetter__("value")) {
        if (this.__valueGet) {
          this.el.__defineGetter__("value", this.__valueGet);
          this.el.__defineSetter__("value", this.__valueSet);
        }
      }
      // clear data
      this.el.inputmask = undefined;
    }
    return this.el;
  },
  getemptymask: function getemptymask() {
    // return the default (empty) mask value, usefull for setting the default value in validation
    this.maskset = this.maskset || (0, _maskLexer.generateMaskSet)(this.opts, this.noMasksCache);
    return (this.isRTL ? _positioning.getBufferTemplate.call(this).reverse() : _positioning.getBufferTemplate.call(this)).join("");
  },
  hasMaskedValue: function hasMaskedValue() {
    // check wheter the returned value is masked or not; currently only works reliable when using jquery.val fn to retrieve the value
    return !this.opts.autoUnmask;
  },
  isComplete: function isComplete() {
    this.maskset = this.maskset || (0, _maskLexer.generateMaskSet)(this.opts, this.noMasksCache);
    return _validation.isComplete.call(this, _positioning.getBuffer.call(this));
  },
  getmetadata: function getmetadata() {
    // return mask metadata if exists
    this.maskset = this.maskset || (0, _maskLexer.generateMaskSet)(this.opts, this.noMasksCache);
    if (Array.isArray(this.maskset.metadata)) {
      var maskTarget = _validationTests.getMaskTemplate.call(this, true, 0, false).join("");
      this.maskset.metadata.forEach(function (mtdt) {
        if (mtdt.mask === maskTarget) {
          maskTarget = mtdt;
          return false;
        }
        return true;
      });
      return maskTarget;
    }
    return this.maskset.metadata;
  },
  isValid: function isValid(value) {
    this.maskset = this.maskset || (0, _maskLexer.generateMaskSet)(this.opts, this.noMasksCache);
    if (value) {
      var valueBuffer = (typeof this.opts.onBeforeMask === "function" ? this.opts.onBeforeMask.call(this, value, this.opts) || value : value).split("");
      _inputHandling.checkVal.call(this, undefined, true, false, valueBuffer);
    } else {
      value = this.isRTL ? _positioning.getBuffer.call(this).slice().reverse().join("") : _positioning.getBuffer.call(this).join("");
    }
    var buffer = _positioning.getBuffer.call(this),
      rl = _positioning.determineLastRequiredPosition.call(this),
      lmib = buffer.length - 1;
    for (; lmib > rl; lmib--) {
      if (_positioning.isMask.call(this, lmib)) break;
    }
    buffer.splice(rl, lmib + 1 - rl);
    return _validation.isComplete.call(this, buffer) && value === (this.isRTL ? _positioning.getBuffer.call(this).slice().reverse().join("") : _positioning.getBuffer.call(this).join(""));
  },
  format: function format(value, metadata) {
    this.maskset = this.maskset || (0, _maskLexer.generateMaskSet)(this.opts, this.noMasksCache);
    var valueBuffer = (typeof this.opts.onBeforeMask === "function" ? this.opts.onBeforeMask.call(this, value, this.opts) || value : value).split("");
    _inputHandling.checkVal.call(this, undefined, true, false, valueBuffer);
    var formattedValue = this.isRTL ? _positioning.getBuffer.call(this).slice().reverse().join("") : _positioning.getBuffer.call(this).join("");
    return metadata ? {
      value: formattedValue,
      metadata: this.getmetadata()
    } : formattedValue;
  },
  setValue: function setValue(value) {
    if (this.el) {
      (0, _inputmask["default"])(this.el).trigger("setvalue", [value]);
    }
  },
  analyseMask: _maskLexer.analyseMask
};
function resolveAlias(aliasStr, options, opts) {
  var aliasDefinition = Inputmask.prototype.aliases[aliasStr];
  if (aliasDefinition) {
    if (aliasDefinition.alias) resolveAlias(aliasDefinition.alias, undefined, opts); // alias is another alias
    _inputmask["default"].extend(true, opts, aliasDefinition); // merge alias definition in the options
    _inputmask["default"].extend(true, opts, options); // reapply extra given options
    return true;
  } // alias not found - try as mask
  else if (opts.mask === null) {
    opts.mask = aliasStr;
  }
  return false;
}
function importAttributeOptions(npt, opts, userOptions, dataAttribute) {
  function importOption(option, optionData) {
    var attrOption = dataAttribute === "" ? option : dataAttribute + "-" + option;
    optionData = optionData !== undefined ? optionData : npt.getAttribute(attrOption);
    if (optionData !== null) {
      if (typeof optionData === "string") {
        if (option.startsWith("on")) {
          // get function definition
          optionData = _window["default"][optionData];
        } else if (optionData === "false") optionData = false;else if (optionData === "true") optionData = true;else if (option === "mask") optionData = optionData.replace(/\\\\/g, "\\");
      }
      userOptions[option] = optionData;
    }
  }
  if (opts.importDataAttributes === true) {
    var attrOptions = npt.getAttribute(dataAttribute),
      option,
      dataoptions,
      optionData,
      p;
    if (attrOptions && attrOptions !== "") {
      attrOptions = attrOptions.replace(/'/g, '"');
      dataoptions = JSON.parse("{" + attrOptions + "}");
    }

    // resolve aliases
    if (dataoptions) {
      // pickup alias from dataAttribute
      optionData = undefined;
      for (p in dataoptions) {
        if (p.toLowerCase() === "alias") {
          optionData = dataoptions[p];
          break;
        }
      }
    }
    importOption("alias", optionData); // pickup alias from dataAttribute-alias
    if (userOptions.alias) {
      resolveAlias(userOptions.alias, userOptions, opts);
    }
    for (option in opts) {
      if (dataoptions) {
        optionData = undefined;
        for (p in dataoptions) {
          if (p.toLowerCase() === option.toLowerCase()) {
            optionData = dataoptions[p];
            break;
          }
        }
      }
      importOption(option, optionData);
    }
  }
  _inputmask["default"].extend(true, opts, userOptions);

  // handle dir=rtl
  if (npt.dir === "rtl" || opts.rightAlign) {
    npt.style.textAlign = "right";
  }
  if (npt.dir === "rtl" || opts.numericInput) {
    npt.dir = "ltr";
    npt.removeAttribute("dir");
    opts.isRTL = true;
  }
  return Object.keys(userOptions).length;
}

// apply defaults, definitions, aliases
Inputmask.extendDefaults = function (options) {
  _inputmask["default"].extend(true, Inputmask.prototype.defaults, options);
};
Inputmask.extendDefinitions = function (definition) {
  _inputmask["default"].extend(true, Inputmask.prototype.definitions, definition);
};
Inputmask.extendAliases = function (alias) {
  _inputmask["default"].extend(true, Inputmask.prototype.aliases, alias);
};
// static fn on inputmask
Inputmask.format = function (value, options, metadata) {
  return Inputmask(options).format(value, metadata);
};
Inputmask.unmask = function (value, options) {
  return Inputmask(options).unmaskedvalue(value);
};
Inputmask.isValid = function (value, options) {
  return Inputmask(options).isValid(value);
};
Inputmask.remove = function (elems) {
  if (typeof elems === "string") {
    elems = document.getElementById(elems) || document.querySelectorAll(elems);
  }
  elems = elems.nodeName ? [elems] : elems;
  for (var i = 0; i < elems.length; i++) {
    if (elems[i].inputmask) elems[i].inputmask.remove();
  }
};
Inputmask.setValue = function (elems, value) {
  if (typeof elems === "string") {
    elems = document.getElementById(elems) || document.querySelectorAll(elems);
  }
  elems = elems.nodeName ? [elems] : elems;
  elems.forEach(function (el) {
    if (el.inputmask) el.inputmask.setValue(value);else (0, _inputmask["default"])(el).trigger("setvalue", [value]);
  });
};
Inputmask.dependencyLib = _inputmask["default"];

// make inputmask available
_window["default"].Inputmask = Inputmask;
var _default = exports["default"] = Inputmask;

/***/ }),
/* 8 */
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  _maxTestPos: 500,
  placeholder: "_",
  optionalmarker: ["[", "]"],
  quantifiermarker: ["{", "}"],
  groupmarker: ["(", ")"],
  alternatormarker: "|",
  escapeChar: "\\",
  mask: null,
  // needs tobe null instead of undefined as the extend method does not consider props with the undefined value
  regex: null,
  // regular expression as a mask
  oncomplete: function oncomplete() {},
  // executes when the mask is complete
  onincomplete: function onincomplete() {},
  // executes when the mask is incomplete and focus is lost
  oncleared: function oncleared() {},
  // executes when the mask is cleared
  repeat: 0,
  // repetitions of the mask: * ~ forever, otherwise specify an integer
  greedy: false,
  // true: allocated buffer for the mask and repetitions - false: allocate only if needed
  autoUnmask: false,
  // automatically unmask when retrieving the value with $.fn.val or value if the browser supports __lookupGetter__ or getOwnPropertyDescriptor
  removeMaskOnSubmit: false,
  // remove the mask before submitting the form.
  clearMaskOnLostFocus: true,
  insertMode: true,
  // insert the input or overwrite the input
  insertModeVisual: true,
  // show selected caret when insertmode = false
  clearIncomplete: false,
  // clear the incomplete input on blur
  alias: null,
  onKeyDown: function onKeyDown() {},
  // callback to implement autocomplete on certain keys for example. args => event, buffer, caretPos, opts
  onBeforeMask: null,
  // executes before masking the initial value to allow preprocessing of the initial value.	args => initialValue, opts => return processedValue
  onBeforePaste: function onBeforePaste(pastedValue, opts) {
    return typeof opts.onBeforeMask === "function" ? opts.onBeforeMask.call(this, pastedValue, opts) : pastedValue;
  },
  // executes before masking the pasted value to allow preprocessing of the pasted value.	args => pastedValue, opts => return processedValue
  onBeforeWrite: null,
  // executes before writing to the masked element. args => event, opts
  onUnMask: null,
  // executes after unmasking to allow postprocessing of the unmaskedvalue.	args => maskedValue, unmaskedValue, opts
  outputMask: null,
  // mask to apply when unmasking
  showMaskOnFocus: true,
  // show the mask-placeholder when the input has focus
  showMaskOnHover: true,
  // show the mask-placeholder when hovering the empty input
  onKeyValidation: function onKeyValidation() {},
  // executes on every key-press with the result of isValid. Params: key, result, opts
  skipOptionalPartCharacter: " ",
  // a character which can be used to skip an optional part of a mask
  numericInput: false,
  // numericInput input direction style (input shifts to the left while holding the caret position)
  rightAlign: false,
  // align to the right
  undoOnEscape: true,
  // pressing escape reverts the value to the value before focus
  // numeric basic properties
  radixPoint: "",
  // ".", // | ","
  _radixDance: false,
  // dance around the radixPoint
  groupSeparator: "",
  // ",", // | "."
  // numeric basic properties
  keepStatic: null,
  // try to keep the mask static while typing. Decisions to alter the mask will be posponed if possible
  positionCaretOnTab: true,
  // when enabled the caret position is set after the latest valid position on TAB
  tabThrough: false,
  // allows for tabbing through the different parts of the masked field
  supportsInputType: ["text", "tel", "url", "password", "search"],
  // list with the supported input types
  isComplete: null,
  // override for isComplete - args => buffer, opts - return true || false
  preValidation: null,
  // hook to preValidate the input.  Usefull for validating regardless the definition.	args => buffer, pos, char, isSelection, opts, maskset, caretPos, strict => return true/false/command object
  postValidation: null,
  // hook to postValidate the result from isValid.	Usefull for validating the entry as a whole.	args => buffer, pos, c, currentResult, opts, maskset, strict, fromCheckval, fromAlternate => return true/false/json
  staticDefinitionSymbol: undefined,
  // specify a definitionSymbol for static content, used to make matches for alternators
  jitMasking: false,
  // just in time masking ~ only mask while typing, can n (number), true or false
  nullable: true,
  // return nothing instead of the buffertemplate when the user hasn't entered anything.
  inputEventOnly: false,
  // dev option - testing inputfallback behavior
  noValuePatching: false,
  // disable value property patching
  positionCaretOnClick: "lvp",
  // none, lvp (based on the last valid position (default), radixFocus (position caret to radixpoint on initial click), select (select the whole input), ignore (ignore the click and continue the mask)
  casing: null,
  // mask-level casing. Options: null, "upper", "lower" or "title" or callback args => elem, test, pos, validPositions return charValue
  inputmode: "text",
  // specify the inputmode
  importDataAttributes: true,
  // import data-inputmask attributes
  shiftPositions: true,
  // shift position of the mask entries on entry and deletion.
  usePrototypeDefinitions: true,
  // use the default defined definitions from the prototype
  validationEventTimeOut: 3000,
  // Time to show validation error on form submit
  substitutes: {} // define character substitutes
};

/***/ }),
/* 9 */
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  9: {
    validator: "\\p{N}",
    definitionSymbol: "*"
  },
  a: {
    validator: "\\p{L}",
    definitionSymbol: "*"
  },
  "*": {
    validator: "[\\p{L}\\p{N}]"
  }
};

/***/ }),
/* 10 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _window = _interopRequireDefault(__webpack_require__(11));
var _data = _interopRequireDefault(__webpack_require__(12));
var _events = __webpack_require__(13);
var _extend = _interopRequireDefault(__webpack_require__(14));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/*
 Input Mask plugin dependencyLib
 http://github.com/RobinHerbots/jquery.inputmask
 Copyright (c) Robin Herbots
 Licensed under the MIT license
 */

var document = _window["default"].document;
function DependencyLib(elem) {
  if (elem instanceof DependencyLib) {
    return elem;
  }
  if (!(this instanceof DependencyLib)) {
    return new DependencyLib(elem);
  }
  if (elem !== undefined && elem !== null && elem !== _window["default"]) {
    this[0] = elem.nodeName ? elem : elem[0] !== undefined && elem[0].nodeName ? elem[0] : document.querySelector(elem);
    if (this[0] !== undefined && this[0] !== null) {
      (0, _data["default"])(this[0], "events", (0, _data["default"])(this[0], "events") || {});
    }
  }
}
DependencyLib.prototype = {
  on: _events.on,
  off: _events.off,
  trigger: _events.trigger
};

// static
DependencyLib.extend = _extend["default"];
DependencyLib.data = _data["default"];
DependencyLib.Event = _events.Event;
var _default = exports["default"] = DependencyLib;

/***/ }),
/* 11 */
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var _default = exports["default"] = canUseDOM ? window : {};

/***/ }),
/* 12 */
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = _default;
function _default(owner, key, value) {
  if (value === undefined) {
    return owner.__data ? owner.__data[key] : null;
  } else {
    owner.__data = owner.__data || {};
    owner.__data[key] = value;
  }
}

/***/ }),
/* 13 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Event = void 0;
exports.off = off;
exports.on = on;
exports.trigger = trigger;
var _window = _interopRequireDefault(__webpack_require__(11));
var _data = _interopRequireDefault(__webpack_require__(12));
var _extend = _interopRequireDefault(__webpack_require__(14));
var _inputmask = _interopRequireDefault(__webpack_require__(10));
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var document = _window["default"].document;
function isValidElement(elem) {
  return elem instanceof Element && (0, _data["default"])(elem, "events");
}
var Evnt = exports.Event = void 0;
if (typeof _window["default"].CustomEvent === "function") {
  exports.Event = Evnt = _window["default"].CustomEvent;
} else if (_window["default"].Event && document && document.createEvent) {
  exports.Event = Evnt = function Evnt(event, params) {
    params = params || {
      bubbles: false,
      cancelable: false,
      composed: true,
      detail: undefined
    };
    var evt = document.createEvent("CustomEvent");
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  };
  Evnt.prototype = _window["default"].Event.prototype;
} else if (typeof Event !== "undefined") {
  // nodejs
  exports.Event = Evnt = Event;
}
function on(events, handler) {
  if (!this[0] || !isValidElement(this[0])) {
    return this; // Early return if no valid element
  }
  var elem = this[0],
    eventRegistry = (0, _data["default"])(elem, "events"),
    addEvent = function addEvent(ev, namespace) {
      // register domevent
      if (elem.addEventListener) {
        // all browsers except IE before version 9
        elem.addEventListener(ev, handler, false);
      } else if (elem.attachEvent) {
        // IE before version 9
        elem.attachEvent("on".concat(ev), handler);
      }
      eventRegistry[ev] = eventRegistry[ev] || {};
      eventRegistry[ev][namespace] = eventRegistry[ev][namespace] || [];
      eventRegistry[ev][namespace].push(handler);
    };
  events.split(" ").forEach(function (event) {
    var _event$split = event.split("."),
      _event$split2 = _slicedToArray(_event$split, 2),
      ev = _event$split2[0],
      _event$split2$ = _event$split2[1],
      namespace = _event$split2$ === void 0 ? "global" : _event$split2$;
    addEvent(ev, namespace);
  });
  return this;
}
function off(events, handler) {
  var eventRegistry, elem;
  function removeEvent(ev, namespace, handler) {
    if (ev in eventRegistry === true) {
      // unbind to dom events
      if (elem.removeEventListener) {
        // all browsers except IE before version 9
        elem.removeEventListener(ev, handler, false);
      } else if (elem.detachEvent) {
        // IE before version 9
        elem.detachEvent("on".concat(ev), handler);
      }
      // when the namespace is not defined (global namespace), we need to clean up all events in all namespaces
      if (namespace === "global") {
        for (var nmsp in eventRegistry[ev]) {
          eventRegistry[ev][nmsp].splice(eventRegistry[ev][nmsp].indexOf(handler), 1);
        }
      } else {
        eventRegistry[ev][namespace].splice(eventRegistry[ev][namespace].indexOf(handler), 1);
      }
    }
  }
  function resolveNamespace(ev, namespace) {
    var evts = [];
    var hndx, hndL;
    if (ev.length > 0) {
      var namespaces = namespace ? [namespace] : Object.keys(eventRegistry[ev]);
      for (var nsi = 0; nsi < namespaces.length; nsi++) {
        namespace = namespaces[nsi];
        if (handler === undefined) {
          for (hndx = 0, hndL = ((_eventRegistry$ev$nam = eventRegistry[ev][namespace]) === null || _eventRegistry$ev$nam === void 0 ? void 0 : _eventRegistry$ev$nam.length) || 0; hndx < hndL; hndx++) {
            var _eventRegistry$ev$nam;
            evts.push({
              ev: ev,
              namespace: namespace,
              handler: eventRegistry[ev][namespace][hndx]
            });
          }
        } else {
          evts.push({
            ev: ev,
            namespace: namespace,
            handler: handler
          });
        }
      }
    } else if (namespace.length > 0) {
      for (var evNdx in eventRegistry) {
        if (eventRegistry[evNdx][namespace]) {
          if (handler === undefined) {
            for (hndx = 0, hndL = eventRegistry[evNdx][namespace].length; hndx < hndL; hndx++) {
              evts.push({
                ev: evNdx,
                namespace: namespace,
                handler: eventRegistry[evNdx][namespace][hndx]
              });
            }
          } else {
            evts.push({
              ev: evNdx,
              namespace: namespace,
              handler: handler
            });
          }
        }
      }
    }
    return evts;
  }
  if (isValidElement(this[0])) {
    eventRegistry = (0, _data["default"])(this[0], "events");
    elem = this[0];
    // if no events defined, remove all events
    events = events || Object.keys(eventRegistry).join(" ");
    if (events !== "") {
      events.split(" ").forEach(function (event) {
        var _event$split3 = event.split("."),
          _event$split4 = _slicedToArray(_event$split3, 2),
          ev = _event$split4[0],
          namespace = _event$split4[1];
        resolveNamespace(ev, namespace).forEach(function (_ref) {
          var ev1 = _ref.ev,
            handler1 = _ref.handler,
            namespace1 = _ref.namespace;
          removeEvent(ev1, namespace1, handler1);
        });
      });
    }
  }
  return this;
}
function trigger(events /* , args... */) {
  var _arguments = arguments;
  if (isValidElement(this[0])) {
    var eventRegistry = (0, _data["default"])(this[0], "events"),
      elem = this[0],
      _events = typeof events === "string" ? events.split(" ") : [events.type];
    for (var endx = 0; endx < _events.length; endx++) {
      var nsEvent = _events[endx].split("."),
        ev = nsEvent[0],
        namespace = nsEvent[1] || "global";
      if (document !== undefined) {
        // trigger domevent
        var evnt = void 0;
        var params = {
          bubbles: true,
          cancelable: true,
          composed: true,
          detail: arguments[1]
        };
        // The custom event that will be created
        if (document.createEvent) {
          try {
            switch (ev) {
              case "input":
                params.inputType = "insertText";
                evnt = new InputEvent(ev, params);
                break;
              default:
                evnt = new CustomEvent(ev, params);
            }
          } catch (e) {
            evnt = document.createEvent("CustomEvent");
            evnt.initCustomEvent(ev, params.bubbles, params.cancelable, params.detail);
          }
          if (events.type) (0, _extend["default"])(evnt, events);
          elem.dispatchEvent(evnt);
        } else {
          evnt = document.createEventObject();
          evnt.eventType = ev;
          evnt.detail = arguments[1];
          if (events.type) (0, _extend["default"])(evnt, events);
          elem.fireEvent("on" + evnt.eventType, evnt);
        }
      } else if (eventRegistry[ev] !== undefined) {
        arguments[0] = arguments[0].type ? arguments[0] : _inputmask["default"].Event(arguments[0]);
        arguments[0].detail = arguments.slice(1);
        var registry = eventRegistry[ev],
          handlers = namespace === "global" ? Object.values(registry).flat() : registry[namespace];
        handlers.forEach(function (handler) {
          return handler.apply(elem, _arguments);
        });
      }
    }
  }
  return this;
}

/***/ }),
/* 14 */
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = extend;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function extend() {
  var options,
    name,
    src,
    copy,
    copyIsArray,
    clone,
    target = arguments[0] || {},
    i = 1,
    length = arguments.length,
    deep = false;

  // Handle a deep copy situation
  if (typeof target === "boolean") {
    deep = target;

    // Skip the boolean and the target
    target = arguments[i] || {};
    i++;
  }

  // Handle case when target is a string or something (possible in deep copy)
  if (_typeof(target) !== "object" && typeof target !== "function") {
    target = {};
  }
  for (; i < length; i++) {
    // Only deal with non-null/undefined values
    if ((options = arguments[i]) != null) {
      // Extend the base object
      for (name in options) {
        src = target[name];
        copy = options[name];

        // Prevent never-ending loop
        if (target === copy) {
          continue;
        }

        // Recurse if we're merging plain objects or arrays
        if (deep && copy && (Object.prototype.toString.call(copy) === "[object Object]" || (copyIsArray = Array.isArray(copy)))) {
          if (copyIsArray) {
            copyIsArray = false;
            clone = src && Array.isArray(src) ? src : [];
          } else {
            clone = src && Object.prototype.toString.call(src) === "[object Object]" ? src : {};
          }

          // Never move original objects, clone them
          target[name] = extend(deep, clone, copy);

          // Don't bring in undefined values
        } else if (copy !== undefined) {
          target[name] = copy;
        }
      }
    }
  }

  // Return the modified object
  return target;
}

/***/ }),
/* 15 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.EventRuler = void 0;
var _inputHandling = __webpack_require__(16);
var _inputmask = _interopRequireDefault(__webpack_require__(7));
var _keycode = __webpack_require__(19);
var _positioning = __webpack_require__(20);
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var EventRuler = exports.EventRuler = {
  on: function on(input, eventName, eventHandler) {
    var $ = input.inputmask.dependencyLib;
    var ev = function ev(e) {
      if (e.originalEvent) {
        e = e.originalEvent || e; // get original event from jquery event
        arguments[0] = e;
      }
      // console.log(e.type);
      var that = this,
        inputmask = that.inputmask,
        opts = inputmask ? inputmask.opts : undefined;
      var args;
      if (inputmask === undefined && this.nodeName !== "FORM") {
        // happens when cloning an object with jquery.clone
        var imOpts = $.data(that, "_inputmask_opts");
        $(that).off(); // unbind all events
        if (imOpts) {
          new _inputmask["default"](imOpts).mask(that);
        }
      } else if (!["submit", "reset", "setvalue"].includes(e.type) && this.nodeName !== "FORM" && (that.disabled || that.readOnly && !(e.type === "keydown" && e.ctrlKey && e.key === _keycode.keys.c || opts.tabThrough === false && e.key === _keycode.keys.Tab))) {
        e.preventDefault();
      } else {
        switch (e.type) {
          case "input":
            if (inputmask.skipInputEvent === true) {
              inputmask.skipInputEvent = false;
              return e.preventDefault();
            }

            // if (mobile) { //this causes problem see #2220
            // 	args = arguments;
            // 	setTimeout(function () { //needed for caret selection when entering a char on Android 8 - #1818
            // 		eventHandler.apply(that, args);
            // 		caret(that, that.inputmask.caretPos, undefined, true);
            // 	}, 0);
            // 	return false;
            // }
            break;
          case "click":
          case "focus":
            if (inputmask.validationEvent) {
              // #841
              inputmask.validationEvent = false;
              input.blur();
              (0, _inputHandling.HandleNativePlaceholder)(input, (inputmask.isRTL ? _positioning.getBufferTemplate.call(inputmask).slice().reverse() : _positioning.getBufferTemplate.call(inputmask)).join(""));
              setTimeout(function () {
                input.focus();
              }, opts.validationEventTimeOut);
              return false;
            }
            args = arguments;
            setTimeout(function () {
              // needed for Chrome ~ initial selection clears after the clickevent
              if (!input.inputmask) {
                // `inputmask.remove()` was called before this callback
                return;
              }
              eventHandler.apply(that, args);
            }, 0);
            return; /* false */
          // #2423
        }
        var returnVal = eventHandler.apply(that, arguments);
        if (returnVal === false) {
          e.preventDefault();
          e.stopPropagation();
        }
        return returnVal;
      }
    };
    // add inputmask namespace to event
    eventName = "".concat(eventName, ".inputmask");
    if (["submit.inputmask", "reset.inputmask"].includes(eventName)) {
      ev = ev.bind(input); // bind creates a new eventhandler (wrap)
      if (input.form !== null) $(input.form).on(eventName, ev);
    } else {
      $(input).on(eventName, ev);
    }
  },
  off: function off(input, event) {
    if (input.inputmask) {
      var $ = input.inputmask.dependencyLib;
      $(input).off(event || ".inputmask");
    }
  }
};

/***/ }),
/* 16 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.HandleNativePlaceholder = HandleNativePlaceholder;
exports.applyInputValue = applyInputValue;
exports.checkVal = checkVal;
exports.clearOptionalTail = clearOptionalTail;
exports.unmaskedvalue = unmaskedvalue;
exports.writeBuffer = writeBuffer;
var _environment = __webpack_require__(17);
var _eventhandlers = __webpack_require__(18);
var _inputmask = _interopRequireDefault(__webpack_require__(7));
var _keycode = __webpack_require__(19);
var _positioning = __webpack_require__(20);
var _validation = __webpack_require__(21);
var _validationTests = __webpack_require__(22);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function applyInputValue(input, value, initialEvent, strict) {
  var inputmask = input ? input.inputmask : this,
    opts = inputmask.opts;
  input.inputmask.refreshValue = false;
  if (strict !== true && typeof opts.onBeforeMask === "function") value = opts.onBeforeMask.call(inputmask, value, opts) || value;
  value = (value || "").toString().split("");
  checkVal(input, true, false, value, initialEvent);
  inputmask.undoValue = inputmask._valueGet(true);
  if ((opts.clearMaskOnLostFocus || opts.clearIncomplete) && input.inputmask._valueGet() === _positioning.getBufferTemplate.call(inputmask).join("") && _positioning.getLastValidPosition.call(inputmask) === -1) {
    input.inputmask._valueSet("");
  }
}

// todo put on prototype?
function clearOptionalTail(buffer) {
  var inputmask = this;
  buffer.length = 0;
  var template = _validationTests.getMaskTemplate.call(inputmask, true, 0, true, undefined, true),
    lmnt;
  while ((lmnt = template.shift()) !== undefined) buffer.push(lmnt);
  return buffer;
}
function checkVal(input, writeOut, strict, nptvl, initiatingEvent) {
  var inputmask = input ? input.inputmask : this,
    maskset = inputmask.maskset,
    opts = inputmask.opts,
    $ = inputmask.dependencyLib;
  var inputValue = nptvl.slice(),
    charCodes = "",
    initialNdx = -1,
    result,
    skipOptionalPartCharacter = opts.skipOptionalPartCharacter;
  opts.skipOptionalPartCharacter = ""; // see issue #2311

  function isTemplateMatch(ndx, charCodes) {
    var targetTemplate = _validationTests.getMaskTemplate.call(inputmask, true, 0).slice(ndx, _positioning.seekNext.call(inputmask, ndx, false, false)).join("").replace(/'/g, ""),
      charCodeNdx = targetTemplate.indexOf(charCodes);
    // strip spaces from targetTemplate
    while (charCodeNdx > 0 && targetTemplate[charCodeNdx - 1] === " ") charCodeNdx--;
    var match = charCodeNdx === 0 && !_positioning.isMask.call(inputmask, ndx) && (_validationTests.getTest.call(inputmask, ndx).match.nativeDef === charCodes.charAt(0) || _validationTests.getTest.call(inputmask, ndx).match["static"] === true && _validationTests.getTest.call(inputmask, ndx).match.nativeDef === "'" + charCodes.charAt(0) || _validationTests.getTest.call(inputmask, ndx).match.nativeDef === " " && (_validationTests.getTest.call(inputmask, ndx + 1).match.nativeDef === charCodes.charAt(0) || _validationTests.getTest.call(inputmask, ndx + 1).match["static"] === true && _validationTests.getTest.call(inputmask, ndx + 1).match.nativeDef === "'" + charCodes.charAt(0)));
    if (!match && charCodeNdx > 0 && !_positioning.isMask.call(inputmask, ndx, false, true)) {
      var nextPos = _positioning.seekNext.call(inputmask, ndx);
      if (inputmask.caretPos.begin < nextPos) {
        inputmask.caretPos = {
          begin: nextPos
        };
      }
    }
    return match;
  }
  _positioning.resetMaskSet.call(inputmask, false);
  inputmask.clicked = 0; // reset click counter to correctly determine the caretposition in checkval
  initialNdx = opts.radixPoint ? _positioning.determineNewCaretPosition.call(inputmask, {
    begin: 0,
    end: 0
  }, false, opts.__financeInput === false ? "radixFocus" : undefined).begin : 0;
  maskset.p = initialNdx;
  inputmask.caretPos = {
    begin: initialNdx
  };
  var staticMatches = [],
    prevCaretPos = inputmask.caretPos;
  inputValue.forEach(function (charCode, ndx) {
    if (charCode !== undefined) {
      // inputfallback strips some elements out of the inputarray.  $.each logically presents them as undefined
      /* if (maskset.validPositions[ndx] === undefined && inputValue[ndx] === getPlaceholder.call(inputmask, ndx) && isMask.call(inputmask, ndx, true) &&
      isValid.call(inputmask, ndx, inputValue[ndx], true, undefined, true, true) === false) {
      inputmask.caretPos.begin++;
      } else */
      // console.log("caret " + inputmask.caretPos.begin);
      var keypress = new $.Event("_checkval");
      keypress.key = charCode;
      charCodes += charCode;
      var lvp = _positioning.getLastValidPosition.call(inputmask, undefined, true);
      if (!isTemplateMatch(initialNdx, charCodes)) {
        result = _eventhandlers.EventHandlers.keypressEvent.call(inputmask, keypress, true, false, strict, inputmask.caretPos.begin);
        if (result) {
          initialNdx = inputmask.caretPos.begin + 1;
          charCodes = "";
        }
      } else {
        result = _validationTests.getTest.call(inputmask, ndx).match["static"] === true ? _eventhandlers.EventHandlers.keypressEvent.call(inputmask, keypress, true, false, strict, lvp + 1) : false;
      }
      if (result) {
        if (result.pos !== undefined && maskset.validPositions[result.pos] && maskset.validPositions[result.pos].match["static"] === true && maskset.validPositions[result.pos].alternation === undefined) {
          staticMatches.push(result.pos);
          if (!inputmask.isRTL) {
            result.forwardPosition = result.pos + 1;
          }
        }
        writeBuffer.call(inputmask, undefined, _positioning.getBuffer.call(inputmask), result.forwardPosition, keypress, false);
        inputmask.caretPos = {
          begin: result.forwardPosition,
          end: result.forwardPosition
        };
        prevCaretPos = inputmask.caretPos;
      } else {
        if (maskset.validPositions[ndx] === undefined && inputValue[ndx] === _validationTests.getPlaceholder.call(inputmask, ndx) && _positioning.isMask.call(inputmask, ndx, true)) {
          inputmask.caretPos.begin++;
        } else inputmask.caretPos = prevCaretPos; // restore the caret position from before the failed validation
      }
    }
  });
  if (staticMatches.length > 0) {
    var sndx,
      validPos,
      nextValid = _positioning.seekNext.call(inputmask, -1, undefined, false);
    if (!_validation.isComplete.call(inputmask, _positioning.getBuffer.call(inputmask)) && staticMatches.length <= nextValid || _validation.isComplete.call(inputmask, _positioning.getBuffer.call(inputmask)) && staticMatches.length > 0 && staticMatches.length !== nextValid && staticMatches[0] === 0) {
      // should check if is sequence starting from 0
      var nextSndx = nextValid;
      while ((sndx = staticMatches.shift()) !== undefined) {
        if (sndx < nextSndx) {
          var keypress = new $.Event("_checkval");
          validPos = maskset.validPositions[sndx];
          validPos.generatedInput = true;
          keypress.key = validPos.input;
          result = _eventhandlers.EventHandlers.keypressEvent.call(inputmask, keypress, true, false, strict, nextSndx);
          if (result && result.pos !== undefined && result.pos !== sndx && maskset.validPositions[result.pos] && maskset.validPositions[result.pos].match["static"] === true) {
            staticMatches.push(result.pos);
          } else if (!result) break;
          nextSndx++;
        }
      }
    } else {
      // delete all free statics
      while (sndx = staticMatches.pop()) {
        validPos = maskset.validPositions[sndx];
        if (validPos && maskset.validPositions[sndx + 1] === undefined) {
          delete maskset.validPositions[sndx];
        }
      }
    }
  }
  if (writeOut) {
    writeBuffer.call(inputmask, input, _positioning.getBuffer.call(inputmask), result ? result.forwardPosition : inputmask.caretPos.begin, initiatingEvent || new $.Event("checkval"), initiatingEvent && (initiatingEvent.type === "input" && inputmask.undoValue !== _positioning.getBuffer.call(inputmask).join("") || initiatingEvent.type === "paste"));
    // for (var vndx in maskset.validPositions) {
    // 	if (maskset.validPositions[vndx].match.generated !== true) { //only remove non forced generated
    // 		delete maskset.validPositions[vndx].generatedInput; //clear generated markings ~ consider initializing with a  value as fully typed
    // 	}
    // }
  }
  opts.skipOptionalPartCharacter = skipOptionalPartCharacter;
}
function HandleNativePlaceholder(npt, value) {
  var inputmask = npt ? npt.inputmask : this;
  if (_environment.ie) {
    if (npt.inputmask._valueGet() !== value && (npt.placeholder !== value || npt.placeholder === "")) {
      var buffer = _positioning.getBuffer.call(inputmask).slice(),
        nptValue = npt.inputmask._valueGet();
      if (nptValue !== value) {
        var lvp = _positioning.getLastValidPosition.call(inputmask);
        if (lvp === -1 && nptValue === _positioning.getBufferTemplate.call(inputmask).join("")) {
          buffer = [];
        } else if (lvp !== -1) {
          // clearout optional tail of the mask
          clearOptionalTail.call(inputmask, buffer);
        }
        writeBuffer(npt, buffer);
      }
    }
  } else if (npt.placeholder !== value) {
    npt.placeholder = value;
    if (npt.placeholder === "") npt.removeAttribute("placeholder");
  }
}
function unmaskedvalue(input) {
  var inputmask = input ? input.inputmask : this,
    opts = inputmask.opts,
    maskset = inputmask.maskset;
  if (input) {
    if (input.inputmask === undefined) {
      return input.value;
    }
    if (input.inputmask && input.inputmask.refreshValue) {
      // forced refresh from the value form.reset
      applyInputValue(input, input.inputmask._valueGet(true));
    }
  }
  var umValue = [],
    vps = maskset.validPositions;
  for (var pndx = 0, vpl = vps.length; pndx < vpl; pndx++) {
    if (vps[pndx] && vps[pndx].match && (vps[pndx].match["static"] != true || opts.keepStatic !== true && Array.isArray(maskset.metadata) && vps[pndx].generatedInput !== true)) {
      // only include non generated input with multiple masks (check on metadata) and without keepStatic true
      umValue.push(vps[pndx].input);
    }
  }
  var unmaskedValue = umValue.length === 0 ? "" : (inputmask.isRTL ? umValue.reverse() : umValue).join("");
  if (typeof opts.onUnMask === "function") {
    var bufferValue = (inputmask.isRTL ? _positioning.getBuffer.call(inputmask).slice().reverse() : _positioning.getBuffer.call(inputmask)).join("");
    unmaskedValue = opts.onUnMask.call(inputmask, bufferValue, unmaskedValue, opts);
  }
  if (opts.outputMask && unmaskedValue.length > 0) {
    return _inputmask["default"].format(unmaskedValue, _objectSpread(_objectSpread({}, opts), {}, {
      mask: opts.outputMask,
      alias: null
    }));
  }
  return unmaskedValue;
}
function writeBuffer(input, buffer, caretPos, event, triggerEvents) {
  var inputmask = input ? input.inputmask : this,
    opts = inputmask.opts,
    $ = inputmask.dependencyLib;
  if (event && typeof opts.onBeforeWrite === "function") {
    //    buffer = buffer.slice(); //prevent uncontrolled manipulation of the internal buffer
    var result = opts.onBeforeWrite.call(inputmask, event, buffer, caretPos, opts);
    if (result) {
      if (result.refreshFromBuffer) {
        var refresh = result.refreshFromBuffer;
        _validation.refreshFromBuffer.call(inputmask, refresh === true ? refresh : refresh.start, refresh.end, result.buffer || buffer);
        buffer = _positioning.getBuffer.call(inputmask, true);
      }
      if (caretPos !== undefined) caretPos = result.caret !== undefined ? result.caret : caretPos;
    }
  }
  if (input !== undefined) {
    input.inputmask._valueSet(buffer.join(""));
    if (caretPos !== undefined && (event === undefined || event.type !== "blur")) {
      // console.log(caretPos);
      _positioning.caret.call(inputmask, input, caretPos, undefined, undefined, event !== undefined && event.type === "keydown" && (event.key === _keycode.keys.Delete || event.key === _keycode.keys.Backspace));
    }
    input.inputmask.writeBufferHook === undefined || input.inputmask.writeBufferHook(caretPos);
    if (triggerEvents === true) {
      var $input = $(input),
        nptVal = input.inputmask._valueGet();
      input.inputmask.skipInputEvent = true;
      $input.trigger("input");
      setTimeout(function () {
        // timeout needed for IE
        if (nptVal === _positioning.getBufferTemplate.call(inputmask).join("")) {
          $input.trigger("cleared");
        } else if (_validation.isComplete.call(inputmask, buffer) === true) {
          $input.trigger("complete");
        }
      }, 0);
    }
  }
}

/***/ }),
/* 17 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.mobile = exports.iphone = exports.ie = void 0;
var _window = _interopRequireDefault(__webpack_require__(11));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var ua = _window["default"].navigator && _window["default"].navigator.userAgent || "",
  ie = exports.ie = ua.indexOf("MSIE ") > 0 || ua.indexOf("Trident/") > 0,
  mobile = exports.mobile = _window["default"].navigator && _window["default"].navigator.userAgentData && _window["default"].navigator.userAgentData.mobile || _window["default"].navigator && _window["default"].navigator.maxTouchPoints || "ontouchstart" in _window["default"],
  // not entirely correct but will currently do
  iphone = exports.iphone = /iphone/i.test(ua);

/***/ }),
/* 18 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.EventHandlers = void 0;
var _environment = __webpack_require__(17);
var _window = _interopRequireDefault(__webpack_require__(11));
var _inputHandling = __webpack_require__(16);
var _keycode = __webpack_require__(19);
var _positioning = __webpack_require__(20);
var _validation = __webpack_require__(21);
var _validationTests = __webpack_require__(22);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var EventHandlers = exports.EventHandlers = {
  keyEvent: function keyEvent(e, checkval, writeOut, strict, ndx) {
    var inputmask = this.inputmask,
      opts = inputmask.opts,
      $ = inputmask.dependencyLib,
      maskset = inputmask.maskset,
      input = this,
      $input = $(input),
      c = e.key,
      pos = _positioning.caret.call(inputmask, input),
      kdResult = opts.onKeyDown.call(this, e, _positioning.getBuffer.call(inputmask), pos, opts);
    if (kdResult !== undefined) return kdResult;

    // backspace, delete, and escape get special treatment
    if (c === _keycode.keys.Backspace || c === _keycode.keys.Delete || _environment.iphone && c === _keycode.keys.BACKSPACE_SAFARI || e.ctrlKey && c === _keycode.keys.x && !("oncut" in input)) {
      // backspace/delete
      e.preventDefault(); // stop default action but allow propagation
      _validation.handleRemove.call(inputmask, input, c, pos);
      (0, _inputHandling.writeBuffer)(input, _positioning.getBuffer.call(inputmask, true), maskset.p, e, input.inputmask._valueGet() !== _positioning.getBuffer.call(inputmask).join(""));
    } else if (c === _keycode.keys.End || c === _keycode.keys.PageDown) {
      // when END or PAGE_DOWN pressed set position at lastmatch
      e.preventDefault();
      var caretPos = _positioning.seekNext.call(inputmask, _positioning.getLastValidPosition.call(inputmask));
      _positioning.caret.call(inputmask, input, e.shiftKey ? pos.begin : caretPos, caretPos, true);
    } else if (c === _keycode.keys.Home && !e.shiftKey || c === _keycode.keys.PageUp) {
      // Home or page_up
      e.preventDefault();
      _positioning.caret.call(inputmask, input, 0, e.shiftKey ? pos.begin : 0, true);
    } else if ((opts.undoOnEscape && c === _keycode.keys.Escape ||  false && 0) && e.altKey !== true) {
      // escape && undo && #762
      (0, _inputHandling.checkVal)(input, true, false, inputmask.undoValue.split(""));
      $input.trigger("click");
    } else if (c === _keycode.keys.Insert && !(e.shiftKey || e.ctrlKey) && inputmask.userOptions.insertMode === undefined) {
      // insert
      if (!_validation.isSelection.call(inputmask, pos)) {
        opts.insertMode = !opts.insertMode;
        _positioning.caret.call(inputmask, input, pos.begin, pos.begin);
      } else opts.insertMode = !opts.insertMode;
    } else if (opts.tabThrough === true && c === _keycode.keys.Tab) {
      if (e.shiftKey === true) {
        pos.end = _positioning.seekPrevious.call(inputmask, pos.end, true);
        if (_validationTests.getTest.call(inputmask, pos.end - 1).match["static"] === true) {
          pos.end--;
        }
        pos.begin = _positioning.seekPrevious.call(inputmask, pos.end, true);
        if (pos.begin >= 0 && pos.end > 0) {
          e.preventDefault();
          _positioning.caret.call(inputmask, input, pos.begin, pos.end);
        }
      } else {
        pos.begin = _positioning.seekNext.call(inputmask, pos.begin, true);
        pos.end = _positioning.seekNext.call(inputmask, pos.begin, true);
        if (pos.end < maskset.maskLength) pos.end--;
        if (pos.begin <= maskset.maskLength) {
          e.preventDefault();
          _positioning.caret.call(inputmask, input, pos.begin, pos.end);
        }
      }
    } else if (!e.shiftKey) {
      if (opts.insertModeVisual && opts.insertMode === false) {
        if (c === _keycode.keys.ArrowRight) {
          setTimeout(function () {
            var caretPos = _positioning.caret.call(inputmask, input);
            _positioning.caret.call(inputmask, input, caretPos.begin);
          }, 0);
        } else if (c === _keycode.keys.ArrowLeft) {
          setTimeout(function () {
            var caretPos = {
              begin: _positioning.translatePosition.call(inputmask, input.inputmask.caretPos.begin),
              end: _positioning.translatePosition.call(inputmask, input.inputmask.caretPos.end)
            };
            if (inputmask.isRTL) {
              _positioning.caret.call(inputmask, input, caretPos.begin + (caretPos.begin === maskset.maskLength ? 0 : 1));
            } else {
              _positioning.caret.call(inputmask, input, caretPos.begin - (caretPos.begin === 0 ? 0 : 1));
            }
          }, 0);
        }
      } else {
        inputmask.keyEventHook === undefined || inputmask.keyEventHook(e);
      }
    }
    inputmask.isComposing = c == _keycode.keys.Process || c == _keycode.keys.Unidentified;
    inputmask.ignorable = c === undefined || c.length > 1;
    return EventHandlers.keypressEvent.call(this, e, checkval, writeOut, strict, ndx);
  },
  keypressEvent: function keypressEvent(e, checkval, writeOut, strict, ndx) {
    var inputmask = this.inputmask || this,
      opts = inputmask.opts,
      $ = inputmask.dependencyLib,
      maskset = inputmask.maskset;
    var input = inputmask.el,
      $input = $(input),
      c = e.key;
    if (checkval !== true && !(e.ctrlKey && e.altKey && !inputmask.ignorable) && (e.ctrlKey || e.metaKey || inputmask.ignorable)) {
      if (c === _keycode.keys.Enter) {
        if (inputmask.undoValue !== inputmask._valueGet(true)) {
          inputmask.undoValue = inputmask._valueGet(true);
          setTimeout(function () {
            $input.trigger("change");
          }, 0);
        }
      }
    } else if (c) {
      // special treat the decimal separator
      // if ((k === 44 || k === 46) && e.location === 3 && opts.radixPoint !== "") k = opts.radixPoint.charCodeAt(0);
      var pos = checkval ? {
          begin: ndx,
          end: ndx
        } : _positioning.caret.call(inputmask, input),
        forwardPosition;

      // allow for character substitution
      if (!checkval) c = opts.substitutes[c] || c;
      maskset.writeOutBuffer = true;
      var valResult = _validation.isValid.call(inputmask, pos, c, strict, undefined, undefined, undefined, checkval);
      if (valResult !== false) {
        _positioning.resetMaskSet.call(inputmask, true);
        forwardPosition = valResult.caret !== undefined ? valResult.caret : _positioning.seekNext.call(inputmask, valResult.pos.begin ? valResult.pos.begin : valResult.pos);
        maskset.p = forwardPosition; // needed for checkval
      }
      forwardPosition = opts.numericInput && valResult.caret === undefined ? _positioning.seekPrevious.call(inputmask, forwardPosition) : forwardPosition;
      if (writeOut !== false) {
        setTimeout(function () {
          opts.onKeyValidation.call(input, c, valResult);
        }, 0);
        if (maskset.writeOutBuffer && valResult !== false) {
          var buffer = _positioning.getBuffer.call(inputmask);
          (0, _inputHandling.writeBuffer)(input, buffer, forwardPosition, e, checkval !== true);
        }
      }
      e.preventDefault();
      if (checkval) {
        if (valResult !== false) valResult.forwardPosition = forwardPosition;
        return valResult;
      }
    }
  },
  pasteEvent: function () {
    var _pasteEvent = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      var handlePaste, input, inputmask, opts, inputValue, pastedValue;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            handlePaste = function _handlePaste(inputmask, input, inputValue, pastedValue, onBeforePaste) {
              var caretPos = _positioning.caret.call(inputmask, input, undefined, undefined, true),
                valueBeforeCaret = inputValue.substr(0, caretPos.begin),
                valueAfterCaret = inputValue.substr(caretPos.end, inputValue.length);
              if (valueBeforeCaret == (inputmask.isRTL ? _positioning.getBufferTemplate.call(inputmask).slice().reverse() : _positioning.getBufferTemplate.call(inputmask)).slice(0, caretPos.begin).join("")) valueBeforeCaret = "";
              if (valueAfterCaret == (inputmask.isRTL ? _positioning.getBufferTemplate.call(inputmask).slice().reverse() : _positioning.getBufferTemplate.call(inputmask)).slice(caretPos.end).join("")) valueAfterCaret = "";
              pastedValue = valueBeforeCaret + pastedValue + valueAfterCaret;
              if (inputmask.isRTL && opts.numericInput !== true) {
                pastedValue = pastedValue.split("");
                var _iterator = _createForOfIteratorHelper(_positioning.getBufferTemplate.call(inputmask)),
                  _step;
                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var c = _step.value;
                    if (pastedValue[0] === c) pastedValue.shift();
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
                pastedValue = pastedValue.reverse().join("");
              }
              var pasteValue = pastedValue;
              if (typeof onBeforePaste === "function") {
                pasteValue = onBeforePaste.call(inputmask, pasteValue, opts);
                if (pasteValue === false) {
                  return false;
                }
                if (!pasteValue) {
                  pasteValue = inputValue;
                }
              }
              (0, _inputHandling.checkVal)(input, true, false, pasteValue.toString().split(""), e);
            };
            input = this, inputmask = this.inputmask, opts = inputmask.opts;
            inputValue = inputmask._valueGet(true);
            inputmask.skipInputEvent = true;
            if (e.clipboardData && e.clipboardData.getData) {
              pastedValue = e.clipboardData.getData("text/plain");
            } else if (_window["default"].clipboardData && _window["default"].clipboardData.getData) {
              // IE
              pastedValue = _window["default"].clipboardData.getData("Text");
            }
            handlePaste(inputmask, input, inputValue, pastedValue, opts.onBeforePaste);
            e.preventDefault();
          case 7:
          case "end":
            return _context.stop();
        }
      }, _callee, this);
    }));
    function pasteEvent(_x) {
      return _pasteEvent.apply(this, arguments);
    }
    return pasteEvent;
  }(),
  inputFallBackEvent: function inputFallBackEvent(e) {
    // fallback when keypress is not triggered
    var inputmask = this.inputmask,
      opts = inputmask.opts,
      $ = inputmask.dependencyLib;

    // console.log(e.inputType);

    function analyseChanges(inputValue, buffer, caretPos) {
      var frontPart = inputValue.substr(0, caretPos.begin).split(""),
        backPart = inputValue.substr(caretPos.begin).split(""),
        frontBufferPart = buffer.substr(0, caretPos.begin).split(""),
        backBufferPart = buffer.substr(caretPos.begin).split(""),
        fpl = frontPart.length >= frontBufferPart.length ? frontPart.length : frontBufferPart.length,
        bpl = backPart.length >= backBufferPart.length ? backPart.length : backBufferPart.length,
        bl,
        i,
        action = "",
        data = [],
        marker = "~",
        placeholder;

      // align buffers
      while (frontPart.length < fpl) frontPart.push(marker);
      while (frontBufferPart.length < fpl) frontBufferPart.push(marker);
      while (backPart.length < bpl) backPart.unshift(marker);
      while (backBufferPart.length < bpl) backBufferPart.unshift(marker);
      var newBuffer = frontPart.concat(backPart),
        oldBuffer = frontBufferPart.concat(backBufferPart);

      // console.log("N " + newBuffer);
      // console.log("O " + oldBuffer);

      for (i = 0, bl = newBuffer.length; i < bl; i++) {
        placeholder = _validationTests.getPlaceholder.call(inputmask, _positioning.translatePosition.call(inputmask, i));
        switch (action) {
          case "insertText":
            if (oldBuffer[i - 1] === newBuffer[i] && caretPos.begin == newBuffer.length - 1) {
              data.push(newBuffer[i]);
            }
            i = bl;
            break;
          case "insertReplacementText":
            if (newBuffer[i] === marker) {
              // extend selection
              caretPos.end++;
            } else {
              // breakout loop
              i = bl;
            }
            break;
          case "deleteContentBackward":
            if (newBuffer[i] === marker) {
              caretPos.end++;
            } else {
              // breakout loop
              i = bl;
            }
            break;
          default:
            if (newBuffer[i] !== oldBuffer[i]) {
              if ((newBuffer[i + 1] === marker || newBuffer[i + 1] === placeholder || newBuffer[i + 1] === undefined) && (oldBuffer[i] === placeholder && oldBuffer[i + 1] === marker || oldBuffer[i] === marker)) {
                // basic insert
                action = "insertText";
                data.push(newBuffer[i]);
                caretPos.begin--;
                caretPos.end--;
              } else if (oldBuffer[i + 1] === marker && oldBuffer[i] === newBuffer[i + 1]) {
                // insert between
                action = "insertText";
                data.push(newBuffer[i]);
                caretPos.begin--;
                caretPos.end--;
              } else if (newBuffer[i] !== placeholder && newBuffer[i] !== marker && (newBuffer[i + 1] === marker || oldBuffer[i] !== newBuffer[i] && oldBuffer[i + 1] === newBuffer[i + 1]) /* single char replacement */) {
                // replace selection
                action = "insertReplacementText";
                data.push(newBuffer[i]);
                caretPos.begin--;
              } else if (newBuffer[i] === marker) {
                // delete~backspace
                action = "deleteContentBackward";
                if (_positioning.isMask.call(inputmask, _positioning.translatePosition.call(inputmask, i), true) || oldBuffer[i] === opts.radixPoint) caretPos.end++;
              } else {
                i = bl;
              }
            }
            break;
        }
      }
      return {
        action: action,
        data: data,
        caret: caretPos
      };
    }
    var input = this,
      inputValue = input.inputmask._valueGet(true),
      buffer = (inputmask.isRTL ? _positioning.getBuffer.call(inputmask).slice().reverse() : _positioning.getBuffer.call(inputmask)).join(""),
      caretPos = _positioning.caret.call(inputmask, input, undefined, undefined, true),
      changes;
    if (buffer !== inputValue) {
      changes = analyseChanges(inputValue, buffer, caretPos);
      if (input.getRootNode().activeElement !== input) {
        input.focus();
      }
      (0, _inputHandling.writeBuffer)(input, _positioning.getBuffer.call(inputmask));
      _positioning.caret.call(inputmask, input, caretPos.begin, caretPos.end, true);

      // Japanese IME hack #2662
      if (!_environment.mobile && inputmask.skipNextInsert && e.inputType === "insertText" && changes.action === "insertText" && inputmask.isComposing) {
        return false;
      }
      if (e.inputType === "insertCompositionText" && changes.action === "insertText" && inputmask.isComposing) {
        inputmask.skipNextInsert = true;
      } else {
        inputmask.skipNextInsert = false;
      }
      switch (changes.action) {
        case "insertText":
        case "insertReplacementText":
          changes.data.forEach(function (entry, ndx) {
            var keypress = new $.Event("keypress");
            keypress.key = entry;
            inputmask.ignorable = false; // make sure ignorable is ignored ;-)
            EventHandlers.keypressEvent.call(input, keypress);
          });
          setTimeout(function () {
            // #2195 trigger keyup to help some other plugins to track changes
            inputmask.$el.trigger("keyup");
          }, 0);
          break;
        case "deleteContentBackward":
          var keydown = new $.Event("keydown");
          keydown.key = _keycode.keys.Backspace;
          EventHandlers.keyEvent.call(input, keydown);
          break;
        default:
          (0, _inputHandling.applyInputValue)(input, inputValue);
          _positioning.caret.call(inputmask, input, caretPos.begin, caretPos.end, true);
          break;
      }
      e.preventDefault();
    }
  },
  setValueEvent: function setValueEvent(e) {
    var inputmask = this.inputmask,
      $ = inputmask.dependencyLib;
    var input = this,
      value = e && e.detail ? e.detail[0] : arguments[1];
    if (value === undefined) {
      value = input.inputmask._valueGet(true);
    }
    (0, _inputHandling.applyInputValue)(input, value, new $.Event("input"), (e && e.detail ? e.detail[0] : arguments[1]) !== undefined);
    if (e.detail && e.detail[1] !== undefined || arguments[2] !== undefined) {
      _positioning.caret.call(inputmask, input, e.detail ? e.detail[1] : arguments[2]);
    }
  },
  focusEvent: function focusEvent(e) {
    var inputmask = this.inputmask,
      opts = inputmask.opts,
      input = this,
      nptValue = inputmask && inputmask._valueGet();
    if (opts.showMaskOnFocus) {
      if (nptValue !== _positioning.getBuffer.call(inputmask).join("")) {
        (0, _inputHandling.writeBuffer)(input, _positioning.getBuffer.call(inputmask), _positioning.seekNext.call(inputmask, _positioning.getLastValidPosition.call(inputmask)));
      } /* else if (mouseEnter === false) { //only executed on focus without mouseenter
        caret(input, seekNext(getLastValidPosition()));
        } */
    }
    if (opts.positionCaretOnTab === true && inputmask.mouseEnter === false && (!_validation.isComplete.call(inputmask, _positioning.getBuffer.call(inputmask)) || _positioning.getLastValidPosition.call(inputmask) === -1)) {
      EventHandlers.clickEvent.apply(input, [e, true]);
    }
    inputmask.undoValue = inputmask && inputmask._valueGet(true);
  },
  invalidEvent: function invalidEvent(e) {
    this.inputmask.validationEvent = true;
  },
  mouseleaveEvent: function mouseleaveEvent() {
    var inputmask = this.inputmask,
      opts = inputmask.opts,
      input = this;
    inputmask.mouseEnter = false;
    if (opts.clearMaskOnLostFocus && input.getRootNode().activeElement !== input) {
      (0, _inputHandling.HandleNativePlaceholder)(input, inputmask.originalPlaceholder);
    }
  },
  clickEvent: function clickEvent(e, tabbed) {
    var inputmask = this.inputmask;
    inputmask.clicked++;
    var input = this;
    if (input.getRootNode().activeElement === input) {
      var newCaretPosition = _positioning.determineNewCaretPosition.call(inputmask, _positioning.caret.call(inputmask, input), tabbed);
      if (newCaretPosition !== undefined) {
        _positioning.caret.call(inputmask, input, newCaretPosition);
      }
    }
  },
  cutEvent: function cutEvent(e) {
    var inputmask = this.inputmask,
      maskset = inputmask.maskset,
      input = this,
      pos = _positioning.caret.call(inputmask, input),
      // correct clipboardData
      clipData = inputmask.isRTL ? _positioning.getBuffer.call(inputmask).slice(pos.end, pos.begin) : _positioning.getBuffer.call(inputmask).slice(pos.begin, pos.end),
      clipDataText = inputmask.isRTL ? clipData.reverse().join("") : clipData.join("");
    if (_window["default"].navigator && _window["default"].navigator.clipboard) _window["default"].navigator.clipboard.writeText(clipDataText);else if (_window["default"].clipboardData && _window["default"].clipboardData.getData) {
      // IE
      _window["default"].clipboardData.setData("Text", clipDataText);
    }
    _validation.handleRemove.call(inputmask, input, _keycode.keys.Delete, pos);
    (0, _inputHandling.writeBuffer)(input, _positioning.getBuffer.call(inputmask), maskset.p, e, inputmask.undoValue !== inputmask._valueGet(true));
  },
  blurEvent: function blurEvent(e) {
    var inputmask = this.inputmask,
      opts = inputmask.opts,
      $ = inputmask.dependencyLib;
    inputmask.clicked = 0;
    var $input = $(this),
      input = this;
    if (input.inputmask) {
      (0, _inputHandling.HandleNativePlaceholder)(input, inputmask.originalPlaceholder);
      var nptValue = input.inputmask._valueGet(),
        buffer = _positioning.getBuffer.call(inputmask).slice();
      if (nptValue !== "") {
        if (opts.clearMaskOnLostFocus) {
          if (_positioning.getLastValidPosition.call(inputmask) === -1 && nptValue === _positioning.getBufferTemplate.call(inputmask).join("")) {
            buffer = [];
          } else {
            // clearout optional tail of the mask
            _inputHandling.clearOptionalTail.call(inputmask, buffer);
          }
        }
        if (_validation.isComplete.call(inputmask, buffer) === false) {
          setTimeout(function () {
            $input.trigger("incomplete");
          }, 0);
          if (opts.clearIncomplete) {
            _positioning.resetMaskSet.call(inputmask, false);
            if (opts.clearMaskOnLostFocus) {
              buffer = [];
            } else {
              buffer = _positioning.getBufferTemplate.call(inputmask).slice();
            }
          }
        }
        (0, _inputHandling.writeBuffer)(input, buffer, undefined, e);
      }
      nptValue = inputmask._valueGet(true);
      if (inputmask.undoValue !== nptValue) {
        if (nptValue != "" || inputmask.undoValue != _positioning.getBufferTemplate.call(inputmask).join("") || inputmask.undoValue == _positioning.getBufferTemplate.call(inputmask).join("") && inputmask.maskset.validPositions.length > 0) {
          inputmask.undoValue = nptValue;
          $input.trigger("change");
        }
      }
    }
  },
  mouseenterEvent: function mouseenterEvent() {
    var inputmask = this.inputmask,
      showMaskOnHover = inputmask.opts.showMaskOnHover,
      input = this;
    inputmask.mouseEnter = true;
    if (input.getRootNode().activeElement !== input) {
      var bufferTemplate = (inputmask.isRTL ? _positioning.getBufferTemplate.call(inputmask).slice().reverse() : _positioning.getBufferTemplate.call(inputmask)).join("");
      if (showMaskOnHover) {
        (0, _inputHandling.HandleNativePlaceholder)(input, bufferTemplate);
      }
    }
  },
  submitEvent: function submitEvent() {
    // trigger change on submit if any
    var inputmask = this.inputmask,
      opts = inputmask.opts;
    if (inputmask.undoValue !== inputmask._valueGet(true)) {
      inputmask.$el.trigger("change");
    }
    if (/* opts.clearMaskOnLostFocus && */_positioning.getLastValidPosition.call(inputmask) === -1 && inputmask._valueGet && inputmask._valueGet() === _positioning.getBufferTemplate.call(inputmask).join("")) {
      inputmask._valueSet(""); // clear masktemplete on submit and still has focus
    }
    if (opts.clearIncomplete && _validation.isComplete.call(inputmask, _positioning.getBuffer.call(inputmask)) === false) {
      inputmask._valueSet("");
    }
    if (opts.removeMaskOnSubmit) {
      inputmask._valueSet(inputmask.unmaskedvalue(), true);
      setTimeout(function () {
        (0, _inputHandling.writeBuffer)(inputmask.el, _positioning.getBuffer.call(inputmask));
      }, 0);
    }
  },
  resetEvent: function resetEvent() {
    var inputmask = this.inputmask;
    inputmask.refreshValue = true; // indicate a forced refresh when there is a call to the value before leaving the triggering event fn
    setTimeout(function () {
      (0, _inputHandling.applyInputValue)(inputmask.el, inputmask._valueGet(true));
    }, 0);
  }
};

/***/ }),
/* 19 */
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.keys = exports.keyCode = void 0;
exports.toKey = toKey;
exports.toKeyCode = toKeyCode;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var ignorables = {
    Alt: 18,
    AltGraph: 18,
    ArrowDown: 40,
    ArrowLeft: 37,
    ArrowRight: 39,
    ArrowUp: 38,
    Backspace: 8,
    CapsLock: 20,
    Control: 17,
    ContextMenu: 93,
    Dead: 221,
    Delete: 46,
    End: 35,
    Escape: 27,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    Home: 36,
    Insert: 45,
    NumLock: 144,
    PageDown: 34,
    PageUp: 33,
    Pause: 19,
    PrintScreen: 44,
    Process: 229,
    Shift: 16,
    ScrollLock: 145,
    Tab: 9,
    Unidentified: 229
  },
  keyCode = exports.keyCode = _objectSpread({
    c: 67,
    x: 88,
    z: 90,
    BACKSPACE_SAFARI: 127,
    Enter: 13,
    Meta_LEFT: 91,
    Meta_RIGHT: 92,
    Space: 32
  }, ignorables),
  keyCodeRev = Object.entries(keyCode).reduce(function (acc, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    return (
      // eslint-disable-next-line no-sequences
      acc[value] = acc[value] === undefined ? key : acc[value], acc
    );
  }, {}),
  keys = exports.keys = Object.entries(keyCode).reduce(
  // eslint-disable-next-line no-sequences
  function (acc, _ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
      key = _ref4[0],
      value = _ref4[1];
    return acc[key] = key === "Space" ? " " : key, acc;
  }, {});
function toKey(keyCode, shiftKey) {
  return keyCodeRev[keyCode] || (shiftKey ? String.fromCharCode(keyCode) : String.fromCharCode(keyCode).toLowerCase());
}
function toKeyCode(key) {
  return keyCode[key];
}

/***/ }),
/* 20 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.caret = caret;
exports.determineLastRequiredPosition = determineLastRequiredPosition;
exports.determineNewCaretPosition = determineNewCaretPosition;
exports.getBuffer = getBuffer;
exports.getBufferTemplate = getBufferTemplate;
exports.getLastValidPosition = getLastValidPosition;
exports.isMask = isMask;
exports.resetMaskSet = resetMaskSet;
exports.seekNext = seekNext;
exports.seekPrevious = seekPrevious;
exports.translatePosition = translatePosition;
var _window = _interopRequireDefault(__webpack_require__(11));
var _validation = __webpack_require__(21);
var _validationTests = __webpack_require__(22);
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// tobe put on prototype?
function caret(input, begin, end, notranslate, isDelete) {
  var inputmask = this,
    opts = this.opts;
  var range;
  if (begin !== undefined) {
    if (Array.isArray(begin)) {
      end = inputmask.isRTL ? begin[0] : begin[1];
      begin = inputmask.isRTL ? begin[1] : begin[0];
    }
    if (begin.begin !== undefined) {
      end = inputmask.isRTL ? begin.begin : begin.end;
      begin = inputmask.isRTL ? begin.end : begin.begin;
    }
    if (typeof begin === "number") {
      begin = notranslate ? begin : translatePosition.call(inputmask, begin);
      end = notranslate ? end : translatePosition.call(inputmask, end);
      end = typeof end === "number" ? end : begin;
      // if (!$(input).is(":visible")) {
      // 	return;
      // }

      var scrollCalc = parseInt(((input.ownerDocument.defaultView || _window["default"]).getComputedStyle ? (input.ownerDocument.defaultView || _window["default"]).getComputedStyle(input, null) : input.currentStyle).fontSize) * end;
      input.scrollLeft = scrollCalc > input.scrollWidth ? scrollCalc : 0;
      input.inputmask.caretPos = {
        begin: begin,
        end: end
      }; // track caret internally
      if (opts.insertModeVisual && opts.insertMode === false && begin === end) {
        if (!isDelete) {
          end++; // set visualization for insert/overwrite mode
        }
      }
      if (input === input.getRootNode().activeElement) {
        if ("setSelectionRange" in input) {
          input.setSelectionRange(begin, end);
        } else if (_window["default"].getSelection) {
          range = document.createRange();
          if (input.firstChild === undefined || input.firstChild === null) {
            var textNode = document.createTextNode("");
            input.appendChild(textNode);
          }
          range.setStart(input.firstChild, begin < input.inputmask._valueGet().length ? begin : input.inputmask._valueGet().length);
          range.setEnd(input.firstChild, end < input.inputmask._valueGet().length ? end : input.inputmask._valueGet().length);
          range.collapse(true);
          var sel = _window["default"].getSelection();
          sel.removeAllRanges();
          sel.addRange(range);
          // input.focus();
        } else if (input.createTextRange) {
          range = input.createTextRange();
          range.collapse(true);
          range.moveEnd("character", end);
          range.moveStart("character", begin);
          range.select();
        }
        input.inputmask.caretHook === undefined || input.inputmask.caretHook.call(inputmask, {
          begin: begin,
          end: end
        });
      }
    }
  } else {
    if ("selectionStart" in input && "selectionEnd" in input) {
      begin = input.selectionStart;
      end = input.selectionEnd;
    } else if (_window["default"].getSelection) {
      range = _window["default"].getSelection().getRangeAt(0);
      if (range.commonAncestorContainer.parentNode === input || range.commonAncestorContainer === input) {
        begin = range.startOffset;
        end = range.endOffset;
      }
    } else if (document.selection && document.selection.createRange) {
      range = document.selection.createRange();
      begin = 0 - range.duplicate().moveStart("character", -input.inputmask._valueGet().length);
      end = begin + range.text.length;
    }

    // if (opts.insertModeVisual && opts.insertMode === false && begin === (end - 1)) end--; //correct caret for insert/overwrite mode

    /* eslint-disable consistent-return */
    return {
      begin: notranslate ? begin : translatePosition.call(inputmask, begin),
      end: notranslate ? end : translatePosition.call(inputmask, end)
    };
    /* eslint-enable consistent-return */
  }
}

// tobe put on prototype?
function determineLastRequiredPosition(returnDefinition) {
  var inputmask = this,
    maskset = inputmask.maskset,
    $ = inputmask.dependencyLib,
    lvp = getLastValidPosition.call(inputmask),
    positions = {},
    lvTest = maskset.validPositions[lvp],
    buffer = _validationTests.getMaskTemplate.call(inputmask, true, getLastValidPosition.call(inputmask), true, true);
  var bl = buffer.length,
    pos,
    ndxIntlzr = lvTest !== undefined ? lvTest.locator.slice() : undefined,
    testPos;
  for (pos = lvp + 1; pos < buffer.length; pos++) {
    testPos = _validationTests.getTestTemplate.call(inputmask, pos, ndxIntlzr, pos - 1);
    ndxIntlzr = testPos.locator.slice();
    positions[pos] = $.extend(true, {}, testPos);
  }
  var lvTestAlt = lvTest && lvTest.alternation !== undefined ? lvTest.locator[lvTest.alternation] : undefined;
  for (pos = bl - 1; pos > lvp; pos--) {
    testPos = positions[pos];
    if ((testPos.match.optionality || testPos.match.optionalQuantifier && testPos.match.newBlockMarker || lvTestAlt && (lvTestAlt !== positions[pos].locator[lvTest.alternation] && testPos.match["static"] !== true || testPos.match["static"] === true && testPos.locator[lvTest.alternation] && _validation.checkAlternationMatch.call(inputmask, testPos.locator[lvTest.alternation].toString().split(","), lvTestAlt.toString().split(",")) && _validationTests.getTests.call(inputmask, pos)[0].def !== "")) && buffer[pos] === _validationTests.getPlaceholder.call(inputmask, pos, testPos.match)) {
      bl--;
    } else {
      break;
    }
  }
  return returnDefinition ? {
    l: bl,
    def: positions[bl] ? positions[bl].match : undefined
  } : bl;
}

// tobe put on prototype?
function determineNewCaretPosition(selectedCaret, tabbed, positionCaretOnClick) {
  var inputmask = this,
    maskset = inputmask.maskset,
    opts = inputmask.opts;
  var clickPosition, lvclickPosition, lastPosition;
  function doRadixFocus(clickPos) {
    if (opts.radixPoint !== "" && opts.digits !== 0) {
      var vps = maskset.validPositions;
      if (vps[clickPos] === undefined || vps[clickPos].input === undefined) {
        if (clickPos < seekNext.call(inputmask, -1)) return true;
        var radixPos = getBuffer.call(inputmask).indexOf(opts.radixPoint);
        if (radixPos !== -1) {
          for (var vp = 0, vpl = vps.length; vp < vpl; vp++) {
            if (vps[vp] && radixPos < vp && vps[vp].input !== _validationTests.getPlaceholder.call(inputmask, vp)) {
              return false;
            }
          }
          return true;
        }
      }
    }
    return false;
  }
  if (tabbed) {
    if (inputmask.isRTL) {
      selectedCaret.end = selectedCaret.begin;
    } else {
      selectedCaret.begin = selectedCaret.end;
    }
  }
  if (selectedCaret.begin === selectedCaret.end) {
    positionCaretOnClick = positionCaretOnClick || opts.positionCaretOnClick;
    switch (positionCaretOnClick) {
      case "none":
        break;
      case "select":
        selectedCaret = {
          begin: 0,
          end: getBuffer.call(inputmask).length
        };
        break;
      case "ignore":
        selectedCaret.end = selectedCaret.begin = seekNext.call(inputmask, getLastValidPosition.call(inputmask));
        break;
      case "radixFocus":
        if (inputmask.clicked > 1 && maskset.validPositions.length === 0) break;
        if (doRadixFocus(selectedCaret.begin)) {
          var radixPos = getBuffer.call(inputmask).join("").indexOf(opts.radixPoint);
          selectedCaret.end = selectedCaret.begin = opts.numericInput ? seekNext.call(inputmask, radixPos) : radixPos;
          break;
        }
      // fallback to lvp
      // eslint-disable-next-line no-fallthrough
      default:
        // lvp:
        clickPosition = selectedCaret.begin;
        lvclickPosition = getLastValidPosition.call(inputmask, clickPosition, true);
        lastPosition = seekNext.call(inputmask, lvclickPosition === -1 && !isMask.call(inputmask, 0) ? -1 : lvclickPosition);
        if (clickPosition <= lastPosition) {
          selectedCaret.end = selectedCaret.begin = !isMask.call(inputmask, clickPosition, false, true) ? seekNext.call(inputmask, clickPosition) : clickPosition;
        } else {
          var lvp = maskset.validPositions[lvclickPosition],
            tt = _validationTests.getTestTemplate.call(inputmask, lastPosition, lvp ? lvp.match.locator : undefined, lvp),
            placeholder = _validationTests.getPlaceholder.call(inputmask, lastPosition, tt.match);
          if (placeholder !== "" && getBuffer.call(inputmask)[lastPosition] !== placeholder && tt.match.optionalQuantifier !== true && tt.match.newBlockMarker !== true || !isMask.call(inputmask, lastPosition, opts.keepStatic, true) && tt.match.def === placeholder) {
            var newPos = seekNext.call(inputmask, lastPosition);
            if (clickPosition >= newPos || clickPosition === lastPosition) {
              lastPosition = newPos;
            }
          }
          selectedCaret.end = selectedCaret.begin = lastPosition;
        }
    }
    return selectedCaret;
  }
}

// tobe put on prototype?
function getBuffer(noCache) {
  var inputmask = this,
    maskset = inputmask.maskset;
  if (maskset.buffer === undefined || noCache === true) {
    maskset.buffer = _validationTests.getMaskTemplate.call(inputmask, true, getLastValidPosition.call(inputmask), true);
    if (maskset._buffer === undefined) maskset._buffer = maskset.buffer.slice();
  }
  return maskset.buffer;
}

// tobe put on prototype?
function getBufferTemplate() {
  var inputmask = this,
    maskset = this.maskset;
  if (maskset._buffer === undefined) {
    // generate template
    maskset._buffer = _validationTests.getMaskTemplate.call(inputmask, false, 1);
    if (maskset.buffer === undefined) maskset.buffer = maskset._buffer.slice();
  }
  return maskset._buffer;
}

// tobe put on prototype?
function getLastValidPosition(closestTo, strict, validPositions) {
  var maskset = this.maskset;
  var before = -1,
    after = -1;
  var valids = validPositions || maskset.validPositions; // for use in valhook ~ context switch
  if (closestTo === undefined) closestTo = -1;
  for (var psNdx = 0, vpl = valids.length; psNdx < vpl; psNdx++) {
    if (valids[psNdx] && (strict || valids[psNdx].generatedInput !== true)) {
      if (psNdx <= closestTo) before = psNdx;
      if (psNdx >= closestTo) after = psNdx;
    }
  }
  return before === -1 || before === closestTo ? after : after === -1 ? before : closestTo - before < after - closestTo ? before : after;
}

// tobe put on prototype?
function isMask(pos, strict, fuzzy) {
  var inputmask = this,
    maskset = this.maskset;
  var test = _validationTests.getTestTemplate.call(inputmask, pos).match;
  if (test.def === "") test = _validationTests.getTest.call(inputmask, pos).match;
  if (test["static"] !== true) {
    return test.fn;
  }
  if (fuzzy === true && maskset.validPositions[pos] !== undefined && maskset.validPositions[pos].generatedInput !== true) {
    return true;
  }
  if (strict !== true && pos > -1) {
    if (fuzzy) {
      // check on the number of tests
      var tests = _validationTests.getTests.call(inputmask, pos);
      return tests.length > 1 + (tests[tests.length - 1].match.def === "" ? 1 : 0);
    }
    // else based on the template
    var testTemplate = _validationTests.determineTestTemplate.call(inputmask, pos, _validationTests.getTests.call(inputmask, pos)),
      testPlaceHolder = _validationTests.getPlaceholder.call(inputmask, pos, testTemplate.match);
    return testTemplate.match.def !== testPlaceHolder;
  }
  return false;
}

// tobe put on prototype?
// soft ~ undefined reset validpositions; soft = false also reset tests; soft = true only reset the maskset
function resetMaskSet(soft) {
  var maskset = this.maskset;
  maskset.buffer = undefined;
  if (soft !== true) {
    maskset.validPositions = [];
    maskset.p = 0;
  }
  if (soft === false) {
    maskset.tests = {};
    maskset.jitOffset = {};
  }
}

// tobe put on prototype?
function seekNext(pos, newBlock, fuzzy) {
  var inputmask = this;
  if (fuzzy === undefined) fuzzy = true;
  var position = pos + 1;
  while (_validationTests.getTest.call(inputmask, position).match.def !== "" && (newBlock === true && (_validationTests.getTest.call(inputmask, position).match.newBlockMarker !== true || !isMask.call(inputmask, position, undefined, true)) || newBlock !== true && !isMask.call(inputmask, position, undefined, fuzzy))) {
    position++;
  }
  return position;
}

// tobe put on prototype?
function seekPrevious(pos, newBlock) {
  var inputmask = this;
  var position = pos - 1;
  if (pos <= 0) return 0;
  while (position > 0 && (newBlock === true && (_validationTests.getTest.call(inputmask, position).match.newBlockMarker !== true || !isMask.call(inputmask, position, undefined, true)) || newBlock !== true && !isMask.call(inputmask, position, undefined, true))) {
    position--;
  }
  return position;
}

// tobe put on prototype?
function translatePosition(pos) {
  var inputmask = this,
    opts = this.opts,
    el = this.el;
  if (inputmask.isRTL && typeof pos === "number" && (!opts.greedy || opts.placeholder !== "") && el) {
    pos = inputmask._valueGet().length - pos;
    if (pos < 0) pos = 0;
  }
  return pos;
}

/***/ }),
/* 21 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.alternate = alternate;
exports.checkAlternationMatch = checkAlternationMatch;
exports.handleRemove = handleRemove;
exports.isComplete = isComplete;
exports.isSelection = isSelection;
exports.isValid = isValid;
exports.refreshFromBuffer = refreshFromBuffer;
exports.revalidateMask = revalidateMask;
var _eventhandlers = __webpack_require__(18);
var _keycode = __webpack_require__(19);
var _positioning = __webpack_require__(20);
var _validationTests = __webpack_require__(22);
// tobe put on prototype?
function alternate(maskPos, c, strict, fromIsValid, rAltPos, selection) {
  // pos == true => generalize
  var inputmask = this,
    $ = this.dependencyLib,
    opts = this.opts,
    maskset = inputmask.maskset;
  if (!inputmask.hasAlternator) return false;
  var validPsClone = $.extend(true, [], maskset.validPositions),
    tstClone = $.extend(true, {}, maskset.tests);
  var lastAlt,
    alternation,
    isValidRslt = false,
    returnRslt = false,
    altPos,
    prevAltPos,
    i,
    validPos,
    decisionPos,
    lAltPos = rAltPos !== undefined ? rAltPos : _positioning.getLastValidPosition.call(inputmask),
    nextPos,
    input,
    begin,
    end;
  if (selection) {
    begin = selection.begin;
    end = selection.end;
    if (selection.begin > selection.end) {
      begin = selection.end;
      end = selection.begin;
    }
  }
  if (lAltPos === -1 && rAltPos === undefined) {
    // do not recurse when already passed the beginning
    lastAlt = 0;
    prevAltPos = _validationTests.getTest.call(inputmask, lastAlt);
    alternation = prevAltPos.alternation;
  } else {
    // find last modified alternation
    for (; lAltPos >= 0; lAltPos--) {
      altPos = lAltPos === 0 ? _validationTests.getTest.call(inputmask, 0) : maskset.validPositions[lAltPos];
      if (altPos && altPos.alternation !== undefined) {
        if (lAltPos <= (maskPos || 0) && prevAltPos && prevAltPos.locator[altPos.alternation] !== altPos.locator[altPos.alternation]) {
          break;
        }
        lastAlt = lAltPos;
        alternation = altPos.alternation;
        prevAltPos = altPos;
      }
    }
  }
  if (alternation !== undefined) {
    decisionPos = parseInt(lastAlt);
    maskset.excludes[decisionPos] = maskset.excludes[decisionPos] || [];
    if (maskPos !== true) {
      // generalize
      maskset.excludes[decisionPos].push((0, _validationTests.getDecisionTaker)(prevAltPos) + ":" + prevAltPos.alternation);
    }
    var validInputs = [];
    var resultPos = -1;
    for (i = decisionPos; decisionPos < _positioning.getLastValidPosition.call(inputmask, undefined, true) + 1; i++) {
      if (resultPos === -1 && maskPos <= i && c !== undefined) {
        validInputs.push(c);
        resultPos = validInputs.length - 1;
      }
      validPos = maskset.validPositions[decisionPos];
      if (validPos && validPos.generatedInput !== true && (decisionPos !== 0 || validPos.input !== opts.skipOptionalPartCharacter) && (selection === undefined || i < begin || i >= end)) {
        validInputs.push(validPos.input);
      }
      // delete maskset.validPositions[i++];
      maskset.validPositions.splice(decisionPos, 1);
    }
    if (resultPos === -1 && c !== undefined) {
      validInputs.push(c);
      resultPos = validInputs.length - 1;
    }
    while (maskset.excludes[decisionPos] !== undefined && maskset.excludes[decisionPos].length < 10) {
      // maskset.tests[decisionPos] = undefined; //clear decisionPos
      maskset.tests = {}; // clear all
      _positioning.resetMaskSet.call(inputmask, true); // clear getbuffer
      isValidRslt = true;
      for (i = 0; i < validInputs.length; i++) {
        nextPos = isValidRslt.caret || opts.insertMode == false && nextPos != undefined ? _positioning.seekNext.call(inputmask, nextPos) : _positioning.getLastValidPosition.call(inputmask, undefined, true) + 1;
        input = validInputs[i];
        // nextPos = translatePosition.call(inputmask, nextPos);
        if (!(isValidRslt = isValid.call(inputmask, nextPos, input, false, fromIsValid, true))) {
          break;
        }
        if (i === resultPos) {
          returnRslt = isValidRslt;
        }
        if (maskPos == true && isValidRslt) {
          // return validposition on generalise
          returnRslt = {
            caretPos: i
          };
        }
      }
      if (!isValidRslt) {
        _positioning.resetMaskSet.call(inputmask);
        prevAltPos = _validationTests.getTest.call(inputmask, decisionPos); // get the current decisionPos to exclude ~ needs to be before restoring the initial validation
        // reset & revert
        maskset.validPositions = $.extend(true, [], validPsClone);
        maskset.tests = $.extend(true, {}, tstClone); // refresh tests after possible alternating
        if (maskset.excludes[decisionPos]) {
          if (prevAltPos.alternation != undefined) {
            var decisionTaker = (0, _validationTests.getDecisionTaker)(prevAltPos);
            if (maskset.excludes[decisionPos].indexOf(decisionTaker + ":" + prevAltPos.alternation) !== -1) {
              returnRslt = alternate.call(inputmask, maskPos, c, strict, fromIsValid, decisionPos - 1, selection);
              break;
            }
            maskset.excludes[decisionPos].push(decisionTaker + ":" + prevAltPos.alternation);
            for (i = decisionPos; i < _positioning.getLastValidPosition.call(inputmask, undefined, true) + 1; i++) maskset.validPositions.splice(decisionPos);
          } else delete maskset.excludes[decisionPos];
        } else {
          // latest alternation
          returnRslt = alternate.call(inputmask, maskPos, c, strict, fromIsValid, decisionPos - 1, selection);
          break;
        }
      } else {
        break;
      }
    }
  }

  // reset alternation excludes
  if (!returnRslt || opts.keepStatic !== false) {
    delete maskset.excludes[decisionPos];
  }
  return returnRslt;
}
function casing(elem, test, pos) {
  var opts = this.opts,
    maskset = this.maskset;
  switch (opts.casing || test.casing) {
    case "upper":
      elem = elem.toUpperCase();
      break;
    case "lower":
      elem = elem.toLowerCase();
      break;
    case "title":
      var posBefore = maskset.validPositions[pos - 1];
      if (pos === 0 || posBefore && posBefore.input === String.fromCharCode(_keycode.keyCode.Space)) {
        elem = elem.toUpperCase();
      } else {
        elem = elem.toLowerCase();
      }
      break;
    default:
      if (typeof opts.casing === "function") {
        var args = Array.prototype.slice.call(arguments);
        args.push(maskset.validPositions);
        elem = opts.casing.apply(this, args);
      }
  }
  return elem;
}

// tobe put on prototype?
function checkAlternationMatch(altArr1, altArr2, na) {
  var opts = this.opts;
  var altArrC = opts.greedy ? altArr2 : altArr2.slice(0, 1),
    isMatch = false,
    naArr = na !== undefined ? na.split(",") : [],
    naNdx;

  // remove no alternate indexes from alternation array
  for (var i = 0; i < naArr.length; i++) {
    if ((naNdx = altArr1.indexOf(naArr[i])) !== -1) {
      altArr1.splice(naNdx, 1);
    }
  }
  for (var alndx = 0; alndx < altArr1.length; alndx++) {
    if (altArrC.includes(altArr1[alndx])) {
      isMatch = true;
      break;
    }
  }
  return isMatch;
}

// tobe put on prototype?
function handleRemove(input, c, pos, strict, fromIsValid) {
  var inputmask = this,
    maskset = this.maskset,
    opts = this.opts;
  if (opts.numericInput || inputmask.isRTL) {
    if (c === _keycode.keys.Backspace) {
      c = _keycode.keys.Delete;
    } else if (c === _keycode.keys.Delete) {
      c = _keycode.keys.Backspace;
    }
    if (inputmask.isRTL) {
      var pend = pos.end;
      pos.end = pos.begin;
      pos.begin = pend;
    }
  }
  var lvp = _positioning.getLastValidPosition.call(inputmask, undefined, true);
  if (pos.end >= _positioning.getBuffer.call(inputmask).length && lvp >= pos.end) {
    // handle numeric negate symbol offset, due to  dynamic jit masking
    pos.end = lvp + 1;
  }
  if (c === _keycode.keys.Backspace) {
    if (pos.end - pos.begin < 1) {
      pos.begin = _positioning.seekPrevious.call(inputmask, pos.begin);
    }
  } else if (c === _keycode.keys.Delete) {
    if (pos.begin === pos.end) {
      pos.end = _positioning.isMask.call(inputmask, pos.end, true, true) ? pos.end + 1 : _positioning.seekNext.call(inputmask, pos.end) + 1;
    }
  }
  var offset;
  if ((offset = revalidateMask.call(inputmask, pos)) !== false) {
    if (strict !== true && opts.keepStatic !== false || opts.regex !== null && _validationTests.getTest.call(inputmask, pos.begin).match.def.indexOf("|") !== -1) {
      // TODO NEEDS BETTER CHECK WHEN TO ALTERNATE  ~ opts regex isn"t good enough
      alternate.call(inputmask, true);
    }
    if (strict !== true) {
      maskset.p = c === _keycode.keys.Delete ? pos.begin + offset : pos.begin;
      maskset.p = _positioning.determineNewCaretPosition.call(inputmask, {
        begin: maskset.p,
        end: maskset.p
      }, false, opts.insertMode === false && c === _keycode.keys.Backspace ? "none" : undefined).begin;
    }
  }
}

// tobe put on prototype?
function isComplete(buffer) {
  // return true / false / undefined (repeat *)
  var inputmask = this,
    opts = this.opts,
    maskset = this.maskset;
  if (typeof opts.isComplete === "function") return opts.isComplete(buffer, opts);
  if (opts.repeat === "*") return undefined;
  var complete = false,
    lrp = _positioning.determineLastRequiredPosition.call(inputmask, true),
    aml = lrp.l; // seekPrevious.call(inputmask, lrp.l);

  if (lrp.def === undefined || lrp.def.newBlockMarker || lrp.def.optionality || lrp.def.optionalQuantifier) {
    complete = true;
    for (var i = 0; i <= aml; i++) {
      var test = _validationTests.getTestTemplate.call(inputmask, i).match;
      if (test["static"] !== true && maskset.validPositions[i] === undefined && (test.optionality === false || test.optionality === undefined || test.optionality && test.newBlockMarker == false) && (test.optionalQuantifier === false || test.optionalQuantifier === undefined) || test["static"] === true && test.def != "" && buffer[i] !== _validationTests.getPlaceholder.call(inputmask, i, test)) {
        complete = false;
        break;
      }
    }
  }
  return complete;
}
function isSelection(posObj) {
  var inputmask = this,
    opts = this.opts,
    insertModeOffset = opts.insertMode ? 0 : 1;
  return inputmask.isRTL ? posObj.begin - posObj.end > insertModeOffset : posObj.end - posObj.begin > insertModeOffset;
}

// tobe put on prototype?
function isValid(pos, c, strict, fromIsValid, fromAlternate, validateOnly, fromCheckval) {
  // strict true ~ no correction or autofill
  var inputmask = this,
    $ = this.dependencyLib,
    opts = this.opts,
    maskset = inputmask.maskset;
  strict = strict === true; // always set a value to strict to prevent possible strange behavior in the extensions

  var maskPos = pos;
  if (pos.begin !== undefined) {
    // position was a position object - used to handle a delete by typing over a selection
    maskPos = inputmask.isRTL ? pos.end : pos.begin;
  }
  function processCommandObject(commandObj) {
    if (commandObj !== undefined) {
      if (commandObj.remove !== undefined) {
        // remove position(s)
        if (!Array.isArray(commandObj.remove)) commandObj.remove = [commandObj.remove];
        commandObj.remove.sort(function (a, b) {
          return inputmask.isRTL ? a.pos - b.pos : b.pos - a.pos;
        }).forEach(function (lmnt) {
          revalidateMask.call(inputmask, {
            begin: lmnt,
            end: lmnt + 1
          });
        });
        commandObj.remove = undefined;
      }
      if (commandObj.insert !== undefined) {
        // insert position(s)
        if (!Array.isArray(commandObj.insert)) commandObj.insert = [commandObj.insert];
        commandObj.insert.sort(function (a, b) {
          return inputmask.isRTL ? b.pos - a.pos : a.pos - b.pos;
        }).forEach(function (lmnt) {
          if (lmnt.c !== "") {
            isValid.call(inputmask, lmnt.pos, lmnt.c, lmnt.strict !== undefined ? lmnt.strict : true, lmnt.fromIsValid !== undefined ? lmnt.fromIsValid : fromIsValid);
          }
        });
        commandObj.insert = undefined;
      }
      if (commandObj.refreshFromBuffer && commandObj.buffer) {
        var refresh = commandObj.refreshFromBuffer;
        refreshFromBuffer.call(inputmask, refresh === true ? refresh : refresh.start, refresh.end, commandObj.buffer);
        commandObj.refreshFromBuffer = undefined;
      }
      if (commandObj.rewritePosition !== undefined) {
        maskPos = commandObj.rewritePosition;
        // commandObj.rewritePosition = undefined;
        commandObj = true; // see prevalidation in isValid
      }
    }
    return commandObj;
  }
  function _isValid(position, c, strict) {
    var rslt = false;
    _validationTests.getTests.call(inputmask, position).every(function (tst, ndx) {
      var test = tst.match;
      // make sure the buffer is set and correct
      _positioning.getBuffer.call(inputmask, true);
      if (test.jit && maskset.validPositions[_positioning.seekPrevious.call(inputmask, position)] === undefined) {
        // ignore if jit is not desirable
        rslt = false;
      } else {
        // return is false or a json object => { pos: ??, c: ??} or true
        rslt = test.fn != null ? test.fn.test(c, maskset, position, strict, opts, isSelection.call(inputmask, pos)) : (c === test.def || c === opts.skipOptionalPartCharacter) && test.def !== "" // non mask
        ? {
          c: _validationTests.getPlaceholder.call(inputmask, position, test, true) || test.def,
          pos: position
        } : false;
      }
      if (rslt !== false) {
        var elem = rslt.c !== undefined ? rslt.c : c,
          validatedPos = position;
        elem = elem === opts.skipOptionalPartCharacter && test["static"] === true ? _validationTests.getPlaceholder.call(inputmask, position, test, true) || test.def : elem;
        rslt = processCommandObject(rslt);
        if (rslt !== true && rslt.pos !== undefined && rslt.pos !== position) {
          // their is a position offset
          validatedPos = rslt.pos;
        }
        if (rslt !== true && rslt.pos === undefined && rslt.c === undefined) {
          return false; // breakout if nothing to insert
        }
        if (revalidateMask.call(inputmask, pos, $.extend({}, tst, {
          input: casing.call(inputmask, elem, test, validatedPos)
        }), fromIsValid, validatedPos) === false) {
          rslt = false;
        }
        return false; // break from loop
      }
      return true;
    });
    return rslt;
  }
  var result = true,
    positionsClone = $.extend(true, [], maskset.validPositions); // clone the currentPositions

  if (opts.keepStatic === false && maskset.excludes[maskPos] !== undefined && fromAlternate !== true && fromIsValid !== true) {
    for (var i = maskPos; i < (inputmask.isRTL ? pos.begin : pos.end); i++) {
      if (maskset.excludes[i] !== undefined) {
        maskset.excludes[i] = undefined;
        delete maskset.tests[i];
      }
    }
  }
  if (typeof opts.preValidation === "function" && fromIsValid !== true && validateOnly !== true) {
    result = opts.preValidation.call(inputmask, _positioning.getBuffer.call(inputmask), maskPos, c, isSelection.call(inputmask, pos), opts, maskset, pos, strict || fromAlternate);
    result = processCommandObject(result);
  }
  if (result === true) {
    // preValidation result
    result = _isValid(maskPos, c, strict);
    if ((!strict || fromIsValid === true) && result === false && validateOnly !== true) {
      var currentPosValid = maskset.validPositions[maskPos];
      if (currentPosValid && currentPosValid.match["static"] === true && (currentPosValid.match.def === c || c === opts.skipOptionalPartCharacter)) {
        result = {
          caret: _positioning.seekNext.call(inputmask, maskPos)
        };
      } else {
        if (opts.insertMode || maskset.validPositions[_positioning.seekNext.call(inputmask, maskPos)] === undefined || pos.end > maskPos) {
          // does the input match on a further position?
          var skip = false;
          if (maskset.jitOffset[maskPos] && maskset.validPositions[_positioning.seekNext.call(inputmask, maskPos)] === undefined) {
            result = isValid.call(inputmask, maskPos + maskset.jitOffset[maskPos], c, true, true);
            if (result !== false) {
              if (fromAlternate !== true) result.caret = maskPos;
              skip = true;
            }
          }
          if (pos.end > maskPos) {
            maskset.validPositions[maskPos] = undefined;
          }
          if (!skip && !_positioning.isMask.call(inputmask, maskPos, opts.keepStatic && maskPos === 0)) {
            for (var nPos = maskPos + 1, snPos = _positioning.seekNext.call(inputmask, maskPos, false, maskPos !== 0); nPos <= snPos; nPos++) {
              // if (!isMask(nPos, true)) {
              // 	continue;
              // }
              result = _isValid(nPos, c, strict);
              if (result !== false) {
                result = trackbackPositions.call(inputmask, maskPos, result.pos !== undefined ? result.pos : nPos) || result;
                maskPos = nPos;
                break;
              }
            }
          }
        }
      }
    }
    if (inputmask.hasAlternator && fromAlternate !== true && !strict) {
      fromAlternate = true; // stop possible loop
      if (result === false && opts.keepStatic && (isComplete.call(inputmask, _positioning.getBuffer.call(inputmask)) || maskPos === 0)) {
        // try fuzzy alternator logic
        result = alternate.call(inputmask, maskPos, c, strict, fromIsValid, undefined, pos);
      } else if (isSelection.call(inputmask, pos) && maskset.tests[maskPos] && maskset.tests[maskPos].length > 1 && opts.keepStatic) {
        // selection clears an alternated keepstatic mask ~ #2189
        result = alternate.call(inputmask, true);
      } else if (result === true && opts.numericInput !== true && maskset.tests[maskPos] && maskset.tests[maskPos].length > 1 && _positioning.getLastValidPosition.call(inputmask, undefined, true) > maskPos) {
        // console.log("Alternating");
        result = alternate.call(inputmask, true);
      }
    }
    if (result === true) {
      result = {
        pos: maskPos
      };
    }
    if (typeof opts.postValidation === "function" && fromIsValid !== true && validateOnly !== true) {
      var postResult = opts.postValidation.call(inputmask, _positioning.getBuffer.call(inputmask, true), pos.begin !== undefined ? inputmask.isRTL ? pos.end : pos.begin : pos, c, result, opts, maskset, strict, fromCheckval, fromAlternate);
      if (postResult !== undefined) {
        result = postResult === true ? result : postResult;
      }
    }
  }
  if (result && result.pos === undefined) {
    result.pos = maskPos;
  }
  if (result === false || validateOnly === true) {
    _positioning.resetMaskSet.call(inputmask, true);
    maskset.validPositions = $.extend(true, [], positionsClone); // revert validation changes
  } else {
    trackbackPositions.call(inputmask, undefined, maskPos, true);
  }
  var endResult = processCommandObject(result);
  // console.log("returned result " + JSON.stringify(endResult));
  if (inputmask.maxLength !== undefined) {
    var buffer = _positioning.getBuffer.call(inputmask);
    if (buffer.length > inputmask.maxLength && !fromIsValid) {
      _positioning.resetMaskSet.call(inputmask, true);
      maskset.validPositions = $.extend(true, [], positionsClone); // revert validation changes
      endResult = false;
    }
  }
  return endResult;
}

// tobe put on prototype?
function positionCanMatchDefinition(pos, testDefinition, opts) {
  var inputmask = this,
    maskset = this.maskset;
  var valid = false,
    tests = _validationTests.getTests.call(inputmask, pos);
  for (var tndx = 0; tndx < tests.length; tndx++) {
    if (tests[tndx].match && (tests[tndx].match.nativeDef === testDefinition.match[opts.shiftPositions ? "def" : "nativeDef"] && (!opts.shiftPositions || !testDefinition.match["static"]) || tests[tndx].match.nativeDef === testDefinition.match.nativeDef || opts.regex && !tests[tndx].match["static"] && tests[tndx].match.fn.test(testDefinition.input, maskset, pos, false, opts))) {
      valid = true;
      break;
    } else if (tests[tndx].match && tests[tndx].match.def === testDefinition.match.nativeDef) {
      valid = undefined;
      break;
    }
  }
  if (valid === false) {
    if (maskset.jitOffset[pos] !== undefined) {
      valid = positionCanMatchDefinition.call(inputmask, pos + maskset.jitOffset[pos], testDefinition, opts);
    }
  }
  return valid;
}

// tobe put on prototype?
function refreshFromBuffer(start, end, buffer) {
  var inputmask = this,
    maskset = this.maskset,
    opts = this.opts,
    $ = this.dependencyLib;
  // checkVal.call(inputmask, el, false, true, isRTL ? buffer.reverse() : buffer);
  var i,
    p,
    skipOptionalPartCharacter = opts.skipOptionalPartCharacter,
    bffr = inputmask.isRTL ? buffer.slice().reverse() : buffer;
  opts.skipOptionalPartCharacter = "";
  if (start === true) {
    _positioning.resetMaskSet.call(inputmask, false);
    start = 0;
    end = buffer.length;
    p = _positioning.determineNewCaretPosition.call(inputmask, {
      begin: 0,
      end: 0
    }, false).begin;
  } else {
    for (i = start; i < end; i++) {
      maskset.validPositions.splice(start, 0);
    }
    p = start;
  }
  var keypress = new $.Event("keypress");
  for (i = start; i < end; i++) {
    keypress.key = bffr[i].toString();
    inputmask.ignorable = false; // make sure ignorable is ignored ;-)
    var valResult = _eventhandlers.EventHandlers.keypressEvent.call(inputmask, keypress, true, false, false, p);
    if (valResult !== false && valResult !== undefined) {
      p = valResult.forwardPosition;
    }
  }
  opts.skipOptionalPartCharacter = skipOptionalPartCharacter;
}

// tobe put on prototype?
// fill in best positions according the current input
function trackbackPositions(originalPos, newPos, fillOnly) {
  var inputmask = this,
    maskset = this.maskset,
    $ = this.dependencyLib;

  // console.log("trackbackPositions " + originalPos + " " + newPos);
  if (originalPos === undefined) {
    // find previous valid
    for (originalPos = newPos - 1; originalPos > 0; originalPos--) {
      if (maskset.validPositions[originalPos]) break;
    }
  }
  for (var ps = originalPos; ps < newPos; ps++) {
    if (maskset.validPositions[ps] === undefined && !_positioning.isMask.call(inputmask, ps, false)) {
      var vp = ps == 0 ? _validationTests.getTest.call(inputmask, ps) : maskset.validPositions[ps - 1];
      if (vp) {
        var tests = _validationTests.getTests.call(inputmask, ps).slice();
        if (tests[tests.length - 1].match.def === "") tests.pop();
        var bestMatch = _validationTests.determineTestTemplate.call(inputmask, ps, tests),
          np;
        if (bestMatch && (bestMatch.match.jit !== true || bestMatch.match.newBlockMarker === "master" && (np = maskset.validPositions[ps + 1]) && np.match.optionalQuantifier === true)) {
          bestMatch = $.extend({}, bestMatch, {
            input: _validationTests.getPlaceholder.call(inputmask, ps, bestMatch.match, true) || bestMatch.match.def
          });
          bestMatch.generatedInput = true;
          revalidateMask.call(inputmask, ps, bestMatch, true);
          if (fillOnly !== true) {
            // revalidate the new position to update the locator value
            var cvpInput = maskset.validPositions[newPos].input;
            maskset.validPositions[newPos] = undefined;
            return isValid.call(inputmask, newPos, cvpInput, true, true);
          }
        }
      }
    }
  }
}

// tobe put on prototype?
function revalidateMask(pos, validTest, fromIsValid, validatedPos) {
  // console.log("revalidateMask " + fromIsValid);
  var inputmask = this,
    maskset = this.maskset,
    opts = this.opts,
    $ = this.dependencyLib;
  function IsEnclosedStatic(pos, valids, selection) {
    var posMatch = valids[pos];
    if (posMatch !== undefined && posMatch.match["static"] === true && posMatch.match.optionality !== true && (valids[0] === undefined || valids[0].alternation === undefined)) {
      var prevMatch = selection.begin <= pos - 1 ? valids[pos - 1] && valids[pos - 1].match["static"] === true && valids[pos - 1] : valids[pos - 1],
        nextMatch = selection.end > pos + 1 ? valids[pos + 1] && valids[pos + 1].match["static"] === true && valids[pos + 1] : valids[pos + 1];
      return prevMatch && nextMatch;
    }
    return false;
  }
  var offset = 0,
    begin = pos.begin !== undefined ? pos.begin : pos,
    end = pos.end !== undefined ? pos.end : pos,
    valid = true;
  if (pos.begin > pos.end) {
    begin = pos.end;
    end = pos.begin;
  }
  validatedPos = validatedPos !== undefined ? validatedPos : begin;
  if (fromIsValid === undefined && (begin !== end || opts.insertMode && maskset.validPositions[validatedPos] !== undefined || validTest === undefined || validTest.match.optionalQuantifier || validTest.match.optionality)) {
    // reposition & revalidate others
    var positionsClone = $.extend(true, [], maskset.validPositions),
      lvp = _positioning.getLastValidPosition.call(inputmask, undefined, true),
      i;
    maskset.p = begin; // needed for alternated position after overtype selection

    var clearpos = isSelection.call(inputmask, pos) ? begin : validatedPos;
    for (i = lvp; i >= clearpos; i--) {
      maskset.validPositions.splice(i, 1);
      if (validTest === undefined) delete maskset.tests[i + 1];
    }
    var j = validatedPos,
      posMatch = j,
      t,
      canMatch,
      test;
    if (validTest) {
      maskset.validPositions[validatedPos] = $.extend(true, {}, validTest);
      posMatch++;
      j++;
    }
    if (positionsClone[end] == undefined && maskset.jitOffset[end]) {
      end += maskset.jitOffset[end] + 1;
    }
    for (i = validTest ? end : end - 1; i <= lvp; i++) {
      if ((t = positionsClone[i]) !== undefined && t.generatedInput !== true && (i >= end || i >= begin && IsEnclosedStatic(i, positionsClone, {
        begin: begin,
        end: end
      }))) {
        while (test = _validationTests.getTest.call(inputmask, posMatch), test.match.def !== "") {
          // loop needed to match further positions
          if ((canMatch = positionCanMatchDefinition.call(inputmask, posMatch, t, opts)) !== false || t.match.def === "+") {
            // validated match //we still need some hackery for the + validator (numeric alias)
            if (t.match.def === "+") _positioning.getBuffer.call(inputmask, true);
            var result = isValid.call(inputmask, posMatch, t.input, t.match.def !== "+", /* t.match.def !== "+" */true);
            valid = result !== false;
            j = (result.pos || posMatch) + 1;
            if (!valid && canMatch) break;
          } else {
            valid = false;
          }
          if (valid) {
            if (validTest === undefined && t.match["static"] && i === pos.begin) offset++;
            break;
          }
          if (!valid && _positioning.getBuffer.call(inputmask), posMatch > maskset.maskLength) {
            break;
          }
          posMatch++;
        }
        if (_validationTests.getTest.call(inputmask, posMatch).match.def == "") {
          valid = false;
        }
        // restore position
        posMatch = j;
      }
      if (!valid) break;
    }
    if (!valid) {
      maskset.validPositions = $.extend(true, [], positionsClone);
      _positioning.resetMaskSet.call(inputmask, true);
      return false;
    }
  } else if (validTest && _validationTests.getTest.call(inputmask, validatedPos).match.cd === validTest.match.cd) {
    maskset.validPositions[validatedPos] = $.extend(true, {}, validTest);
  }
  _positioning.resetMaskSet.call(inputmask, true);
  return offset;
}

/***/ }),
/* 22 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.determineTestTemplate = determineTestTemplate;
exports.getDecisionTaker = getDecisionTaker;
exports.getMaskTemplate = getMaskTemplate;
exports.getPlaceholder = getPlaceholder;
exports.getTest = getTest;
exports.getTestTemplate = getTestTemplate;
exports.getTests = getTests;
exports.isSubsetOf = isSubsetOf;
var _inputmask = _interopRequireDefault(__webpack_require__(7));
var _positioning = __webpack_require__(20);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function getLocator(tst, align) {
  // need to align the locators to be correct
  var locator = (tst.alternation != undefined ? tst.mloc["".concat(getDecisionTaker(tst), ":").concat(tst.alternation)] || tst.locator : tst.locator).join("");
  if (locator !== "") {
    locator = locator.split(":")[0]; // strip off alternation marker
    while (locator.length < align) locator += "0";
  }
  return locator;
}
function getDecisionTaker(tst) {
  var decisionTaker = tst.locator[tst.alternation];
  if (typeof decisionTaker === "string" && decisionTaker.length > 0) {
    // no decision taken ~ take first one as decider
    decisionTaker = decisionTaker.split(",")[0];
  }
  return decisionTaker !== undefined ? decisionTaker.toString() : "";
}

// tobe put on prototype?
function getPlaceholder(pos, test, returnPL) {
  var inputmask = this,
    opts = this.opts,
    maskset = this.maskset;
  test = test || getTest.call(inputmask, pos).match;
  if (test.placeholder !== undefined || returnPL === true) {
    if (test.placeholder !== "" && test["static"] === true && test.generated !== true) {
      // static and not dynamically generated ~ does not occur in regex mask ~ numeric alias def is not a valid entry
      var lvp = _positioning.getLastValidPosition.call(inputmask, pos),
        nextPos = _positioning.seekNext.call(inputmask, lvp);
      return (returnPL ? pos <= nextPos : pos < nextPos) ? opts.staticDefinitionSymbol && test["static"] ? test.nativeDef : test.def : typeof test.placeholder === "function" ? test.placeholder(opts) : test.placeholder;
    } else {
      return typeof test.placeholder === "function" ? test.placeholder(opts) : test.placeholder;
    }
  } else if (test["static"] === true) {
    if (pos > -1 && maskset.validPositions[pos] === undefined) {
      var tests = getTests.call(inputmask, pos),
        staticAlternations = [],
        prevTest;
      if (typeof opts.placeholder === "string" && tests.length > 1 + (tests[tests.length - 1].match.def === "" ? 1 : 0)) {
        for (var i = 0; i < tests.length; i++) {
          if (tests[i].match.def !== "" && tests[i].match.optionality !== true && tests[i].match.optionalQuantifier !== true && (tests[i].match["static"] === true || prevTest === undefined || tests[i].match.fn.test(prevTest.match.def, maskset, pos, true, opts) !== false)) {
            staticAlternations.push(tests[i]);
            if (tests[i].match["static"] === true) prevTest = tests[i];
            if (staticAlternations.length > 1) {
              if (/[0-9a-bA-Z]/.test(staticAlternations[0].match.def)) {
                return opts.placeholder.charAt(pos % opts.placeholder.length);
              }
            }
          }
        }
      }
    }
    return test.def;
  }
  return _typeof(opts.placeholder) === "object" ? test.def : opts.placeholder.charAt(pos % opts.placeholder.length);
}

// tobe put on prototype?
function getMaskTemplate(baseOnInput, minimalPos, includeMode, noJit, clearOptionalTail) {
  // includeMode true => input, undefined => placeholder, false => mask

  var inputmask = this,
    opts = this.opts,
    maskset = this.maskset,
    greedy = opts.greedy;
  if (clearOptionalTail && opts.greedy) {
    opts.greedy = false;
    inputmask.maskset.tests = {};
  }
  minimalPos = minimalPos || 0;
  var maskTemplate = [],
    ndxIntlzr,
    pos = 0,
    test,
    testPos,
    jitRenderStatic;
  do {
    if (baseOnInput === true && maskset.validPositions[pos]) {
      testPos = clearOptionalTail && maskset.validPositions[pos].match.optionality && maskset.validPositions[pos + 1] === undefined && (maskset.validPositions[pos].generatedInput === true || maskset.validPositions[pos].input == opts.skipOptionalPartCharacter && pos > 0) ? determineTestTemplate.call(inputmask, pos, getTests.call(inputmask, pos, ndxIntlzr, pos - 1)) : maskset.validPositions[pos];
      test = testPos.match;
      ndxIntlzr = testPos.locator.slice();
      maskTemplate.push(includeMode === true ? testPos.input : includeMode === false ? test.nativeDef : getPlaceholder.call(inputmask, pos, test));
    } else {
      testPos = getTestTemplate.call(inputmask, pos, ndxIntlzr, pos - 1);
      test = testPos.match;
      ndxIntlzr = testPos.locator.slice();
      var jitMasking = noJit === true ? false : opts.jitMasking !== false ? opts.jitMasking : test.jit;
      // check for groupSeparator is a hack for the numerics as we don't want the render of the groupSeparator beforehand
      jitRenderStatic = (jitRenderStatic || maskset.validPositions[pos - 1] /* && getTest.call(inputmask, pos + 1).match.def == "" */) && test["static"] && test.def !== opts.groupSeparator && test.fn === null;
      if (jitRenderStatic || jitMasking === false || jitMasking === undefined /* || pos < lvp */ || typeof jitMasking === "number" && isFinite(jitMasking) && jitMasking > pos) {
        maskTemplate.push(includeMode === false ? test.nativeDef : getPlaceholder.call(inputmask, maskTemplate.length, test));
      } else {
        jitRenderStatic = false;
      }
    }
    pos++;
  } while (test["static"] !== true || test.def !== "" || minimalPos > pos);
  if (maskTemplate[maskTemplate.length - 1] === "") {
    maskTemplate.pop(); // drop the last one which is empty
  }
  if (includeMode !== false ||
  // do not alter the masklength when just retrieving the maskdefinition
  maskset.maskLength === undefined) {
    // just make sure the maskLength gets initialized in all cases (needed for isValid)
    maskset.maskLength = pos - 1;
  }
  opts.greedy = greedy;
  return maskTemplate;
}

// tobe put on prototype?
function getTestTemplate(pos, ndxIntlzr, tstPs) {
  var inputmask = this,
    maskset = this.maskset;
  return maskset.validPositions[pos] || determineTestTemplate.call(inputmask, pos, getTests.call(inputmask, pos, ndxIntlzr ? ndxIntlzr.slice() : ndxIntlzr, tstPs));
}

// tobe put on prototype?
function determineTestTemplate(pos, tests) {
  var inputmask = this,
    opts = this.opts,
    lenghtOffset = 0,
    optionalityLevel = determineOptionalityLevel(pos, tests);
  pos = pos > 0 ? pos - 1 : 0;
  var altTest = getTest.call(inputmask, pos),
    targetLocator = getLocator(altTest),
    tstLocator,
    closest,
    bestMatch;
  if (opts.greedy && tests.length > 1 && tests[tests.length - 1].match.def === "") lenghtOffset = 1;
  // console.log(" optionality = " + optionalityLevel);
  // console.log(" - " + JSON.stringify(tests));
  for (var ndx = 0; ndx < tests.length - lenghtOffset; ndx++) {
    // find best matching
    var tst = tests[ndx];
    tstLocator = getLocator(tst, targetLocator.length);
    var distance = Math.abs(tstLocator - targetLocator); // CHECK THIS ~ PLEASE why not just the abs from tstlocator?

    if (tst.unMatchedAlternationStopped !== true || tests.filter(function (tst) {
      return tst.unMatchedAlternationStopped !== true;
    }).length <= 1) {
      // only skip when there are choices outside the alternation
      if (closest === undefined || tstLocator !== "" && distance < closest || bestMatch && !opts.greedy && bestMatch.match.optionality && bestMatch.match.optionality - optionalityLevel > 0 && bestMatch.match.newBlockMarker === "master" && (!tst.match.optionality || tst.match.optionality - optionalityLevel < 1 || !tst.match.newBlockMarker) || bestMatch && !opts.greedy && bestMatch.match.optionalQuantifier && !tst.match.optionalQuantifier) {
        closest = distance;
        bestMatch = tst;
      }
    }
  }
  return bestMatch;
}
function determineOptionalityLevel(pos, tests) {
  var optionalityLevel = 0,
    differentOptionalLevels = false;
  tests.forEach(function (test) {
    if (test.match.optionality) {
      if (optionalityLevel !== 0 && optionalityLevel !== test.match.optionality) differentOptionalLevels = true;
      if (optionalityLevel === 0 || optionalityLevel > test.match.optionality) {
        optionalityLevel = test.match.optionality;
      }
    }
  });
  if (optionalityLevel) {
    if (pos == 0) optionalityLevel = 0;else if (tests.length == 1) optionalityLevel = 0;else if (!differentOptionalLevels) optionalityLevel = 0;
  }
  return optionalityLevel;
}

// tobe put on prototype?
function getTest(pos, tests) {
  var inputmask = this,
    maskset = this.maskset;
  if (maskset.validPositions[pos]) {
    return maskset.validPositions[pos];
  }
  return (tests || getTests.call(inputmask, pos))[0];
}
function isSubsetOf(source, target, opts) {
  function expand(pattern) {
    var expanded = [],
      start = -1,
      end;
    for (var i = 0, l = pattern.length; i < l; i++) {
      if (pattern.charAt(i) === "-") {
        end = pattern.charCodeAt(i + 1);
        while (++start < end) expanded.push(String.fromCharCode(start));
      } else {
        start = pattern.charCodeAt(i);
        expanded.push(pattern.charAt(i));
      }
    }
    return expanded.join("");
  }
  if (source.match.def === target.match.nativeDef) return true;
  if ((opts.regex || source.match.fn instanceof RegExp && target.match.fn instanceof RegExp) && source.match["static"] !== true && target.match["static"] !== true) {
    // is regex a subset
    if (target.match.fn.source === ".") return true;
    return expand(target.match.fn.source.replace(/[[\]/]/g, "")).indexOf(expand(source.match.fn.source.replace(/[[\]/]/g, ""))) !== -1;
  }
  return false;
}

// tobe put on prototype?
function getTests(pos, ndxIntlzr, tstPs) {
  var inputmask = this,
    $ = this.dependencyLib,
    maskset = this.maskset,
    opts = this.opts,
    el = this.el,
    maskTokens = maskset.maskToken,
    testPos = ndxIntlzr ? tstPs : 0,
    ndxInitializer = ndxIntlzr ? ndxIntlzr.slice() : [0],
    matches = [],
    insertStop = false,
    latestMatch,
    cacheDependency = ndxIntlzr ? ndxIntlzr.join("") : "",
    unMatchedAlternation = false;
  function resolveTestFromToken(maskToken, ndxInitializer, loopNdx, quantifierRecurse) {
    // ndxInitializer contains a set of indexes to speedup searches in the mtokens
    function handleMatch(match, loopNdx, quantifierRecurse) {
      function isFirstMatch(latestMatch, tokenGroup) {
        var firstMatch = tokenGroup.matches.indexOf(latestMatch) === 0;
        if (!firstMatch) {
          tokenGroup.matches.every(function (match, ndx) {
            if (match.isQuantifier === true) {
              firstMatch = isFirstMatch(latestMatch, tokenGroup.matches[ndx - 1]);
            } else if (Object.prototype.hasOwnProperty.call(match, "matches")) firstMatch = isFirstMatch(latestMatch, match);
            if (firstMatch) return false;
            return true;
          });
        }
        return firstMatch;
      }
      function resolveNdxInitializer(pos, alternateNdx, targetAlternation) {
        var bestMatch,
          distance,
          locator,
          newAlternateMloc,
          alternateMloc = "".concat(alternateNdx, ":").concat(targetAlternation);
        if (maskset.tests[pos] || maskset.validPositions[pos]) {
          (maskset.validPositions[pos] ? [maskset.validPositions[pos]] : maskset.tests[pos]).every(function (lmnt, ndx) {
            if (lmnt.mloc[alternateMloc]) {
              bestMatch = lmnt;
              return false; // break
            }

            // check if an entry in mloc match the alternateNdx on targetAlternation
            var mlocMatches = Object.values(lmnt.mloc).filter(
            // eslint-disable-next-line eqeqeq
            function (m) {
              return m[targetAlternation] == alternateNdx;
            });
            // for each mlocMatch check the calculated distance
            mlocMatches.every(function (mlocMatch) {
              var mlocMatchL = mlocMatch.join("").split(":")[0]; // strip off alternation marker
              locator = locator || mlocMatchL;
              while (mlocMatchL.length < locator.length) mlocMatchL += "0";
              var mlocDistance = Math.abs(mlocMatchL);
              if (bestMatch === undefined || mlocDistance < distance) {
                distance = mlocDistance;
                bestMatch = lmnt;

                // key from mlocMatch
                newAlternateMloc = Object.entries(lmnt.mloc).find(function (entry) {
                  return entry[1].toString() === mlocMatch.toString();
                })[0];
              }
              return true; // continue
            });
            return true;
          });
        }
        if (bestMatch) {
          if (targetAlternation === undefined) {
            alternateMloc = "".concat(alternateNdx, ":").concat(bestMatch.alternation);
          }
          var bestMatchAltIndex = "".concat(bestMatch.locator[bestMatch.alternation], ":").concat(bestMatch.alternation),
            slocator = bestMatch.mloc[newAlternateMloc || alternateMloc] || bestMatch.mloc[bestMatchAltIndex] || bestMatch.locator;
          if (slocator[slocator.length - 1].toString().indexOf(":") !== -1) {
            // eslint-disable-next-line no-unused-vars
            var alternation = slocator.pop();
            // targetAlternation = parseInt(alternation.substring(1));
          }
          var sliceStart = parseInt(
          // newAlternateMloc
          //   ? newAlternateMloc.split(":")[1]
          //   : targetAlternation ||
          bestMatch.alternation) + 1;

          // console.log(
          //   "resolveNdxInitializer",
          //   pos,
          //   alternateNdx,
          //   targetAlternation,
          //   slocator,
          //   sliceStart,
          //   bestMatch
          // );

          return slocator.slice(sliceStart);
        } else {
          return targetAlternation !== undefined ? resolveNdxInitializer(pos, alternateNdx) : undefined;
        }
      }
      function staticCanMatchDefinition(source, target) {
        return source.match["static"] === true && target.match["static"] !== true ? target.match.fn.test(source.match.def, maskset, pos, false, opts, false) : false;
      }

      // mergelocators for retrieving the correct locator match when merging
      function setMergeLocators(targetMatch, altMatch) {
        function mergeLoc(altNdx) {
          targetMatch.mloc = targetMatch.mloc || {};
          var locNdx = targetMatch.locator[altNdx];
          if (locNdx === undefined) {
            targetMatch.alternation = undefined;
          } else {
            if (altMatch === undefined) {
              if (typeof locNdx === "string") locNdx = locNdx.split(",")[0];
              locNdx = "".concat(locNdx, ":").concat(altNdx);
              if (targetMatch.mloc[locNdx] === undefined) {
                targetMatch.mloc[locNdx] = targetMatch.locator.slice();
                targetMatch.mloc[locNdx].push(":".concat(altNdx)); // add alternation index
              }
            } else {
              var offset = 0;
              for (var ndx in altMatch.mloc) {
                // if (typeof ndx === "string") ndx = parseInt(ndx.split(",")[0]);
                if (targetMatch.mloc[ndx] === undefined) {
                  targetMatch.mloc[ndx] = altMatch.mloc[ndx];
                } else {
                  do {
                    if (targetMatch.mloc[ndx + offset] === undefined) {
                      targetMatch.mloc[ndx + offset] = altMatch.mloc[ndx];
                      break;
                    }
                  } while (targetMatch.mloc[ndx + offset++] !== undefined);
                }
              }
              targetMatch.locator = mergeLocators(testPos, [targetMatch, altMatch]);
            }
            if (targetMatch.alternation > altNdx) {
              // if the alternation index is higher than the current one resolve it to the alternation
              targetMatch.alternation = altNdx;
            }
            return true;
          }
          return false;
        }
        var alternationNdx = targetMatch.alternation,
          shouldMerge = altMatch === undefined || alternationNdx <= altMatch.alternation && targetMatch.locator[alternationNdx].toString().indexOf(altMatch.locator[alternationNdx]) === -1;
        if (!shouldMerge && alternationNdx > altMatch.alternation) {
          for (var i = 0; i < alternationNdx; i++) {
            if (targetMatch.locator[i] !== altMatch.locator[i]) {
              alternationNdx = i;
              shouldMerge = true;
              break;
            }
          }
        }
        if (shouldMerge) {
          return mergeLoc(alternationNdx);
        }
        return false;
      }
      function isSameLevel(targetMatch, altMatch) {
        if (targetMatch.locator.length !== altMatch.locator.length) {
          return false;
        }
        for (var locNdx = targetMatch.alternation + 1; locNdx < targetMatch.locator.length; locNdx++) {
          if (targetMatch.locator[locNdx] !== altMatch.locator[locNdx]) {
            return false;
          }
        }
        return true;
      }
      function handleGroup() {
        match = handleMatch(maskToken.matches[maskToken.matches.indexOf(match) + 1], loopNdx, quantifierRecurse);
        if (match) return true;
      }
      function handleOptional() {
        var optionalToken = match,
          mtchsNdx = matches.length;
        match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse);
        if (matches.length > 0) {
          // check on matches.length instead of match to handle quantifier in a recursive call
          // mark optionality in matches
          matches.forEach(function (mtch, ndx) {
            if (ndx >= mtchsNdx) {
              mtch.match.optionality = mtch.match.optionality ? mtch.match.optionality + 1 : 1;
            }
          });
          latestMatch = matches[matches.length - 1].match;
          if (quantifierRecurse === undefined && isFirstMatch(latestMatch, optionalToken)) {
            // prevent loop see #698
            insertStop = true; // insert a stop
            testPos = pos; // match the position after the group
          } else {
            return match; // make the loop continue when it is deliberately by a quantifier
          }
        }
      }
      function handleAlternator() {
        function isUnmatchedAlternation(alternateToken) {
          var matchesLength = alternateToken.matches[0].matches ? alternateToken.matches[0].matches.length : 1;
          var matchesNewLength;
          for (var alndx = 0; alndx < alternateToken.matches.length; alndx++) {
            matchesNewLength = alternateToken.matches[alndx].matches ? alternateToken.matches[alndx].matches.length : 1;
            if (matchesLength !== matchesNewLength) {
              break;
            }
          }
          return matchesLength !== matchesNewLength;
        }
        inputmask.hasAlternator = true;
        var alternateToken = match,
          malternateMatches = [],
          currentMatches = matches.slice(),
          loopNdxCnt = loopNdx.length,
          altIndex = ndxInitializer.length > 0 ? ndxInitializer.shift() : -1;
        var maltMatches;
        if (altIndex === -1 || typeof altIndex === "string") {
          var currentPos = testPos,
            ndxInitializerClone = ndxInitializer.slice();
          var altIndexArr = [],
            amndx;
          if (typeof altIndex === "string") {
            altIndexArr = altIndex.split(",");
          } else {
            for (amndx = 0; amndx < alternateToken.matches.length; amndx++) {
              altIndexArr.push(amndx.toString());
            }
          }
          if (maskset.excludes[pos] !== undefined) {
            var altIndexArrClone = altIndexArr.slice();
            for (var i = 0, exl = maskset.excludes[pos].length; i < exl; i++) {
              var excludeSet = maskset.excludes[pos][i].toString().split(":");
              if (loopNdx.length == excludeSet[1]) {
                altIndexArr.splice(altIndexArr.indexOf(excludeSet[0]), 1);
              }
            }
            if (altIndexArr.length === 0) {
              // fully alternated => reset
              delete maskset.excludes[pos];
              altIndexArr = altIndexArrClone;
            }
          }
          if (opts.keepStatic === true || isFinite(parseInt(opts.keepStatic)) && currentPos >= opts.keepStatic) altIndexArr = altIndexArr.slice(0, 1);
          for (var ndx = 0; ndx < altIndexArr.length; ndx++) {
            amndx = parseInt(altIndexArr[ndx]);
            matches = [];
            // set the correct ndxInitializer
            ndxInitializer = typeof altIndex === "string" ? resolveNdxInitializer(testPos, amndx, loopNdxCnt) || ndxInitializerClone.slice() : ndxInitializerClone.slice();
            // console.log("ndxInit", ndxInitializer);
            var tokenMatch = alternateToken.matches[amndx];
            if (tokenMatch && handleMatch(tokenMatch, [amndx].concat(loopNdx), quantifierRecurse)) {
              match = true;
            } else {
              if (ndx === 0) {
                unMatchedAlternation = isUnmatchedAlternation(alternateToken);
              }
              if (tokenMatch && tokenMatch.matches && tokenMatch.matches.length > alternateToken.matches[0].matches.length) {
                break;
              }
            }
            maltMatches = matches.slice();
            testPos = currentPos;
            matches = [];

            // fuzzy merge matches
            for (var ndx1 = 0; ndx1 < maltMatches.length; ndx1++) {
              var altMatch = maltMatches[ndx1],
                dropMatch = false;
              altMatch.alternation = altMatch.alternation || loopNdxCnt;
              setMergeLocators(altMatch);
              for (var ndx2 = 0; ndx2 < malternateMatches.length; ndx2++) {
                var altMatch2 = malternateMatches[ndx2];
                if (typeof altIndex !== "string" || altMatch.alternation !== undefined && altIndexArr.includes(altMatch.locator[altMatch.alternation].toString())) {
                  if (altMatch.match.nativeDef === altMatch2.match.nativeDef) {
                    dropMatch = true;
                    setMergeLocators(altMatch2, altMatch);
                    break;
                  } else if (isSubsetOf(altMatch, altMatch2, opts)) {
                    if (setMergeLocators(altMatch, altMatch2)) {
                      dropMatch = true;
                      malternateMatches.splice(malternateMatches.indexOf(altMatch2), 0, altMatch);
                    }
                    break;
                  } else if (isSubsetOf(altMatch2, altMatch, opts)) {
                    setMergeLocators(altMatch2, altMatch);
                    break;
                  } else if (staticCanMatchDefinition(altMatch, altMatch2)) {
                    if (!isSameLevel(altMatch, altMatch2) && el.inputmask.userOptions.keepStatic === undefined) {
                      opts.keepStatic = true;
                    } else if (setMergeLocators(altMatch, altMatch2)) {
                      // insert match above general match
                      dropMatch = true;
                      malternateMatches.splice(malternateMatches.indexOf(altMatch2), 0, altMatch);
                    }
                    break;
                  } else if (staticCanMatchDefinition(altMatch2, altMatch)) {
                    setMergeLocators(altMatch2, altMatch);
                    break;
                  }
                }
              }
              if (!dropMatch) {
                malternateMatches.push(altMatch);
              }
            }
          }
          matches = currentMatches.concat(malternateMatches);
          testPos = pos;
          insertStop = matches.length > 0 && unMatchedAlternation; // insert a stopelemnt when there is an alternate - needed for non-greedy option
          match = malternateMatches.length > 0 && !unMatchedAlternation; // set correct match state

          if (unMatchedAlternation && insertStop && !match) {
            // mark matches with unMatchedAlternationStopped
            matches.forEach(function (mtch, ndx) {
              mtch.unMatchedAlternationStopped = true;
            });
          }

          // cloneback
          ndxInitializer = ndxInitializerClone.slice();
        } else {
          match = handleMatch(alternateToken.matches[altIndex] || maskToken.matches[altIndex], [altIndex].concat(loopNdx), quantifierRecurse);
        }
        if (match) {
          return true;
        }
      }
      function handleQuantifier() {
        var qt = match;
        var breakloop = false;
        var _loop = function _loop(qndx) {
            var tokenGroup = maskToken.matches[maskToken.matches.indexOf(qt) - 1];
            match = handleMatch(tokenGroup, [qndx].concat(loopNdx), tokenGroup); // set the tokenGroup as quantifierRecurse marker
            if (match) {
              matches.forEach(function (mtch, ndx) {
                if (IsMatchOf(tokenGroup, mtch.match)) latestMatch = mtch.match;else latestMatch = matches[matches.length - 1].match;

                // mark optionality
                // TODO FIX RECURSIVE QUANTIFIERS
                latestMatch.optionalQuantifier = qndx >= qt.quantifier.min;
                // console.log(pos + " " + qt.quantifier.min + " " + latestMatch.optionalQuantifier);
                // qndx + 1 as the index starts from 0
                latestMatch.jit = (qndx + 1) * (tokenGroup.matches.indexOf(latestMatch) + 1) > qt.quantifier.jit;
                if (latestMatch.optionalQuantifier && isFirstMatch(latestMatch, tokenGroup)) {
                  insertStop = true;
                  testPos = pos; // match the position after the group
                  if (opts.greedy && maskset.validPositions[pos - 1] == undefined && qndx > qt.quantifier.min && ["*", "+"].indexOf(qt.quantifier.max) != -1) {
                    matches.pop();
                    cacheDependency = undefined;
                  }
                  breakloop = true; // stop quantifierloop && search for next possible match
                  match = false; // mark match to false to make sure the loop in optionals continues
                }
                if (!breakloop && latestMatch.jit /* && !latestMatch.optionalQuantifier */) {
                  // always set jitOffset, isvalid checks when to apply
                  maskset.jitOffset[pos] = tokenGroup.matches.length - tokenGroup.matches.indexOf(latestMatch);
                }
              });
              if (breakloop) return 0; // break
              // search for next possible match
              return {
                v: true
              };
            }
          },
          _ret;
        for (var qndx = ndxInitializer.length > 0 ? ndxInitializer.shift() : 0; qndx < (isNaN(qt.quantifier.max) ? qndx + 1 : qt.quantifier.max) && testPos <= pos; qndx++) {
          _ret = _loop(qndx);
          if (_ret === 0) break;
          if (_ret) return _ret.v;
        }
      }
      if (testPos > pos + opts._maxTestPos) {
        throw new Error("Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. ".concat(maskset.mask));
      }
      if (testPos === pos && match.matches === undefined) {
        matches.push({
          match: match,
          locator: loopNdx.reverse(),
          cd: cacheDependency,
          mloc: {}
        });
        if (match.optionality && quantifierRecurse === undefined && (opts.definitions && opts.definitions[match.nativeDef] && opts.definitions[match.nativeDef].optional || _inputmask["default"].prototype.definitions[match.nativeDef] && _inputmask["default"].prototype.definitions[match.nativeDef].optional)) {
          // prevent loop see #698
          insertStop = true; // insert a stop
          testPos = pos; // match the position after the group
        } else {
          return true;
        }
      } else if (match.matches !== undefined) {
        if (match.isGroup && quantifierRecurse !== match) {
          // when a group pass along to the quantifier
          return handleGroup();
        } else if (match.isOptional) {
          return handleOptional();
        } else if (match.isAlternator) {
          return handleAlternator();
        } else if (match.isQuantifier && quantifierRecurse !== maskToken.matches[maskToken.matches.indexOf(match) - 1]) {
          return handleQuantifier();
        } else {
          match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse);
          if (match) return true;
        }
      } else {
        testPos++;
      }
    }

    // the offset is set in the quantifierloop when git masking is used
    for (var tndx = ndxInitializer.length > 0 ? ndxInitializer.shift() : 0; tndx < maskToken.matches.length; tndx++) {
      if (maskToken.matches[tndx].isQuantifier !== true) {
        var match = handleMatch(maskToken.matches[tndx], [tndx].concat(loopNdx), quantifierRecurse);
        if (match && testPos === pos) {
          return match;
        } else if (testPos > pos) {
          break;
        }
      }
    }
  }
  function IsMatchOf(tokenGroup, match) {
    var isMatch = tokenGroup.matches.indexOf(match) != -1;
    if (!isMatch) {
      tokenGroup.matches.forEach(function (mtch, ndx) {
        if (mtch.matches !== undefined && !isMatch) {
          isMatch = IsMatchOf(mtch, match);
        }
      });
    }
    return isMatch;
  }
  function mergeLocators(pos, tests) {
    var locator = [];
    if (!Array.isArray(tests)) tests = [tests];
    if (tests.length > 0) {
      if (tests[0].alternation === undefined || opts.keepStatic === true) {
        locator = determineTestTemplate.call(inputmask, pos, tests.slice()).locator.slice();
        if (locator.length === 0) locator = tests[0].locator.slice();
      } else {
        // alternation = tests[0].locator.length - 1;
        tests.forEach(function (mtch) {
          Object.values(mtch.mloc).forEach(function (mloc) {
            mloc.forEach(function (loc, locNdx) {
              // if (locNdx > alternation) return;
              var mergedPos = locator[locNdx];
              if (loc.toString().includes(":") || mergedPos && mergedPos.toString().includes(":")) return;
              if (mergedPos === undefined) {
                locator[locNdx] = loc;
              } else if (!mergedPos.toString().includes(loc)) {
                locator[locNdx] = locator[locNdx] + "," + loc;
              }
            });
          });
        });
      }
    }
    // console.log("mergeLocators", pos, tests, locator);
    return locator;
  }
  if (pos > -1) {
    if (ndxIntlzr === undefined) {
      // determine index initializer
      var previousPos = pos - 1,
        test;
      while ((test = maskset.validPositions[previousPos] || maskset.tests[previousPos]) === undefined && previousPos > -1) {
        previousPos--;
      }
      if (test !== undefined && previousPos > -1) {
        ndxInitializer = mergeLocators(previousPos, test);
        cacheDependency = ndxInitializer.join("");
        testPos = previousPos;
      }
    }
    if (maskset.tests[pos] && maskset.tests[pos][0].cd === cacheDependency) {
      // cacheDependency is set on all tests, just check on the first
      return maskset.tests[pos];
    }
    for (var mtndx = ndxInitializer.shift(); mtndx < maskTokens.length; mtndx++) {
      var match = resolveTestFromToken(maskTokens[mtndx], ndxInitializer, [mtndx]);
      if (match && testPos === pos || testPos > pos) {
        break;
      }
    }
  }
  if (matches.length === 0 || insertStop) {
    matches.push({
      match: {
        fn: null,
        "static": true,
        optionality: false,
        casing: null,
        def: "",
        placeholder: ""
      },
      // mark when there are unmatched alternations  ex: mask: "(a|aa)"
      // this will result in the least distance to select the correct test result in determineTestTemplate
      locator: unMatchedAlternation && matches.filter(function (tst) {
        return tst.unMatchedAlternationStopped !== true;
      }).length === 0 ? [0] : [],
      mloc: {},
      cd: cacheDependency
    });
  }
  var result;
  if (ndxIntlzr !== undefined && maskset.tests[pos]) {
    // prioritize full tests for caching
    result = $.extend(true, [], matches);
  } else {
    // console.log("stored " + pos + " - " + JSON.stringify(matches));
    maskset.tests[pos] = $.extend(true, [], matches); // set a clone to prevent overwriting some props
    result = maskset.tests[pos];
  }
  console.log(pos, JSON.stringify(matches));
  // cleanup optionality marking
  matches.forEach(function (t) {
    t.match.optionality = t.match.defOptionality || false;
  });
  return result;
}

/***/ }),
/* 23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.mask = mask;
var _environment = __webpack_require__(17);
var _eventhandlers = __webpack_require__(18);
var _eventruler = __webpack_require__(15);
var _inputHandling = __webpack_require__(16);
var _positioning = __webpack_require__(20);
var _validation = __webpack_require__(21);
// todo put on the prototype?
function mask() {
  var inputmask = this,
    opts = this.opts,
    el = this.el,
    $ = this.dependencyLib;
  function isElementTypeSupported(input, opts) {
    function patchValueProperty(npt) {
      var valueGet, valueSet;
      function patchValhook(type) {
        if ($.valHooks && ($.valHooks[type] === undefined || $.valHooks[type].inputmaskpatch !== true)) {
          var valhookGet = $.valHooks[type] && $.valHooks[type].get ? $.valHooks[type].get : function (elem) {
              return elem.value;
            },
            valhookSet = $.valHooks[type] && $.valHooks[type].set ? $.valHooks[type].set : function (elem, value) {
              elem.value = value;
              return elem;
            };
          $.valHooks[type] = {
            get: function get(elem) {
              if (elem.inputmask) {
                if (elem.inputmask.opts.autoUnmask) {
                  return elem.inputmask.unmaskedvalue();
                } else {
                  var result = valhookGet(elem);
                  return _positioning.getLastValidPosition.call(inputmask, undefined, undefined, elem.inputmask.maskset.validPositions) !== -1 || opts.nullable !== true ? result : "";
                }
              } else {
                return valhookGet(elem);
              }
            },
            set: function set(elem, value) {
              var result = valhookSet(elem, value);
              if (elem.inputmask) {
                (0, _inputHandling.applyInputValue)(elem, value);
              }
              return result;
            },
            inputmaskpatch: true
          };
        }
      }
      function getter() {
        if (this.inputmask) {
          return this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : _positioning.getLastValidPosition.call(inputmask) !== -1 || opts.nullable !== true ? this.getRootNode().activeElement === this && opts.clearMaskOnLostFocus ? (inputmask.isRTL ? _inputHandling.clearOptionalTail.call(inputmask, _positioning.getBuffer.call(inputmask).slice()).reverse() : _inputHandling.clearOptionalTail.call(inputmask, _positioning.getBuffer.call(inputmask).slice())).join("") : valueGet.call(this) : "";
        } else {
          return valueGet.call(this);
        }
      }
      function setter(value) {
        valueSet.call(this, value);
        if (this.inputmask) {
          (0, _inputHandling.applyInputValue)(this, value);
        }
      }
      function installNativeValueSetFallback(npt) {
        _eventruler.EventRuler.on(npt, "mouseenter", function () {
          var input = this,
            value = input.inputmask._valueGet(true),
            bufferValue = (input.inputmask.isRTL ? _positioning.getBuffer.call(input.inputmask).slice().reverse() : _positioning.getBuffer.call(input.inputmask)).join("");
          if (value != bufferValue) {
            (0, _inputHandling.applyInputValue)(input, value);
          }
        });
      }
      if (!npt.inputmask.__valueGet) {
        if (opts.noValuePatching !== true) {
          if (Object.getOwnPropertyDescriptor) {
            var valueProperty = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(npt), "value") : undefined;
            if (valueProperty && valueProperty.get && valueProperty.set) {
              valueGet = valueProperty.get;
              valueSet = valueProperty.set;
              Object.defineProperty(npt, "value", {
                get: getter,
                set: setter,
                configurable: true
              });
            } else if (npt.tagName.toLowerCase() !== "input") {
              valueGet = function valueGet() {
                return this.textContent;
              };
              valueSet = function valueSet(value) {
                this.textContent = value;
              };
              Object.defineProperty(npt, "value", {
                get: getter,
                set: setter,
                configurable: true
              });
            }
          } else if (document.__lookupGetter__ && npt.__lookupGetter__("value")) {
            valueGet = npt.__lookupGetter__("value");
            valueSet = npt.__lookupSetter__("value");
            npt.__defineGetter__("value", getter);
            npt.__defineSetter__("value", setter);
          }
          npt.inputmask.__valueGet = valueGet; // store native property getter
          npt.inputmask.__valueSet = valueSet; // store native property setter
        }
        npt.inputmask._valueGet = function (overruleRTL) {
          return inputmask.isRTL && overruleRTL !== true ? valueGet.call(this.el).split("").reverse().join("") : valueGet.call(this.el);
        };
        npt.inputmask._valueSet = function (value, overruleRTL) {
          // null check is needed for IE8 => otherwise converts to "null"
          valueSet.call(this.el, value === null || value === undefined ? "" : overruleRTL !== true && inputmask.isRTL ? value.split("").reverse().join("") : value);
        };
        if (valueGet === undefined) {
          // jquery.val fallback
          valueGet = function valueGet() {
            return this.value;
          };
          valueSet = function valueSet(value) {
            this.value = value;
          };
          patchValhook(npt.type);
          installNativeValueSetFallback(npt);
        }
      }
    }
    var elementType = input.getAttribute("type"),
      isSupported = input.tagName.toLowerCase() === "input" && opts.supportsInputType.includes(elementType) || input.isContentEditable || input.tagName.toLowerCase() === "textarea";
    if (!isSupported) {
      if (input.tagName.toLowerCase() === "input") {
        var _el = document.createElement("input");
        _el.setAttribute("type", elementType);
        isSupported = _el.type === "text"; // apply mask only if the type is not natively supported
        _el = null;
      } else {
        isSupported = "partial";
      }
    }
    if (isSupported !== false) {
      patchValueProperty(input);
    } else {
      input.inputmask = undefined;
    }
    return isSupported;
  }

  // unbind all events - to make sure that no other mask will interfere when re-masking
  _eventruler.EventRuler.off(el);
  var isSupported = isElementTypeSupported(el, opts);
  if (isSupported !== false) {
    inputmask.originalPlaceholder = el.placeholder;

    // read maxlength prop from el
    inputmask.maxLength = el !== undefined ? el.maxLength : undefined;
    if (inputmask.maxLength === -1) inputmask.maxLength = undefined;
    if ("inputMode" in el && el.getAttribute("inputmode") === null) {
      el.inputMode = opts.inputmode;
      el.setAttribute("inputmode", opts.inputmode);
    }
    if (isSupported === true) {
      opts.showMaskOnFocus = opts.showMaskOnFocus && ["cc-number", "cc-exp"].indexOf(el.autocomplete) === -1;
      if (_environment.iphone) {
        // selecting the caret shows as a selection on iphone
        opts.insertModeVisual = false;
        // disable autocorrect
        el.setAttribute("autocorrect", "off");
      }

      // bind events
      _eventruler.EventRuler.on(el, "submit", _eventhandlers.EventHandlers.submitEvent);
      _eventruler.EventRuler.on(el, "reset", _eventhandlers.EventHandlers.resetEvent);
      _eventruler.EventRuler.on(el, "blur", _eventhandlers.EventHandlers.blurEvent);
      _eventruler.EventRuler.on(el, "focus", _eventhandlers.EventHandlers.focusEvent);
      _eventruler.EventRuler.on(el, "invalid", _eventhandlers.EventHandlers.invalidEvent);
      _eventruler.EventRuler.on(el, "click", _eventhandlers.EventHandlers.clickEvent);
      _eventruler.EventRuler.on(el, "mouseleave", _eventhandlers.EventHandlers.mouseleaveEvent);
      _eventruler.EventRuler.on(el, "mouseenter", _eventhandlers.EventHandlers.mouseenterEvent);
      _eventruler.EventRuler.on(el, "paste", _eventhandlers.EventHandlers.pasteEvent);
      _eventruler.EventRuler.on(el, "cut", _eventhandlers.EventHandlers.cutEvent);
      _eventruler.EventRuler.on(el, "complete", opts.oncomplete);
      _eventruler.EventRuler.on(el, "incomplete", opts.onincomplete);
      _eventruler.EventRuler.on(el, "cleared", opts.oncleared);
      if (opts.inputEventOnly !== true) {
        _eventruler.EventRuler.on(el, "keydown", _eventhandlers.EventHandlers.keyEvent);
      }
      if (_environment.mobile || opts.inputEventOnly) {
        el.removeAttribute("maxLength");
      }
      _eventruler.EventRuler.on(el, "input", _eventhandlers.EventHandlers.inputFallBackEvent);
      // EventRuler.on(el, "beforeinput", EventHandlers.beforeInputEvent); //https://github.com/w3c/input-events - to implement
    }
    _eventruler.EventRuler.on(el, "setvalue", _eventhandlers.EventHandlers.setValueEvent);

    // apply mask
    inputmask.applyMaskHook === undefined || inputmask.applyMaskHook();
    _positioning.getBufferTemplate.call(inputmask).join(""); // initialize the buffer and getmasklength
    inputmask.undoValue = inputmask._valueGet(true);
    var activeElement = el.getRootNode().activeElement;
    if (el.inputmask._valueGet(true) !== "" || opts.clearMaskOnLostFocus === false || activeElement === el) {
      (0, _inputHandling.applyInputValue)(el, el.inputmask._valueGet(true));
      var buffer = _positioning.getBuffer.call(inputmask).slice();
      if (_validation.isComplete.call(inputmask, buffer) === false) {
        if (opts.clearIncomplete) {
          _positioning.resetMaskSet.call(inputmask, false);
        }
      }
      if (opts.clearMaskOnLostFocus && activeElement !== el) {
        if (_positioning.getLastValidPosition.call(inputmask) === -1) {
          buffer = [];
        } else {
          _inputHandling.clearOptionalTail.call(inputmask, buffer);
        }
      }
      if (opts.clearMaskOnLostFocus === false || opts.showMaskOnFocus && activeElement === el || el.inputmask._valueGet(true) !== "") {
        (0, _inputHandling.writeBuffer)(el, buffer);
      }
      if (activeElement === el) {
        // position the caret when in focus
        _positioning.caret.call(inputmask, el, _positioning.seekNext.call(inputmask, _positioning.getLastValidPosition.call(inputmask)));
      } else {
        _positioning.caret.call(inputmask, el, 0);
      }
    }
  }
}

/***/ }),
/* 24 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.analyseMask = analyseMask;
exports.generateMaskSet = generateMaskSet;
var _inputmask = _interopRequireDefault(__webpack_require__(10));
var _escapeRegex = __webpack_require__(25);
var _inputmask2 = _interopRequireDefault(__webpack_require__(7));
var _masktoken = _interopRequireDefault(__webpack_require__(26));
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function generateMaskSet(opts, nocache) {
  var ms;
  function preProcessMask(mask, _ref) {
    var repeat = _ref.repeat,
      groupmarker = _ref.groupmarker,
      quantifiermarker = _ref.quantifiermarker,
      keepStatic = _ref.keepStatic;
    if (repeat > 0 || repeat === "*" || repeat === "+") {
      var repeatStart = repeat === "*" ? 0 : repeat === "+" ? 1 : repeat;
      if (repeatStart !== repeat) {
        mask = groupmarker[0] + mask + groupmarker[1] + quantifiermarker[0] + repeatStart + "," + repeat + quantifiermarker[1];
      } else {
        // repeat the mask n times
        var msk = mask;
        for (var i = 1; i < repeatStart; i++) {
          mask += msk;
        }
      }
    }
    if (keepStatic === true) {
      var optionalRegex = "(.)\\[([^\\]]*)\\]",
        // "(?<p1>.)\\[(?<p2>[^\\]]*)\\]", remove named capture group @2428
        maskMatches = mask.match(new RegExp(optionalRegex, "g"));
      maskMatches && maskMatches.forEach(function (m, i) {
        var _m$split = m.split("["),
          _m$split2 = _slicedToArray(_m$split, 2),
          p1 = _m$split2[0],
          p2 = _m$split2[1];
        p2 = p2.replace("]", "");
        mask = mask.replace(new RegExp("".concat((0, _escapeRegex.escapeRegex)(p1), "\\[").concat((0, _escapeRegex.escapeRegex)(p2), "\\]")), p1.charAt(0) === p2.charAt(0) ? "(".concat(p1, "|").concat(p1).concat(p2, ")") : "".concat(p1, "[").concat(p2, "]"));
        // console.log(mask);
      });
    }
    return mask;
  }
  function generateMask(mask, metadata, opts) {
    var regexMask = false;
    if (mask === null || mask === "") {
      regexMask = opts.regex !== null;
      if (regexMask) {
        mask = opts.regex;
        mask = mask.replace(/^(\^)(.*)(\$)$/, "$2");
      } else {
        regexMask = true;
        mask = ".*";
      }
    }
    if (mask.length === 1 && opts.greedy === false && opts.repeat !== 0) {
      opts.placeholder = "";
    } // hide placeholder with single non-greedy mask
    mask = preProcessMask(mask, opts);

    // console.log(mask);
    var masksetDefinition, maskdefKey;
    maskdefKey = regexMask ? "regex_" + opts.regex : opts.numericInput ? mask.split("").reverse().join("") : mask;
    if (opts.keepStatic !== null) {
      // keepstatic modifies the output from the testdefinitions ~ so differentiate in the maskcache
      maskdefKey = "ks_" + opts.keepStatic + maskdefKey;
    }
    if (_typeof(opts.placeholder) === "object") {
      // placeholder object modifies the output from the testdefinitions ~ so differentiate in the maskcache
      maskdefKey = "ph_" + JSON.stringify(opts.placeholder) + maskdefKey;
    }
    if (_inputmask2["default"].prototype.masksCache[maskdefKey] === undefined || nocache === true) {
      masksetDefinition = {
        mask: mask,
        maskToken: _inputmask2["default"].prototype.analyseMask(mask, regexMask, opts),
        validPositions: [],
        _buffer: undefined,
        buffer: undefined,
        tests: {},
        excludes: {},
        // excluded alternations
        metadata: metadata,
        maskLength: undefined,
        jitOffset: {}
      };
      if (nocache !== true) {
        _inputmask2["default"].prototype.masksCache[maskdefKey] = masksetDefinition;
        masksetDefinition = _inputmask["default"].extend(true, {}, _inputmask2["default"].prototype.masksCache[maskdefKey]);
      }
    } else {
      masksetDefinition = _inputmask["default"].extend(true, {}, _inputmask2["default"].prototype.masksCache[maskdefKey]);
    }
    return masksetDefinition;
  }
  if (typeof opts.mask === "function") {
    // allow mask to be a preprocessing fn - should return a valid mask
    opts.mask = opts.mask(opts);
  }
  if (Array.isArray(opts.mask)) {
    if (opts.mask.length > 1) {
      if (opts.keepStatic === null) {
        // enable by default when passing multiple masks when the option is not explicitly specified
        opts.keepStatic = true;
      }
      var altMask = opts.groupmarker[0];
      (opts.isRTL ? opts.mask.reverse() : opts.mask).forEach(function (msk) {
        if (altMask.length > 1) {
          altMask += opts.alternatormarker;
        }
        if (msk.mask !== undefined && typeof msk.mask !== "function") {
          altMask += msk.mask;
        } else {
          altMask += msk;
        }
      });
      altMask += opts.groupmarker[1];
      // console.log(altMask);
      return generateMask(altMask, opts.mask, opts);
    } else {
      opts.mask = opts.mask.pop();
    }
  }
  if (opts.mask && opts.mask.mask !== undefined && typeof opts.mask.mask !== "function") {
    ms = generateMask(opts.mask.mask, opts.mask, opts);
  } else {
    ms = generateMask(opts.mask, opts.mask, opts);
  }
  if (opts.keepStatic === null) opts.keepStatic = false;
  return ms;
}
function analyseMask(mask, regexMask, opts) {
  var tokenizer = /(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g,
    // Thx to https://github.com/slevithan/regex-colorizer for the regexTokenizer regex
    regexTokenizer = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,
    currentToken = new _masktoken["default"](),
    openenings = [],
    maskTokens = [];
  var escaped = false,
    match,
    m,
    openingToken,
    currentOpeningToken,
    alternator,
    lastMatch,
    closeRegexGroup = false;

  // test definition => {fn: RegExp/function, static: true/false optionality: bool, newBlockMarker: bool, casing: null/upper/lower, def: definitionSymbol, placeholder: placeholder, mask: real maskDefinition}
  function insertTestDefinition(mtoken, element, position) {
    position = position !== undefined ? position : mtoken.matches.length;
    // console.log(element, position, currentToken.matches.length);
    // if (typeof opts.placeholder === "string")
    // 	console.log(opts.placeholder.charAt(currentToken.matches.length % opts.placeholder.length));
    var prevMatch = mtoken.matches[position - 1],
      flag = opts.casing ? "i" : "";
    if (regexMask) {
      if (element.indexOf("[") === 0 || escaped && /\\d|\\s|\\w|\\p/i.test(element) || element === ".") {
        if (/\\p\{.*}/i.test(element)) flag += "u";
        mtoken.matches.splice(position++, 0, {
          fn: new RegExp(element, flag),
          "static": false,
          optionality: false,
          newBlockMarker: prevMatch === undefined ? "master" : prevMatch.def !== element,
          casing: null,
          def: element,
          placeholder: _typeof(opts.placeholder) === "object" ? opts.placeholder[currentToken.matches.length] : undefined,
          nativeDef: element
        });
      } else {
        if (escaped) element = element[element.length - 1];
        element.split("").forEach(function (lmnt, ndx) {
          prevMatch = mtoken.matches[position - 1];
          mtoken.matches.splice(position++, 0, {
            fn: /[a-z]/i.test(opts.staticDefinitionSymbol || lmnt) ? new RegExp("[" + (opts.staticDefinitionSymbol || lmnt) + "]", flag) : null,
            "static": true,
            optionality: false,
            newBlockMarker: prevMatch === undefined ? "master" : prevMatch.def !== lmnt && prevMatch["static"] !== true,
            casing: null,
            def: opts.staticDefinitionSymbol || lmnt,
            placeholder: opts.staticDefinitionSymbol !== undefined ? lmnt : _typeof(opts.placeholder) === "object" ? opts.placeholder[currentToken.matches.length] : undefined,
            nativeDef: (escaped ? "'" : "") + lmnt
          });
        });
      }
      escaped = false;
    } else {
      var maskdef = opts.definitions && opts.definitions[element] || opts.usePrototypeDefinitions && _inputmask2["default"].prototype.definitions[element];
      if (maskdef && !escaped) {
        if (typeof maskdef.validator === "string" && /\\p\{.*}/i.test(maskdef.validator)) flag += "u";
        mtoken.matches.splice(position++, 0, {
          fn: maskdef.validator ? typeof maskdef.validator === "string" ? new RegExp(maskdef.validator, flag) : new function () {
            this.test = maskdef.validator;
          }() : /./,
          "static": maskdef["static"] || false,
          optionality: maskdef.optional || false,
          defOptionality: maskdef.optional || false,
          // indicator for an optional from the definition
          newBlockMarker: prevMatch === undefined || maskdef.optional ? "master" : prevMatch.def !== (maskdef.definitionSymbol || element),
          casing: maskdef.casing,
          def: maskdef.definitionSymbol || element,
          placeholder: maskdef.placeholder,
          nativeDef: element,
          generated: maskdef.generated
        });
      } else {
        mtoken.matches.splice(position++, 0, {
          fn: /[a-z]/i.test(opts.staticDefinitionSymbol || element) ? new RegExp("[" + (opts.staticDefinitionSymbol || element) + "]", flag) : null,
          "static": true,
          optionality: false,
          newBlockMarker: prevMatch === undefined ? "master" : prevMatch.def !== element && prevMatch["static"] !== true,
          casing: null,
          def: opts.staticDefinitionSymbol || element,
          placeholder: opts.staticDefinitionSymbol !== undefined ? element : undefined,
          nativeDef: (escaped ? "'" : "") + element
        });
        escaped = false;
      }
    }
  }
  function verifyGroupMarker(maskToken) {
    if (maskToken && maskToken.matches) {
      maskToken.matches.forEach(function (token, ndx) {
        var nextToken = maskToken.matches[ndx + 1];
        if ((nextToken === undefined || nextToken.matches === undefined || nextToken.isQuantifier === false) && token && token.isGroup) {
          // this is not a group but a normal mask => convert
          token.isGroup = false;
          if (!regexMask) {
            insertTestDefinition(token, opts.groupmarker[0], 0);
            if (token.openGroup !== true) {
              insertTestDefinition(token, opts.groupmarker[1]);
            }
          }
        }
        verifyGroupMarker(token);
      });
    }
  }
  function defaultCase() {
    if (openenings.length > 0) {
      currentOpeningToken = openenings[openenings.length - 1];
      insertTestDefinition(currentOpeningToken, m);
      if (currentOpeningToken.isAlternator) {
        // handle alternator a | b case
        alternator = openenings.pop();
        for (var mndx = 0; mndx < alternator.matches.length; mndx++) {
          if (alternator.matches[mndx].isGroup) alternator.matches[mndx].isGroup = false; // don't mark alternate groups as group
        }
        if (openenings.length > 0) {
          currentOpeningToken = openenings[openenings.length - 1];
          currentOpeningToken.matches.push(alternator);
        } else {
          currentToken.matches.push(alternator);
        }
      }
    } else {
      insertTestDefinition(currentToken, m);
    }
  }
  function reverseTokens(maskToken) {
    function reverseStatic(st) {
      if (st === opts.optionalmarker[0]) {
        st = opts.optionalmarker[1];
      } else if (st === opts.optionalmarker[1]) {
        st = opts.optionalmarker[0];
      } else if (st === opts.groupmarker[0]) {
        st = opts.groupmarker[1];
      } else if (st === opts.groupmarker[1]) st = opts.groupmarker[0];
      return st;
    }
    maskToken.matches = maskToken.matches.reverse();
    for (var _match in maskToken.matches) {
      if (Object.prototype.hasOwnProperty.call(maskToken.matches, _match)) {
        var intMatch = parseInt(_match);
        if (maskToken.matches[_match].isQuantifier && maskToken.matches[intMatch + 1] && maskToken.matches[intMatch + 1].isGroup) {
          // reposition quantifier
          var qt = maskToken.matches[_match];
          maskToken.matches.splice(_match, 1);
          maskToken.matches.splice(intMatch + 1, 0, qt);
        }
        if (maskToken.matches[_match].matches !== undefined) {
          maskToken.matches[_match] = reverseTokens(maskToken.matches[_match]);
        } else {
          maskToken.matches[_match] = reverseStatic(maskToken.matches[_match]);
        }
      }
    }
    return maskToken;
  }
  function groupify(matches) {
    var groupToken = new _masktoken["default"](true);
    groupToken.openGroup = false;
    groupToken.matches = matches;
    return groupToken;
  }
  function closeGroup() {
    // Group closing
    openingToken = openenings.pop();
    openingToken.openGroup = false; // mark group as complete
    if (openingToken !== undefined) {
      if (openenings.length > 0) {
        currentOpeningToken = openenings[openenings.length - 1];
        currentOpeningToken.matches.push(openingToken);
        if (currentOpeningToken.isAlternator) {
          // handle alternator (a) | (b) case
          alternator = openenings.pop();
          for (var mndx = 0; mndx < alternator.matches.length; mndx++) {
            alternator.matches[mndx].isGroup = false; // don't mark alternate groups as group
            alternator.matches[mndx].alternatorGroup = false;
          }
          if (openenings.length > 0) {
            currentOpeningToken = openenings[openenings.length - 1];
            currentOpeningToken.matches.push(alternator);
          } else {
            currentToken.matches.push(alternator);
          }
        }
      } else {
        currentToken.matches.push(openingToken);
      }
    } else {
      defaultCase();
    }
  }
  function groupQuantifier(matches) {
    var lastMatch = matches.pop();
    if (lastMatch.isQuantifier) {
      lastMatch = groupify([matches.pop(), lastMatch]);
    }
    return lastMatch;
  }
  if (regexMask) {
    opts.optionalmarker[0] = undefined;
    opts.optionalmarker[1] = undefined;
  }
  // console.log(mask);
  while (match = regexMask ? regexTokenizer.exec(mask) : tokenizer.exec(mask)) {
    // console.log(match);
    m = match[0];
    if (regexMask) {
      switch (m.charAt(0)) {
        // Quantifier
        case "?":
          m = "{0,1}";
          break;
        case "+":
        case "*":
          m = "{" + m + "}";
          break;
        case "|":
          // regex mask alternator  ex: [01][0-9]|2[0-3] => ([01][0-9]|2[0-3])
          if (openenings.length === 0) {
            // wrap the mask in a group to form a regex alternator  ([01][0-9]|2[0-3])
            var altRegexGroup = groupify(currentToken.matches);
            altRegexGroup.openGroup = true;
            openenings.push(altRegexGroup);
            currentToken.matches = [];
            closeRegexGroup = true;
          }
          break;
      }
      switch (m) {
        case "\\d":
          m = "[0-9]";
          break;
        case "\\p":
          // Unicode Categories
          m += regexTokenizer.exec(mask)[0]; // {
          m += regexTokenizer.exec(mask)[0]; // ?}
          break;
        case "(?:": // non capturing group
        case "(?=": // lookahead
        case "(?!": // negative lookahead
        case "(?<=": // lookbehind
        case "(?<!":
          // negative lookbehind
          // treat as group
          break;
      }
    }
    if (escaped) {
      defaultCase();
      continue;
    }
    switch (m.charAt(0)) {
      case "$":
      case "^":
        // ignore beginswith and endswith as in masking this makes no point
        if (!regexMask) {
          defaultCase();
        }
        break;
      case opts.escapeChar:
        escaped = true;
        if (regexMask) defaultCase();
        break;
      // optional closing
      case opts.optionalmarker[1]:
      case opts.groupmarker[1]:
        closeGroup();
        break;
      case opts.optionalmarker[0]:
        // optional opening
        openenings.push(new _masktoken["default"](false, true));
        break;
      case opts.groupmarker[0]:
        // Group opening
        openenings.push(new _masktoken["default"](true));
        break;
      case opts.quantifiermarker[0]:
        {
          // Quantifier
          var quantifier = new _masktoken["default"](false, false, true);
          m = m.replace(/[{}?]/g, ""); // ? matches lazy quantifiers
          var mqj = m.split("|"),
            mq = mqj[0].split(",");
          var mq0 = isNaN(mq[0]) ? mq[0] : parseInt(mq[0]);
          var mq1 = mq.length === 1 ? mq0 : isNaN(mq[1]) ? mq[1] : parseInt(mq[1]),
            mqJit = isNaN(mqj[1]) ? mqj[1] : parseInt(mqj[1]);
          if (mq0 === "*" || mq0 === "+") {
            mq0 = mq1 === "*" ? 0 : 1;
          }
          quantifier.quantifier = {
            min: mq0,
            max: mq1,
            jit: mqJit
          };
          var matches = openenings.length > 0 ? openenings[openenings.length - 1].matches : currentToken.matches;
          match = matches.pop();
          // if (match.isAlternator) { //handle quantifier in an alternation [0-9]{2}|[0-9]{3}
          //     matches.push(match); //push back alternator
          //     matches = match.matches; //remap target matches
          //     var groupToken = new MaskToken(true);
          //     var tmpMatch = matches.pop();
          //     matches.push(groupToken); //push the group
          //     matches = groupToken.matches;
          //     match = tmpMatch;
          // }
          if (!match.isGroup) {
            match = groupify([match]);
          }
          matches.push(match);
          matches.push(quantifier);
        }
        break;
      case opts.alternatormarker:
        if (openenings.length > 0) {
          currentOpeningToken = openenings[openenings.length - 1];
          var subToken = currentOpeningToken.matches[currentOpeningToken.matches.length - 1];
          if (currentOpeningToken.openGroup && (
          // regexp alt syntax
          subToken.matches === undefined || subToken.isGroup === false && subToken.isAlternator === false)) {
            // alternations within group
            lastMatch = openenings.pop();
          } else {
            lastMatch = groupQuantifier(currentOpeningToken.matches);
          }
        } else {
          lastMatch = groupQuantifier(currentToken.matches);
        }
        if (lastMatch.isAlternator) {
          openenings.push(lastMatch);
        } else {
          if (lastMatch.alternatorGroup) {
            alternator = openenings.pop();
            lastMatch.alternatorGroup = false;
          } else {
            alternator = new _masktoken["default"](false, false, false, true);
          }
          alternator.matches.push(lastMatch);
          openenings.push(alternator);
          if (lastMatch.openGroup) {
            // regexp alt syntax
            lastMatch.openGroup = false;
            var alternatorGroup = new _masktoken["default"](true);
            alternatorGroup.alternatorGroup = true;
            openenings.push(alternatorGroup);
          }
        }
        break;
      default:
        defaultCase();
    }
  }
  if (closeRegexGroup) closeGroup();
  while (openenings.length > 0) {
    openingToken = openenings.pop();
    currentToken.matches.push(openingToken);
  }
  if (currentToken.matches.length > 0) {
    verifyGroupMarker(currentToken);
    maskTokens.push(currentToken);
  }
  if (opts.numericInput || opts.isRTL) {
    reverseTokens(maskTokens[0]);
  }
  // console.log(JSON.stringify(maskTokens));
  return maskTokens;
}

/***/ }),
/* 25 */
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.escapeRegex = escapeRegex;
var escapeRegexRegex = new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^"].join("|\\") + ")", "gim");
function escapeRegex(str) {
  return str.replace(escapeRegexRegex, "\\$1");
}

/***/ }),
/* 26 */
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = _default;
function _default(isGroup, isOptional, isQuantifier, isAlternator) {
  this.matches = [];
  this.openGroup = isGroup || false;
  this.alternatorGroup = false;
  this.isGroup = isGroup || false;
  this.isOptional = isOptional || false;
  this.isQuantifier = isQuantifier || false;
  this.isAlternator = isAlternator || false;
  this.quantifier = {
    min: 1,
    max: 1
  };
}

/***/ }),
/* 27 */
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {



var _escapeRegex = __webpack_require__(25);
var _inputmask = _interopRequireDefault(__webpack_require__(7));
var _keycode = __webpack_require__(19);
var _positioning = __webpack_require__(20);
var _validationTests = __webpack_require__(22);
__webpack_require__(28);
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/*
 Input Mask plugin extensions
 http://github.com/RobinHerbots/inputmask
 Copyright (c) Robin Herbots
 Licensed under the MIT license
 */

var $ = _inputmask["default"].dependencyLib;
var DateObject = /*#__PURE__*/function () {
  function DateObject(mask, format, opts, inputmask) {
    _classCallCheck(this, DateObject);
    this.mask = mask;
    this.format = format;
    this.opts = opts;
    this.inputmask = inputmask;
    this._date = new Date(1, 0, 1);
    this.initDateObject(mask, this.opts, this.inputmask);
  }
  return _createClass(DateObject, [{
    key: "date",
    get: function get() {
      if (this._date === undefined) {
        this._date = new Date(1, 0, 1);
        this.initDateObject(undefined, this.opts, this.inputmask);
      }
      return this._date;
    }
  }, {
    key: "initDateObject",
    value: function initDateObject(mask, opts, inputmask) {
      var match,
        lastNdx = -1;
      getTokenizer(opts).lastIndex = 0;
      while (match = getTokenizer(opts).exec(this.format)) {
        if (match.index >= lastNdx) {
          var dynMatches = /\d+$/.exec(match[0]),
            fcode = dynMatches ? match[0][0] + "x" : match[0],
            value = void 0;
          if (mask !== undefined) {
            // console.log("mask", mask);
            if (dynMatches) {
              var lastIndex = getTokenizer(opts).lastIndex,
                tokenMatch = getTokenMatch.call(inputmask, match.index, opts, inputmask && inputmask.maskset);
              getTokenizer(opts).lastIndex = lastIndex;
              value = mask.slice(0, mask.indexOf(tokenMatch.nextMatch[0]));
            } else {
              var targetSymbol = match[0][0],
                ndx = match.index;
              while (inputmask && (opts.placeholder["".concat(match.index, "'").concat(_validationTests.getTest.call(inputmask, ndx).match.placeholder)] || _validationTests.getTest.call(inputmask, ndx).match.placeholder) === targetSymbol) {
                ndx++;
              }
              lastNdx = ndx;
              var targetMatchLength = ndx - match.index;
              value = mask.slice(0, targetMatchLength || formatcode(fcode) && formatcode(fcode)[4] || fcode.length);
            }
            mask = mask.slice(value.length);
          }
          if (Object.prototype.hasOwnProperty.call(formatCode, fcode)) {
            this.setValue(this, value, fcode, formatcode(fcode)[2], formatcode(fcode)[1]);
          }
        }
      }
    }
  }, {
    key: "setValue",
    value: function setValue(dateObj, value, fcode, targetProp, dateOperation) {
      if (value !== undefined) {
        switch (targetProp) {
          case "ampm":
            dateObj[targetProp] = value;
            dateObj["raw" + targetProp] = value.replace(/\s/g, "_");
            break;
          case "month":
            if (fcode === "MMM" || fcode === "MMMM") {
              fcode === "MMM" ? dateObj[targetProp] = pad(i18n.monthNames.slice(0, 12).findIndex(function (item) {
                return value.toLowerCase() === item.toLowerCase();
              }) + 1, 2) : dateObj[targetProp] = pad(i18n.monthNames.slice(12, 24).findIndex(function (item) {
                return value.toLowerCase() === item.toLowerCase();
              }) + 1, 2);
              dateObj[targetProp] = dateObj[targetProp] === "00" ? "" : dateObj[targetProp].toString();
              dateObj["raw" + targetProp] = dateObj[targetProp];
              break;
            }
          // eslint-disable-next-line no-fallthrough
          default:
            dateObj[targetProp] = value.replace(/[^0-9]/g, "0");
            dateObj["raw" + targetProp] = value.replace(/\s/g, "_");
        }
      }
      if (dateOperation !== undefined) {
        var datavalue = dateObj[targetProp];
        if (targetProp === "day" && parseInt(datavalue) === 29 || targetProp === "month" && parseInt(datavalue) === 2) {
          if (parseInt(dateObj.day) === 29 && parseInt(dateObj.month) === 2 && (dateObj.year === "" || dateObj.year === undefined)) {
            // set temporary leap year in dateObj
            dateObj._date.setFullYear(2012, 1, 29);
          }
        }
        if (targetProp === "day") {
          useDateObject = true;
          if (parseInt(datavalue) === 0) datavalue = 1;
        }
        if (targetProp === "month") useDateObject = true;
        if (targetProp === "year") {
          useDateObject = true;
          if (datavalue.length < formatcode(fcode)[4]) datavalue = pad(datavalue, formatcode(fcode)[4], true);
        }
        if (datavalue !== "" && !isNaN(datavalue) || targetProp === "ampm") dateOperation.call(dateObj._date, datavalue);
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      this._date = new Date(1, 0, 1);
    }
  }, {
    key: "reInit",
    value: function reInit() {
      this._date = undefined;
      // eslint-disable-next-line no-unused-expressions
      this.date;
    }
  }]);
}();
var useDateObject = false;
var currentYear = new Date().getFullYear(),
  i18n = _inputmask["default"].prototype.i18n,
  // supported codes for formatting
  // https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date-time-string-format
  // https://docs.microsoft.com/en-us/dotnet/standard/base-types/custom-date-and-time-format-strings?view=netframework-4.7
  // https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
  formatCode = {
    // regex, valueSetter, type, displayformatter, #entries (optional)
    d: ["[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", Date.prototype.getDate],
    // Day of the month as digits; no leading zero for single-digit days.
    dd: ["0[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", function () {
      return pad(Date.prototype.getDate.call(this), 2);
    }],
    // Day of the month as digits; leading zero for single-digit days.
    ddd: [""],
    // Day of the week as a three-letter abbreviation.
    dddd: [""],
    // Day of the week as its full name.
    M: ["[1-9]|1[012]", function (val) {
      var mval = val ? parseInt(val) : 0;
      if (mval > 0) mval--;
      return Date.prototype.setMonth.call(this, mval);
    }, "month", function () {
      return Date.prototype.getMonth.call(this) + 1;
    }],
    // Month as digits; no leading zero for single-digit months.
    MM: ["0[1-9]|1[012]", function (val) {
      var mval = val ? parseInt(val) : 0;
      if (mval > 0) mval--;
      return Date.prototype.setMonth.call(this, mval);
    }, "month", function () {
      return pad(Date.prototype.getMonth.call(this) + 1, 2);
    }],
    // Month as digits; leading zero for single-digit months.
    MMM: [i18n.monthNames.slice(0, 12).join("|"), function (val) {
      var mval = i18n.monthNames.slice(0, 12).findIndex(function (item) {
        return val.toLowerCase() === item.toLowerCase();
      });
      return mval !== -1 ? Date.prototype.setMonth.call(this, mval) : false;
    }, "month", function () {
      return i18n.monthNames.slice(0, 12)[Date.prototype.getMonth.call(this)];
    }],
    // Month as a three-letter abbreviation.
    MMMM: [i18n.monthNames.slice(12, 24).join("|"), function (val) {
      var mval = i18n.monthNames.slice(12, 24).findIndex(function (item) {
        return val.toLowerCase() === item.toLowerCase();
      });
      return mval !== -1 ? Date.prototype.setMonth.call(this, mval) : false;
    }, "month", function () {
      return i18n.monthNames.slice(12, 24)[Date.prototype.getMonth.call(this)];
    }],
    // Month as its full name.
    yy: ["[0-9]{2}", function (val) {
      var centuryPart = new Date().getFullYear().toString().slice(0, 2);
      Date.prototype.setFullYear.call(this, "".concat(centuryPart).concat(val));
    }, "year", function () {
      return pad(Date.prototype.getFullYear.call(this), 2);
    }, 2],
    // Year as last two digits; leading zero for years less than 10.
    yyyy: ["[0-9]{4}", Date.prototype.setFullYear, "year", function () {
      return pad(Date.prototype.getFullYear.call(this), 4);
    }, 4],
    h: ["[1-9]|1[0-2]", Date.prototype.setHours, "hours", Date.prototype.getHours],
    // Hours; no leading zero for single-digit hours (12-hour clock).
    hh: ["0[1-9]|1[0-2]", Date.prototype.setHours, "hours", function () {
      return pad(Date.prototype.getHours.call(this), 2);
    }],
    // Hours; leading zero for single-digit hours (12-hour clock).
    hx: [function (x) {
      return "[0-9]{".concat(x, "}");
    }, Date.prototype.setHours, "hours", function (x) {
      return Date.prototype.getHours;
    }],
    // Hours; no limit; set maximum digits
    H: ["1?[0-9]|2[0-3]", Date.prototype.setHours, "hours", Date.prototype.getHours],
    // Hours; no leading zero for single-digit hours (24-hour clock).
    HH: ["0[0-9]|1[0-9]|2[0-3]", Date.prototype.setHours, "hours", function () {
      return pad(Date.prototype.getHours.call(this), 2);
    }],
    // Hours; leading zero for single-digit hours (24-hour clock).
    Hx: [function (x) {
      return "[0-9]{".concat(x, "}");
    }, Date.prototype.setHours, "hours", function (x) {
      return function () {
        return pad(Date.prototype.getHours.call(this), x);
      };
    }],
    // Hours; no limit; set maximum digits
    m: ["[1-5]?[0-9]", Date.prototype.setMinutes, "minutes", Date.prototype.getMinutes],
    // Minutes; no leading zero for single-digit minutes. Uppercase M unlike CF timeFormat's m to avoid conflict with months.
    mm: ["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setMinutes, "minutes", function () {
      return pad(Date.prototype.getMinutes.call(this), 2);
    }],
    // Minutes; leading zero for single-digit minutes. Uppercase MM unlike CF timeFormat's mm to avoid conflict with months.
    s: ["[1-5]?[0-9]", Date.prototype.setSeconds, "seconds", Date.prototype.getSeconds],
    // Seconds; no leading zero for single-digit seconds.
    ss: ["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setSeconds, "seconds", function () {
      return pad(Date.prototype.getSeconds.call(this), 2);
    }],
    // Seconds; leading zero for single-digit seconds.
    l: ["[0-9]{3}", Date.prototype.setMilliseconds, "milliseconds", function () {
      return pad(Date.prototype.getMilliseconds.call(this), 3);
    }, 3],
    // Milliseconds. 3 digits.
    L: ["[0-9]{2}", Date.prototype.setMilliseconds, "milliseconds", function () {
      return pad(Date.prototype.getMilliseconds.call(this), 2);
    }, 2],
    // Milliseconds. 2 digits.
    t: ["[ap]", setAMPM, "ampm", getAMPM, 1],
    // Lowercase, single-character time marker string: a or p.
    tt: ["[ap]m", setAMPM, "ampm", getAMPM, 2],
    // two-character time marker string: am or pm.
    T: ["[AP]", setAMPM, "ampm", getAMPM, 1],
    // single-character time marker string: A or P.
    TT: ["[AP]M", setAMPM, "ampm", getAMPM, 2],
    // two-character time marker string: AM or PM.
    Z: [".*", undefined, "Z", getTimeZoneAbbreviated],
    // US timezone abbreviation, e.g. EST or MDT. With non-US timezones or in the Opera browser, the GMT/UTC offset is returned, e.g. GMT-0500
    o: [""],
    // GMT/UTC timezone offset, e.g. -0500 or +0230.
    S: [""] // The date's ordinal suffix (st, nd, rd, or th).
  },
  formatCodeAlias = {
    D: "d",
    DD: "dd",
    DDD: "ddd",
    DDDD: "dddd",
    YY: "yy",
    YYYY: "yyyy",
    sss: "L"
  },
  formatAlias = {
    isoDate: "yyyy-MM-dd",
    // 2007-06-09
    isoTime: "HH:mm:ss",
    // 17:46:21
    isoDateTime: "yyyy-MM-dd\\THH:mm:ss",
    // 2007-06-09T17:46:21
    isoUtcDateTime: "UTC:yyyy-MM-dd\\THH:mm:ss\\Z" // 2007-06-09T22:46:21Z
  };
function setAMPM(value) {
  var hours = this.getHours();
  if (value.toLowerCase().includes("p")) {
    this.setHours(hours + 12);
    // console.log("setAMPM + 12");
  } else if (value.toLowerCase().includes("a") && hours >= 12) {
    this.setHours(hours - 12);
  }
}
function getAMPM() {
  var date = this,
    hours = date.getHours();
  hours = hours || 12;
  return hours >= 12 ? "PM" : "AM";
}
function getTimeZoneAbbreviated() {
  // not perfect, but ok for now
  var date = this,
    _date$toString$match = date.toString().match(/\((.+)\)/),
    tz = _date$toString$match[1];
  if (tz.includes(" ")) {
    tz = tz.replace("-", " ").toUpperCase();
    tz = tz.split(" ").map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 1),
        first = _ref2[0];
      return first;
    }).join("");
  }
  return tz;
}
function formatcode(match) {
  var fcMatch = formatCodeAlias[match] || match,
    dynMatches = /\d+$/.exec(fcMatch);
  if (dynMatches && dynMatches[0] !== undefined) {
    var fcode = formatCode[fcMatch[0] + "x"].slice("");
    fcode[0] = fcode[0](dynMatches[0]);
    fcode[3] = fcode[3](dynMatches[0]);
    return fcode;
  } else if (formatCode[fcMatch]) {
    return formatCode[fcMatch];
  }
  return undefined;
}
function getTokenizer(opts) {
  if (!opts.tokenizer) {
    var tokens = [],
      dyntokens = [],
      formatCodeKeys = Object.keys(formatCode).concat(Object.keys(formatCodeAlias));
    var _iterator = _createForOfIteratorHelper(formatCodeKeys),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var ndx = _step.value;
        if (/\.*x$/.test(ndx)) {
          var dynToken = ndx[0] + "\\d+";
          if (dyntokens.indexOf(dynToken) === -1) {
            dyntokens.push(dynToken);
          }
        } else if (tokens.indexOf(ndx[0]) === -1) {
          tokens.push(ndx[0]);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    opts.tokenizer = "(" + (dyntokens.length > 0 ? dyntokens.join("|") + "|" : "") + tokens.join("+|") + "+)+?|.";
    opts.tokenizer = new RegExp(opts.tokenizer, "g");
  }
  return opts.tokenizer;
}
function prefillYear(dateParts, currentResult, opts) {
  if (dateParts.year !== dateParts.rawyear) {
    var crrntyear = currentYear.toString(),
      enteredPart = dateParts.rawyear.replace(/[^0-9]/g, ""),
      currentYearPart = crrntyear.slice(0, enteredPart.length),
      currentYearNextPart = crrntyear.slice(enteredPart.length);
    if (enteredPart.length === 2 && enteredPart === currentYearPart) {
      var entryCurrentYear = new Date(currentYear, dateParts.month - 1, dateParts.day);
      if (dateParts.day == entryCurrentYear.getDate() && (!opts.max || opts.max.date.getTime() >= entryCurrentYear.getTime())) {
        // update dateParts
        dateParts.date.setFullYear(currentYear);
        dateParts.year = crrntyear;
        // update result
        currentResult.insert = [{
          pos: currentResult.pos + 1,
          c: currentYearNextPart[0]
        }, {
          pos: currentResult.pos + 2,
          c: currentYearNextPart[1]
        }];
      }
    }
  }
  return currentResult;
}
function isValidDate(dateParts, currentResult, opts) {
  var inputmask = this;
  if (!useDateObject) return true;
  if (dateParts.rawday === undefined || !isFinite(dateParts.rawday) && new Date(dateParts.date.getFullYear(), isFinite(dateParts.rawmonth) ? dateParts.month : dateParts.date.getMonth() + 1, 0).getDate() >= dateParts.day || dateParts.day == "29" && (!isFinite(dateParts.rawyear) || dateParts.rawyear === undefined || dateParts.rawyear === "") || new Date(dateParts.date.getFullYear(), isFinite(dateParts.rawmonth) ? dateParts.month : dateParts.date.getMonth() + 1, 0).getDate() >= dateParts.day) {
    return currentResult;
  } else {
    // take corrective action if possible
    if (dateParts.day == "29") {
      var tokenMatch = getTokenMatch.call(inputmask, currentResult.pos, opts, inputmask.maskset);
      if (tokenMatch.targetMatch && ["yyyy", "YYYY"].includes(tokenMatch.targetMatch[0]) && currentResult.pos - tokenMatch.targetMatchIndex === 2) {
        currentResult.remove = currentResult.pos + 1;
        return currentResult;
      }
    } else if (dateParts.date.getMonth() == 2 && dateParts.day == "30" && currentResult.c !== undefined) {
      dateParts.day = "03";
      dateParts.date.setDate(3);
      dateParts.date.setMonth(1);
      currentResult.insert = [{
        pos: currentResult.pos,
        c: "0"
      }, {
        pos: currentResult.pos + 1,
        c: currentResult.c
      }];
      currentResult.caret = _positioning.seekNext.call(this, currentResult.pos + 1);
      return currentResult;
    }
    return false;
  }
}
function isDateInRange(dateParts, result, opts, maskset, fromCheckval) {
  if (!result) return result;
  if (result && opts.min) {
    if (/* useDateObject && (dateParts["year"] === undefined || dateParts["yearSet"]) && */!isNaN(opts.min.date.getTime())) {
      var match;
      dateParts.reset();
      getTokenizer(opts).lastIndex = 0;
      while (match = getTokenizer(opts).exec(opts.inputFormat)) {
        var fcode;
        if (fcode = formatcode(match[0])) {
          if (fcode[3]) {
            var setFn = fcode[1],
              current = dateParts[fcode[2]],
              minVal = opts.min[fcode[2]],
              maxVal = opts.max ? opts.max[fcode[2]] : minVal + 1,
              curVal = [],
              forceCurrentValue = false;
            for (var i = 0; i < minVal.length; i++) {
              if (maskset.validPositions[i + match.index] === undefined && !forceCurrentValue) {
                if (i + match.index == 0 && current[i] < minVal[i]) {
                  curVal[i] = current[i];
                  forceCurrentValue = true;
                } else {
                  curVal[i] = minVal[i];
                }
                // ADD +1 to whole
                if (fcode[2] === "year" && current.length - 1 == i && minVal != maxVal) curVal = (parseInt(curVal.join("")) + 1).toString().split("");
                if (fcode[2] === "ampm" && minVal != maxVal && opts.min.date.getTime() > dateParts.date.getTime()) curVal[i] = maxVal[i];
              } else {
                curVal[i] = current[i];
                forceCurrentValue = forceCurrentValue || current[i] > minVal[i];
              }
            }
            setFn.call(dateParts._date, curVal.join(""));
          }
        }
      }
      result = opts.min.date.getTime() <= dateParts.date.getTime();
      dateParts.reInit();
    }
  }
  if (result && opts.max) {
    if (!isNaN(opts.max.date.getTime())) {
      result = opts.max.date.getTime() >= dateParts.date.getTime();
    }
  }
  return result;
}

// parse the given format and return a mask pattern
// when a dateObjValue is passed a datestring in the requested format is returned
function parse(format, dateObjValue, opts) {
  // parse format to regex string
  var mask = "",
    match,
    fcode,
    ndx = 0,
    escaped = false;
  var placeHolder = {};
  getTokenizer(opts).lastIndex = 0;
  while (match = getTokenizer(opts).exec(format)) {
    if (match[0] === opts.escapeChar) {
      escaped = true;
    } else {
      if (dateObjValue === undefined) {
        if (!escaped && (fcode = formatcode(match[0]))) {
          mask += "(" + fcode[0] + ")";
          // map placeholder to placeholder object and set placeholder mappings
          if (opts.placeholder && opts.placeholder !== "") {
            placeHolder[ndx] = opts.placeholder[match.index % opts.placeholder.length];
            // internal use of datetime alias
            placeHolder["".concat(match.index, "'").concat(opts.placeholder[match.index % opts.placeholder.length])] = match[0].charAt(0);
          } else {
            placeHolder[ndx] = match[0].charAt(0);
          }
        } else {
          switch (match[0]) {
            case "[":
              mask += "(";
              break;
            case "]":
              mask += ")?";
              break;
            default:
              mask += (0, _escapeRegex.escapeRegex)(match[0]);
              placeHolder[ndx] = match[0].charAt(0);
          }
        }
      } else {
        if (!escaped && (fcode = formatcode(match[0]))) {
          if (fcode[3]) {
            var getFn = fcode[3];
            mask += getFn.call(dateObjValue.date);
          } else if (fcode[2] && dateObjValue["raw" + fcode[2]] !== undefined) {
            mask += dateObjValue["raw" + fcode[2]];
          } else {
            mask += match[0];
          }
        } else {
          mask += match[0];
        }
      }
      ndx++;
      escaped = false;
    }
  }
  if (dateObjValue === undefined) {
    // console.log(JSON.stringify(placeHolder));
    opts.placeholder = placeHolder;
  }
  return mask;
}

// padding function
function pad(val, len, right) {
  val = String(val);
  len = len || 2;
  while (val.length < len) val = right ? val + "0" : "0" + val;
  return val;
}
function analyseMask(mask, format, opts) {
  var inputmask = this;
  if (typeof mask === "string") {
    return new DateObject(mask, format, opts, inputmask);
  } else if (mask && _typeof(mask) === "object" && Object.prototype.hasOwnProperty.call(mask, "date")) {
    return mask;
  }
  return undefined;
}
function importDate(dateObj, opts) {
  return parse(opts.inputFormat, {
    date: dateObj
  }, opts);
}
function getTokenMatch(pos, opts, maskset) {
  var inputmask = this,
    calcPos = 0,
    targetMatch,
    match,
    matchLength = 0;
  getTokenizer(opts).lastIndex = 0;
  while (match = getTokenizer(opts).exec(opts.inputFormat)) {
    // console.log(`match.index ${match.index}`);
    var dynMatches = /\d+$/.exec(match[0]);
    if (dynMatches) {
      matchLength = parseInt(dynMatches[0]);
    } else {
      var targetSymbol = match[0][0],
        ndx = calcPos;
      while (inputmask && (opts.placeholder["".concat(match.index, "'").concat(_validationTests.getTest.call(inputmask, ndx).match.placeholder)] || _validationTests.getTest.call(inputmask, ndx).match.placeholder) === targetSymbol) {
        ndx++;
      }
      matchLength = ndx - calcPos;
      if (matchLength === 0) matchLength = match[0].length;
    }
    calcPos += matchLength;
    // console.log(`calcPos ${calcPos}`);

    if (calcPos >= pos + 1) {
      var masksetHint = "";
      if (maskset && maskset.tests[pos]) {
        var filteredPlaceholders = Object.keys(opts.placeholder).filter(function (value) {
          for (var i = match.index - 1; i < calcPos; i++) {
            if (value === "".concat(i, "'").concat(maskset.tests[pos][0].match.placeholder)) {
              return true;
            }
          }
          return false;
        });
        masksetHint = filteredPlaceholders.length > 0 ? opts.placeholder[filteredPlaceholders[0]] : maskset.tests[pos][0].match.placeholder;
      }
      // console.log(masksetHint);
      if (match[0].indexOf(masksetHint) !== -1) {
        // console.log(`match ${masksetHint} ${calcPos} >= ${pos + 1}`);
        targetMatch = match;
        match = getTokenizer(opts).exec(opts.inputFormat);
        break;
      } else {
        // console.log(`no match ${masksetHint} ${calcPos} >= ${pos + 1}`);
      }
    }
  }
  return {
    targetMatchIndex: calcPos - matchLength,
    nextMatch: match,
    targetMatch: targetMatch
  };
}
_inputmask["default"].extendAliases({
  datetime: {
    mask: function mask(opts) {
      // do not allow numeric input in datetime alias
      opts.numericInput = false;

      // localize
      formatCode.S = i18n.ordinalSuffix.join("|");
      opts.inputFormat = formatAlias[opts.inputFormat] || opts.inputFormat; // resolve possible formatAlias
      if (opts.repeat) {
        opts.repeat = parseInt(opts.repeat.toString());
        if (opts.repeat > 0) {
          var inputFormat = "";
          for (var i = 0; i < opts.repeat; i++) {
            inputFormat = inputFormat + opts.inputFormat;
          }
          opts.inputFormat = inputFormat;
          opts.repeat = 0;
        }
      }
      opts.displayFormat = formatAlias[opts.displayFormat] || opts.displayFormat || opts.inputFormat; // resolve possible formatAlias
      opts.outputFormat = formatAlias[opts.outputFormat] || opts.outputFormat || opts.inputFormat; // resolve possible formatAlias
      // opts.placeholder = opts.placeholder !== "" ? opts.placeholder : opts.inputFormat.replace(/[[\]]/, "");
      opts.regex = parse(opts.inputFormat, undefined, opts);
      // console.log("inputFormat", opts.regex);
      opts.min = analyseMask(opts.min, opts.inputFormat, opts);
      opts.max = analyseMask(opts.max, opts.inputFormat, opts);
      return null; // migrate to regex mask
    },
    placeholder: "",
    // set default as none (~ auto); when a custom placeholder is passed it will be used
    inputFormat: "isoDateTime",
    // format used to input the date
    displayFormat: null,
    // visual format when the input looses focus
    outputFormat: null,
    // unmasking format
    min: null,
    // needs to be in the same format as the inputfornat
    max: null,
    // needs to be in the same format as the inputfornat,
    skipOptionalPartCharacter: "",
    preValidation: function preValidation(buffer, pos, c, isSelection, opts, maskset, caretPos, strict) {
      var inputmask = this;
      if (strict) return true;
      if (isNaN(c) && buffer[pos] !== c) {
        var tokenMatch = getTokenMatch.call(inputmask, pos, opts, maskset);
        if (tokenMatch.nextMatch && tokenMatch.nextMatch[0] === c && tokenMatch.targetMatch[0].length > 1) {
          var validator = formatcode(tokenMatch.targetMatch[0])[0];
          if (new RegExp(validator).test("0" + buffer[pos - 1])) {
            buffer[pos] = buffer[pos - 1];
            buffer[pos - 1] = "0";
            return {
              fuzzy: true,
              buffer: buffer,
              refreshFromBuffer: {
                start: pos - 1,
                end: pos + 1
              },
              pos: pos + 1
            };
          }
        }
      }
      return true;
    },
    postValidation: function postValidation(buffer, pos, c, currentResult, opts, maskset, strict, fromCheckval) {
      var inputmask = this;
      if (strict) return true;
      var tokenMatch, validator;
      if (currentResult === false) {
        // try some shifting
        tokenMatch = getTokenMatch.call(inputmask, pos + 1, opts, maskset);
        if (tokenMatch.targetMatch && tokenMatch.targetMatchIndex === pos && tokenMatch.targetMatch[0].length > 1 && formatcode(tokenMatch.targetMatch[0]) !== undefined) {
          validator = formatcode(tokenMatch.targetMatch[0])[0];
        } else {
          tokenMatch = getTokenMatch.call(inputmask, pos + 2, opts, maskset);
          if (tokenMatch.targetMatch && tokenMatch.targetMatchIndex === pos + 1 && tokenMatch.targetMatch[0].length > 1 && formatcode(tokenMatch.targetMatch[0]) !== undefined) {
            validator = formatcode(tokenMatch.targetMatch)[0];
          }
        }
        if (validator !== undefined) {
          if (maskset.validPositions[pos + 1] !== undefined && new RegExp(validator).test(c + "0")) {
            buffer[pos] = c;
            buffer[pos + 1] = "0";
            currentResult = {
              // insert: [{pos: pos, c: "0"}, {pos: pos + 1, c: c}],
              pos: pos + 2,
              // this will triggeer a refreshfrombuffer
              caret: pos
            };
          } else if (new RegExp(validator).test("0" + c)) {
            buffer[pos] = "0";
            buffer[pos + 1] = c;
            currentResult = {
              // insert: [{pos: pos, c: "0"}, {pos: pos + 1, c: c}],
              pos: pos + 2 // this will triggeer a refreshfrombuffer
            };
          }
        }
        if (currentResult === false) return currentResult;
      }
      if (currentResult.fuzzy) {
        buffer = currentResult.buffer;
        pos = currentResult.pos;
      }

      // full validate target
      tokenMatch = getTokenMatch.call(inputmask, pos, opts, maskset);
      if (tokenMatch.targetMatch && tokenMatch.targetMatch[0] && formatcode(tokenMatch.targetMatch[0]) !== undefined) {
        var fcode = formatcode(tokenMatch.targetMatch[0]);
        validator = fcode[0];
        var part = buffer.slice(tokenMatch.targetMatchIndex, tokenMatch.targetMatchIndex + tokenMatch.targetMatch[0].length);
        if (new RegExp(validator).test(part.join("")) === false && tokenMatch.targetMatch[0].length === 2 && maskset.validPositions[tokenMatch.targetMatchIndex] && maskset.validPositions[tokenMatch.targetMatchIndex + 1]) {
          maskset.validPositions[tokenMatch.targetMatchIndex + 1].input = "0";
        }
        if (fcode[2] == "year") {
          var _buffer = _validationTests.getMaskTemplate.call(inputmask, false, 1, undefined, true);
          for (var i = pos + 1; i < buffer.length; i++) {
            buffer[i] = _buffer[i];
            maskset.validPositions.splice(pos + 1, 1);
          }
        }
      }
      var result = currentResult,
        dateParts = analyseMask.call(inputmask, buffer.join(""), opts.inputFormat, opts);
      if (result && !isNaN(dateParts.date.getTime())) {
        // check for a valid date ~ an invalid date returns NaN which isn't equal
        if (opts.prefillYear) result = prefillYear(dateParts, result, opts);
        result = isValidDate.call(inputmask, dateParts, result, opts);
        result = isDateInRange(dateParts, result, opts, maskset, fromCheckval);
      }
      if (pos !== undefined && result && currentResult.pos !== pos) {
        return {
          buffer: parse(opts.inputFormat, dateParts, opts).split(""),
          refreshFromBuffer: {
            start: pos,
            end: currentResult.pos
          },
          pos: currentResult.caret || currentResult.pos // correct caret position
        };
      }
      return result;
    },
    onKeyDown: function onKeyDown(e, buffer, caretPos, opts) {
      var input = this;
      if (e.ctrlKey && e.key === _keycode.keys.ArrowRight) {
        input.inputmask._valueSet(importDate(new Date(), opts));
        $(input).trigger("setvalue");
      }
    },
    onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
      var inputmask = this;
      return unmaskedValue ? parse(opts.outputFormat, analyseMask.call(inputmask, maskedValue, opts.inputFormat, opts), opts) : unmaskedValue;
    },
    casing: function casing(elem, test, pos, validPositions) {
      if (test.nativeDef.indexOf("[ap]") == 0) return elem.toLowerCase();
      if (test.nativeDef.indexOf("[AP]") == 0) return elem.toUpperCase();
      var posBefore = _validationTests.getTest.call(this, [pos - 1]);
      if (posBefore.match.def.indexOf("[AP]") == 0) return elem.toUpperCase();
      if (pos === 0 || posBefore && posBefore.input === String.fromCharCode(_keycode.keyCode.Space) || posBefore && posBefore.match.def === String.fromCharCode(_keycode.keyCode.Space)) {
        return elem.toUpperCase();
      }
      if (test["static"] && test.def === test.def.toUpperCase()) return elem.toUpperCase();
      return elem.toLowerCase();
    },
    onBeforeMask: function onBeforeMask(initialValue, opts) {
      if (Object.prototype.toString.call(initialValue) === "[object Date]") {
        initialValue = importDate(initialValue, opts);
      }
      return initialValue;
    },
    insertMode: false,
    insertModeVisual: false,
    shiftPositions: false,
    keepStatic: false,
    inputmode: "numeric",
    prefillYear: true // Allows to disable prefill for datetime year.
  }
});

/***/ }),
/* 28 */
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {



var _inputmask = _interopRequireDefault(__webpack_require__(7));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/*
 Input Mask plugin extensions
 http://github.com/RobinHerbots/inputmask
 Copyright (c) Robin Herbots
 Licensed under the MIT license
 */

var $ = _inputmask["default"].dependencyLib;
$.extend(true, _inputmask["default"].prototype.i18n, {
  dayNames: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  ordinalSuffix: ["st", "nd", "rd", "th"]
});

/***/ }),
/* 29 */
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {



var _escapeRegex = __webpack_require__(25);
var _inputmask = _interopRequireDefault(__webpack_require__(7));
var _keycode = __webpack_require__(19);
var _positioning = __webpack_require__(20);
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/*
 Input Mask plugin extensions
 http://github.com/RobinHerbots/inputmask
 Copyright (c) Robin Herbots
 Licensed under the MIT license
 */

var $ = _inputmask["default"].dependencyLib;
function autoEscape(txt, opts) {
  var escapedTxt = "";
  for (var i = 0; i < txt.length; i++) {
    if (_inputmask["default"].prototype.definitions[txt.charAt(i)] || opts.definitions[txt.charAt(i)] || opts.optionalmarker[0] === txt.charAt(i) || opts.optionalmarker[1] === txt.charAt(i) || opts.quantifiermarker[0] === txt.charAt(i) || opts.quantifiermarker[1] === txt.charAt(i) || opts.groupmarker[0] === txt.charAt(i) || opts.groupmarker[1] === txt.charAt(i) || opts.alternatormarker === txt.charAt(i)) {
      escapedTxt += "\\" + txt.charAt(i);
    } else {
      escapedTxt += txt.charAt(i);
    }
  }
  return escapedTxt;
}
function alignDigits(buffer, digits, opts, force) {
  if (buffer.length > 0 && digits > 0 && (!opts.digitsOptional || force)) {
    var radixPosition = buffer.indexOf(opts.radixPoint),
      negationBack = false;
    if (opts.negationSymbol.back === buffer[buffer.length - 1]) {
      negationBack = true;
      buffer.length--;
    }
    if (radixPosition === -1) {
      buffer.push(opts.radixPoint);
      radixPosition = buffer.length - 1;
    }
    for (var i = 1; i <= digits; i++) {
      if (!isFinite(buffer[radixPosition + i])) {
        buffer[radixPosition + i] = "0";
      }
    }
  }
  if (negationBack) buffer.push(opts.negationSymbol.back);
  return buffer;
}
function findValidator(symbol, maskset) {
  var posNdx = 0;
  if (symbol === "+") {
    posNdx = _positioning.seekNext.call(this, maskset.validPositions.length - 1);
  }
  for (var tstNdx in maskset.tests) {
    tstNdx = parseInt(tstNdx);
    if (tstNdx >= posNdx) {
      for (var ndx = 0, ndxl = maskset.tests[tstNdx].length; ndx < ndxl; ndx++) {
        if ((maskset.validPositions[tstNdx] === undefined || symbol === "-") && maskset.tests[tstNdx][ndx].match.def === symbol) {
          return tstNdx + (maskset.validPositions[tstNdx] !== undefined && symbol !== "-" ? 1 : 0);
        }
      }
    }
  }
  return posNdx;
}
function findValid(symbol, maskset) {
  var ret = -1;
  for (var ndx = 0, vpl = maskset.validPositions.length; ndx < vpl; ndx++) {
    var tst = maskset.validPositions[ndx];
    if (tst && tst.match.def === symbol) {
      ret = ndx;
      break;
    }
  }
  return ret;
}
function parseMinMaxOptions(opts) {
  if (opts.parseMinMaxOptions === undefined) {
    // convert min and max options
    if (opts.min !== null) {
      opts.min = opts.min.toString().replace(new RegExp((0, _escapeRegex.escapeRegex)(opts.groupSeparator), "g"), "");
      if (opts.radixPoint === ",") opts.min = opts.min.replace(opts.radixPoint, ".");
      opts.min = isFinite(opts.min) ? parseFloat(opts.min) : NaN;
      if (isNaN(opts.min)) opts.min = Number.MIN_VALUE;
    }
    if (opts.max !== null) {
      opts.max = opts.max.toString().replace(new RegExp((0, _escapeRegex.escapeRegex)(opts.groupSeparator), "g"), "");
      if (opts.radixPoint === ",") opts.max = opts.max.replace(opts.radixPoint, ".");
      opts.max = isFinite(opts.max) ? parseFloat(opts.max) : NaN;
      if (isNaN(opts.max)) opts.max = Number.MAX_VALUE;
    }
    opts.parseMinMaxOptions = "done";
  }
}
function genMask(opts) {
  opts.repeat = 0;
  // treat equal separator and radixpoint
  if (opts.groupSeparator === opts.radixPoint && opts.digits && opts.digits !== "0") {
    if (opts.radixPoint === ".") {
      opts.groupSeparator = ",";
    } else if (opts.radixPoint === ",") {
      opts.groupSeparator = ".";
    } else {
      opts.groupSeparator = "";
    }
  }
  // prevent conflict with default skipOptionalPartCharacter
  if (opts.groupSeparator === " ") {
    opts.skipOptionalPartCharacter = undefined;
  }

  // enforce placeholder to single
  if (opts.placeholder.length > 1) {
    opts.placeholder = opts.placeholder.charAt(0);
  }
  // only allow radixfocus when placeholder = 0
  if (opts.positionCaretOnClick === "radixFocus" && opts.placeholder === "") {
    opts.positionCaretOnClick = "lvp";
  }
  var decimalDef = "0",
    radixPointDef = opts.radixPoint;
  if (opts.numericInput === true && opts.__financeInput === undefined) {
    // finance people input style
    decimalDef = "1";
    opts.positionCaretOnClick = opts.positionCaretOnClick === "radixFocus" ? "lvp" : opts.positionCaretOnClick;
    opts.digitsOptional = false;
    if (isNaN(opts.digits)) opts.digits = opts.digits.indexOf(",") !== -1 ? opts.digits.split(",")[0] : 2;
    opts._radixDance = false;
    radixPointDef = opts.radixPoint === "," ? "?" : "!";
    if (opts.radixPoint !== "" && opts.definitions[radixPointDef] === undefined) {
      // update separator definition
      opts.definitions[radixPointDef] = {};
      opts.definitions[radixPointDef].validator = "[" + opts.radixPoint + "]";
      opts.definitions[radixPointDef].placeholder = opts.radixPoint;
      opts.definitions[radixPointDef]["static"] = true;
      opts.definitions[radixPointDef].generated = true; // forced marker as generated input
    }
  } else {
    opts.__financeInput = false; // needed to keep original selection when remasking
    opts.numericInput = true;
  }
  var mask = "[+]",
    altMask;
  mask += autoEscape(opts.prefix, opts);
  if (opts.groupSeparator !== "") {
    if (opts.definitions[opts.groupSeparator] === undefined) {
      // update separator definition
      opts.definitions[opts.groupSeparator] = {};
      opts.definitions[opts.groupSeparator].validator = "[" + opts.groupSeparator + "]";
      opts.definitions[opts.groupSeparator].placeholder = opts.groupSeparator;
      opts.definitions[opts.groupSeparator]["static"] = true;
      opts.definitions[opts.groupSeparator].generated = true; // forced marker as generated input
    }
    mask += opts._mask(opts);
  } else {
    mask += "9{+}";
  }
  if (opts.digits !== undefined && opts.digits !== 0) {
    var dq = opts.digits.toString().split(",");
    if (isFinite(dq[0]) && dq[1] && isFinite(dq[1])) {
      mask += radixPointDef + decimalDef + "{" + opts.digits + "}";
    } else if (isNaN(opts.digits) || parseInt(opts.digits) > 0) {
      if (opts.digitsOptional || opts.jitMasking) {
        altMask = mask + radixPointDef + decimalDef + "{0," + opts.digits + "}";
        // mask += "[" + opts.radixPoint + "]";
        opts.keepStatic = true;
      } else {
        mask += radixPointDef + decimalDef + "{" + opts.digits + "}";
      }
    }
  } else {
    opts.inputmode = "numeric";
  }
  mask += autoEscape(opts.suffix, opts);
  mask += "[-]";
  if (altMask) {
    mask = [altMask + autoEscape(opts.suffix, opts) + "[-]", mask];
  }
  opts.greedy = false; // enforce greedy false

  parseMinMaxOptions(opts);
  if (opts.radixPoint !== "" && opts.substituteRadixPoint) opts.substitutes[opts.radixPoint == "." ? "," : "."] = opts.radixPoint;
  // console.log(mask);
  return mask;
}
function handleRadixDance(pos, c, radixPos, maskset, opts) {
  if (opts._radixDance && opts.numericInput && c !== opts.negationSymbol.back) {
    if (pos <= radixPos && (radixPos > 0 || c == opts.radixPoint) && (maskset.validPositions[pos - 1] === undefined || maskset.validPositions[pos - 1].input !== opts.negationSymbol.back)) {
      pos -= 1;
    }
  }
  return pos;
}
function decimalValidator(chrs, maskset, pos, strict, opts) {
  var radixPos = maskset.buffer ? maskset.buffer.indexOf(opts.radixPoint) : -1,
    result = (radixPos !== -1 || strict && opts.jitMasking) && new RegExp(opts.definitions["9"].validator).test(chrs);
  if (!strict && opts._radixDance && radixPos !== -1 && result && maskset.validPositions[radixPos] == undefined) {
    return {
      insert: {
        pos: radixPos === pos ? radixPos + 1 : radixPos,
        c: opts.radixPoint
      },
      pos: pos
    };
  }
  return result;
}
function checkForLeadingZeroes(buffer, opts) {
  // check leading zeros
  var numberMatches = new RegExp("(^" + (opts.negationSymbol.front !== "" ? (0, _escapeRegex.escapeRegex)(opts.negationSymbol.front) + "?" : "") + (0, _escapeRegex.escapeRegex)(opts.prefix) + ")(.*)(" + (0, _escapeRegex.escapeRegex)(opts.suffix) + (opts.negationSymbol.back != "" ? (0, _escapeRegex.escapeRegex)(opts.negationSymbol.back) + "?" : "") + "$)").exec(buffer.slice().reverse().join("")),
    number = numberMatches ? numberMatches[2] : "",
    leadingzeroes = false;
  if (number) {
    number = number.split(opts.radixPoint.charAt(0))[0];
    leadingzeroes = new RegExp("^[0" + opts.groupSeparator + "]*").exec(number);
  }
  return leadingzeroes && (leadingzeroes[0].length > 1 || leadingzeroes[0].length > 0 && leadingzeroes[0].length < number.length) ? leadingzeroes : false;
}

// number aliases
_inputmask["default"].extendAliases({
  numeric: {
    mask: genMask,
    _mask: function _mask(opts) {
      return "(" + opts.groupSeparator + "999){+|1}";
    },
    digits: "*",
    // number of fractionalDigits
    digitsOptional: true,
    enforceDigitsOnBlur: false,
    radixPoint: ".",
    positionCaretOnClick: "radixFocus",
    _radixDance: true,
    groupSeparator: "",
    allowMinus: true,
    negationSymbol: {
      front: "-",
      // "("
      back: "" // ")"
    },
    prefix: "",
    suffix: "",
    min: null,
    // minimum value
    max: null,
    // maximum value
    SetMaxOnOverflow: false,
    step: 1,
    inputType: "text",
    // number ~ specify that values which are set are in textform (radix point  is same as in the options) or in numberform (radixpoint = .)
    unmaskAsNumber: false,
    roundingFN: Math.round,
    // Math.floor ,  fn(x)
    inputmode: "decimal",
    shortcuts: {
      k: "1000",
      m: "1000000"
    },
    // global options
    placeholder: "0",
    greedy: false,
    rightAlign: true,
    insertMode: true,
    autoUnmask: false,
    skipOptionalPartCharacter: "",
    usePrototypeDefinitions: false,
    stripLeadingZeroes: true,
    substituteRadixPoint: true,
    definitions: {
      0: {
        validator: decimalValidator
      },
      1: {
        validator: decimalValidator,
        definitionSymbol: "9"
      },
      9: {
        // \uFF11-\uFF19 #1606
        validator: "[0-9\uFF10-\uFF19\u0660-\u0669\u06F0-\u06F9]",
        definitionSymbol: "*"
      },
      "+": {
        validator: function validator(chrs, maskset, pos, strict, opts) {
          return opts.allowMinus && (chrs === "-" || chrs === opts.negationSymbol.front);
        }
      },
      "-": {
        validator: function validator(chrs, maskset, pos, strict, opts) {
          return opts.allowMinus && chrs === opts.negationSymbol.back;
        }
      }
    },
    preValidation: function preValidation(buffer, pos, c, isSelection, opts, maskset, caretPos, strict) {
      var inputmask = this;
      if (opts.__financeInput !== false && c === opts.radixPoint) return false;
      var radixPos = buffer.indexOf(opts.radixPoint),
        initPos = pos;
      pos = handleRadixDance(pos, c, radixPos, maskset, opts);
      if (c === "-" || c === opts.negationSymbol.front) {
        if (opts.allowMinus !== true) return false;
        var isNegative = false,
          front = findValid("+", maskset),
          back = findValid("-", maskset);
        if (front !== -1) {
          isNegative = [front];
          if (back !== -1) isNegative.push(back);
        }
        return isNegative !== false ? {
          remove: isNegative,
          caret: initPos - opts.negationSymbol.back.length
        } : {
          insert: [{
            pos: findValidator.call(inputmask, "+", maskset),
            c: opts.negationSymbol.front,
            fromIsValid: true
          }, {
            pos: findValidator.call(inputmask, "-", maskset),
            c: opts.negationSymbol.back,
            fromIsValid: undefined
          }],
          caret: initPos + opts.negationSymbol.back.length
        };
      }
      if (c === opts.groupSeparator) {
        return {
          caret: initPos
        };
      }
      if (strict) return true;
      if (radixPos !== -1 && opts._radixDance === true && isSelection === false && c === opts.radixPoint && opts.digits !== undefined && (isNaN(opts.digits) || parseInt(opts.digits) > 0) && radixPos !== pos) {
        var radixValidatorPos = findValidator.call(inputmask, opts.radixPoint, maskset);
        if (maskset.validPositions[radixValidatorPos]) {
          maskset.validPositions[radixValidatorPos].generatedInput = maskset.validPositions[radixValidatorPos].generated || false;
        }
        return {
          caret: opts._radixDance && pos === radixPos - 1 ? radixPos + 1 : radixPos
        };
      }
      if (opts.__financeInput === false) {
        if (isSelection) {
          if (opts.digitsOptional) {
            return {
              rewritePosition: caretPos.end
            };
          } else if (!opts.digitsOptional) {
            if (caretPos.begin > radixPos && caretPos.end <= radixPos) {
              if (c === opts.radixPoint) {
                return {
                  insert: {
                    pos: radixPos + 1,
                    c: "0",
                    fromIsValid: true
                  },
                  rewritePosition: radixPos
                };
              } else {
                return {
                  rewritePosition: radixPos + 1
                };
              }
            } else if (caretPos.begin < radixPos) {
              return {
                rewritePosition: caretPos.begin - 1
              };
            }
          }
        } else if (!opts.showMaskOnHover && !opts.showMaskOnFocus && !opts.digitsOptional && opts.digits > 0 && this.__valueGet.call(this.el) === "") {
          return {
            rewritePosition: radixPos
          };
        }
      }
      return {
        rewritePosition: pos
      };
    },
    postValidation: function postValidation(buffer, pos, c, currentResult, opts, maskset, strict, fromCheckval, fromAlternate) {
      if (currentResult === false) return currentResult;
      if (strict) return true;
      if (opts.min !== null || opts.max !== null) {
        var unmasked = opts.onUnMask(buffer.slice().reverse().join(""), undefined, $.extend({}, opts, {
          unmaskAsNumber: true
        }));
        if (opts.min !== null && unmasked < opts.min && fromAlternate !== true && (unmasked.toString().length > opts.min.toString().length ||
        // > instead of >= because we want to allow to type a bigger number
        buffer[0] === opts.radixPoint ||
        // disallow radixpoint when value is smaller than min
        unmasked < 0)) {
          return false;
          // return {
          // 	refreshFromBuffer: true,
          // 	buffer: alignDigits(opts.min.toString().replace(".", opts.radixPoint).split(""), opts.digits, opts).reverse()
          // };
        }
        if (opts.max !== null && opts.max >= 0 && unmasked > opts.max) {
          return opts.SetMaxOnOverflow ? {
            refreshFromBuffer: true,
            buffer: alignDigits(opts.max.toString().replace(".", opts.radixPoint).split(""), opts.digits, opts).reverse()
          } : false;
        }
      }
      return currentResult;
    },
    onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
      if (unmaskedValue === "" && opts.nullable === true) {
        return unmaskedValue;
      }
      var processValue = maskedValue.replace(opts.prefix, "");
      processValue = processValue.replace(opts.suffix, "");
      processValue = processValue.replace(new RegExp((0, _escapeRegex.escapeRegex)(opts.groupSeparator), "g"), "");
      if (opts.placeholder.charAt(0) !== "") {
        processValue = processValue.replace(new RegExp(opts.placeholder.charAt(0), "g"), "0");
      }
      if (opts.unmaskAsNumber) {
        if (opts.radixPoint !== "" && processValue.indexOf(opts.radixPoint) !== -1) processValue = processValue.replace(_escapeRegex.escapeRegex.call(this, opts.radixPoint), ".");
        processValue = processValue.replace(new RegExp("^" + (0, _escapeRegex.escapeRegex)(opts.negationSymbol.front)), "-");
        processValue = processValue.replace(new RegExp((0, _escapeRegex.escapeRegex)(opts.negationSymbol.back) + "$"), "");
        return Number(processValue);
      }
      return processValue;
    },
    isComplete: function isComplete(buffer, opts) {
      var maskedValue = (opts.numericInput ? buffer.slice().reverse() : buffer).join("");
      maskedValue = maskedValue.replace(new RegExp("^" + (0, _escapeRegex.escapeRegex)(opts.negationSymbol.front)), "-");
      maskedValue = maskedValue.replace(new RegExp((0, _escapeRegex.escapeRegex)(opts.negationSymbol.back) + "$"), "");
      maskedValue = maskedValue.replace(opts.prefix, "");
      maskedValue = maskedValue.replace(opts.suffix, "");
      maskedValue = maskedValue.replace(new RegExp((0, _escapeRegex.escapeRegex)(opts.groupSeparator) + "([0-9]{3})", "g"), "$1");
      if (opts.radixPoint === ",") maskedValue = maskedValue.replace((0, _escapeRegex.escapeRegex)(opts.radixPoint), ".");
      return isFinite(maskedValue);
    },
    onBeforeMask: function onBeforeMask(initialValue, opts) {
      initialValue = initialValue !== null && initialValue !== void 0 ? initialValue : "";
      var radixPoint = opts.radixPoint || ",";
      if (isFinite(opts.digits)) opts.digits = parseInt(opts.digits);
      if ((typeof initialValue === "number" || opts.inputType === "number") && radixPoint !== "") {
        initialValue = initialValue.toString().replace(".", radixPoint);
      }
      var isNegative = initialValue.charAt(0) === "-" || initialValue.charAt(0) === opts.negationSymbol.front,
        valueParts = initialValue.split(radixPoint),
        integerPart = valueParts[0].replace(/[^\-0-9]/g, ""),
        decimalPart = valueParts.length > 1 ? valueParts[1].replace(/[^0-9]/g, "") : "",
        forceDigits = valueParts.length > 1;
      initialValue = integerPart + (decimalPart !== "" ? radixPoint + decimalPart : decimalPart);
      var digits = 0;
      if (radixPoint !== "") {
        digits = !opts.digitsOptional ? opts.digits : opts.digits < decimalPart.length ? opts.digits : decimalPart.length;
        if (decimalPart !== "" || !opts.digitsOptional) {
          var digitsFactor = Math.pow(10, digits || 1);

          // make the initialValue a valid javascript number for the parsefloat
          initialValue = initialValue.replace((0, _escapeRegex.escapeRegex)(radixPoint), ".");
          if (!isNaN(parseFloat(initialValue))) {
            initialValue = (opts.roundingFN(parseFloat(initialValue) * digitsFactor) / digitsFactor).toFixed(digits);
          }
          initialValue = initialValue.toString().replace(".", radixPoint);
        }
      }
      // this needs to be in a separate part and not directly in decimalPart to allow rounding
      if (opts.digits === 0 && initialValue.indexOf(radixPoint) !== -1) {
        initialValue = initialValue.substring(0, initialValue.indexOf(radixPoint));
      }
      if (opts.min !== null || opts.max !== null) {
        var numberValue = initialValue.toString().replace(radixPoint, ".");
        if (opts.min !== null && numberValue < opts.min) {
          initialValue = opts.min.toString().replace(".", radixPoint);
        } else if (opts.max !== null && numberValue > opts.max) {
          initialValue = opts.max.toString().replace(".", radixPoint);
        }
      }
      if (isNegative && initialValue.charAt(0) !== "-") {
        initialValue = "-" + initialValue;
      }
      return alignDigits(initialValue.toString().split(""), digits, opts, forceDigits).join("");
    },
    onBeforeWrite: function onBeforeWrite(e, buffer, caretPos, opts) {
      function stripBuffer(buffer, stripRadix) {
        if (opts.__financeInput !== false || stripRadix) {
          var position = buffer.indexOf(opts.radixPoint);
          if (position !== -1) {
            buffer.splice(position, 1);
          }
        }
        if (opts.groupSeparator !== "") {
          while ((position = buffer.indexOf(opts.groupSeparator)) !== -1) {
            buffer.splice(position, 1);
          }
        }
        return buffer;
      }
      var result, leadingzeroes;
      if (opts.stripLeadingZeroes && (leadingzeroes = checkForLeadingZeroes(buffer, opts))) {
        var caretNdx = buffer.join("").lastIndexOf(leadingzeroes[0].split("").reverse().join("")) - (leadingzeroes[0] == leadingzeroes.input ? 0 : 1),
          offset = leadingzeroes[0] == leadingzeroes.input ? 1 : 0;
        for (var i = leadingzeroes[0].length - offset; i > 0; i--) {
          this.maskset.validPositions.splice(caretNdx + i, 1);
          delete buffer[caretNdx + i];
        }
      }
      if (e) {
        switch (e.type) {
          case "blur":
          case "checkval":
            if (opts.min !== null || opts.max !== null) {
              var unmasked = opts.onUnMask(buffer.slice().reverse().join(""), undefined, $.extend({}, opts, {
                unmaskAsNumber: true
              }));
              if (opts.min !== null && unmasked < opts.min) {
                return {
                  refreshFromBuffer: true,
                  buffer: alignDigits(opts.min.toString().replace(".", opts.radixPoint).split(""), opts.digits, opts).reverse()
                };
              } else if (opts.max !== null && unmasked > opts.max) {
                return {
                  refreshFromBuffer: true,
                  buffer: alignDigits(opts.max.toString().replace(".", opts.radixPoint).split(""), opts.digits, opts).reverse()
                };
              }
            }
            if (buffer[buffer.length - 1] === opts.negationSymbol.front) {
              // strip negation symbol on blur when value is 0
              var nmbrMtchs = new RegExp("(^" + (opts.negationSymbol.front != "" ? (0, _escapeRegex.escapeRegex)(opts.negationSymbol.front) + "?" : "") + (0, _escapeRegex.escapeRegex)(opts.prefix) + ")(.*)(" + (0, _escapeRegex.escapeRegex)(opts.suffix) + (opts.negationSymbol.back != "" ? (0, _escapeRegex.escapeRegex)(opts.negationSymbol.back) + "?" : "") + "$)").exec(stripBuffer(buffer.slice(), true).reverse().join("")),
                number = nmbrMtchs ? nmbrMtchs[2] : "";
              if (number == 0) {
                result = {
                  refreshFromBuffer: true,
                  buffer: [0]
                };
              }
            } else if (opts.radixPoint !== "") {
              // strip radixpoint on blur when it is the latest char
              var radixNDX = buffer.indexOf(opts.radixPoint);
              if (radixNDX === opts.suffix.length) {
                if (result && result.buffer) {
                  result.buffer.splice(0, 1 + opts.suffix.length);
                } else {
                  buffer.splice(0, 1 + opts.suffix.length);
                  result = {
                    refreshFromBuffer: true,
                    buffer: stripBuffer(buffer)
                  };
                }
              }
            }
            if (opts.enforceDigitsOnBlur) {
              result = result || {};
              var bffr = (result && result.buffer || buffer).slice().reverse();
              result.refreshFromBuffer = true;
              result.buffer = alignDigits(bffr, opts.digits, opts, true).reverse();
            }
        }
      }
      return result;
    },
    onKeyDown: function onKeyDown(e, buffer, caretPos, opts) {
      var $input = $(this),
        bffr;
      if (e.location != 3) {
        var pattern,
          c = e.key;
        if (pattern = opts.shortcuts && opts.shortcuts[c]) {
          if (pattern.length > 1) {
            this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) * parseInt(pattern));
            $input.trigger("setvalue");
            return false;
          }
        }
      }
      if (e.ctrlKey) {
        switch (e.key) {
          case _keycode.keys.ArrowUp:
            this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) + parseInt(opts.step));
            $input.trigger("setvalue");
            return false;
          case _keycode.keys.ArrowDown:
            this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) - parseInt(opts.step));
            $input.trigger("setvalue");
            return false;
        }
      }
      if (!e.shiftKey && (e.key === _keycode.keys.Delete || e.key === _keycode.keys.Backspace || e.key === _keycode.keys.BACKSPACE_SAFARI) && caretPos.begin !== buffer.length) {
        if (buffer[e.key === _keycode.keys.Delete ? caretPos.begin - 1 : caretPos.end] === opts.negationSymbol.front) {
          bffr = buffer.slice().reverse();
          if (opts.negationSymbol.front !== "") bffr.shift();
          if (opts.negationSymbol.back !== "") bffr.pop();
          $input.trigger("setvalue", [bffr.join(""), caretPos.begin]);
          return false;
        } else if (opts._radixDance === true) {
          var radixPos = buffer.indexOf(opts.radixPoint);
          if (!opts.digitsOptional) {
            if (radixPos !== -1 && (caretPos.begin < radixPos || caretPos.end < radixPos || e.key === _keycode.keys.Delete && (caretPos.begin === radixPos || caretPos.begin - 1 === radixPos))) {
              var restoreCaretPos;
              if (caretPos.begin === caretPos.end) {
                // only adjust when not a selection
                if (e.key === _keycode.keys.Backspace || e.key === _keycode.keys.BACKSPACE_SAFARI) caretPos.begin++;else if (e.key === _keycode.keys.Delete && caretPos.begin - 1 === radixPos) {
                  restoreCaretPos = $.extend({}, caretPos);
                  caretPos.begin--;
                  caretPos.end--;
                }
              }
              bffr = buffer.slice().reverse();
              bffr.splice(bffr.length - caretPos.begin, caretPos.begin - caretPos.end + 1);
              // console.log(caretPos);
              bffr = alignDigits(bffr, opts.digits, opts).join("");
              if (restoreCaretPos) {
                caretPos = restoreCaretPos;
              }
              $input.trigger("setvalue", [bffr, caretPos.begin >= bffr.length ? radixPos + 1 : caretPos.begin]);
              return false;
            }
          } else if (radixPos === 0) {
            bffr = buffer.slice().reverse();
            bffr.pop();
            $input.trigger("setvalue", [bffr.join(""), caretPos.begin >= bffr.length ? bffr.length : caretPos.begin]);
            return false;
          }
        }
      }
    }
  },
  currency: {
    prefix: "",
    // "$ ",
    groupSeparator: ",",
    alias: "numeric",
    digits: 2,
    digitsOptional: false
  },
  decimal: {
    alias: "numeric"
  },
  integer: {
    alias: "numeric",
    inputmode: "numeric",
    digits: 0
  },
  percentage: {
    alias: "numeric",
    min: 0,
    max: 100,
    suffix: " %",
    digits: 0,
    allowMinus: false
  },
  indianns: {
    // indian numbering system
    alias: "numeric",
    _mask: function _mask(opts) {
      return "(" + opts.groupSeparator + "99){*|1}(" + opts.groupSeparator + "999){1|1}";
    },
    groupSeparator: ",",
    radixPoint: ".",
    placeholder: "0",
    digits: 2,
    digitsOptional: false
  }
});

/***/ }),
/* 30 */
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {



var _window = _interopRequireDefault(__webpack_require__(11));
var _inputmask = _interopRequireDefault(__webpack_require__(7));
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var document = _window["default"].document;

// add check if it is supported by the browser
// integrate shadowroot into maskcope
if (document && document.head && document.head.attachShadow && _window["default"].customElements && _window["default"].customElements.get("input-mask") === undefined) {
  var InputmaskElement = /*#__PURE__*/function (_HTMLElement) {
    function InputmaskElement() {
      var _this;
      _classCallCheck(this, InputmaskElement);
      _this = _callSuper(this, InputmaskElement);
      var attributeNames = _this.getAttributeNames(),
        shadow = _this.attachShadow({
          mode: "closed"
        });
      _this.input = document.createElement("input");
      _this.input.type = "text";
      shadow.appendChild(_this.input);
      for (var attr in attributeNames) {
        if (Object.prototype.hasOwnProperty.call(attributeNames, attr)) {
          _this.input.setAttribute(attributeNames[attr], _this.getAttribute(attributeNames[attr]));
        }
      }
      var im = new _inputmask["default"]();
      im.dataAttribute = "";
      im.mask(_this.input);
      return _this;
    }
    _inherits(InputmaskElement, _HTMLElement);
    return _createClass(InputmaskElement, [{
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(attrName, oldVal, newVal) {
        this.input.setAttribute(attrName, newVal);
      }

      // bind value
    }, {
      key: "value",
      get: function get() {
        return this.input.value;
      },
      set: function set(value) {
        this.input.value = value;
      }
    }]);
  }(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
  _window["default"].customElements.define("input-mask", InputmaskElement);
}

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
!function() {
var exports = __webpack_exports__;


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
__webpack_require__(1);
__webpack_require__(2);
__webpack_require__(3);
__webpack_require__(4);
__webpack_require__(5);
__webpack_require__(6);
__webpack_require__(27);
__webpack_require__(29);
__webpack_require__(30);
var _inputmask2 = _interopRequireDefault(__webpack_require__(7));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var _default = exports["default"] = _inputmask2["default"];
}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=inputmask.min.js.map