(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[691],{3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,r){var n=r(3646),a=r(6860),o=r(379),i=r(8206);e.exports=function(e){return n(e)||a(e)||o(e)||i()},e.exports.__esModule=!0,e.exports.default=e.exports},7091:function(e){"use strict";var t="%[a-f0-9]{2}",r=new RegExp(t,"gi"),n=new RegExp("("+t+")+","gi");function a(e,t){try{return decodeURIComponent(e.join(""))}catch(o){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],a(r),a(n))}function o(e){try{return decodeURIComponent(e)}catch(o){for(var t=e.match(r),n=1;n<t.length;n++)t=(e=a(t,n).join("")).match(r);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var r={"%FE%FF":"��","%FF%FE":"��"},a=n.exec(e);a;){try{r[a[0]]=decodeURIComponent(a[0])}catch(t){var i=o(a[0]);i!==a[0]&&(r[a[0]]=i)}a=n.exec(e)}r["%C2"]="�";for(var u=Object.keys(r),c=0;c<u.length;c++){var s=u[c];e=e.replace(new RegExp(s,"g"),r[s])}return e}(e)}}},8616:function(e){"use strict";e.exports=function(e,t){for(var r={},n=Object.keys(e),a=Array.isArray(t),o=0;o<n.length;o++){var i=n[o],u=e[i];(a?-1!==t.indexOf(i):t(i,u,e))&&(r[i]=u)}return r}},2203:function(e,t,r){"use strict";var n=r(9713),a=r(3038),o=r(319);function i(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw o}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var c=r(8936),s=r(7091),l=r(4734),f=r(8616),p=Symbol("encodeFragmentIdentifier");function d(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function g(e,t){return t.encode?t.strict?c(e):encodeURIComponent(e):e}function m(e,t){return t.decode?s(e):e}function y(e){return Array.isArray(e)?e.sort():"object"==typeof e?y(Object.keys(e)).sort((function(e,t){return Number(e)-Number(t)})).map((function(t){return e[t]})):e}function x(e){var t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function v(e){var t=(e=x(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function b(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function h(e,t){d((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);var r=function(e){var t;switch(e.arrayFormat){case"index":return function(e,r,n){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return function(e,r,n){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"colon-list-separator":return function(e,r,n){t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":case"separator":return function(t,r,n){var a="string"==typeof r&&r.includes(e.arrayFormatSeparator),o="string"==typeof r&&!a&&m(r,e).includes(e.arrayFormatSeparator);r=o?m(r,e):r;var i=a||o?r.split(e.arrayFormatSeparator).map((function(t){return m(t,e)})):null===r?r:m(r,e);n[t]=i};case"bracket-separator":return function(t,r,n){var a=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),a){var o=null===r?[]:r.split(e.arrayFormatSeparator).map((function(t){return m(t,e)}));void 0!==n[t]?n[t]=[].concat(n[t],o):n[t]=o}else n[t]=r?m(r,e):r};default:return function(e,t,r){void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;var o,u=i(e.split("&"));try{for(u.s();!(o=u.n()).done;){var c=o.value;if(""!==c){var s=l(t.decode?c.replace(/\+/g," "):c,"="),f=a(s,2),p=f[0],g=f[1];g=void 0===g?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?g:m(g,t),r(m(p,t),g,n)}}}catch(I){u.e(I)}finally{u.f()}for(var x=0,v=Object.keys(n);x<v.length;x++){var h=v[x],w=n[h];if("object"==typeof w&&null!==w)for(var k=0,j=Object.keys(w);k<j.length;k++){var Z=j[k];w[Z]=b(w[Z],t)}else n[h]=b(w,t)}return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce((function(e,t){var r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=y(r):e[t]=r,e}),Object.create(null))}t.extract=v,t.parse=h,t.stringify=function(e,t){if(!e)return"";d((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);for(var r=function(r){return t.skipNull&&null==e[r]||t.skipEmptyString&&""===e[r]},n=function(e){switch(e.arrayFormat){case"index":return function(t){return function(r,n){var a=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[[g(t,e),"[",a,"]"].join("")]:[[g(t,e),"[",g(a,e),"]=",g(n,e)].join("")])}};case"bracket":return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[[g(t,e),"[]"].join("")]:[[g(t,e),"[]=",g(n,e)].join("")])}};case"colon-list-separator":return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[[g(t,e),":list="].join("")]:[[g(t,e),":list=",g(n,e)].join("")])}};case"comma":case"separator":case"bracket-separator":var t="bracket-separator"===e.arrayFormat?"[]=":"=";return function(r){return function(n,a){return void 0===a||e.skipNull&&null===a||e.skipEmptyString&&""===a?n:(a=null===a?"":a,0===n.length?[[g(r,e),t,g(a,e)].join("")]:[[n,g(a,e)].join(e.arrayFormatSeparator)])}};default:return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[g(t,e)]:[[g(t,e),"=",g(n,e)].join("")])}}}}(t),a={},i=0,u=Object.keys(e);i<u.length;i++){var c=u[i];r(c)||(a[c]=e[c])}var s=Object.keys(a);return!1!==t.sort&&s.sort(t.sort),s.map((function(r){var a=e[r];return void 0===a?"":null===a?g(r,t):Array.isArray(a)?0===a.length&&"bracket-separator"===t.arrayFormat?g(r,t)+"[]":a.reduce(n(r),[]).join("&"):g(r,t)+"="+g(a,t)})).filter((function(e){return e.length>0})).join("&")},t.parseUrl=function(e,t){t=Object.assign({decode:!0},t);var r=l(e,"#"),n=a(r,2),o=n[0],i=n[1];return Object.assign({url:o.split("?")[0]||"",query:h(v(e),t)},t&&t.parseFragmentIdentifier&&i?{fragmentIdentifier:m(i,t)}:{})},t.stringifyUrl=function(e,r){r=Object.assign(n({encode:!0,strict:!0},p,!0),r);var a=x(e.url).split("?")[0]||"",o=t.extract(e.url),i=t.parse(o,{sort:!1}),u=Object.assign(i,e.query),c=t.stringify(u,r);c&&(c="?".concat(c));var s=function(e){var t="",r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(s="#".concat(r[p]?g(e.fragmentIdentifier,r):e.fragmentIdentifier)),"".concat(a).concat(c).concat(s)},t.pick=function(e,r,a){a=Object.assign(n({parseFragmentIdentifier:!0},p,!1),a);var o=t.parseUrl(e,a),i=o.url,u=o.query,c=o.fragmentIdentifier;return t.stringifyUrl({url:i,query:f(u,r),fragmentIdentifier:c},a)},t.exclude=function(e,r,n){var a=Array.isArray(r)?function(e){return!r.includes(e)}:function(e,t){return!r(e,t)};return t.pick(e,a,n)}},4734:function(e){"use strict";e.exports=function(e,t){if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];var r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},8936:function(e){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())}))}},5442:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return N}});var n=r(6771),a=r(7294),o=r(7462),i=r(1597),u=r(7059),c=r(3431);var s=(0,n.Z)(i.rU,{target:"e1eg5kak7"})({name:"m7gxp6",styles:"display:flex;flex-direction:column;border-radius:10px;box-shadow:0 0 8px rgba(0, 0, 0, 0.15);transition:0.3s box-shadow;cursor:pointer;&:hover{box-shadow:0 0 10px rgba(0, 0, 0, 0.3);}"}),l=(0,n.Z)(u.G,{target:"e1eg5kak6"})({name:"1axbq5h",styles:"width:100%;height:200px;border-radius:10px 10px 0 0"}),f=(0,n.Z)("div",{target:"e1eg5kak5"})({name:"1do7u82",styles:"flex:1;display:flex;flex-direction:column;padding:15px"}),p=(0,n.Z)("div",{target:"e1eg5kak4"})({name:"kw2b4d",styles:"display:-webkit-box;overflow:hidden;margin-bottom:3px;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:20px;font-weight:700"}),d=(0,n.Z)("div",{target:"e1eg5kak3"})({name:"xm5j9w",styles:"font-size:14px;font-weight:400;opacity:0.7"}),g=(0,n.Z)("div",{target:"e1eg5kak2"})({name:"1bobky6",styles:"display:flex;flex-wrap:wrap;margin-top:10px;margin:10px -5px"}),m=(0,n.Z)("div",{target:"e1eg5kak1"})({name:"1bzcbme",styles:"margin:2.5px 5px;padding:3px 5px;border-radius:3px;background:black;font-size:14px;font-weight:700;color:white"}),y=(0,n.Z)("div",{target:"e1eg5kak0"})({name:"1wehmme",styles:"display:-webkit-box;overflow:hidden;margin-top:auto;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:16px;opacity:0.8"}),x=function(e){var t=e.title,r=e.date,n=e.categories,a=e.summary,o=e.thumbnail.childImageSharp.gatsbyImageData,i=e.link;return(0,c.tZ)(s,{to:i},(0,c.tZ)(l,{image:o,alt:"Post Item Image"}),(0,c.tZ)(f,null,(0,c.tZ)(p,null,t),(0,c.tZ)(d,null,r),(0,c.tZ)(g,null,n.map((function(e){return(0,c.tZ)(m,{key:e},e)}))),(0,c.tZ)(y,null,a)))},v=function(e,t){var r=(0,a.useRef)(null),n=(0,a.useRef)(null),o=(0,a.useState)(1),i=o[0],u=o[1],c=(0,a.useMemo)((function(){return t.filter((function(t){var r=t.node.frontmatter.categories;return"All"===e||r.includes(e)}))}),[e]);return(0,a.useEffect)((function(){n.current=new IntersectionObserver((function(e,t){e[0].isIntersecting&&(u((function(e){return e+1})),t.unobserve(e[0].target))}))}),[]),(0,a.useEffect)((function(){return u(1)}),[e]),(0,a.useEffect)((function(){10*i>=c.length||null===r.current||0===r.current.children.length||null===n.current||n.current.observe(r.current.children[r.current.children.length-1])}),[i,e]),{containerRef:r,postList:c.slice(0,10*i)}};var b=(0,n.Z)("div",{target:"es8e92y0"})({name:"11grurp",styles:"display:grid;grid-template-columns:1fr 1fr;grid-gap:20px;width:768px;margin:0 auto;padding:50px 0 100px;@media (max-width: 768px){grid-template-columns:1fr;width:100%;padding:50px 20px;}"}),h=function(e){var t=e.selectedCategory,r=e.posts,n=v(t,r),a=n.containerRef,i=n.postList;return(0,c.tZ)(b,{ref:a},i.map((function(e){var t=e.node,r=t.id,n=t.fields.slug,a=t.frontmatter;return(0,c.tZ)(x,(0,o.Z)({},a,{link:n,key:r}))})))};var w=["active"];var k=(0,n.Z)("div",{target:"e1kn8q5k1"})({name:"7on4i6",styles:"display:flex;flex-wrap:wrap;width:768px;margin:100px auto 0;@media (max-width: 768px){width:100%;margin-top:50px;padding:0 20px;}"}),j=(0,n.Z)((function(e){e.active;var t=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,w);return(0,c.tZ)(i.rU,t)}),{target:"e1kn8q5k0"})("margin-right:20px;padding:5px 0;font-size:18px;font-weight:",(function(e){return e.active?"800":"400"}),";cursor:pointer;&:last-of-type{margin-right:0;}@media (max-width: 768px){font-size:15px;}"),Z=function(e){var t=e.selectedCategory,r=e.categoryList;return(0,c.tZ)(k,null,Object.entries(r).map((function(e){var r=e[0],n=e[1];return(0,c.tZ)(j,{to:"/?category="+r,active:r===t,key:r},"#",r,"(",n,")")})))};var I=(0,n.Z)(u.G,{target:"e1n1u3tj0"})({name:"1on2x4e",styles:"width:120px;height:120px;margin-bottom:30px;border-radius:50%;@media (max-width: 768px){width:80px;height:80px;}"}),O=function(e){var t=e.profileImage;return(0,c.tZ)(I,{image:t,alt:"Profile Image"})};var S=(0,n.Z)("div",{target:"e160b013"})({name:"1u7ncg7",styles:"width:100%;background-image:linear-gradient(60deg, #29323c 0%, #485563 100%);color:#ffffff"}),F=(0,n.Z)("div",{target:"e160b012"})({name:"1kisa53",styles:"display:flex;flex-direction:column;justify-content:center;align-items:flex-start;width:768px;height:400px;margin:0 auto;@media (max-width: 768px){width:100%;height:300px;padding:0 20px;}"}),A=(0,n.Z)("div",{target:"e160b011"})({name:"1h8u8jj",styles:"font-size:20px;font-weight:400;@media (max-width: 768px){font-size:15px;}"}),E=(0,n.Z)("div",{target:"e160b010"})({name:"1mgdphf",styles:"margin-top:5px;font-size:35px;font-weight:700;@media (max-width: 768px){font-size:25px;}"}),C=function(e){var t=e.profileImage;return(0,c.tZ)(S,null,(0,c.tZ)(F,null,(0,c.tZ)(O,{profileImage:t}),(0,c.tZ)("div",null,(0,c.tZ)(A,null,"새로운 도전을 즐기는 백엔드 개발자,"),(0,c.tZ)(E,null,"다양한 개발 경험과 생각을 정리해봅니다."))))},U=r(2203),R=r(1902);(0,n.Z)("div",{target:"ewcmato0"})({name:"13ku56z",styles:"display:flex;flex-direction:column;height:100%"});var N=function(e){var t=e.location.search,r=e.data,n=r.site.siteMetadata,o=n.title,i=n.description,u=n.siteUrl,s=r.allMarkdownRemark.edges,l=r.file,f=l.childImageSharp.gatsbyImageData,p=l.publicURL,d=U.parse(t),g="string"==typeof d.category&&d.category?d.category:"All",m=(0,a.useMemo)((function(){return s.reduce((function(e,t){return t.node.frontmatter.categories.forEach((function(t){void 0===e[t]?e[t]=1:e[t]++})),e.All++,e}),{All:0})}),[]);return(0,c.tZ)(R.Z,{title:o,description:i,url:u,image:p},(0,c.tZ)(C,{profileImage:f}),(0,c.tZ)(Z,{selectedCategory:g,categoryList:m}),(0,c.tZ)(h,{selectedCategory:g,posts:s}))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-1aa9ed239e668341aca9.js.map