!function(){function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){t[e]=o},o.parcelRequired7c6=r);var i=r("ejkSG");function a(e,o){return new Promise((function(n,t){setTimeout((function(){Math.random()>.3&&n({position:e,delay:o}),t({position:e,delay:o})}),o)}))}e(i).Notify.init({failure:{textColor:"rgba(242, 10, 33, 1)",background:"#80cbc4",notiflixIconColor:"rgba(242, 10, 33, 1)"},success:{textColor:"rgba(6, 20, 214, 1)",background:"#80cbc4",notiflixIconColor:"rgba(6, 20, 214, 1)"}}),document.querySelector(".form").addEventListener("submit",(function(o){o.preventDefault();for(var n=o.target,t=n.delay.value,r=n.step.value,u=n.amount.value,c=0;c<Number(u);c+=1){var l=Number(t)+c*Number(r);a(c+1,l).then((function(o){var n=o.position,t=o.delay;e(i).Notify.success("Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(o){var n=o.position,t=o.delay;e(i).Notify.failure("Rejected promise ".concat(n," in ").concat(t,"ms"))}))}}))}();
//# sourceMappingURL=03-promises.e8416318.js.map
