"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 4462:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/MetaSeo.js
var MetaSeo = __webpack_require__(2037);
// EXTERNAL MODULE: ./utilities/http.js + 1 modules
var http = __webpack_require__(5825);
// EXTERNAL MODULE: ./utilities/constant.js
var constant = __webpack_require__(9489);
;// CONCATENATED MODULE: external "typewriter-effect"
const external_typewriter_effect_namespaceObject = require("typewriter-effect");
var external_typewriter_effect_default = /*#__PURE__*/__webpack_require__.n(external_typewriter_effect_namespaceObject);
;// CONCATENATED MODULE: ./pages/index.js







// import Image from "next/image";
function Home({ setting  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex justify-center h-[90vh] xl:items-center xl:flex-row flex-col-reverse",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(MetaSeo/* default */.Z, {
                // title="Hello World, i`m Harithya Wisesa"
                title: "Viktor Frankl"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "xl:w-7/12",
                "data-aos": "fade-up",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "font-doodle h-20 lg:h-auto tracking-widest xl:text-4xl text-3xl text-center xl:text-left AquilineTwo",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((external_typewriter_effect_default()), {
                            options: {
                                // strings: setting.title.split("|"),
                                strings: [
                                    "Hi, I'm Victor Frankl",
                                    "Everyone needs a friend"
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 75
                            }
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "mt-5 mb-4 text-center xl:text-left leading-7 Bookerly",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "#",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "My job"
                                })
                            }),
                            " is to learn everything about you. I want to know you better than you know yourself, because my job is to introduce you to people who are going to love you. But be warned, I’m a tough judge of character, and I have to want to introduce you to my friends. That said, I think I'm gonna love you."
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "xl:w-5/12 flex xl:justify-end justify-center h-80 ",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "/img/frankl.webp",
                    alt: "BG-Image",
                    // BG-Image
                    width: "500",
                    height: "600",
                    className: `object-contain mb-10 xl:mb-0 dark:invert invert-0`,
                    type: "image/webp"
                })
            })
        ]
    }));
};
async function getStaticProps() {
    const req = await http/* default.get */.Z.get("/item/home");
    return {
        props: {
            setting: req.data
        }
    };
}


/***/ }),

/***/ 5825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ utilities_http)
});

;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
// EXTERNAL MODULE: ./utilities/constant.js
var constant = __webpack_require__(9489);
;// CONCATENATED MODULE: ./utilities/http.js


const http = external_axios_default().create({
    baseURL: constant/* default.baseUrl */.Z.baseUrl,
    headers: {
        "Content-type": "application/json",
        "api-key": constant/* default.key */.Z.key
    }
});
/* harmony default export */ const utilities_http = (http);


/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [190,664,37], () => (__webpack_exec__(4462)));
module.exports = __webpack_exports__;

})();