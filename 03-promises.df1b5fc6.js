!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=r);var o=r("h6c0i");function i(e,n){var t=Math.random()>.3;return new Promise((function(r,o){setTimeout((function(){t?r({position:e,delay:n}):o({position:e,delay:n})}),n)}))}({form:document.querySelector(".form")}).form.addEventListener("submit",(function(e){e.preventDefault();var n=Number(e.currentTarget.elements.delay.value),t=Number(e.currentTarget.elements.step.value),r=Number(e.currentTarget.elements.amount.value);if(n<0||t<0||r<0)return void o.Notify.failure("Все значения должны быть больше 0");for(var a=1;a<=r;a+=1){i(a,n).then((function(e){var n=e.position,t=e.delay;o.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;o.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))})),n+=t,console.log(a,n)}e.currentTarget.reset()}))}();
//# sourceMappingURL=03-promises.df1b5fc6.js.map