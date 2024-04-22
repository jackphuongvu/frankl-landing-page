"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ MainLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/navbar/NavItem.js




function NavItem_NavItem(props) {
    const router = useRouter();
    return(/*#__PURE__*/ _jsx("li", {
        className: "cursor-pointer hover:bg-gray-300 dark:text-gray-300 dark:hover:bg-zinc-900",
        children: /*#__PURE__*/ _jsx(Link, {
            href: props.href ?? "/",
            children: /*#__PURE__*/ _jsx("a", {
                className: router.asPath == props.href ? "underline" : "no-underline",
                children: /*#__PURE__*/ _jsx("span", {
                    className: "xl:py-5 block text-sm font-medium py-3 xl:px-5 px-8",
                    children: props.children
                })
            })
        })
    }));
};

;// CONCATENATED MODULE: ./components/navbar/NavMobile.js


function NavMobile_NavMobile({ children , isOpen  }) {
    return(/*#__PURE__*/ _jsx("div", {
        className: `border-b-2 bg-white dark:bg-black py-5  border-dashed ${isOpen ? 'xl:hidden block' : 'hidden'}`,
        children: children
    }));
};

;// CONCATENATED MODULE: ./components/navbar/Navbar.js







function Navbar() {
    const { 0: isOpen , 1: setIsOpen  } = useState(false);
    Router.events.on("routeChangeStart", ()=>setIsOpen(false)
    );
    return(/*#__PURE__*/ _jsxs("div", {
        className: "fixed top-0 right-0 left-0 z-50",
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "xl:px-60 px-8 border-b-2 dark:border-gray-600 border-dashed backdrop-blur-md bg-white/80 dark:bg-black",
                children: /*#__PURE__*/ _jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ _jsx(Link, {
                            href: "/",
                            children: /*#__PURE__*/ _jsxs("a", {
                                children: [
                                    " ",
                                    /*#__PURE__*/ _jsx("h5", {
                                        className: "font-doodle text-2xl mr-8 cursor-pointer tracking-widest",
                                        children: "Harithya"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                            children: [
                                /*#__PURE__*/ _jsx("button", {
                                    onClick: ()=>setIsOpen(!isOpen)
                                    ,
                                    className: "xl:hidden dark:hover:bg-gray-800 hover:bg-gray-300 py-4 px-5 block",
                                    children: /*#__PURE__*/ _jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "h-6 w-6",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: /*#__PURE__*/ _jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M4 6h16M4 12h8m-8 6h16"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ _jsxs("ul", {
                                    className: "xl:flex hidden",
                                    children: [
                                        /*#__PURE__*/ _jsx(NavItem, {
                                            href: "/",
                                            children: "Home"
                                        }),
                                        /*#__PURE__*/ _jsx(NavItem, {
                                            href: "/about",
                                            children: "About"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsx(NavMobile, {
                isOpen: isOpen,
                children: /*#__PURE__*/ _jsxs("ul", {
                    children: [
                        /*#__PURE__*/ _jsx(NavItem, {
                            href: "/",
                            children: "Home"
                        }),
                        /*#__PURE__*/ _jsx(NavItem, {
                            href: "/about",
                            children: "About"
                        }),
                        /*#__PURE__*/ _jsx(NavItem, {
                            href: "/portfolio",
                            children: "Portfolio"
                        }),
                        /*#__PURE__*/ _jsx(NavItem, {
                            href: "/contact",
                            children: "Contact"
                        })
                    ]
                })
            })
        ]
    }));
};

// EXTERNAL MODULE: external "next-themes"
var external_next_themes_ = __webpack_require__(1162);
// EXTERNAL MODULE: external "react-no-ssr"
var external_react_no_ssr_ = __webpack_require__(4386);
var external_react_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_react_no_ssr_);
;// CONCATENATED MODULE: ./components/SwitchMode.js




function SwitchMode() {
    const { theme , setTheme  } = (0,external_next_themes_.useTheme)();
    const handleDarkMode = ()=>{
        setTheme(theme === "dark" ? "light" : "dark");
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx((external_react_no_ssr_default()), {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "fixed xl:bottom-8 xl:right-8 bottom-5 right-5 z-50",
            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                onClick: handleDarkMode,
                className: "xl:p4 hover:bg-gray-300 bg-gray-200 dark:hover:bg-zinc-900 dark:bg-zinc-800 hover:scale-105 transition-transform p-4 rounded-full shadow-sm",
                children: theme == "light" ? /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-5 w-5 text-amber-500",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fillRule: "evenodd",
                        d: "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",
                        clipRule: "evenodd"
                    })
                }) : /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-5 w-5 text-amber-500",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                    })
                })
            })
        })
    }));
};

;// CONCATENATED MODULE: ./components/layouts/MainLayout.js




function MainLayout({ children  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: " dark:bg-black ",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "relative main-body min-h-screen lg:pt-20 pt-10",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "xl:px-60 px-8 ",
                    children: children
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(SwitchMode, {
                })
            ]
        })
    }));
};


/***/ }),

/***/ 8510:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8361);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(808);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9783);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _vercel_analytics_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9752);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_7__]);
_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];











nprogress__WEBPACK_IMPORTED_MODULE_5___default().configure({
    showSpinner: false
});
next_router__WEBPACK_IMPORTED_MODULE_3___default().events.on('routeChangeStart', ()=>nprogress__WEBPACK_IMPORTED_MODULE_5___default().start()
);
next_router__WEBPACK_IMPORTED_MODULE_3___default().events.on('routeChangeComplete', ()=>nprogress__WEBPACK_IMPORTED_MODULE_5___default().done()
);
next_router__WEBPACK_IMPORTED_MODULE_3___default().events.on('routeChangeError', ()=>nprogress__WEBPACK_IMPORTED_MODULE_5___default().done()
);
function MyApp({ Component , pageProps  }) {
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        aos__WEBPACK_IMPORTED_MODULE_6___default().init();
    }, []);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_themes__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {
                attribute: "class",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_7__.Analytics, {
            })
        ]
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

});

/***/ }),

/***/ 9783:
/***/ ((module) => {

module.exports = require("aos");

/***/ }),

/***/ 1162:
/***/ ((module) => {

module.exports = require("next-themes");

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

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 808:
/***/ ((module) => {

module.exports = require("nprogress");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 4386:
/***/ ((module) => {

module.exports = require("react-no-ssr");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9752:
/***/ ((module) => {

module.exports = import("@vercel/analytics/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [190,664], () => (__webpack_exec__(8510)));
module.exports = __webpack_exports__;

})();