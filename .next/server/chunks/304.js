"use strict";
exports.id = 304;
exports.ids = [304];
exports.modules = {

/***/ 9304:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Section)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/text/Title.js


function Title(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("h1", {
        className: "text-3xl block cursor-pointer font-semibold",
        children: props.children
    }));
};

;// CONCATENATED MODULE: ./components/layouts/Section.js



function Section(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "py-14",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex justify-between w-full items-center lg:flex-row flex-col lg:space-y-0 space-y-5",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "w-full",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Title, {
                                children: props.title
                            }),
                            props.subtitle && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "text-gray-500 text-md block mt-2 dark:text-white/80",
                                children: props.subtitle
                            })
                        ]
                    }),
                    props.action && props.action
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `mt-12 ${props.className}`,
                children: props.children
            })
        ]
    }));
};


/***/ })

};
;